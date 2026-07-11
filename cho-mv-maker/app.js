"use strict";

// ---- WASM bootstrap ----
const go = new Go();
let wasmReady = false;
addEventListener("go-ready", () => {
  wasmReady = true;
  setStatus("WASM 準備完了。素材と音楽ファイルを指定してください。");
  applySeed();
  applyFgOpts();
  applyOvOpts();
  applyLogoOpts();
  applyPerfOpts();
  goSetKeyOpts(
    parseInt($("ovPatch").value, 10) || 8,
    parseInt($("ovKeyLo").value, 10) || 0,
    parseInt($("ovKeyHi").value, 10) || 1,
  );
  applyResolution();
});
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
  .then((r) => go.run(r.instance))
  .catch((e) => setStatus("WASM 読み込み失敗: " + e));

// ---- UI elements ----
const $ = (id) => document.getElementById(id);

// Electron shells (VS Code's integrated browser, etc.) ship a
// codec-stripped ffmpeg: their <video> cannot open WebM/H.264 files,
// so video materials fail to load. Warn up front.
if (/Electron/i.test(navigator.userAgent)) {
  const warn = document.createElement("div");
  warn.style.cssText =
    "background:#553; border:1px solid #a95; border-radius:8px; padding:8px 12px; margin-bottom:12px; color:#fda;";
  warn.textContent =
    "⚠ このブラウザ (VS Code内蔵ブラウザ等のElectron環境) は動画コーデックが制限されており、" +
    "動画素材 (オーバーレイ動画・演者動画) を読み込めません。Chrome または Edge で開いてください。";
  document.querySelector("main").prepend(warn);
}
const cv = $("cv");
const ctx2d = cv.getContext("2d");
let imgData = ctx2d.createImageData(cv.width, cv.height);

// ---- output resolution ----
function applyResolution() {
  if (running) return;
  const [w, h] = $("resSel").value.split("x").map(Number);
  cv.width = w;
  cv.height = h;
  imgData = ctx2d.createImageData(w, h);
  if (wasmReady) {
    const err = goSetResolution(w, h);
    if (err) { setStatus("解像度設定失敗: " + err); return; }
    previewFrame();
  }
}

// Bitrate scales with the pixel rate (~0.25 bit/px/frame, min 4 Mbps).
function videoBitrate(w, h, fps) {
  return Math.max(4_000_000, Math.round(w * h * fps * 0.25));
}

let audioBuf = null;   // decoded AudioBuffer (48 kHz)
let analyzed = false;
let running = false;
let stopRequested = false;

function setStatus(msg) { $("status").textContent = msg; }

// ---- seed ----
function applySeed() {
  if (!wasmReady) return;
  goSetSeed(parseInt($("seed").value, 10) || 0);
}
$("seed").addEventListener("change", applySeed);
$("seedNow").addEventListener("click", () => {
  $("seed").value = Date.now() % 2147483647;
  applySeed();
});

// ---- foreground cast options ----
function applyFgOpts() {
  if (!wasmReady) return;
  goSetFgOpts(
    parseInt($("fgMin").value, 10) || 0,
    parseInt($("fgMax").value, 10) || 0,
    parseFloat($("fgScale").value) || 1,
    (parseFloat($("fgJit").value) || 0) / 100,
    $("fgMix").value === "mix",
  );
  previewFrame();
}
for (const id of ["fgMin", "fgMax", "fgScale", "fgJit", "fgMix"]) {
  $(id).addEventListener("change", applyFgOpts);
}
$("resSel").addEventListener("change", applyResolution);
// The sync strategy changes both playback and how much of the source
// gets extracted, so re-load the selected videos when it changes.
$("ovSync").addEventListener("change", () => {
  applyOvOpts();
  reloadOverlays();
});

// ---- clear buttons: empty the file input and rerun its handler ----
for (const b of document.querySelectorAll("button[data-clear]")) {
  b.addEventListener("click", () => {
    const el = $(b.dataset.clear);
    el.value = "";
    el.dispatchEvent(new Event("change"));
  });
}

// ---- images ----
// The browser decodes first (createImageBitmap supports WebP, AVIF and
// anything else it can display); Go's PNG/JPEG decoder is the fallback.
async function loadImages(kind, files) {
  goClearImages(kind);
  for (const f of files) {
    let err;
    try {
      const bmp = await createImageBitmap(f);
      const cnv = document.createElement("canvas");
      cnv.width = bmp.width;
      cnv.height = bmp.height;
      const c2 = cnv.getContext("2d");
      c2.drawImage(bmp, 0, 0);
      bmp.close();
      const d = c2.getImageData(0, 0, cnv.width, cnv.height);
      err = goAddImageRaw(kind, cnv.width, cnv.height, new Uint8Array(d.data.buffer));
    } catch {
      err = goAddImage(kind, new Uint8Array(await f.arrayBuffer()));
    }
    if (err) { setStatus(`${f.name}: 読み込み失敗 (${err})`); return; }
  }
  const names = { bg: "背景", fg: "前景", logo: "ロゴ" };
  if (files.length) {
    setStatus(`${names[kind]}画像 ${files.length} 枚を登録しました。 [${goDebugState()}]`);
  } else {
    setStatus(`${names[kind]}画像をクリアしました。`);
  }
  previewFrame();
}
$("bgFiles").addEventListener("change", (e) => loadImages("bg", e.target.files));
$("fgFiles").addEventListener("change", (e) => loadImages("fg", e.target.files));
$("logoFile").addEventListener("change", (e) => loadImages("logo", e.target.files));

// ---- MV logo options ----
function applyLogoOpts() {
  if (!wasmReady) return;
  goSetLogoOpts(
    parseInt($("logoPos").value, 10) || 0,
    parseFloat($("logoScale").value) || 1,
  );
  previewFrame();
}
for (const id of ["logoPos", "logoScale"]) {
  $(id).addEventListener("change", applyLogoOpts);
}

// ---- chroma-key overlay videos ----
// Frames are extracted via a hidden <video> element (browser decodes
// the mp4), downscaled and passed to Go, which keys and stores them.
const OV_FPS = 15, OV_MAX_W = 1280;

// Extraction length depends on the sync strategy: the aggressive mode
// (default) keeps up to 32 s of contiguous source so sections can run
// deep into the clip; the simple mode keeps the classic 8 s loop head.
function ovMaxDur() {
  return $("ovSync").value === "1" ? 32 : 8;
}

async function extractOverlay(file) {
  const { v, url } = await openVideoFile(file);
  try {
    if (!isFinite(v.duration)) {
      setStatus(`${file.name}: 動画の長さを確定しています…`);
      await fixInfiniteDuration(v);
    }
    const dur = Math.min(v.duration || 0, ovMaxDur());
    if (!(dur > 0)) throw new Error("再生時間を取得できません");
    const sc = Math.min(1, OV_MAX_W / v.videoWidth);
    const w = Math.max(2, Math.round(v.videoWidth * sc));
    const h = Math.max(2, Math.round(v.videoHeight * sc));
    const cnv = document.createElement("canvas");
    cnv.width = w;
    cnv.height = h;
    const c2 = cnv.getContext("2d", { willReadFrequently: true });
    c2.imageSmoothingEnabled = true;
    c2.imageSmoothingQuality = "high";
    goAddOverlayBegin(w, h, OV_FPS, v.videoWidth, v.videoHeight);
    let n = 0;
    for (let tt = 0; tt < dur; tt += 1 / OV_FPS) {
      await new Promise((res, rej) => {
        const timer = setTimeout(
          () => rej(new Error("シークがタイムアウトしました")), 10000);
        v.onseeked = () => { clearTimeout(timer); res(); };
        v.onerror = () => { clearTimeout(timer); rej(new Error("シーク失敗 — " + mediaErrText(v))); };
        v.currentTime = Math.min(tt + 0.0001, dur);
      });
      c2.drawImage(v, 0, 0, w, h);
      const d = c2.getImageData(0, 0, w, h);
      const err = goAddOverlayFrame(new Uint8Array(d.data.buffer));
      if (err) throw new Error(err);
      if (++n % OV_FPS === 0) {
        setStatus(`${file.name}: フレーム抽出中… ${tt.toFixed(1)} / ${dur.toFixed(1)} 秒`);
      }
    }
    goAddOverlayEnd();
  } finally {
    URL.revokeObjectURL(url);
  }
}

let ovLoading = false;

async function reloadOverlays() {
  if (!wasmReady || ovLoading) return;
  const files = $("ovFiles").files;
  ovLoading = true;
  try {
    goClearOverlays();
    for (const f of files) {
      try {
        await extractOverlay(f);
      } catch (err) {
        setStatus(`${f.name}: 読み込み失敗 (${err.message || err})`);
        return;
      }
    }
    if (files.length) {
      setStatus(`オーバーレイ動画 ${files.length} 本を登録しました。 [${goOverlayInfo()}]`);
    } else {
      setStatus("オーバーレイ動画をクリアしました。");
    }
    previewFrame();
  } finally {
    ovLoading = false;
  }
}

$("ovFiles").addEventListener("change", reloadOverlays);

// Key options apply at ingest, so changing them re-keys by re-loading
// the currently selected videos.
function applyKeyOpts() {
  if (!wasmReady) return;
  goSetKeyOpts(
    parseInt($("ovPatch").value, 10) || 8,
    parseInt($("ovKeyLo").value, 10) || 0,
    parseInt($("ovKeyHi").value, 10) || 1,
  );
  reloadOverlays();
}
for (const id of ["ovPatch", "ovKeyLo", "ovKeyHi"]) {
  $(id).addEventListener("change", applyKeyOpts);
}

// Show only the inputs the selected placement mode actually uses.
function updateOvModeUI() {
  const bd = $("ovMode").value === "1";
  $("ovRandomRow").style.display = bd ? "none" : "";
  $("ovJitRow").style.display = bd ? "none" : "";
  $("ovOrderRow").style.display = bd ? "none" : "";
  $("ovBdRow").style.display = bd ? "" : "none";
}
updateOvModeUI();

function applyOvOpts() {
  updateOvModeUI();
  if (!wasmReady) return;
  goSetOvOpts(
    parseInt($("ovMin").value, 10) || 0,
    parseInt($("ovMax").value, 10) || 0,
    parseFloat($("ovScale").value) || 1,
    (parseFloat($("ovJit").value) || 0) / 100,
    $("ovInFx").checked,
    parseInt($("ovOrder").value, 10) || 0,
    parseInt($("ovMode").value, 10) || 0,
    parseInt($("ovCount").value, 10) || 1,
    (parseFloat($("ovQuiet").value) || 0) / 100,
    (parseFloat($("ovGrad").value) || 0) / 100,
    parseInt($("ovSync").value, 10) || 0,
  );
  previewFrame();
}
for (const id of ["ovMin", "ovMax", "ovScale", "ovJit", "ovInFx", "ovOrder",
                  "ovMode", "ovCount", "ovQuiet", "ovGrad"]) {
  $(id).addEventListener("change", applyOvOpts);
}

// ---- audio source validation ----
// The music file and the performer video are exclusive audio sources:
// selecting both is an error (UI-level guard only).
function sourceConflict() {
  if ($("audioFile").files.length && $("perfFile").files.length) {
    $("analyzeBtn").disabled = true;
    $("makeBtn").disabled = true;
    setStatus("エラー: ①音楽ファイルと⑤演者動画は同時に指定できません。どちらかをクリアしてください。");
    return true;
  }
  return false;
}

// ---- performer video ----
// A green/blue-screen video whose audio track replaces the music file.
// Frames are seek-extracted one at a time during generation.
let perfV = null, perfC2 = null, perfDims = null, perfURL = null;

// sniffFile reports what a file actually contains (magic bytes), to
// tell corrupt/empty downloads apart from decoder problems.
async function sniffFile(file) {
  try {
    const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    const hex = [...head].map((b) => b.toString(16).padStart(2, "0")).join(" ");
    let kind = "不明な形式";
    if (file.size === 0) kind = "空ファイル";
    else if (head[0] === 0x1a && head[1] === 0x45 && head[2] === 0xdf && head[3] === 0xa3) kind = "WebM/Matroska";
    else if (head.length >= 12 && head[4] === 0x66 && head[5] === 0x74 && head[6] === 0x79 && head[7] === 0x70) kind = "MP4";
    return `内容判定: ${kind}, サイズ: ${file.size.toLocaleString()} バイト, 先頭16バイト: ${hex}`;
  } catch {
    return "内容判定: 読み取り不能";
  }
}

// probeWebm walks the file's top-level EBML structure (first 256 KB)
// so container-level failures can be diagnosed without external tools.
async function probeWebm(file) {
  try {
    const u = new Uint8Array(await file.slice(0, 1 << 18).arrayBuffer());
    let o = 0;
    const vint = (strip) => {
      if (o >= u.length) return null;
      const first = u[o];
      let len = 1;
      for (; len <= 8; len++) if (first & (0x80 >> (len - 1))) break;
      if (len > 8 || o + len > u.length) return null;
      let v = strip ? first & (0xff >> len) : first;
      let allOnes = strip && v === (0xff >> len);
      for (let i = 1; i < len; i++) {
        v = v * 256 + u[o + i];
        if (u[o + i] !== 0xff) allOnes = false;
      }
      o += len;
      return { v, unknown: strip && allOnes };
    };
    const names = {
      0x1a45dfa3: "EBML", 0x18538067: "Segment", 0x114d9b74: "SeekHead",
      0x1549a966: "Info", 0x1654ae6b: "Tracks", 0x1f43b675: "Cluster",
      0xec: "Void", 0x1c53bb6b: "Cues", 0x1254c367: "Tags",
    };
    const parts = [];
    let docType = "";
    for (let n = 0; n < 12 && o < u.length; n++) {
      const id = vint(false);
      if (!id) break;
      const size = vint(true);
      if (!size) break;
      parts.push((names[id.v] || "0x" + id.v.toString(16)) +
                 (size.unknown ? "(サイズ不明)" : `(${size.v})`));
      if (id.v === 0x1a45dfa3 && !size.unknown) {
        const end = o + size.v;
        for (let p = o; p < end - 2; p++) {
          if (u[p] === 0x42 && u[p + 1] === 0x82) {
            const l = u[p + 2] & 0x7f;
            docType = new TextDecoder().decode(u.slice(p + 3, p + 3 + l));
            break;
          }
        }
      }
      if (id.v === 0x18538067) continue; // descend into the Segment
      if (id.v === 0x1f43b675) break; // media starts: enough seen
      if (size.unknown) break;
      o += size.v;
    }
    return `構造: ${parts.join(" → ")}${docType ? ` / DocType=${docType}` : ""}`;
  } catch {
    return "構造: 解析不能";
  }
}

// mediaErrText renders a video element's MediaError with enough
// detail to diagnose "cannot open" failures in the field.
function mediaErrText(v) {
  const e = v.error;
  if (!e) return "不明なエラー";
  const names = { 1: "中断", 2: "ネットワーク", 3: "デコード失敗", 4: "非対応形式" };
  const base = names[e.code] || `code ${e.code}`;
  return e.message ? `${base}: ${e.message}` : base;
}

// openVideoFile opens a video element for a file. Some environments
// (cloud-synced placeholder files, network drives) fail the media
// pipeline's streaming reads from the File-backed URL even though the
// file content is fine, so on failure retry once from an in-memory
// copy. Returns { v, url }; the caller owns revoking url.
async function openVideoFile(file) {
  const tryOpen = (url, label) => new Promise((res, rej) => {
    const v = document.createElement("video");
    v.muted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.src = url;
    v.onloadedmetadata = () => res(v);
    v.onerror = () => rej(new Error(`動画を開けません[${label}] — ` + mediaErrText(v)));
  });
  const url1 = URL.createObjectURL(file);
  try {
    return { v: await tryOpen(url1, "直接"), url: url1 };
  } catch (e1) {
    URL.revokeObjectURL(url1);
    setStatus("直接読み込みに失敗、メモリ経由で再試行中…");
    const buf = await file.arrayBuffer();
    const url2 = URL.createObjectURL(new Blob([buf], { type: file.type || "video/webm" }));
    try {
      return { v: await tryOpen(url2, "メモリ経由"), url: url2 };
    } catch (e2) {
      URL.revokeObjectURL(url2);
      throw e2;
    }
  }
}

// MediaRecorder-made files (e.g. the web-jig output) report an
// Infinity duration and are unseekable until the browser scans them.
// Seeking to a huge time forces that scan; afterwards the duration is
// finite and normal seeking works.
function fixInfiniteDuration(v) {
  if (isFinite(v.duration)) return Promise.resolve();
  return new Promise((res, rej) => {
    const timer = setTimeout(() => {
      cleanup();
      rej(new Error("動画の長さを確定できません(シークに対応していないファイルの可能性)"));
    }, 15000);
    const check = () => {
      if (isFinite(v.duration) && v.duration > 0) {
        cleanup();
        res();
      }
    };
    const cleanup = () => {
      clearTimeout(timer);
      v.removeEventListener("durationchange", check);
      v.removeEventListener("seeked", check);
    };
    v.addEventListener("durationchange", check);
    v.addEventListener("seeked", check);
    v.currentTime = 1e10;
  });
}

async function loadPerformer(file) {
  if (perfURL) {
    URL.revokeObjectURL(perfURL);
    perfURL = null;
  }
  perfV = null;
  if (wasmReady) goClearPerformer();
  audioBuf = null;
  analyzed = false;
  $("makeBtn").disabled = true;
  if (!file) {
    $("analyzeBtn").disabled = !$("audioFile").files.length;
    setStatus("演者動画を解除しました。");
    previewFrame();
    return;
  }
  if (sourceConflict()) return; // both sources selected: refuse to load
  let v;
  try {
    const opened = await openVideoFile(file);
    v = opened.v;
    perfURL = opened.url;
    if (!isFinite(v.duration)) {
      setStatus("演者動画の長さを確定しています…(シーク索引のないファイル)");
      await fixInfiniteDuration(v);
    }
  } catch (e) {
    setStatus(`${file.name}: 読み込み失敗 (${e.message || e})\n[${await sniffFile(file)}]\n[${await probeWebm(file)}]\n[ブラウザ: ${navigator.userAgent}]`);
    return;
  }
  const sc = Math.min(1, 960 / v.videoWidth);
  perfDims = {
    w: Math.max(2, Math.round(v.videoWidth * sc)),
    h: Math.max(2, Math.round(v.videoHeight * sc)),
    ow: v.videoWidth,
    oh: v.videoHeight,
  };
  const cnv = document.createElement("canvas");
  cnv.width = perfDims.w;
  cnv.height = perfDims.h;
  perfC2 = cnv.getContext("2d", { willReadFrequently: true });
  perfC2.imageSmoothingEnabled = true;
  perfC2.imageSmoothingQuality = "high";
  perfV = v;
  $("analyzeBtn").disabled = false;
  setStatus(`演者動画を登録しました (${v.videoWidth}×${v.videoHeight}, ${v.duration.toFixed(1)}秒)。` +
            `音声はこの動画から使用します。「1. 解析」を押してください。`);
  try {
    await performerFrameAt(1.0);
  } catch (e) {
    setStatus(`${file.name}: プレビュー取得失敗 (${e.message || e})`);
    return;
  }
  previewFrame();
}
$("perfFile").addEventListener("change", (e) => loadPerformer(e.target.files[0] || null));

// Seek the performer video to t and hand the frame to Go. Times out
// instead of hanging forever on files that cannot seek.
async function performerFrameAt(t) {
  if (!perfV || !wasmReady) return;
  const target = Math.min(t + 0.0001, perfV.duration || t);
  if (Math.abs(perfV.currentTime - target) < 0.001 && perfV.readyState >= 2) {
    grabPerformerFrame(); // already there: seeked may not fire again
    return;
  }
  await new Promise((res, rej) => {
    const timer = setTimeout(
      () => rej(new Error("演者動画のシークがタイムアウトしました")), 10000);
    perfV.onseeked = () => { clearTimeout(timer); res(); };
    perfV.onerror = () => { clearTimeout(timer); rej(new Error("演者動画のシーク失敗")); };
    perfV.currentTime = target;
  });
  grabPerformerFrame();
}

// Extract the performer video's current frame (no seek).
function grabPerformerFrame() {
  perfC2.drawImage(perfV, 0, 0, perfDims.w, perfDims.h);
  const d = perfC2.getImageData(0, 0, perfDims.w, perfDims.h);
  const err = goSetPerformerFrame(perfDims.w, perfDims.h,
    new Uint8Array(d.data.buffer), perfDims.ow, perfDims.oh);
  if (err) setStatus("演者フレーム転送失敗: " + err);
}

function applyPerfOpts() {
  if (!wasmReady) return;
  goSetPerformerOpts(
    parseFloat($("perfScale").value) || 1,
    $("perfInFx").checked,
    parseInt($("perfPatch").value, 10) || 8,
    parseInt($("perfKeyLo").value, 10) || 0,
    parseInt($("perfKeyHi").value, 10) || 1,
    parseFloat($("perfOffX").value) || 0,
    parseFloat($("perfOffY").value) || 0,
  );
  if (perfV) {
    performerFrameAt(1.0) // re-key with new settings
      .then(previewFrame)
      .catch((e) => setStatus("演者フレーム取得失敗: " + (e.message || e)));
  } else {
    previewFrame();
  }
}
for (const id of ["perfScale", "perfInFx", "perfPatch", "perfKeyLo", "perfKeyHi",
                  "perfOffX", "perfOffY"]) {
  $(id).addEventListener("change", applyPerfOpts);
}

// ---- audio ----
$("audioFile").addEventListener("change", () => {
  audioBuf = null;
  analyzed = false;
  $("makeBtn").disabled = true;
  if (sourceConflict()) return;
  $("analyzeBtn").disabled = !$("audioFile").files.length && !perfV;
  setStatus("「1. 解析」を押してください。");
});

$("analyzeBtn").addEventListener("click", async () => {
  if (sourceConflict()) return;
  const file = (perfV && $("perfFile").files[0]) || $("audioFile").files[0];
  if (!file || !wasmReady) return;
  setStatus("デコード中…");
  $("analyzeBtn").disabled = true;
  try {
    // 48 kHz fixed: the Opus encoder path expects it.
    const ac = new AudioContext({ sampleRate: 48000 });
    audioBuf = await ac.decodeAudioData(await file.arrayBuffer());
    await ac.close();
    // Mix down to mono for analysis.
    const mono = new Float32Array(audioBuf.length);
    for (let ch = 0; ch < audioBuf.numberOfChannels; ch++) {
      const d = audioBuf.getChannelData(ch);
      for (let i = 0; i < d.length; i++) mono[i] += d[i] / audioBuf.numberOfChannels;
    }
    setStatus("解析中…");
    await new Promise((r) => setTimeout(r, 20)); // let status paint
    const res = goAnalyze(new Uint8Array(mono.buffer), audioBuf.sampleRate);
    analyzed = true;
    $("makeBtn").disabled = false;
    const moodNames = ["寂しい", "落ち着き", "楽しい", "勢い"];
    const secs = res.sections.map((s) =>
      `${String.fromCharCode(65 + (s.label % 26))}@${s.switchT.toFixed(1)}s(${moodNames[s.mood] || s.mood})`).join(" / ");
    setStatus(`解析完了: BPM≈${res.bpm.toFixed(1)}, 拍=${res.beats}, 小節=${res.bars}\n` +
              `セクション: ${secs}`);
    previewFrame();
  } catch (e) {
    setStatus("解析失敗: " + e);
  } finally {
    $("analyzeBtn").disabled = false;
  }
});

// ---- preview a single frame ----
function previewFrame() {
  if (!wasmReady || running) return;
  // Material-check preview: forces every selected material on screen
  // (appearance schedules and rests are honored only in generation).
  goPreviewFrame(1.0, imgData.data);
  ctx2d.putImageData(imgData, 0, 0);
}

// ---- output sink: File System Access (on-the-fly) or in-memory fallback ----
async function openSink() {
  if (window.showSaveFilePicker) {
    try {
      const handle = await showSaveFilePicker({
        suggestedName: "mv.webm",
        types: [{ description: "WebM video", accept: { "video/webm": [".webm"] } }],
      });
      return { writable: await handle.createWritable(), chunks: null };
    } catch (e) {
      if (e.name === "AbortError") return null; // user cancelled
      setStatus("保存先の取得に失敗、メモリ経由にフォールバック: " + e);
    }
  }
  return { writable: null, chunks: [] };
}

async function closeSink(sink, written) {
  if (sink.writable) {
    await sink.writable.close();
    setStatus(`完了: ${(written / 1e6).toFixed(2)} MB を逐次保存しました。`);
  } else {
    const blob = new Blob(sink.chunks, { type: "video/webm" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mv.webm";
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus(`完了: ${(written / 1e6).toFixed(2)} MB (このブラウザは逐次保存非対応のため一括DL)。`);
  }
}

// ---- MV generation entry point ----
$("makeBtn").addEventListener("click", async () => {
  if (!audioBuf || !analyzed || running) return;

  const sink = await openSink(); // needs the user gesture
  if (!sink) return;

  running = true;
  stopRequested = false;
  $("makeBtn").disabled = true;
  $("stopBtn").disabled = false;
  try {
    if (window.VideoEncoder && window.AudioEncoder) {
      await generateFast(sink);
    } else {
      await generateRealtime(sink);
    }
  } catch (e) {
    setStatus("生成失敗: " + e);
  } finally {
    running = false;
    $("makeBtn").disabled = false;
    $("stopBtn").disabled = true;
  }
});

$("stopBtn").addEventListener("click", () => { stopRequested = true; });

// ---- fast path: WebCodecs + pure-Go WebM muxer (faster than realtime) ----
async function generateFast(sink) {
  const fps = 30;
  const W = cv.width, H = cv.height;
  const sr = audioBuf.sampleRate; // 48000
  const ch = Math.min(audioBuf.numberOfChannels, 2);
  const dur = audioBuf.duration;

  let written = 0;
  let writeQueue = Promise.resolve();
  let encError = null;
  const emit = (bytes) => {
    if (!bytes || !bytes.length) return;
    written += bytes.length;
    if (sink.writable) {
      writeQueue = writeQueue.then(() => sink.writable.write(bytes));
    } else {
      sink.chunks.push(bytes);
    }
  };

  // 1) Encode all audio up front (fast); collect chunks + OpusHead.
  setStatus("音声エンコード中…");
  const audioChunks = [];
  let opusHead = null;
  const aenc = new AudioEncoder({
    output: (c, meta) => {
      const desc = meta && meta.decoderConfig && meta.decoderConfig.description;
      if (!opusHead && desc) {
        opusHead = desc instanceof ArrayBuffer
          ? new Uint8Array(desc.slice(0))
          : new Uint8Array(desc.buffer.slice(desc.byteOffset, desc.byteOffset + desc.byteLength));
      }
      const d = new Uint8Array(c.byteLength);
      c.copyTo(d);
      audioChunks.push({ ts: c.timestamp, data: d });
    },
    error: (e) => { encError = e; },
  });
  aenc.configure({ codec: "opus", sampleRate: sr, numberOfChannels: ch, bitrate: 128000 });
  for (let off = 0; off < audioBuf.length; off += sr) {
    const n = Math.min(sr, audioBuf.length - off);
    const data = new Float32Array(n * ch);
    for (let c0 = 0; c0 < ch; c0++) {
      data.set(audioBuf.getChannelData(c0).subarray(off, off + n), c0 * n);
    }
    const ad = new AudioData({
      format: "f32-planar", sampleRate: sr, numberOfFrames: n,
      numberOfChannels: ch, timestamp: (off / sr) * 1e6, data,
    });
    aenc.encode(ad);
    ad.close();
  }
  await aenc.flush();
  aenc.close();
  if (encError) throw encError;

  // 2) Pick a video codec. VP9 level 4.0 covers up to 1080p30.
  let vcfg = { codec: "vp09.00.40.08", width: W, height: H, bitrate: videoBitrate(W, H, fps), framerate: fps };
  let codecID = "V_VP9";
  if (!(await VideoEncoder.isConfigSupported(vcfg)).supported) {
    vcfg = { ...vcfg, codec: "vp8" };
    codecID = "V_VP8";
    if (!(await VideoEncoder.isConfigSupported(vcfg)).supported) {
      throw new Error("VP9/VP8 エンコーダが利用できません");
    }
  }

  // 3) Mux header + queue all audio into the Go muxer.
  emit(goMuxInit(W, H, codecID, sr, ch, dur * 1000, opusHead));
  for (const a of audioChunks) goMuxAddAudio(Math.round(a.ts / 1000), a.data);

  // 4) Offline video loop: render in Go, encode, mux, stream to disk.
  const venc = new VideoEncoder({
    output: (c) => {
      const d = new Uint8Array(c.byteLength);
      c.copyTo(d);
      emit(goMuxAddVideo(Math.round(c.timestamp / 1000), c.type === "key", d));
    },
    error: (e) => { encError = e; },
  });
  venc.configure(vcfg);

  const nFrames = Math.ceil(dur * fps);
  const t0 = performance.now();
  for (let i = 0; i < nFrames && !stopRequested && !encError; i++) {
    const t = i / fps;
    if (perfV) await performerFrameAt(t); // stream-decode the performer
    goRenderFrame(t, imgData.data);
    if (i % 10 === 0) ctx2d.putImageData(imgData, 0, 0);
    const vf = new VideoFrame(imgData.data, {
      format: "RGBA", codedWidth: W, codedHeight: H,
      timestamp: t * 1e6, duration: 1e6 / fps,
    });
    venc.encode(vf, { keyFrame: i % 60 === 0 }); // keyframe every 2 s
    vf.close();
    if (venc.encodeQueueSize > 8) {
      await new Promise((r) => venc.addEventListener("dequeue", r, { once: true }));
    }
    if (i % 30 === 0) {
      const speed = (t + 1 / fps) / ((performance.now() - t0) / 1000);
      setStatus(`高速生成中… ${t.toFixed(1)} / ${dur.toFixed(1)} 秒 ` +
                `(${speed.toFixed(1)}x, 書き出し ${(written / 1e6).toFixed(2)} MB)`);
      await new Promise((r) => setTimeout(r)); // let UI breathe
    }
  }
  await venc.flush();
  venc.close();
  if (encError) throw encError;

  emit(goMuxFinish());
  await writeQueue;

  // Patch in the seek metadata (SeekHead over the reserved area, real
  // Segment size) now that all offsets are known. With the File System
  // Access API these are random-access writes; the in-memory fallback
  // patches the collected chunks in place.
  for (const [pos, data] of goMuxPatches()) {
    if (sink.writable) {
      await sink.writable.write({ type: "write", position: pos, data });
    } else {
      patchChunks(sink.chunks, pos, data);
    }
  }
  await closeSink(sink, written);
}

// patchChunks overwrites bytes at an absolute file position across the
// collected chunk list.
function patchChunks(chunks, pos, data) {
  let off = 0;
  for (const c of chunks) {
    const end = off + c.length;
    if (pos < end && pos + data.length > off) {
      const start = Math.max(pos, off);
      const stop = Math.min(pos + data.length, end);
      c.set(data.subarray(start - pos, stop - pos), start - off);
    }
    off = end;
  }
}

// ---- fallback path: canvas + MediaRecorder (realtime) ----
async function generateRealtime(sink) {
  const ac = new AudioContext();
  const src = ac.createBufferSource();
  src.buffer = audioBuf;
  const dest = ac.createMediaStreamDestination();
  src.connect(dest);
  src.connect(ac.destination); // monitor while recording

  const stream = new MediaStream([
    ...cv.captureStream(30).getVideoTracks(),
    ...dest.stream.getAudioTracks(),
  ]);
  let mime = "video/webm;codecs=vp9,opus";
  if (!MediaRecorder.isTypeSupported(mime)) mime = "video/webm;codecs=vp8,opus";
  if (!MediaRecorder.isTypeSupported(mime)) mime = "video/webm";
  const rec = new MediaRecorder(stream, {
    mimeType: mime,
    videoBitsPerSecond: videoBitrate(cv.width, cv.height, 30),
  });

  let writeQueue = Promise.resolve();
  let written = 0;
  rec.ondataavailable = (e) => {
    if (!e.data.size) return;
    written += e.data.size;
    if (sink.writable) {
      writeQueue = writeQueue.then(() => sink.writable.write(e.data));
    } else {
      sink.chunks.push(e.data);
    }
  };
  const finished = new Promise((resolve) => { rec.onstop = resolve; });

  rec.start(1000); // emit a chunk every second => on-the-fly writes
  src.start();
  if (perfV) {
    perfV.currentTime = 0;
    perfV.play().catch(() => {});
  }
  const t0 = ac.currentTime;
  const dur = audioBuf.duration;

  const loop = () => {
    const t = ac.currentTime - t0;
    if (t >= dur || stopRequested) {
      try { src.stop(); } catch {}
      if (perfV) perfV.pause();
      rec.stop();
      return;
    }
    if (perfV) grabPerformerFrame(); // realtime: follow playback
    goRenderFrame(t, imgData.data);
    ctx2d.putImageData(imgData, 0, 0);
    setStatus(`生成中(実時間)… ${t.toFixed(1)} / ${dur.toFixed(1)} 秒 ` +
              `(書き出し ${(written / 1e6).toFixed(2)} MB)`);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  await finished;
  await writeQueue;
  await ac.close();
  await closeSink(sink, written);
}

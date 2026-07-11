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
  const info = globalThis.goBuildInfo;
  const el = $("buildInfo");
  if (info && el) {
    el.textContent = `version ${info.version} (rev. ${info.revision})`;
  }
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
  setCueSheet(""); // stale cues belong to the previous audio
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
  setCueSheet(""); // stale cues belong to the previous audio
  if (sourceConflict()) return;
  $("analyzeBtn").disabled = !$("audioFile").files.length && !perfV;
  setStatus("「1. 解析」を押してください。");
});

$("analyzeBtn").addEventListener("click", async () => {
  if (sourceConflict()) return;
  const file = (perfV && $("perfFile").files[0]) || $("audioFile").files[0];
  if (!file || !wasmReady) return;
  stopTtPlayback(); // a running source would keep playing the old buffer
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
    setCueSheet(goCueSheet());
    updateTimetable();
    setStatus(`解析完了: BPM≈${res.bpm.toFixed(1)}, 拍=${res.beats}, 小節=${res.bars}, ` +
              `セクション=${res.sections.length}\n` +
              `キューシートを編集するとオーバーレイ頭出し・背景・色調の切替を調整できます。`);
    previewFrame();
  } catch (e) {
    setStatus("解析失敗: " + e);
  } finally {
    $("analyzeBtn").disabled = false;
  }
});

// ---- timetable ----
// Bar/beat ruler above the cue sheet: a minimap of the whole song plus
// a horizontally scrollable detail strip showing bars, beats and
// section boundaries. Data comes from goTimetable(), so it reflects
// the currently applied cue sheet.
const ttMoodColors = ["#7a86d6", "#5fae8f", "#e0b050", "#d66a7a"]; // 寂しい/落ち着き/楽しい/勢い
const ttMoodNames = ["寂しい", "落ち着き", "楽しい", "勢い"];
let ttData = null;      // last goTimetable() result
let ttPxPerSec = 20;    // detail strip scale

function clearTimetable() {
  stopTtPlayback();
  ttData = null;
  $("ttWrap").style.display = "none";
}

function updateTimetable() {
  ttData = wasmReady ? goTimetable() : null;
  if (!ttData || !(ttData.duration > 0)) { clearTimetable(); return; }
  $("ttWrap").style.display = "";
  renderTtMain();
  renderTtMini();
}

// Size a canvas backing store for the device pixel ratio; returns a ctx
// whose drawing units are CSS pixels. Skips the resize when the size is
// unchanged (assigning width reallocs even for the same value, and the
// minimap re-renders every frame while the playhead runs).
function ttCtx(canvas, cssW, cssH) {
  const dpr = devicePixelRatio || 1;
  const w = Math.round(cssW * dpr), h = Math.round(cssH * dpr);
  if (canvas.width !== w) canvas.width = w;
  if (canvas.height !== h) canvas.height = h;
  const c = canvas.getContext("2d");
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  return c;
}

function ttSectionLabel(s) {
  return String.fromCharCode(65 + (s.label % 26)) + " " + ttMoodNames[s.mood % 4];
}

function fmtTtTime(t) {
  const m = Math.floor(t / 60), s = Math.floor(t - m * 60);
  return m + ":" + String(s).padStart(2, "0");
}

const TT_BAND_H = 16;   // section band at the top of the detail strip
const TT_NOV_Y = 16;    // novelty (boundary confidence) strip
const TT_NOV_H = 18;
const TT_RULER_Y = 34;  // beat ticks start here
const TT_DEV_Y = 84;    // microtiming deviation lane (raw onsets)
const TT_DEV_H = 18;
const TT_LANE_Y = 104;  // top of the three rhythm lanes
const TT_LANE_H = 15;   // one rhythm lane (high / mid / low)
// Rhythm band colors, index = band (0 low / 1 mid / 2 high).
const ttBandColors = ["#e07a5f", "#e0c060", "#6fc3df"];

function renderTtMain() {
  const d = ttData;
  const scroll = $("ttScroll");
  const H = 152;
  // Fixed 14 px per beat keeps bar cells readable at any tempo.
  ttPxPerSec = d.bpm > 0 ? 14 * d.bpm / 60 : 20;
  let w = Math.ceil(d.duration * ttPxPerSec) + 8;
  const maxW = Math.floor(32000 / (devicePixelRatio || 1)); // canvas size limit
  if (w > maxW) { ttPxPerSec *= maxW / w; w = maxW; }
  const cw = Math.max(w, scroll.clientWidth || 0);
  const cvM = $("ttMain");
  cvM.style.width = cw + "px";
  const c = ttCtx(cvM, cw, H);
  const x = (t) => t * ttPxPerSec;

  c.fillStyle = "#111118";
  c.fillRect(0, 0, cw, H);
  c.font = "10px system-ui, sans-serif";
  c.textBaseline = "alphabetic";

  // Novelty strip: per-bar boundary confidence as a histogram, with
  // markers for the detector's boundary candidates.
  if (d.novelty && d.novelty.length) {
    let novMax = 0;
    for (const v of d.novelty) novMax = Math.max(novMax, v);
    if (novMax > 0) {
      // novelty[i] scores a cut at the START of bar i, so the column
      // is centered on the bar line; filling the bar cell instead
      // reads as a half-bar shift against the boundary markers.
      c.fillStyle = "rgba(120,130,175,0.45)";
      for (let i = 0; i < d.novelty.length && i < d.bars.length; i++) {
        const h = d.novelty[i] / novMax * (TT_NOV_H - 2);
        if (h <= 0) continue;
        const bx = x(d.bars[i]);
        const bw = (i + 1 < d.bars.length ? x(d.bars[i + 1]) : bx + 56) - bx;
        c.fillRect(bx - bw / 2 + 1, TT_NOV_Y + TT_NOV_H - h, bw - 2, h);
      }
    }
  }
  if (d.bounds) {
    c.font = "9px system-ui, sans-serif";
    for (const b of d.bounds) {
      const mx = x(b.t);
      if (b.vocal) {
        c.fillStyle = "#e88fb0";
        c.fillRect(mx - 0.5, TT_NOV_Y, 1.5, TT_NOV_H);
        c.fillText("V", mx + 2, TT_NOV_Y + 8);
      } else if (b.accepted) {
        c.fillStyle = "rgba(255,255,255,0.85)";
        c.fillRect(mx - 0.5, TT_NOV_Y, 1.5, TT_NOV_H);
        c.fillText(b.z.toFixed(1), mx + 2, TT_NOV_Y + 8);
      } else {
        c.strokeStyle = "rgba(150,155,175,0.7)";
        c.setLineDash([2, 2]);
        c.beginPath();
        c.moveTo(mx + 0.5, TT_NOV_Y);
        c.lineTo(mx + 0.5, TT_NOV_Y + TT_NOV_H);
        c.stroke();
        c.setLineDash([]);
        c.fillStyle = "rgba(150,155,175,0.8)";
        c.fillText(b.z.toFixed(1), mx + 2, TT_NOV_Y + TT_NOV_H - 2);
      }
    }
    c.font = "10px system-ui, sans-serif";
  }

  // Beat ticks (under the novelty strip) and bar lines with numbers.
  c.fillStyle = "#555";
  for (const t of d.beats) c.fillRect(x(t), TT_RULER_Y, 1, 6);
  for (let i = 0; i < d.bars.length; i++) {
    const bx = x(d.bars[i]);
    c.fillStyle = "#606070";
    c.fillRect(bx, TT_BAND_H, 1, H - TT_BAND_H);
    c.fillStyle = "#99a";
    c.fillText(String(i + 1), bx + 3, 66);
    if (i % 4 === 0) {
      c.fillStyle = "#667";
      c.fillText(fmtTtTime(d.bars[i]), bx + 3, 79);
    }
  }

  // Chord lane: per-bar estimates, labeled only where the chord changes.
  if (d.chords) {
    c.fillStyle = "#c9d6a0";
    let prev = "";
    for (const ch of d.chords) {
      if (ch.name !== prev) c.fillText(ch.name, x(ch.t) + 3, 52);
      prev = ch.name;
    }
  }

  // Microtiming lane: raw onsets at their quantized x (aligned with
  // the rhythm lanes below), displaced vertically by their deviation
  // from the 16th-note slot — center = on grid, up = early (突っ込み),
  // down = late (タメ), half a slot at the lane edge. Ghost notes
  // (deduped from the rhythm chart) draw smaller and fainter.
  if (d.onsets && d.onsets.length) {
    const cy = TT_DEV_Y + TT_DEV_H / 2;
    c.strokeStyle = "#556";
    c.setLineDash([3, 3]);
    c.beginPath();
    c.moveTo(0, cy + 0.5);
    c.lineTo(cw, cy + 0.5);
    c.stroke();
    c.setLineDash([]);
    const qDur = (d.bpm > 0 ? 60 / d.bpm : 0.5) / 4;
    const amp = TT_DEV_H / 2 - 2;
    c.fillStyle = "#e8e8f0";
    for (const o of d.onsets) {
      const px = x(o.t - o.dev); // the slot the onset belongs to
      const dy = Math.max(-1, Math.min(1, o.dev / (qDur / 2))) * amp;
      if (o.kept) {
        c.globalAlpha = 0.35 + 0.65 * o.vel;
        c.fillRect(px - 1.5, cy + dy - 1.5, 3, 3);
      } else {
        c.globalAlpha = 0.15 + 0.25 * o.vel;
        c.fillRect(px - 1, cy + dy - 1, 2, 2);
      }
    }
    c.globalAlpha = 1;
  }

  // Rhythm lanes: high / mid / low hits, opacity by velocity.
  if (d.notes) {
    for (const n of d.notes) {
      const lane = 2 - (n.band % 3); // low at the bottom
      const yc = TT_LANE_Y + lane * TT_LANE_H + TT_LANE_H / 2;
      c.globalAlpha = 0.3 + 0.7 * n.vel;
      c.fillStyle = ttBandColors[n.band % 3];
      c.fillRect(x(n.t) - 1.5, yc - 1.5, 3, 3);
    }
    c.globalAlpha = 1;
  }

  // Section bands (top) and boundary lines (full height) at the visual
  // switch time — the time the cue sheet edits.
  for (let i = 0; i < d.sections.length; i++) {
    const s = d.sections[i];
    const t0 = Math.max(0, s.switchT);
    const t1 = i + 1 < d.sections.length ? d.sections[i + 1].switchT : d.duration;
    const col = ttMoodColors[s.mood % 4];
    c.globalAlpha = 0.30;
    c.fillStyle = col;
    c.fillRect(x(t0), 0, x(t1) - x(t0), TT_BAND_H);
    c.globalAlpha = 1;
    c.fillRect(x(t0) - 1, 0, 2, H);
    c.fillStyle = "#fff";
    c.fillText(ttSectionLabel(s), x(t0) + 4, 12);
  }
}

function renderTtMini() {
  const d = ttData;
  const el = $("ttMini");
  const W = el.clientWidth || 600, H = el.clientHeight || 34;
  const c = ttCtx(el, W, H);
  const x = (t) => t / d.duration * W;

  c.fillStyle = "#111118";
  c.fillRect(0, 0, W, H);
  c.font = "10px system-ui, sans-serif";

  for (let i = 0; i < d.sections.length; i++) {
    const s = d.sections[i];
    const x0 = x(Math.max(0, s.switchT));
    const x1 = x(i + 1 < d.sections.length ? d.sections[i + 1].switchT : d.duration);
    const col = ttMoodColors[s.mood % 4];
    c.globalAlpha = 0.35;
    c.fillStyle = col;
    c.fillRect(x0, 0, x1 - x0, H);
    c.globalAlpha = 1;
    c.fillRect(x0, 0, 1, H);
    if (x1 - x0 > 16) {
      c.fillStyle = "#eee";
      c.fillText(String.fromCharCode(65 + (s.label % 26)), x0 + 3, H - 4);
    }
  }

  // Viewport of the detail strip.
  const scroll = $("ttScroll");
  if (scroll.scrollWidth > 0) {
    const v0 = scroll.scrollLeft / scroll.scrollWidth * W;
    const vw = Math.max(6, scroll.clientWidth / scroll.scrollWidth * W);
    c.fillStyle = "rgba(255,255,255,0.10)";
    c.fillRect(v0, 0, vw, H);
    c.strokeStyle = "rgba(255,255,255,0.75)";
    c.strokeRect(v0 + 0.5, 0.5, vw - 1, H - 1);
  }

  if (ttPlaying || ttPausedAt >= 0) {
    c.fillStyle = "#fff";
    c.fillRect(x(ttPlayTime()) - 0.5, 0, 1.5, H);
  }
}

// Minimap click/drag centers the detail strip on that time.
let ttMiniDrag = false;
function ttMiniSeek(ev) {
  const r = $("ttMini").getBoundingClientRect();
  const frac = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width));
  const scroll = $("ttScroll");
  scroll.scrollLeft = frac * scroll.scrollWidth - scroll.clientWidth / 2;
}
$("ttMini").addEventListener("pointerdown", (ev) => {
  if (!ttData) return;
  ttMiniDrag = true;
  $("ttMini").setPointerCapture(ev.pointerId);
  ttMiniSeek(ev);
});
$("ttMini").addEventListener("pointermove", (ev) => { if (ttMiniDrag) ttMiniSeek(ev); });
$("ttMini").addEventListener("pointerup", () => { ttMiniDrag = false; });
$("ttMini").addEventListener("pointercancel", () => { ttMiniDrag = false; });

// Scroll/resize redraws are coalesced to one per frame.
let ttMiniRaf = 0;
function ttMiniSchedule() {
  if (ttMiniRaf) return;
  ttMiniRaf = requestAnimationFrame(() => { ttMiniRaf = 0; if (ttData) renderTtMini(); });
}
$("ttScroll").addEventListener("scroll", ttMiniSchedule);
addEventListener("resize", () => { if (ttData) { renderTtMain(); renderTtMini(); } });

// ---- timetable preview playback ----
// Clicking the timetable strip plays the analyzed audio from that
// time (audioBuf holds the decoded track for both the music file and
// the performer video). Clicking again restarts from the new
// position; ⏸ pauses/resumes, ≪n/n≫ seek by seconds, Esc stops. The
// playhead is a DOM overlay on the strip (no canvas redraw) plus a
// line on the minimap.
let ttAc = null;       // lazy AudioContext for preview playback
let ttSrc = null;      // active AudioBufferSourceNode
let ttPlayT0 = 0;      // song time at playback start
let ttAcT0 = 0;        // AudioContext time at playback start
let ttPlaying = false;
let ttPausedAt = -1;   // >= 0: paused, holding this song time

function ttPlayTime() {
  if (ttPlaying && ttAc) return ttPlayT0 + ttAc.currentTime - ttAcT0;
  return ttPausedAt >= 0 ? ttPausedAt : 0;
}

function ttStopSource() {
  if (!ttSrc) return;
  ttSrc.onended = null;
  try { ttSrc.stop(); } catch (e) { /* already stopped */ }
  ttSrc = null;
}

function ttPlayFrom(t) {
  ttStopSource();
  ttPlaying = false;
  ttPausedAt = -1;
  $("ttPauseBtn").textContent = "⏸";
  if (!audioBuf || running) return;
  if (!ttAc) ttAc = new AudioContext();
  ttAc.resume();
  const src = ttAc.createBufferSource();
  src.buffer = audioBuf;
  src.connect(ttAc.destination);
  t = Math.max(0, Math.min(t, audioBuf.duration));
  src.onended = () => { if (ttSrc === src) stopTtPlayback(); };
  src.start(0, t);
  ttSrc = src;
  ttPlayT0 = t;
  ttAcT0 = ttAc.currentTime;
  ttPlaying = true;
  requestAnimationFrame(ttPlayTick);
}

function stopTtPlayback() {
  ttStopSource();
  if (!ttPlaying && ttPausedAt < 0) return;
  ttPlaying = false;
  ttPausedAt = -1;
  $("ttPauseBtn").textContent = "⏸";
  $("ttPlayhead").style.display = "none";
  $("ttPlayTime").style.display = "none";
  if (ttData) renderTtMini(); // erase the minimap playhead
}

// ⏸ toggles pause/resume; the playhead stays visible while paused.
function ttPauseToggle() {
  if (ttPlaying) {
    ttPausedAt = ttPlayTime();
    ttStopSource();
    ttPlaying = false;
    $("ttPauseBtn").textContent = "▶";
    ttDrawHead(ttPausedAt);
  } else if (ttPausedAt >= 0) {
    ttPlayFrom(ttPausedAt);
  }
}

// ≪n / n≫ move the playing or paused position by dn seconds.
function ttSeek(dn) {
  if (ttPlaying) {
    ttPlayFrom(ttPlayTime() + dn);
  } else if (ttPausedAt >= 0 && audioBuf) {
    ttPausedAt = Math.max(0, Math.min(ttPausedAt + dn, audioBuf.duration));
    ttDrawHead(ttPausedAt);
  }
}

// fmtTtPlayTime renders a playback position as 分:秒.十分秒 ("1:04.5").
function fmtTtPlayTime(t) {
  let m = Math.floor(t / 60);
  let s = t - m * 60;
  if (s >= 59.95) { m++; s = 0; } // would render as "60.0"
  return m + ":" + (s < 10 ? "0" : "") + s.toFixed(1);
}

// ttDrawHead places the strip playhead and time bubble at song time t
// and refreshes the minimap line.
function ttDrawHead(t) {
  const px = t * ttPxPerSec;
  const ph = $("ttPlayhead");
  ph.style.display = "block"; // "" would fall back to the stylesheet's none
  ph.style.left = px + "px";
  // Current time rides the playhead; flip to its left near the end so
  // the bubble stays inside the strip.
  const scroll = $("ttScroll");
  const tb = $("ttPlayTime");
  tb.style.display = "block";
  tb.textContent = fmtTtPlayTime(t);
  tb.style.left = px + 60 > scroll.scrollWidth ? (px - 54) + "px" : (px + 5) + "px";
  renderTtMini();
  return px;
}

function ttPlayTick() {
  if (!ttPlaying) return;
  const px = ttDrawHead(ttPlayTime());
  // Follow the playhead once it runs past the right edge of the view;
  // scrolling elsewhere by hand is otherwise left alone.
  const scroll = $("ttScroll");
  if (px > scroll.scrollLeft + scroll.clientWidth - 8) {
    scroll.scrollLeft = px - 48;
  }
  requestAnimationFrame(ttPlayTick);
}

$("ttMain").addEventListener("click", (ev) => {
  if (!ttData || !audioBuf || running) return;
  const r = $("ttMain").getBoundingClientRect();
  ttPlayFrom((ev.clientX - r.left) / ttPxPerSec);
});
addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") stopTtPlayback();
});
$("ttPauseBtn").addEventListener("click", ttPauseToggle);
for (const b of document.querySelectorAll("#ttCtrl button[data-seek]")) {
  b.addEventListener("click", () => ttSeek(parseFloat(b.dataset.seek)));
}

// ---- cue sheet ----
// The analyzed sections come back as editable text; applying it feeds
// the (possibly hand-tuned) cues back into the Go timeline. Generation
// auto-applies pending edits so a forgotten 適用 cannot desync.
let appliedCue = "";

function setCueSheet(text) {
  $("cueSheet").value = text;
  appliedCue = text;
  $("cueApplyBtn").disabled = !text;
  if (!text) clearTimetable(); // stale grid belongs to the previous audio
}

// applyCueSheet returns true when the current textarea content is
// (now) in effect.
function applyCueSheet() {
  if (!analyzed) return false;
  const text = $("cueSheet").value;
  if (text === appliedCue) return true;
  const err = goApplyCueSheet(text);
  if (err) {
    setStatus("キューシート適用失敗: " + err);
    return false;
  }
  appliedCue = text;
  updateTimetable(); // sections may have moved
  return true;
}

$("cueApplyBtn").addEventListener("click", () => {
  if (applyCueSheet()) {
    setStatus("キューシートを適用しました。");
    previewFrame();
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
  stopTtPlayback();
  if (!applyCueSheet()) return; // pending cue edits: apply or abort on error

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

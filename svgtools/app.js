"use strict";

// CLI のフラグに対応するオプション定義。default は cmd/rastersvg の flag 既定値と揃える。
// group: 表示上のまとまり。type: select | int | number | bool | color | text。
// 自動調整 (閉ループ) の選択は index.html の静的セレクト (#autotune)。
// オプション欄より上に置くため SCHEMA には含めず、collectOptions で拾う。
const SCHEMA = [
  { name: "mode", label: "モード", type: "select", options: ["line", "color"], default: "line", group: "共通" },
  { name: "antialias", label: "アンチエイリアス平滑化 0-1", type: "number", step: 0.1, default: 1.0, group: "共通" },
  { name: "simplify", label: "輪郭単純化の許容誤差 (px)", type: "number", step: 0.1, default: 1.2, group: "共通" },
  { name: "smooth", label: "曲線の滑らかさ 0-1", type: "number", step: 0.1, default: 1.0, group: "共通" },
  { name: "snap", label: "水平/垂直スナップ許容 (px)", type: "number", step: 0.1, default: 1.5, group: "共通" },
  { name: "corner", label: "角として保持する折れ角 (度)", type: "number", step: 1, default: 75, group: "共通" },
  { name: "minarea", label: "無視する輪郭の最小面積 (px²)", type: "number", step: 1, default: 6, group: "共通" },
  { name: "blur", label: "前処理ガウスぼかし sigma", type: "number", step: 0.1, default: 0, group: "共通" },

  { name: "linecolor", label: "線の色", type: "color", default: "#000000", group: "線画 (line)" },
  { name: "invert", label: "明暗を反転 (明るい線を抽出)", type: "bool", default: false, group: "線画 (line)" },
  { name: "auto", label: "自動調整 (blur/minarea/maxwidth/filltol/simplify、dog では dogsigma/dogeps も)", type: "bool", default: false, group: "線画 (line)" },
  { name: "maxwidth", label: "線とみなす最大の太さ (px, 0=無効)", type: "int", default: 0, group: "線画 (line)" },
  { name: "filltol", label: "ベタ塗り除去の色許容差 (RGB距離)", type: "number", step: 1, default: 40, group: "線画 (line)" },
  { name: "fill", label: "背景に元色のベタ塗りレイヤーを追加", type: "bool", default: false, group: "線画 (line)" },
  { name: "seam", label: "継ぎ目埋めストローク幅 (px, 0=無効)", type: "number", step: 0.1, default: 0.8, group: "線画 (line)" },

  { name: "binmethod", label: "二値化方式", type: "select", options: ["otsu", "local", "hybrid", "dog"], default: "otsu", group: "二値化" },
  { name: "threshold", label: "二値化しきい値 1-255 (0=自動)", type: "int", default: 0, group: "二値化" },
  { name: "localthresh", label: "局所窓サイズ (local/hybrid, px)", type: "int", default: 31, group: "二値化" },
  { name: "localk", label: "Sauvola 係数 k", type: "number", step: 0.01, default: 0.34, group: "二値化" },
  { name: "dogsigma", label: "DoG 基準ぼかし sigma", type: "number", step: 0.1, default: 0.8, group: "二値化" },
  { name: "dogeps", label: "DoG しきい値", type: "number", step: 0.5, default: 6, group: "二値化" },

  { name: "colors", label: "パレット色数 2-256", type: "int", default: 12, group: "カラー (color)" },
  { name: "mergetol", label: "OKLab 単色扱い閾値", type: "number", step: 0.005, default: 0.02, group: "カラー (color)" },
  { name: "warmbias", label: "暖色(+)/寒色(-) バイアス", type: "number", step: 0.5, default: 0, group: "カラー (color)" },
  { name: "gradient", label: "グラデ束ね閾値 (0=無効)", type: "number", step: 0.01, default: 0, group: "カラー (color)" },
  { name: "gradfit", label: "グラデ採用の当てはまり R²", type: "number", step: 0.05, default: 0.8, group: "カラー (color)" },
  { name: "superpixel", label: "SLIC 超画素サイズ (px, 0=無効)", type: "int", default: 0, group: "カラー (color)" },
];

// プリセット: 選択時にオプションフォームへ値を反映する。
// "default" は全フィールドを SCHEMA の既定値に戻す。
// "anime" (イラスト・アニメ) は CLI の
//   -binmethod=dog -auto -fill -colors 64 -warmbias 3 -gradient 1
//   -superpixel 0 -gradfit 0.8
// に相当する (superpixel / gradfit は既定値と同じだが明示しておく)。
const PRESETS = {
  default: {},
  anime: {
    binmethod: "dog", auto: true, fill: true, colors: 64, warmbias: 3,
    gradient: 1, superpixel: 0, gradfit: 0.8,
  },
};

const statusEl = document.getElementById("status");
const runBtn = document.getElementById("run");
const dlBtn = document.getElementById("download");
const fileInput = document.getElementById("file");

let wasmReady = false;
let imageBytes = null; // Uint8Array
let lastSvg = "";
let lastName = "output";

function setStatus(msg, isErr) {
  statusEl.textContent = msg;
  statusEl.className = "status" + (isErr ? " err" : "");
}

// --- 変換中インジケータ (スピナー + 経過秒数) ---
// 変換は worker で行われるため、UI スレッド側のアニメーションは止まらない。
let busyTimer = null;
let busyStart = 0;
let busyLabel = "";

function startBusy(label) {
  busyLabel = label;
  busyStart = Date.now();
  renderBusy();
  busyTimer = setInterval(renderBusy, 500);
  document.getElementById("svgPreview").classList.add("busy");
}

function renderBusy() {
  const sec = Math.floor((Date.now() - busyStart) / 1000);
  statusEl.textContent = busyLabel + " … " + sec + " 秒経過";
  statusEl.className = "status";
  const sp = document.createElement("span");
  sp.className = "spinner";
  statusEl.prepend(sp);
}

function endBusy() {
  if (busyTimer !== null) {
    clearInterval(busyTimer);
    busyTimer = null;
  }
  document.getElementById("svgPreview").classList.remove("busy");
}

// --- オプションフォームの生成 ---
// 各グループは <details> で折りたたむ (既定は閉じた状態)。閉じていても
// 変更の有無が分かるよう、summary に変更数バッジを表示する。
const groupBadges = {}; // グループ名 → 変更数バッジ要素

function buildForm() {
  const form = document.getElementById("opts");
  const groups = {};
  for (const s of SCHEMA) (groups[s.group] ||= []).push(s);

  for (const [group, items] of Object.entries(groups)) {
    const fs = document.createElement("details");
    fs.className = "group";
    const lg = document.createElement("summary");
    const title = document.createElement("span");
    title.textContent = group;
    const badge = document.createElement("span");
    badge.className = "chg-count";
    groupBadges[group] = badge;
    lg.appendChild(title);
    lg.appendChild(badge);
    fs.appendChild(lg);
    const body = document.createElement("div");
    body.className = "body";
    fs.appendChild(body);

    for (const s of items) {
      const field = document.createElement("div");
      field.className = "field" + (s.type === "bool" ? " inline" : "");
      const id = "opt_" + s.name;
      let input;

      if (s.type === "select") {
        input = document.createElement("select");
        for (const o of s.options) {
          const opt = document.createElement("option");
          opt.value = o; opt.textContent = o;
          if (o === s.default) opt.selected = true;
          input.appendChild(opt);
        }
      } else if (s.type === "bool") {
        input = document.createElement("input");
        input.type = "checkbox";
        input.checked = s.default;
      } else if (s.type === "color") {
        input = document.createElement("input");
        input.type = "color";
        input.value = s.default;
      } else {
        input = document.createElement("input");
        input.type = s.type === "text" ? "text" : "number";
        if (s.step) input.step = s.step;
        input.value = s.default;
      }
      input.id = id;
      input.dataset.name = s.name;
      input.dataset.type = s.type;

      const label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = s.label;

      if (s.type === "bool") {
        field.appendChild(input);
        field.appendChild(label);
      } else {
        field.appendChild(label);
        field.appendChild(input);
      }
      body.appendChild(field);
    }
    form.appendChild(fs);
  }
  // 値の編集で「既定値から変更」マークを更新する (checkbox 等は change で発火)
  form.addEventListener("input", updateChangedMarks);
  form.addEventListener("change", updateChangedMarks);
}

// currentValue はフィールドの現在値を SCHEMA の型に合わせて返す。
function currentValue(s, el) {
  if (s.type === "bool") return el.checked;
  if (s.type === "int") return parseInt(el.value, 10) || 0;
  if (s.type === "number") return parseFloat(el.value) || 0;
  return el.value;
}

// updateChangedMarks は既定値から変更されたフィールドに ✱ マークを付け、
// 各グループの summary に変更数バッジを表示する (閉じていても分かるように)。
// 変更された値は -auto / autotune でも上書きされず優先される (UserSet 扱い)。
function updateChangedMarks() {
  const counts = {};
  for (const s of SCHEMA) {
    const el = document.getElementById("opt_" + s.name);
    const changed = currentValue(s, el) !== s.default;
    el.closest(".field").classList.toggle("changed", changed);
    if (changed) counts[s.group] = (counts[s.group] || 0) + 1;
  }
  for (const [group, badge] of Object.entries(groupBadges)) {
    badge.textContent = counts[group] ? "✱ " + counts[group] + " 変更" : "";
  }
}

// applyPreset は全フィールドを既定値に戻してからプリセットの値を上書きする。
function applyPreset(name) {
  const preset = PRESETS[name] || {};
  for (const s of SCHEMA) {
    const el = document.getElementById("opt_" + s.name);
    const val = s.name in preset ? preset[s.name] : s.default;
    if (s.type === "bool") el.checked = val;
    else el.value = val;
  }
  updateChangedMarks();
}

// フォームから、既定値と異なる値だけを集める。
// (未指定キーは backend で CLI 既定値になり、-auto / autotune はユーザー指定値を尊重する)
function collectOptions() {
  const opts = {};
  for (const s of SCHEMA) {
    const el = document.getElementById("opt_" + s.name);
    const val = currentValue(s, el);
    if (val !== s.default) opts[s.name] = val;
  }
  // 自動調整 (閉ループ) はオプション欄の外の静的セレクトから拾う
  const autotune = document.getElementById("autotune").value;
  if (autotune) opts.autotune = autotune;
  return opts;
}

// --- 変換 (Web Worker で実行し、UI スレッドを止めない) ---
function runConvert() {
  if (!wasmReady || !imageBytes) return;
  const opts = collectOptions();
  startBusy(opts.autotune ? "変換中 (自動調整には数百秒かかることがあります)" : "変換中");
  runBtn.disabled = true;
  // bytes は構造化クローンでコピーされるため、再変換にそのまま使い回せる。
  worker.postMessage({ bytes: imageBytes, options: opts });
}

// onResult は worker からの変換結果を UI に反映する。
function onResult(msg) {
  endBusy();
  runBtn.disabled = false;
  showReport(msg.report);
  if (msg.error) {
    setStatus("エラー: " + msg.error, true);
    return;
  }
  lastSvg = msg.svg;
  showSvg(msg.svg);
  setStatus("変換完了 (" + msg.svg.length.toLocaleString() + " bytes)");
  dlBtn.disabled = false;
}

// showSvg は変換結果を表示する。線画 SVG は背景が透明で、ページ配色
// (特にダークモード) によっては黒い線が見えなくなるため、svg 要素自身に
// 白背景を付ける (プレビュー枠に付けると描画領域より大きい「額縁」になる)。
// 保存される SVG は透明のまま。
function showSvg(svg) {
  const prev = document.getElementById("svgPreview");
  prev.innerHTML = svg;
  const el = prev.querySelector("svg");
  if (el) {
    el.style.background = "#fff";
    // インライン <svg> は height:auto の縮小挙動が <img> と揃わないブラウザが
    // あるため、縦横比を明示して元画像側と同じスケーリングにする
    const w = parseFloat(el.getAttribute("width"));
    const h = parseFloat(el.getAttribute("height"));
    if (w > 0 && h > 0) el.style.aspectRatio = w + " / " + h;
  }
  document.getElementById("svgMeta").textContent = svg.length.toLocaleString() + " bytes";
}

// showReport は autotune のステージ別レポートを表示する (空なら隠す)。
function showReport(report) {
  const el = document.getElementById("report");
  el.textContent = report || "";
  el.hidden = !report;
}

// --- ファイル選択 ---
fileInput.addEventListener("change", async () => {
  const f = fileInput.files[0];
  if (!f) return;
  lastName = f.name.replace(/\.[^.]+$/, "");
  const buf = await f.arrayBuffer();
  imageBytes = new Uint8Array(buf);

  const url = URL.createObjectURL(f);
  const img = new Image();
  img.onload = () => {
    document.getElementById("srcMeta").textContent = f.name + " — " + img.naturalWidth + "×" + img.naturalHeight;
    URL.revokeObjectURL(url);
  };
  img.src = url;
  const srcPrev = document.getElementById("srcPreview");
  srcPrev.innerHTML = "";
  srcPrev.appendChild(img);

  if (wasmReady) runBtn.disabled = false;
});

runBtn.addEventListener("click", runConvert);

document.getElementById("preset").addEventListener("change", (e) => {
  applyPreset(e.target.value);
});

dlBtn.addEventListener("click", () => {
  if (!lastSvg) return;
  const blob = new Blob([lastSvg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = lastName + ".svg";
  a.click();
  URL.revokeObjectURL(url);
});

// --- worker 起動 (wasm のロードと変換は worker.js 内で行う) ---
let worker = null;

function startWorker() {
  worker = new Worker("worker.js");
  worker.onmessage = (ev) => {
    const msg = ev.data;
    if (msg.type === "ready") {
      wasmReady = true;
      setStatus("準備完了 — 画像を選択してください");
      if (imageBytes) runBtn.disabled = false;
    } else if (msg.type === "fatal") {
      endBusy();
      setStatus("wasm の読み込みに失敗しました: " + msg.error + " (HTTP 経由で配信してください)", true);
    } else if (msg.type === "result") {
      onResult(msg);
    }
  };
  worker.onerror = (e) => {
    endBusy();
    setStatus("worker エラー: " + (e.message || e), true);
    runBtn.disabled = !wasmReady || !imageBytes;
  };
}

buildForm();
startWorker();

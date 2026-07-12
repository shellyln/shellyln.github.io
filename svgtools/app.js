"use strict";

// CLI のフラグに対応するオプション定義。default は cmd/rastersvg の flag 既定値と揃える。
// group: 表示上のまとまり。type: select | int | number | bool | color | text。
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
  { name: "auto", label: "自動調整 (blur/minarea/maxwidth/filltol/simplify)", type: "bool", default: false, group: "線画 (line)" },
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

// --- オプションフォームの生成 ---
function buildForm() {
  const form = document.getElementById("opts");
  const groups = {};
  for (const s of SCHEMA) (groups[s.group] ||= []).push(s);

  for (const [group, items] of Object.entries(groups)) {
    const fs = document.createElement("fieldset");
    const lg = document.createElement("legend");
    lg.textContent = group;
    fs.appendChild(lg);

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
      fs.appendChild(field);
    }
    form.appendChild(fs);
  }
}

// フォームから、既定値と異なる値だけを集める。
// (未指定キーは backend で CLI 既定値になり、-auto はユーザー指定値を尊重する)
function collectOptions() {
  const opts = {};
  for (const s of SCHEMA) {
    const el = document.getElementById("opt_" + s.name);
    let val;
    if (s.type === "bool") val = el.checked;
    else if (s.type === "int") val = parseInt(el.value, 10) || 0;
    else if (s.type === "number") val = parseFloat(el.value) || 0;
    else val = el.value;

    if (val !== s.default) opts[s.name] = val;
  }
  return opts;
}

// --- 変換 ---
function runConvert() {
  if (!wasmReady || !imageBytes) return;
  setStatus("変換中…");
  runBtn.disabled = true;

  // wasm 呼び出しは同期。UI を一旦更新するため次フレームで実行。
  requestAnimationFrame(() => {
    try {
      const opts = collectOptions();
      const res = rastersvgConvert(imageBytes, opts);
      if (res.error) {
        setStatus("エラー: " + res.error, true);
        return;
      }
      lastSvg = res.svg;
      showSvg(res.svg);
      setStatus("変換完了 (" + res.svg.length.toLocaleString() + " bytes)");
      dlBtn.disabled = false;
    } catch (e) {
      setStatus("エラー: " + e, true);
    } finally {
      runBtn.disabled = false;
    }
  });
}

function showSvg(svg) {
  document.getElementById("svgPreview").innerHTML = svg;
  document.getElementById("svgMeta").textContent = svg.length.toLocaleString() + " bytes";
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

// --- wasm ロード ---
async function loadWasm() {
  const go = new Go();
  try {
    let result;
    if (WebAssembly.instantiateStreaming) {
      try {
        result = await WebAssembly.instantiateStreaming(fetch("rastersvg.wasm"), go.importObject);
      } catch (streamErr) {
        // MIME が application/wasm でない場合などのフォールバック。
        const bytes = await (await fetch("rastersvg.wasm")).arrayBuffer();
        result = await WebAssembly.instantiate(bytes, go.importObject);
      }
    } else {
      const bytes = await (await fetch("rastersvg.wasm")).arrayBuffer();
      result = await WebAssembly.instantiate(bytes, go.importObject);
    }
    go.run(result.instance);
    wasmReady = true;
    setStatus("準備完了 — 画像を選択してください");
    if (imageBytes) runBtn.disabled = false;
  } catch (e) {
    setStatus("wasm の読み込みに失敗しました: " + e + " (HTTP 経由で配信してください)", true);
  }
}

buildForm();
loadWasm();

"use strict";

// 変換処理を UI スレッドから切り離す Web Worker。
// wasm のロードと rastersvgConvert の実行をすべてこのワーカー内で行い、
// autotune のような長い処理でもページの描画・操作を止めない。
//
// メインスレッドとのメッセージ:
//   受信: { bytes: Uint8Array, options: object }   変換要求 (同時実行は 1 件)
//   送信: { type: "ready" }                        wasm 初期化完了
//         { type: "fatal", error }                 wasm 初期化失敗
//         { type: "result", svg, error, report }   変換結果

importScripts("wasm_exec.js");

let wasmReady = false;

async function init() {
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
    go.run(result.instance); // Go 側の main は待機し続けるので await しない
    wasmReady = true;
    postMessage({ type: "ready" });
  } catch (e) {
    postMessage({ type: "fatal", error: String(e) });
  }
}

self.onmessage = (ev) => {
  const { bytes, options } = ev.data;
  if (!wasmReady) {
    postMessage({ type: "result", svg: "", report: "", error: "wasm が初期化されていません" });
    return;
  }
  try {
    const res = rastersvgConvert(bytes, options);
    postMessage({ type: "result", svg: res.svg, error: res.error, report: res.report });
  } catch (e) {
    postMessage({ type: "result", svg: "", report: "", error: String(e) });
  }
};

init();

// ライブスキャン用 Worker。
// qrtools.wasm を「メインスレッドとは別インスタンス」としてロードし、
// 重い visionDecode をここで実行することで UI(プレビュー描画・操作)のブロックを防ぐ。
//
// Go WASM は 1 インスタンス = 単一スレッドのため、並行させるにはこのファイルを
// 複数 Worker で起動する(各 Worker が個別インスタンスを持つ)。本実装は Worker 1 個。
//
// メッセージ契約:
//   受信: { frame: ArrayBuffer, width: number, height: number,
//           mode: { prescan, forceBinary }, seq: number }
//         frame は canvas.getImageData 由来の生 RGBA(非乗算 sRGB、1画素4バイト)を
//         transfer で受け取る(ゼロコピー)。width/height は画素寸法。mode はフレーム毎に同梱。
//         PNG コーデック往復を廃した経路(設計書 §11 W1/W3)。
//   送信: { type: 'ready' }
//         { type: 'error',  error: string }
//         { type: 'result', seq, skipped?: true, res?: object }

importScripts('./wasm_exec.js');

const go = new Go();

WebAssembly.instantiateStreaming(fetch('./qrtools.wasm'), go.importObject)
  .then((result) => {
    // go.run() 実行中の main() で self.qrtools が同期的に登録される。
    go.run(result.instance);
    postMessage({ type: 'ready' });
  })
  .catch((err) => postMessage({ type: 'error', error: String(err) }));

onmessage = ({ data }) => {
  const { frame, width, height, mode, seq } = data;
  const rgba = new Uint8Array(frame); // transfer された生 RGBA バッファをラップ

  // scanFrame 1回でプリスキャン→検出→復号まで完結(コーデック無し・グレー変換1回)。
  // プリスキャン不通過なら { skipped: true } が返る。
  const res = self.qrtools.scanFrame(rgba, width, height, {
    prescan: mode.prescan,
    forceBinary: mode.forceBinary,
  });

  if (res && res.skipped) {
    postMessage({ type: 'result', seq, skipped: true });
    return;
  }
  postMessage({ type: 'result', seq, res });
};

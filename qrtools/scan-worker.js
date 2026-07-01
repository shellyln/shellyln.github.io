// ライブスキャン用 Worker。
// qrtools.wasm を「メインスレッドとは別インスタンス」としてロードし、
// 重い visionDecode をここで実行することで UI(プレビュー描画・操作)のブロックを防ぐ。
//
// Go WASM は 1 インスタンス = 単一スレッドのため、並行させるにはこのファイルを
// 複数 Worker で起動する(各 Worker が個別インスタンスを持つ)。本実装は Worker 1 個。
//
// メッセージ契約:
//   受信: { frame: ArrayBuffer, mode: { prescan, forceBinary }, seq: number }
//         frame は transfer で受け取る(ゼロコピー)。mode はフレーム毎に同梱される。
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
  const { frame, mode, seq } = data;
  const bytes = new Uint8Array(frame); // transfer された ArrayBuffer をラップ

  // プリスキャン: QR らしき構造が無いフレームは重い visionDecode を呼ばずに即スキップ。
  if (mode.prescan && !self.qrtools.quickScan(bytes)) {
    postMessage({ type: 'result', seq, skipped: true });
    return;
  }

  const res = self.qrtools.visionDecode(bytes, mode.forceBinary);
  postMessage({ type: 'result', seq, res });
};

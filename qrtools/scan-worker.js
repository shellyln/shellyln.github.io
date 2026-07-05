// ライブスキャン用 Worker。
// qrtools.wasm を「メインスレッドとは別インスタンス」としてロードし、
// 重い visionDecode をここで実行することで UI(プレビュー描画・操作)のブロックを防ぐ。
//
// Go WASM は 1 インスタンス = 単一スレッドのため、並行させるにはこのファイルを
// 複数 Worker で起動する(各 Worker が個別インスタンスを持つ)。本実装は Worker 1 個。
//
// メッセージ契約:
//   受信: { frame: ArrayBuffer, width: number, height: number,
//           mode: { prescan, forceBinary, captureSkipped? }, seq: number, capture?: boolean }
//         frame は canvas.getImageData 由来の生 RGBA(非乗算 sRGB、1画素4バイト)を
//         transfer で受け取る(ゼロコピー)。width/height は画素寸法。mode はフレーム毎に同梱。
//         PNG コーデック往復を廃した経路(設計書 §11 W1/W3)。
//         capture は失敗フレーム採取機構(docs/live-failframe-capture.md §3.1)の追加フィールド。
//         採取残数 > 0 のときのみ true。mode.captureSkipped は「プリスキャン棄却も採取」トグル。
//   送信: { type: 'ready' }
//         { type: 'error',  error: string }
//         { type: 'result', seq, skipped?: true, res?: object }
//         { type: 'result', seq, res, frame: ArrayBuffer, width, height }
//           …検出失敗(res.success!==true)かつ capture=true のとき、frame を transfer で返送する。
//         { type: 'result', seq, skipped: true, frame: ArrayBuffer, width, height }
//           …QuickScan 棄却(skipped)かつ capture=true かつ mode.captureSkipped=true のとき。
//         上記いずれも従来の成功/capture=false 時の形は不変(A2 節)。

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
  const { frame, width, height, mode, seq, capture } = data;
  const rgba = new Uint8Array(frame); // transfer された生 RGBA バッファをラップ

  // scanFrame 1回でプリスキャン→検出→復号まで完結(コーデック無し・グレー変換1回)。
  // プリスキャン不通過なら { skipped: true } が返る。
  const res = self.qrtools.scanFrame(rgba, width, height, {
    prescan: mode.prescan,
    forceBinary: mode.forceBinary,
  });

  if (res && res.skipped) {
    // 既定では採取しない(QuickScan の偽陰性調査用トグルが ON のときだけ返送する)。
    if (capture && mode.captureSkipped) {
      postMessage({ type: 'result', seq, skipped: true, frame, width, height }, [frame]);
      return;
    }
    postMessage({ type: 'result', seq, skipped: true });
    return;
  }

  // 検出失敗(success!==true)かつ採取残数ありのときだけ、判定後のフレームを
  // transfer で返送する(ゼロコピー。成功系はここを通らないため性能に影響しない)。
  if (capture && !(res && res.success)) {
    postMessage({ type: 'result', seq, res, frame, width, height }, [frame]);
    return;
  }
  postMessage({ type: 'result', seq, res });
};

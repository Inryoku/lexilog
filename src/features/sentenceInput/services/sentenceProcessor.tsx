export const sentenceProcessor = (text: string): string[] => {
  const sentences =
    text // テキストを受け取り
      ?.replace(/([^.!?])$/, "$1.") // 最後の文にピリオドを追加
      .match(/[^.!?]+[.!?]|\S+/g) // 文末のピリオド・クエスチョンマーク・感嘆符を保持
      ?.map((sentence) => sentence.trim()) || // 各文の前後の余白を削除
    []; //前の処理が undefined や null のときは、代わりに空の配列 [] を使う
  return sentences;
};

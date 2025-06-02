export const sentenceProcessor = (text: string): string[] => {
  // 前処理：行頭行末の空白除去、行末にピリオド追加（必要時）
  let normalized = text.trim().replace(/\n{2,}/g, "\n\n");

  // 改行ベースで段落に分ける（2連改行で空要素を残す）
  const lines = normalized.split("\n");

  const sentences: string[] = [];

  for (const line of lines) {
    const cleaned = line.replace(/\s+/g, " ").trim();

    if (cleaned === "") {
      // 空行 → 空文字としてそのままpush
      sentences.push("");
      continue;
    }

    // 文末が .!? でなければピリオド追加
    const finalized = /[.!?]$/.test(cleaned) ? cleaned : cleaned + ".";

    // 文ごとに分割（複数文が1行にある場合）
    const parts = finalized.match(/[^.!?]+[.!?]/g)?.map((s) => s.trim()) || [];
    sentences.push(...parts);
  }

  return sentences;
};

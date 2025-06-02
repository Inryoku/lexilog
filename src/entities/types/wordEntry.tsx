export type SentenceEntry = {
  text: string;
  documentId?: string;
};

export type WordEntry = {
  lemma: string;
  meaning: string; // "" にしておく or fetch失敗時のデフォルト文字
  synonyms: string[]; // [] ← 空配列
  sentences: SentenceEntry[];
  clickCount: number; // 0 ← 初期値
  lastClickedTime: number; // ← getTime() の値（ミリ秒 UNIX タイム）
  isBookmarked: boolean; // false ← 初期値
};

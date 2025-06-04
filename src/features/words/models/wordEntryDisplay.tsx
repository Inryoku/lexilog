import { SentenceEntry } from "../../../entities/types/wordEntry";

export type WordEntryDisplay = {
  lemma: string;
  meaning: string;
  synonymsText: string; // "word1, word2, word3" - これで表示のみ
  sentences: SentenceEntry[]; // text と documentId 両方表示で使う
  clickCount: number;
  lastClickedTime: Date; // Dateの方が扱いやすそう
  isBookmarked: boolean;
};

import { SentenceEntry } from "../entities/types/wordEntry";

export type WordEntryFirestoreDto = {
  lemma: string;
  meaning: string;
  synonyms: string[];
  sentences: SentenceEntry[];
  clickCount: number;
  lastClickedTime: number; // ← getTime() の値（ミリ秒 UNIX タイム）
  isBookmarked: boolean;
};

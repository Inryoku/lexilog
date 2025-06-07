import { WordEntry } from "../entities/types/wordEntry"; // ← ドメインモデル
import { WordEntryFirestoreDto } from "../dtos/wordEntryFirestoreDto"; // ← DTO
import { WordEntryDisplay } from "../features/words/models/wordEntryDisplay"; // ← 表示用モデル

export function toFirestoreDto(domain: WordEntry): WordEntryFirestoreDto {
  return {
    ...domain,
    lastClickedTime: domain.lastClickedTime.getTime(),
  };
}

export function fromFirestoreDto(dto: WordEntryFirestoreDto): WordEntry {
  return {
    ...dto,
    lastClickedTime: new Date(dto.lastClickedTime),
  };
}

export const toDisplayModel = (entry: WordEntry): WordEntryDisplay => {
  return {
    lemma: entry.lemma,
    meaning: entry.meaning,
    synonymsText: entry.synonyms.join(", "), // カンマ区切りに変換
    sentences: entry.sentences, // そのままでOK
    clickCount: entry.clickCount,
    lastClickedTime: entry.lastClickedTime, // Date 型維持
    isBookmarked: entry.isBookmarked,
  };
};

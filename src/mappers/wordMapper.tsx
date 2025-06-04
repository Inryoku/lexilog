import { WordEntry } from "../entities/types/wordEntry"; // ← ドメインモデル
import { WordEntryFirestoreDto } from "../dtos/wordEntryFirestoreDto"; // ← DTO

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

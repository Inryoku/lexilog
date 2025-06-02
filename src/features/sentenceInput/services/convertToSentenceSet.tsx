import { v4 as uuidv4 } from "uuid";
import { SentenceSet } from "../../../entities/types/sentenceSet";

export const convertToSentenceSet = (
  sentences: string[],
  docId: string = uuidv4()
): SentenceSet => ({
  sentences,
  documentId: docId,
});

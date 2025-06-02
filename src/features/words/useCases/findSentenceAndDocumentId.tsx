import { SentenceSet } from "../../../entities/types/sentenceSet";

export const findSentenceAndDocumentId = (
  sentenceSets: SentenceSet[],
  index: number
): { sentence: string; documentId: string } => {
  let count = 0;
  for (const set of sentenceSets) {
    if (index < count + set.sentences.length) {
      return {
        sentence: set.sentences[index - count],
        documentId: set.documentId,
      };
    }
    count += set.sentences.length;
  }
  throw new Error("Sentence index out of range");
};

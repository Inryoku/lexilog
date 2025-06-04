import { getLemma } from "../services/lemmaService";
import { fetchMeaningAndSynonyms } from "./fetchMeaningAndSynonyms";
import { WordEntry } from "../../../entities/types/wordEntry";

export const createWordEntry = async (
  word: string,
  sentence: string,
  documentId: string
): Promise<WordEntry> => {
  const lemma = await getLemma(word);
  const { meaning, synonyms } = await fetchMeaningAndSynonyms(lemma);

  return {
    lemma,
    meaning: meaning ?? "",
    synonyms: synonyms ?? [],
    sentences: [
      {
        text: sentence,
        documentId: documentId,
      },
    ],
    clickCount: 1,
    lastClickedTime: new Date(),
    isBookmarked: false,
  };
};

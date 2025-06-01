import { fetchSynonyms } from "./synonymService";
import { EASY_WORDS } from "../../../entities/easyWords";

const EASY_WORD_SET = new Set(EASY_WORDS);

export const get3SynonymsForLearner = async (
  lemma: string
): Promise<string[]> => {
  const candidates = await fetchSynonyms(lemma);
  if (!candidates) return [];

  const easy = candidates.filter((word) => EASY_WORD_SET.has(word));
  const hard = candidates.filter((word) => !EASY_WORD_SET.has(word));

  const synonyms = [...easy.slice(0, 3)];
  if (synonyms.length < 3) {
    synonyms.push(...hard.slice(0, 3 - synonyms.length));
  }

  return synonyms;
};

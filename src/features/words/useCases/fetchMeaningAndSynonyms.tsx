import { fetchMeaning } from "../services/meaningService";
import { fetchSynonyms } from "../services/synonymService";

export const fetchMeaningAndSynonyms = async (lemma: string) => {
  try {
    // 並行して複数のAPIリクエストを実行
    const [meaning, synonyms] = await Promise.all([
      fetchMeaning(lemma),
      fetchSynonyms(lemma),
    ]);
    return { meaning, synonyms };
  } catch (error) {
    console.error("Error processing word:", error);
    return { meaning: null, synonyms: null };
  }
};

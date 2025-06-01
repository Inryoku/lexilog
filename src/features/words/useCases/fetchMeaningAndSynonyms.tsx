import { fetchMeaning } from "../services/meaningService";
import { get3SynonymsForLearner } from "../services/get3SynonymsForLearner";

export const fetchMeaningAndSynonyms = async (lemma: string) => {
  try {
    // 並行して複数のAPIリクエストを実行
    const [meaning, synonyms] = await Promise.all([
      fetchMeaning(lemma),
      get3SynonymsForLearner(lemma),
    ]);
    return { meaning, synonyms };
  } catch (error) {
    console.error("Error processing word:", error);
    return { meaning: null, synonyms: null };
  }
};

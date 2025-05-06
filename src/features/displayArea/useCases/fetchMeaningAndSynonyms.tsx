import { fetchMeaning } from "../services/meaningService";
import { fetchSynonyms } from "../services/synonymService";

export const fetchMeaningAndSynonyms = async (lemma: string) => {
  try {
    // 並行して複数のAPIリクエストを実行
    const [meaningResponse, synonymsResponse] = await Promise.all([
      fetchMeaning(lemma),
      fetchSynonyms(lemma),
    ]);
  } catch (error) {
    console.error("Error processing word:", error);
  }
};

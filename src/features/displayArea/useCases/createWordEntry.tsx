import { getLemma } from "../services/lemmaService";
import { fetchMeaningAndSynonyms } from "./fetchMeaningAndSynonyms";

export const createWordEntry = async (word: string, sentence: string) => {
  const lemma = await getLemma(word);
  const { meaning, synonyms } = await fetchMeaningAndSynonyms(lemma);

  // ここで全部「初期値ぜんぶ入れる」のがええかはかなり微妙やが、なんとなくいれる。
  return {
    lemma,
    meaning: meaning ?? "",
    synonyms: synonyms ?? [],
    sentences: [sentence],
    clickCount: 1, // 初回クリックなので 1
    lastClickedTime: new Date().getTime(), // ここで入れるのは正解（クリック時に呼ばれる関数なので）
    isBookmarked: false, // 新規ではfalse（Firestoreからマージされるならあとで上書き）
  };
};

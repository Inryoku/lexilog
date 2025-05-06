import nlp from "compromise";

export const getLemma = (word: string) => {
  // 原型化処理
  const lemma =
    nlp(word).verbs().toInfinitive().out() ||
    nlp(word).nouns().toSingular().out() ||
    word; // 該当がなければそのまま
  return lemma; // 結果を返す
};

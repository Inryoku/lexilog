import nlp from "compromise";

export const getLemma = (word: string) => {
  const normalizedInput = word.toLowerCase();
  const lemma =
    nlp(normalizedInput).verbs().toInfinitive().out() ||
    nlp(normalizedInput).nouns().toSingular().out() ||
    normalizedInput;
  console.log("Fetched lemma:", lemma);
  return lemma.toLowerCase();
};

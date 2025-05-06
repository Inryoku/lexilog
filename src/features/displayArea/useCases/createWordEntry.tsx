import React from "react";
import { getLemma } from "../services/lemmaService";
import { fetchMeaningAndSynonyms } from "./fetchMeaningAndSynonyms";

export const createWordEntry = async (word: string, sentence: string) => {
  const lemma = await getLemma(word);
  const { meaning, synonyms } = await fetchMeaningAndSynonyms(lemma);
  return <div>createWordEntry</div>;
};

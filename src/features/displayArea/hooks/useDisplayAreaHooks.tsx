import { useState } from "react";
import { createWordEntry } from "../useCases/createWordEntry"; // useCase
import { setSelectedWord } from "../useCases/setSelectedWord"; // useCase

export const useDisplayAreaHooks = () => {
  const handleWordClick = async (word: string, sentenceIndex: number) => {
    console.log("Word clicked:", word, "Sentence index:", sentenceIndex);
    const wordObj = await createWordEntry(word, sentence); // useCase
    setSelectedWord(wordObj); // useState or Redux
  };

  return { handleWordClick };
};

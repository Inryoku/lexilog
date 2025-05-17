import { useSelector } from "react-redux";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import { createWordEntry } from "../useCases/createWordEntry"; // useCase
import { useSetSelectedWord } from "../useCases/setSelectedWord"; // useCase

export const useDisplayAreaHooks = () => {
  const displaySentences = useSelector(
    (state: RootState) => state.sentenceInput.sentences
  );

  const handleWordClick = async (word: string, sentenceIndex: number) => {
    console.log("Word clicked:", word, "Sentence index:", sentenceIndex);
    const sentence = displaySentences[sentenceIndex];
    const wordEntry = await createWordEntry(word, sentence); // useCase
    console.log("Word object created:", wordEntry);
    useSetSelectedWord(wordEntry); // useCase → redux
  };

  return { handleWordClick };
};

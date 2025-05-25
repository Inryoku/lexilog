import { useSelector } from "react-redux";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import { createWordEntry } from "../useCases/createWordEntry"; // useCase
import { useRegisterWordEntry } from "../useCases/useRegisterWordEntry"; // useCase
import {
  useStartWordProcessing,
  useEndWordProcessing,
} from "../useCases/useSetWordLoading"; // useCase
import { useSetSentenceIndex } from "../useCases/useSetSentenceIndex"; // useCase

export const useDisplayAreaHooks = () => {
  const displaySentences = useSelector(
    (state: RootState) => state.sentenceInput.sentences
  );
  const registerWordEntry = useRegisterWordEntry();
  const startProcessing = useStartWordProcessing();
  const endProcessing = useEndWordProcessing();
  const setSentenceIndex = useSetSentenceIndex();

  const handleWordClick = async (word: string, sentenceIndex: number) => {
    startProcessing();
    setSentenceIndex(sentenceIndex);
    console.log("Word clicked:", word, "Sentence index:", sentenceIndex);
    const sentence = displaySentences[sentenceIndex];
    const wordEntry = await createWordEntry(word, sentence);
    console.log("Word object created:", wordEntry);
    await registerWordEntry(wordEntry);
    endProcessing();
  };

  return { handleWordClick };
};

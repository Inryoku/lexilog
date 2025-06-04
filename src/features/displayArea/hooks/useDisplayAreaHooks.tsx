import { useSelector } from "react-redux";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import { createWordEntry } from "../../words/useCases/createWordEntry"; // useCase
import { useRegisterWordEntry } from "../../words/useCases/useRegisterWordEntry"; // useCase
import {
  useStartWordProcessing,
  useEndWordProcessing,
} from "../useCases/useSetWordLoading"; // useCase
import { useSetSentenceIndex } from "../useCases/useSetSentenceIndex"; // useCase
import { findSentenceAndDocumentId } from "../../words/useCases/findSentenceAndDocumentId"; // useCase

export const useDisplayAreaHooks = () => {
  const displaySentences = useSelector(
    (state: RootState) => state.sentenceInput.sentences
  );

  const clickedSentenceIndex = useSelector(
    (state: RootState) => state.clickedWord.sentenceIndex
  );

  const registerWordEntry = useRegisterWordEntry();
  const startProcessing = useStartWordProcessing();
  const endProcessing = useEndWordProcessing();
  const setSentenceIndex = useSetSentenceIndex();

  const handleWordClick = async (word: string, sentenceIndex: number) => {
    startProcessing();
    setSentenceIndex(sentenceIndex);
    console.log("Word clicked:", word, "Sentence index:", sentenceIndex);

    try {
      // SentenceSet[] から文と対応する documentId を探す
      const { sentence, documentId } = findSentenceAndDocumentId(
        displaySentences,
        sentenceIndex
      );

      const wordEntry = await createWordEntry(word, sentence, documentId);
      await registerWordEntry(wordEntry);
    } catch (e) {
      console.error("Word登録処理中にエラー:", e);
      // エラー通知出したり、最低限UIに反映したりは検討
    } finally {
      endProcessing();
    }
  };

  return { handleWordClick, displaySentences, clickedSentenceIndex };
};

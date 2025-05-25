import { useDispatch } from "react-redux";
import { setSentenceIndex } from "../slices/clickedWordSlice";

export const useSetSentenceIndex = () => {
  const dispatch = useDispatch();
  return (sentenceIndex: number | null) => {
    dispatch(setSentenceIndex(sentenceIndex));
  };
};

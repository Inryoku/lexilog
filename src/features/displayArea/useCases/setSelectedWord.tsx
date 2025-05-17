import { useDispatch } from "react-redux";
import { setSelectedWord as set } from "../slices/wordSlice";
import { WordEntry } from "../../../entities/types/wordEntry";

export const useSetSelectedWord = (wordEntry: {
  lemma: any;
  meaning: string;
  synonyms: string[];
  sentences: string[];
  clickCount: number;
  lastClickedTime: null;
  isBookmarked: boolean;
}) => {
  const dispatch = useDispatch();

  return (entry: WordEntry) => {
    dispatch(set(entry));
  };
};

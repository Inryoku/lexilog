import { useDispatch } from "react-redux";
import { toggleBookmark } from "../slices/wordSlice";

export const useHandleToggleBookmark = () => {
  const dispatch = useDispatch();
  return (lemma: string) => {
    dispatch(toggleBookmark(lemma));
  };
};

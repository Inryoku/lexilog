import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../slices/wordSlice";
import { saveEntryToFirestore } from "../services/saveEntryToFirestore";
import { useAuth } from "../../auth/AuthContext";
import { RootState } from "../../../store/store";

export const useHandleToggleBookmark = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const entries = useSelector((state: RootState) => state.word.entries);

  return async (lemma: string) => {
    dispatch(toggleBookmark(lemma));

    if (user) {
      const updatedEntry = {
        ...entries[lemma],
        isBookmarked: !entries[lemma].isBookmarked,
      };
      await saveEntryToFirestore(user.uid, updatedEntry);
    }
  };
};

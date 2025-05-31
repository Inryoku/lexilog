import { useDispatch } from "react-redux";
import { addOrUpdateWordEntry } from "../slices/wordSlice";
import { setClickedWord } from "../../displayArea/slices/clickedWordSlice";
import { saveEntryToFirestore } from "../services/saveEntryToFirestore";
import { useAuth } from "../../auth/AuthContext";
import { WordEntry } from "../../../entities/types/wordEntry";

export const useRegisterWordEntry = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return async (entry: WordEntry) => {
    dispatch(setClickedWord(entry)); // ← 画面表示用
    if (entry.meaning.trim()) {
      // When meaning is empty, do not register
      dispatch(addOrUpdateWordEntry(entry)); // ← これでentriesにも反映
      if (user) {
        await saveEntryToFirestore(user.uid, entry); // ← Firestore同期
      }
    }
  };
};

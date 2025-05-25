import { useDispatch } from "react-redux";
import {
  setSelectedWord,
  addOrUpdateWordEntry,
} from "../../words/slices/wordSlice";
import { saveEntryToFirestore } from "../../words/services/saveEntryToFirestore";
import { useAuth } from "../../auth/AuthContext";
import { WordEntry } from "../../../entities/types/wordEntry";

export const useRegisterWordEntry = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return async (entry: WordEntry) => {
    dispatch(setSelectedWord(entry)); // ← 画面表示用
    dispatch(addOrUpdateWordEntry(entry)); // ← これでentriesにも反映

    if (user) {
      await saveEntryToFirestore(user.uid, entry); // ← Firestore同期
    }
  };
};

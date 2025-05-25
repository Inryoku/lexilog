import { db } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { WordEntry } from "../../../entities/types/wordEntry";

export const saveEntryToFirestore = async (
  userId: string,
  entry: WordEntry
) => {
  const docRef = doc(db, "users", userId, "wordEntries", entry.lemma);
  await setDoc(docRef, entry, { merge: true }); // merge: true で部分上書きも対応
};

import { db } from "../../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { WordEntryFirestoreDto } from "../../../dtos/wordEntryFirestoreDto";
import { SentenceEntry } from "../../../entities/types/wordEntry";

const mergeSentences = (
  oldArr: SentenceEntry[],
  newArr: SentenceEntry[]
): SentenceEntry[] => {
  const merged = [...oldArr]; // 既存をコピー

  newArr.forEach((n) => {
    const idx = merged.findIndex((o) => o.text === n.text);
    if (idx !== -1) {
      // text が同じ ⇒ documentId だけ上書き
      merged[idx].documentId = n.documentId;
    } else {
      // text が新規 ⇒ 追加
      merged.push(n);
    }
  });

  return merged;
};

export const saveEntryToFirestore = async (
  userId: string,
  newEntry: WordEntryFirestoreDto
) => {
  const docRef = doc(db, "users", userId, "wordEntries", newEntry.lemma);
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    const existing = snap.data() as WordEntryFirestoreDto;

    const updatedEntry: WordEntryFirestoreDto = {
      ...existing,
      ...newEntry,
      clickCount: existing.clickCount + newEntry.clickCount,
      sentences: mergeSentences(existing.sentences, newEntry.sentences),
    };

    await setDoc(docRef, updatedEntry);
  } else {
    await setDoc(docRef, newEntry);
  }
};

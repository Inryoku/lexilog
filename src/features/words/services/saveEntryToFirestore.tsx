import { db } from "../../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { WordEntry } from "../../../entities/types/wordEntry";

export const saveEntryToFirestore = async (
  userId: string,
  newEntry: WordEntry
) => {
  const docRef = doc(db, "users", userId, "wordEntries", newEntry.lemma);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const existingData = docSnap.data() as WordEntry;

    const mergedSentences = Array.from(
      new Set([...existingData.sentences, ...newEntry.sentences])
    );

    const updatedEntry: WordEntry = {
      ...existingData,
      ...newEntry,
      clickCount: existingData.clickCount + newEntry.clickCount,
      sentences: mergedSentences,
    };

    await setDoc(docRef, updatedEntry);
  } else {
    await setDoc(docRef, newEntry);
  }
};

import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryMap } from "../../../entities/types/wordEntryMap";

export const fetchUserEntries = async (
  userId: string
): Promise<WordEntryMap> => {
  const snapshot = await getDocs(
    collection(db, "users", userId, "wordEntries")
  );
  const entries: WordEntryMap = {};

  snapshot.forEach((doc) => {
    const data = doc.data() as WordEntry;
    entries[data.lemma] = data;
  });

  return entries;
};

import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { fromFirestoreDto } from "../../../mappers/wordMapper";
import { WordEntryMap } from "../../../entities/types/wordEntryMap";
import { WordEntryFirestoreDto } from "../../../dtos/wordEntryFirestoreDto";

export const fetchUserEntries = async (
  userId: string
): Promise<WordEntryMap> => {
  const snapshot = await getDocs(
    collection(db, "users", userId, "wordEntries")
  );
  const entries: WordEntryMap = {};

  snapshot.forEach((doc) => {
    const dto = doc.data() as WordEntryFirestoreDto;
    const domainModel = fromFirestoreDto(dto);
    entries[domainModel.lemma] = domainModel;
  });

  return entries;
};

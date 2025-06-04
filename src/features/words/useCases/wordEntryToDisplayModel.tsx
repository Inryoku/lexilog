import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryDisplay } from "../models/wordEntryDisplay";

export function wordEntryToDisplayModel(word: WordEntry): WordEntryDisplay {
  return {
    lemma: word.lemma,
    meaning: word.meaning,
    synonymsText: word.synonyms.join(", "),
    sentences: word.sentences,
    clickCount: word.clickCount,
    lastClickedTime: word.lastClickedTime,
    isBookmarked: word.isBookmarked,
  };
}

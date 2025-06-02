import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryMap } from "../../../entities/types/wordEntryMap";
import { SentenceEntry } from "../../../entities/types/wordEntry";

type WordState = {
  entries: WordEntryMap; //WordEntryMap = Record<string, WordEntry>
};

const initialState: WordState = {
  entries: {},
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addOrUpdateWordEntry: (state, action: PayloadAction<WordEntry>) => {
      const entry = action.payload;
      const existing = state.entries[entry.lemma];

      const mergeSentences = (
        oldArr: SentenceEntry[],
        newArr: SentenceEntry[]
      ): SentenceEntry[] => {
        const merged = [...oldArr];
        newArr.forEach((n) => {
          const idx = merged.findIndex((o) => o.text === n.text);
          if (idx !== -1) merged[idx].documentId = n.documentId;
          else merged.push(n);
        });
        return merged;
      };

      if (existing) {
        existing.sentences = mergeSentences(
          existing.sentences,
          entry.sentences
        );
        existing.clickCount += entry.clickCount;
        existing.lastClickedTime = entry.lastClickedTime;
      } else {
        state.entries[entry.lemma] = entry;
      }
    },

    setEntries: (state, action: PayloadAction<Record<string, WordEntry>>) => {
      state.entries = action.payload;
    },

    toggleBookmark: (state, action: PayloadAction<string>) => {
      const lemma = action.payload;
      const entry = state.entries[lemma];
      if (entry) {
        entry.isBookmarked = !entry.isBookmarked;
      }
    },
  },
});

export const { addOrUpdateWordEntry, setEntries, toggleBookmark } =
  wordSlice.actions;
export default wordSlice.reducer;

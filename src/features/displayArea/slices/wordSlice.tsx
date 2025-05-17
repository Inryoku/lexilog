import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";

type WordState = {
  entries: Record<string, WordEntry>;
  selectedWord: WordEntry | null;
};

const initialState: WordState = {
  entries: {},
  selectedWord: null,
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addOrUpdateWordEntry: (state, action: PayloadAction<WordEntry>) => {
      const newEntry = action.payload;
      const existing = state.entries[newEntry.lemma];

      if (existing) {
        newEntry.sentences.forEach((s) => {
          if (!existing.sentences.includes(s)) {
            existing.sentences.push(s);
          }
        });
      } else {
        state.entries[newEntry.lemma] = newEntry;
      }
    },
    setSelectedWord: (state, action: PayloadAction<WordEntry>) => {
      state.selectedWord = action.payload;
    },
  },
});

export const { addOrUpdateWordEntry, setSelectedWord } = wordSlice.actions;
export default wordSlice.reducer;

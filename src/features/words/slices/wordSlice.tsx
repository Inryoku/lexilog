import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryMap } from "../../../entities/types/wordEntryMap";

type WordState = {
  entries: WordEntryMap; //WordEntryMap = Record<string, WordEntry>
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
      const existing = state.entries[newEntry.lemma]; //newEntry.lemmaがentriesに存在するか確認

      if (existing) {
        newEntry.sentences.forEach((s) => {
          if (!existing.sentences.includes(s)) {
            existing.sentences.push(s);
          }
        });
        existing.lastClickedTime = newEntry.lastClickedTime;
        existing.clickCount + newEntry.clickCount; // クリック数を更新
      } else {
        state.entries[newEntry.lemma] = newEntry; // 新規登録
      }
    },
    setSelectedWord: (state, action: PayloadAction<WordEntry>) => {
      state.selectedWord = action.payload;
    },
    setEntries: (state, action: PayloadAction<Record<string, WordEntry>>) => {
      state.entries = action.payload;
    },
  },
});

export const { addOrUpdateWordEntry, setSelectedWord, setEntries } =
  wordSlice.actions;
export default wordSlice.reducer;

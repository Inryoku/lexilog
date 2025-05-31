import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryMap } from "../../../entities/types/wordEntryMap";

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
      const newEntry = action.payload;
      const existing = state.entries[newEntry.lemma]; //newEntry.lemmaがentriesに存在するか確認

      if (existing) {
        newEntry.sentences.forEach((s) => {
          if (!existing.sentences.includes(s)) {
            existing.sentences.push(s);
          }
        });
        existing.lastClickedTime = newEntry.lastClickedTime;
        existing.clickCount = existing.clickCount + newEntry.clickCount; // クリック数を更新
      } else {
        state.entries[newEntry.lemma] = newEntry; // 新規登録
      }
    },

    setEntries: (state, action: PayloadAction<Record<string, WordEntry>>) => {
      state.entries = action.payload;
    },
  },
});

export const { addOrUpdateWordEntry, setEntries } = wordSlice.actions;
export default wordSlice.reducer;

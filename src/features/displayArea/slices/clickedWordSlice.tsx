import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";

type WordState = {
  clickedWord: WordEntry | null;
};

const initialState: WordState = {
  clickedWord: null,
};

const clickedWordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setClickedWord: (state, action: PayloadAction<WordEntry>) => {
      state.clickedWord = action.payload;
    },
  },
});

export const { setClickedWord } = clickedWordSlice.actions;
export default clickedWordSlice.reducer;

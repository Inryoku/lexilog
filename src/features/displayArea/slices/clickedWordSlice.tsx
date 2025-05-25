import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WordEntry } from "../../../entities/types/wordEntry";

type WordState = {
  clickedWord: WordEntry | null;
  isLoading: boolean;
  sentenceIndex: number | null;
};

const initialState: WordState = {
  clickedWord: null,
  isLoading: false,
  sentenceIndex: null,
};

const clickedWordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setClickedWord: (state, action: PayloadAction<WordEntry>) => {
      state.clickedWord = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSentenceIndex: (state, action: PayloadAction<number | null>) => {
      state.sentenceIndex = action.payload;
    },
  },
});

export const { setClickedWord, setLoading, setSentenceIndex } =
  clickedWordSlice.actions;
export default clickedWordSlice.reducer;

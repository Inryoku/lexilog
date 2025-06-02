import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SentenceSet } from "../../../entities/types/sentenceSet";

type SentenceInputState = {
  sentences: SentenceSet[];
};

const initialState: SentenceInputState = {
  sentences: [],
};

const SentenceInputSlice = createSlice({
  name: "sentenceInput",
  initialState,
  reducers: {
    setSentences: (state, action: PayloadAction<SentenceSet[]>) => {
      state.sentences = action.payload;
    },
    clearSentences: (state) => {
      state.sentences = [];
    },
  },
});

export const { setSentences, clearSentences } = SentenceInputSlice.actions;
export default SentenceInputSlice.reducer;

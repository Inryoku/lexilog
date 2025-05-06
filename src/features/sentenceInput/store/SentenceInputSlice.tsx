import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sentences: [] as string[],
};

const SentenceInputSlice = createSlice({
  name: "sentenceInput",
  initialState,
  reducers: {
    setSentences: (state, action: PayloadAction<string[]>) => {
      state.sentences = action.payload;
    },
    clearSentences: (state) => {
      state.sentences = [];
    },
  },
});

export const { setSentences, clearSentences } = SentenceInputSlice.actions;
export default SentenceInputSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sentence: "",
};

const SentenceInputSlice = createSlice({
  name: "sentenceInput",
  initialState,
  reducers: {
    setSentence: (state, action: PayloadAction<string>) => {
      state.sentence = action.payload;
    },
    clearSentence: (state) => {
      state.sentence = "";
    },
  },
});

export const { setSentence, clearSentence } = SentenceInputSlice.actions;
export default SentenceInputSlice.reducer;

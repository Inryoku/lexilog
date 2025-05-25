import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sentenceInputReducer from "../features/sentenceInput/slices/SentenceInputSlice";
import clickedWordReducer from "../features/displayArea/slices/clickedWordSlice";
import wordReducer from "../features/words/slices/wordSlice";

const rootReducer = combineReducers({
  sentenceInput: sentenceInputReducer,
  clickedWord: clickedWordReducer,
  word: wordReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

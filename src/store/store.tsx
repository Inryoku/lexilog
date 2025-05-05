import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import sentenceInputReducer from "../features/sentenceInput/store/SentenceInputSlice";

// redux-persist の設定
const persistConfig = {
  key: "root", // ストレージのキー名
  storage, // 使用するストレージ（ここでは localStorage）
};

// reducer を persistReducer で包む
const rootReducer = combineReducers({
  sentenceInput: sentenceInputReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore に persistedReducer を使う
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// persistStore を使って persistor を作る
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

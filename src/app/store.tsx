import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import sessionStorage from "redux-persist/lib/storage/session"; // sessionStorage
import inputReducer from "../features/input/inputSlice";
import 
import { combineReducers } from "redux";

// sliceごとのpersist設定
const favoritesPersistConfig = {
  key: "favorites",
  storage, // localStorage
};



const rootReducer = combineReducers({
  movies: moviesReducer, // 保存なし
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer), // 保存あり
  // auth: persistReducer(authPersistConfig, authReducer), // ← 将来的に追加できる
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
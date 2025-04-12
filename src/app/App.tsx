import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import InputPage from "../features/input/components/InputPage";
import WordBookPage from "../features/wordbook/components/WordBookPage";
import LoginPage from "../pages/LoginPage";

// Firebaseの認証状態がまだ未確定（loading中）のときに
// 一時的に「未ログイン」と誤判断しないよう、
// user === null の前に loading をチェックしている。
// これにより、認証済みでも一瞬だけログイン前のUIが表示される問題を回避する。

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/app" element={<InputPage />} />
          <Route path="/my-words" element={<WordBookPage />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

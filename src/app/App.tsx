import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ComprehensionPage from "../pages/ComprehensionPage";
import WordbookPage from "../pages/WordbookPage";

export default function App() {
  console.log("🟢 App.tsx 表示された");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ComprehensionPage" />} />

        <Route path="/ComprehensionPage" element={<ComprehensionPage />} />
        <Route path="/wordbook" element={<WordbookPage />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

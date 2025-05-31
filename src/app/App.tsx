import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ComprehensionPage from "../pages/ComprehensionPage";
import WordbookPage from "../pages/WordbookPage";

import { Layout } from "../pages/Layout";

export default function App() {
  console.log("🟢 App.tsx Displayed");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/comprehensionPage" />} />
        <Route element={<Layout />}>
          <Route path="/comprehensionPage" element={<ComprehensionPage />} />
          <Route path="/wordbook" element={<WordbookPage />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

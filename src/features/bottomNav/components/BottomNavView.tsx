import React from "react";
import { Link } from "react-router-dom";

export const BottomNavView = () => (
  <nav className="fixed bottom-0 w-full text-text border-t border-y-black flex justify-around py-2">
    <Link to="/">Home</Link>
    <Link to="/wordbook">Wordbook</Link>
  </nav>
);

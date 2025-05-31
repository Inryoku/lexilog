import React from "react";
import { Link } from "react-router-dom";

export const HeaderView = ({}) => (
  <header className="flex items-center justify-between p-2 pl-4 w-full text-2xl text-text border-b border-y-black">
    <button>
      <Link to="/">LexiLog</Link>
    </button>
  </header>
);

import React from "react";

export default function WordbookTabView({
  handleSelectedTab,
  selectedTab,
}: {
  handleSelectedTab: (tab: "history" | "bookmark") => void;
  selectedTab: "history" | "bookmark";
}) {
  return (
    <div className="flex justify-center gap-12 border-b border-black w-full  py-1 bg-boldLabel text-bg">
      <button
        onClick={() => handleSelectedTab("bookmark")}
        className={`px-4 py-1 border-b-2 ${
          selectedTab === "bookmark" ? "border-bg " : "border-transparent "
        }`}
      >
        Bookmarked
      </button>
      <button
        onClick={() => handleSelectedTab("history")}
        className={`px-4 py-1 border-b-2 ${
          selectedTab === "history" ? "border-bg " : "border-transparent "
        }`}
      >
        History
      </button>
    </div>
  );
}

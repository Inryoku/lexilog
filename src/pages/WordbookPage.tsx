import React from "react";
import HistoryContainer from "../features/history/historyContainer";
import BookmarkContainer from "../features/bookmark/bookmarkContainer";
import { useWordbookTabHooks } from "../features/wordbook/hooks/useWordbookTabHooks";
import WordbookTabView from "../features/wordbook/components/WordbookTabView";

export default function WordbookPage() {
  const { selectedTab, handleSelectedTab } = useWordbookTabHooks();

  return (
    <div className="flex flex-col items-center w-full">
      <WordbookTabView
        handleSelectedTab={handleSelectedTab}
        selectedTab={selectedTab}
      />

      {selectedTab === "history" ? <HistoryContainer /> : <BookmarkContainer />}
    </div>
  );
}

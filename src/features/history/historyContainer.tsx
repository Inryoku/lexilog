import React from "react";
import { useHistoryHooks } from "./hooks/useHistoryHooks";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { WordbookPagination } from "../wordbook/components/WordbookPagination";
import { WordEntry } from "../../entities/types/wordEntry";

export default function HistoryContainer() {
  const {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
  } = useHistoryHooks();

  return (
    <div className="flex flex-col items-center ">
      {entries.map((entry: WordEntry) => (
        <WordEntryCard
          key={entry.lemma}
          entry={entry}
          onBookmarkToggle={handleBookmarkToggle}
        />
      ))}

      <WordbookPagination
        current={page}
        total={totalPages}
        onPageChange={handlePageChange}
        visiblePages={visiblePages}
      />
    </div>
  );
}

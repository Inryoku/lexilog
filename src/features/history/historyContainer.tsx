import React from "react";
import { useHistoryHooks } from "./hooks/useHistoryHooks";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { HistoryPagination } from "./components/HistoryPagination";
import { WordEntry } from "../../entities/types/wordEntry";

export default function historyContainer() {
  const { entries, totalPages, page, handlePageChange, handleBookmarkToggle } =
    useHistoryHooks();

  return (
    <div>
      {entries.map((entry: WordEntry) => (
        <WordEntryCard
          key={entry.lemma}
          entry={entry}
          onBookmarkToggle={handleBookmarkToggle}
        />
      ))}

      <HistoryPagination
        current={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

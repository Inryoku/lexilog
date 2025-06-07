import React from "react";
import { useHistoryHooks } from "./hooks/useHistoryHooks";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { WordbookPagination } from "../wordbook/components/WordbookPagination";
import { WordEntryDisplay } from "../words/models/wordEntryDisplay";

export default function HistoryContainer() {
  const {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
    handlePlaySpeech,
  } = useHistoryHooks();

  return (
    <div className="flex flex-col items-center w-full">
      {entries.map((entry: WordEntryDisplay) => (
        <WordEntryCard
          key={entry.lemma}
          entry={entry}
          onBookmarkToggle={handleBookmarkToggle}
          handlePlaySpeech={handlePlaySpeech}
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

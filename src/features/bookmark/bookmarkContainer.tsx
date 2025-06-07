import React from "react";
import { useBookmarkHooks } from "./hooks/useBookmarkHooks";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { WordbookPagination } from "../wordbook/components/WordbookPagination";
import { WordEntryDisplay } from "../words/models/wordEntryDisplay";

export default function BookmarkContainer() {
  const {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
    handlePlaySpeech,
  } = useBookmarkHooks();

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

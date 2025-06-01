import React from "react";
import { useBookmarkHooks } from "./hooks/useBookmarkHooks";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { WordbookPagination } from "../wordbook/components/WordbookPagination";
import { WordEntry } from "../../entities/types/wordEntry";

export default function BookmarkContainer() {
  const {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
  } = useBookmarkHooks();

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

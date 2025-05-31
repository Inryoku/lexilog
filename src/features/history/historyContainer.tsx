import React from "react";
import { useState } from "react";
import { usePaginatedEntries } from "./useCases/usePaginatedEntries";
import { WordEntryCard } from "../words/components/WordEntryCard";
import { Pagination } from "./components/HistoryPagination";

export default function historyContainer() {
  const [page, setPage] = useState(1);
  const { entries, totalPages } = usePaginatedEntries(page);

  return (
    <div>
      {entries.map((entry) => (
        <WordEntryCard key={entry.lemma} entry={entry} />
      ))}

      <Pagination current={page} total={totalPages} onPageChange={setPage} />
    </div>
  );
}

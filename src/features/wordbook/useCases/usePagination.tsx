import { useState } from "react";
import { usePaginatedEntries } from "./usePaginatedEntries";
import { getVisiblePages } from "./getVisiblePages";

type FilterType = "all" | "bookmarked";

export const usePagination = ({ filter }: { filter: FilterType }) => {
  const [page, setPage] = useState(1);
  const { entries, totalPages } = usePaginatedEntries(page, 20, filter);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setPage(page);
  };

  const visiblePages = getVisiblePages(page, totalPages);

  return {
    entries,
    totalPages,
    page,
    handlePageChange,
    visiblePages,
  };
};

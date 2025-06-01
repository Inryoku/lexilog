import { useState } from "react";
import { usePaginatedEntries } from "../useCases/usePaginatedEntries";
import { useHandleToggleBookmark } from "../../words/useCases/handleToggleBookmark";

export const useHistoryHooks = () => {
  const [page, setPage] = useState(1);
  const { entries, totalPages } = usePaginatedEntries(page);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setPage(page);
  };
  const handleBookmarkToggle = useHandleToggleBookmark();

  return {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
  };
};

import { usePagination } from "../../wordbook/useCases/usePagination";
import { useHandleToggleBookmark } from "../../words/useCases/handleToggleBookmark";

export const useBookmarkHooks = () => {
  const { entries, totalPages, page, handlePageChange, visiblePages } =
    usePagination({ filter: "bookmarked" });
  const handleBookmarkToggle = useHandleToggleBookmark();

  return {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
  };
};

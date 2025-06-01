import { usePagination } from "../../wordbook/useCases/usePagination";
import { useHandleToggleBookmark } from "../../words/useCases/handleToggleBookmark";
import { playEnglishSpeech } from "../../words/services/playEnglishSpeech";

export const useBookmarkHooks = () => {
  const { entries, totalPages, page, handlePageChange, visiblePages } =
    usePagination({ filter: "bookmarked" });
  const handleBookmarkToggle = useHandleToggleBookmark();
  const handlePlaySpeech = (text: string) => {
    playEnglishSpeech(text);
  };

  return {
    entries,
    totalPages,
    page,
    handlePageChange,
    handleBookmarkToggle,
    visiblePages,
    handlePlaySpeech,
  };
};

import { usePagination } from "../../wordbook/useCases/usePagination";
import { useHandleToggleBookmark } from "../../words/useCases/handleToggleBookmark";
import { playEnglishSpeech } from "../../words/services/playEnglishSpeech";

export const useHistoryHooks = () => {
  const { entries, totalPages, page, handlePageChange, visiblePages } =
    usePagination({ filter: "all" });
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

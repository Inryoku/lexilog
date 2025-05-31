import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useMemo } from "react";

export const usePaginatedEntries = (page: number, pageSize: number = 20) => {
  const entriesObj = useSelector((state: RootState) => state.word.entries);

  const entriesArray = useMemo(() => {
    return Object.values(entriesObj).sort(
      (a, b) => b.lastClickedTime - a.lastClickedTime
    );
  }, [entriesObj]);

  const totalPages = Math.ceil(entriesArray.length / pageSize);
  const paginated = entriesArray.slice((page - 1) * pageSize, page * pageSize);

  return {
    entries: paginated,
    totalPages,
  };
};

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useMemo } from "react";
import { toDisplayModel } from "../../../mappers/wordMapper";

export const usePaginatedEntries = (
  page: number,
  pageSize: number = 20,
  filter: "all" | "bookmarked" = "all"
) => {
  const entriesObj = useSelector((state: RootState) => state.word.entries);

  const displayEntries = useMemo(
    () => Object.values(entriesObj).map(toDisplayModel),
    [entriesObj]
  );

  const filtered = useMemo(() => {
    let all = displayEntries;

    if (filter === "bookmarked") {
      all = all.filter((e) => e.isBookmarked);
    }

    return all.sort(
      (a, b) => b.lastClickedTime.getTime() - a.lastClickedTime.getTime()
    );
  }, [displayEntries, filter]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return {
    entries: paginated,
    totalPages,
  };
};

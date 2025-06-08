import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import { WordEntryDisplay } from "../models/wordEntryDisplay";
import { toDisplayModel } from "../../../mappers/wordMapper";

export const getClickedWordData = () => {
  const rawWordEntry = useSelector(
    (state: RootState) => state.clickedWord.clickedWord?.lemma
  ) as string | null;

  const entriesObj = useSelector((state: RootState) => state.word.entries);

  const filteredEntry = rawWordEntry ? entriesObj[rawWordEntry] : null;

  const clickedWordData: WordEntryDisplay | null = filteredEntry
    ? toDisplayModel(filteredEntry)
    : null;

  useEffect(() => {
    console.log("state.clickedWord.clickedWord Has Changed:", clickedWordData);
  }, [clickedWordData]);

  return clickedWordData;
};

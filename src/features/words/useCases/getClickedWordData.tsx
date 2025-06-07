import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { WordEntry } from "../../../entities/types/wordEntry";
import { WordEntryDisplay } from "../models/wordEntryDisplay";
import { toDisplayModel } from "../../../mappers/wordMapper";

export const getClickedWordData = () => {
  const rawWordEntry = useSelector(
    (state: RootState) => state.clickedWord.clickedWord
  ) as WordEntry | null;

  const clickedWordData: WordEntryDisplay | null = rawWordEntry
    ? toDisplayModel(rawWordEntry)
    : null;

  useEffect(() => {
    console.log("state.clickedWord.clickedWord Has Changed:", clickedWordData);
  }, [clickedWordData]);

  return clickedWordData;
};

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { WordEntryDisplay } from "../../words/models/wordEntryDisplay";
import { getClickedWordData } from "../../words/useCases/getClickedWordData";

export const useMeaningAreaData = () => {
  const meaningAreaData: WordEntryDisplay | null = getClickedWordData();

  const isLoading = useSelector(
    (state: RootState) => state.clickedWord.isLoading
  );

  return {
    meaningAreaData,
    isLoading,
  };
};

import React from "react";
import MeaningAreaView from "./components/MeaningAreaView";
import { useMeaningAreaData } from "./hooks/useMeaningAreaData";
import { useHandleToggleBookmark } from "../words/useCases/handleToggleBookmark";
import { playEnglishSpeech } from "../words/services/playEnglishSpeech";

export const MeaningAreaContainer = () => {
  const { meaningAreaData, isLoading } = useMeaningAreaData();
  const handleBookmarkToggle = useHandleToggleBookmark();
  const handlePlaySpeech = (text: string) => {
    playEnglishSpeech(text);
  };
  return (
    <>
      <MeaningAreaView
        meaningAreaData={meaningAreaData}
        isLoading={isLoading}
        handleBookmarkToggle={handleBookmarkToggle}
        handlePlaySpeech={handlePlaySpeech}
      />
    </>
  );
};

export default MeaningAreaContainer;

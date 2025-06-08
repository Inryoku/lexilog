import React from "react";
import DisplayAreaView from "./components/DisplayAreaView";
import { useDisplayAreaHooks } from "./hooks/useDisplayAreaHooks";
import { playEnglishSpeech } from "../words/services/playEnglishSpeech";

export const DisplayAreaContainer = () => {
  console.log("🟣 DisplayAreaContainer mounted");

  const { handleWordClick, displaySentences, clickedSentenceIndex } =
    useDisplayAreaHooks();
  const handlePlaySpeech = (text: string) => {
    playEnglishSpeech(text);
  };
  return (
    <>
      <DisplayAreaView
        onWordClick={handleWordClick}
        displaySentences={displaySentences}
        clickedSentenceIndex={clickedSentenceIndex}
        handlePlaySpeech={handlePlaySpeech}
      />
    </>
  );
};

export default DisplayAreaContainer;

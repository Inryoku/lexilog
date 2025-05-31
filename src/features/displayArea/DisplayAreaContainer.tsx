import React from "react";
import DisplayAreaView from "./components/DisplayAreaView";
import { useDisplayAreaHooks } from "./hooks/useDisplayAreaHooks";

export const DisplayAreaContainer = () => {
  console.log("🟣 DisplayAreaContainer mounted");

  const { handleWordClick, displaySentences, clickedSentenceIndex } =
    useDisplayAreaHooks();
  return (
    <>
      <DisplayAreaView
        onWordClick={handleWordClick}
        displaySentences={displaySentences}
        clickedSentenceIndex={clickedSentenceIndex}
      />
    </>
  );
};

export default DisplayAreaContainer;

import React from "react";
import { DisplaySentence } from "./DisplaySentence";

interface DisplayAreaViewProps {
  onWordClick: (word: string, sentenceIndex: number) => void;
  displaySentences: string[];
  clickedSentenceIndex: number | null;
}

export const DisplayAreaView: React.FC<DisplayAreaViewProps> = ({
  onWordClick,
  displaySentences,
  clickedSentenceIndex,
}) => {
  return (
    <div className="flex flex-wrap text-text">
      {displaySentences.map((sentence, index) => (
        <DisplaySentence
          key={index}
          sentence={sentence}
          sentenceIndex={index}
          clickedSentenceIndex={clickedSentenceIndex ?? -1}
          onWordClick={onWordClick}
        />
      ))}
    </div>
  );
};

export default DisplayAreaView;

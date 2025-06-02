import React from "react";
import { DisplaySentence } from "./DisplaySentence";
import { SentenceSet } from "../../../entities/types/sentenceSet";

interface DisplayAreaViewProps {
  onWordClick: (word: string, sentenceIndex: number) => void;
  displaySentences: SentenceSet[];
  clickedSentenceIndex: number | null;
}

export const DisplayAreaView: React.FC<DisplayAreaViewProps> = ({
  onWordClick,
  displaySentences,
  clickedSentenceIndex,
}) => {
  const flatSentences = displaySentences.flatMap((set) => set.sentences);

  return (
    <div className="flex flex-wrap text-text">
      {flatSentences.map((sentence, index) => (
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

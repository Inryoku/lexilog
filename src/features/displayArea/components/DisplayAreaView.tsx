import { useSelector } from "react-redux";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import React from "react";
import { DisplaySentence } from "./DisplaySentence";

interface DisplayAreaViewProps {
  onWordClick: (word: string, sentenceIndex: number) => void;
}

export const DisplayAreaView: React.FC<DisplayAreaViewProps> = ({
  onWordClick,
}) => {
  const displaySentences = useSelector(
    (state: RootState) => state.sentenceInput.sentences
  );
  const clickedSentenceIndex = useSelector(
    (state: RootState) => state.clickedWord.sentenceIndex
  );

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

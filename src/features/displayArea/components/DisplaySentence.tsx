import { ClickableWord } from "./ClickableWord";
import { MeaningAreaContainer } from "../../../features/meaningArea/meaningAreaContainer";
import { useWordDisplayLogic } from "../hooks/useWordDisplayLogic";
import React from "react";

type DisplaySentenceProps = {
  sentence: string;
  sentenceIndex: number;
  clickedSentenceIndex: number;
  onWordClick: (word: string, sentenceIndex: number) => void;
};

export const DisplaySentence = ({
  sentence,
  sentenceIndex,
  clickedSentenceIndex,
  onWordClick,
}: DisplaySentenceProps) => {
  const { splitIntoWords, isClickableWord } = useWordDisplayLogic();
  const words = splitIntoWords(sentence);

  return (
    <div className="flex flex-col m-1">
      <p className="flex flex-wrap">
        {words.map((word: string, wordIndex: number) => (
          <ClickableWord
            key={wordIndex}
            word={word}
            isClickable={isClickableWord(word)}
            onClick={() => onWordClick(word, sentenceIndex)}
          />
        ))}
      </p>
      {clickedSentenceIndex === sentenceIndex && <MeaningAreaContainer />}
    </div>
  );
};

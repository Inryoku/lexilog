import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import React from "react";
import clsx from "clsx";
import excludeWords from "../../../entities/excludeWords";
import { MeaningAreaContainer } from "../../../features/meaningArea/meaningAreaContainer";

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

  useEffect(() => {
    console.log("Redux:sentenceInput.sentences Has Changed:", displaySentences);
  }, [displaySentences]);

  const splitIntoWords = (sentence: string): string[] => {
    return sentence.match(/\w+|[^\s\w]+/g) || [];
  };

  const isClickableWord = (word: string) => {
    const isAlphabet = /^[a-zA-Z]+$/.test(word); // 単語がアルファベットのみか
    const isExcluded = excludeWords.includes(word.toLowerCase()); // 除外単語リストに含まれるか
    return isAlphabet && !isExcluded;
  };

  return (
    <div className="flex flex-wrap text-text">
      {displaySentences.map((sentence: string, sentenceIndex: number) => (
        <div key={sentenceIndex} className="flex flex-col m-1">
          <p key={sentenceIndex} className="flex flex-wrap">
            {splitIntoWords(sentence).map((word: string, wordIndex: number) => {
              const isClickable = isClickableWord(word);
              return (
                <span
                  key={wordIndex}
                  className={clsx("m-1", {
                    "bg-subSpot cursor-pointer": isClickable,
                  })}
                  onClick={() =>
                    isClickable && onWordClick(word, sentenceIndex)
                  }
                >
                  {word}
                </span>
              );
            })}
          </p>
          {clickedSentenceIndex === sentenceIndex ? (
            <MeaningAreaContainer />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DisplayAreaView;

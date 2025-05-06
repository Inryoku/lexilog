import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../store/store"; // store の型定義ファイル
import React from "react";
import clsx from "clsx";
import excludeWords from "../../../entities/excludeWords";

export const DisplayAreaView = () => {
  const displaySentences = useSelector(
    (state: RootState) => state.sentenceInput.sentences
  );

  useEffect(() => {
    console.log("Redux の状態が変わった:", displaySentences);
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
    <div className="flex flex-wrap bg-slate-50 text-sm text-black">
      {displaySentences.map((sentence: string, sentenceIndex: number) => (
        <div key={sentenceIndex} className="flex flex-col m-1">
          <p key={sentenceIndex} className="flex flex-wrap">
            {splitIntoWords(sentence).map((word: string, wordIndex: number) => {
              const isClickable = isClickableWord(word);
              return (
                <span
                  key={wordIndex}
                  className={clsx("m-1", {
                    "bg-gray-200 cursor-pointer": isClickable,
                  })}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAreaView;

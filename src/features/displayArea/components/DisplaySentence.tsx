import { ClickableWord } from "./ClickableWord";
import { MeaningAreaContainer } from "../../../features/meaningArea/meaningAreaContainer";
import { useWordDisplayLogic } from "../hooks/useWordDisplayLogic";
import React from "react";
import { GiSoundWaves } from "react-icons/gi";

type DisplaySentenceProps = {
  sentence: string;
  sentenceIndex: number;
  clickedSentenceIndex: number;
  onWordClick: (word: string, sentenceIndex: number) => void;
  handlePlaySpeech: (text: string) => void; // オプションで音声再生機能を追加
};

export const DisplaySentence = ({
  sentence,
  sentenceIndex,
  clickedSentenceIndex,
  onWordClick,
  handlePlaySpeech,
}: DisplaySentenceProps) => {
  const { splitIntoWords, isClickableWord } = useWordDisplayLogic();

  if (sentence.trim() === "") {
    // 空行を 1 行分の高さで描画
    return <div className="h-10 w-full" />;
  }

  const words = splitIntoWords(sentence);

  return (
    <div className="flex flex-col mb-2 w-full">
      <p className="flex flex-wrap">
        <button
          onClick={() => handlePlaySpeech(sentence)}
          className="text-gray-500 text-xl focus:outline-none hover:text-gray-800 transition-colors"
        >
          <GiSoundWaves size={12} />
        </button>
        {words.map((word, wordIndex) => (
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

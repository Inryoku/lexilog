import React from "react";
import { WordEntryDisplay } from "../models/wordEntryDisplay";
import { GiSoundWaves } from "react-icons/gi";

type WordEntryCardProps = {
  entry: WordEntryDisplay;
  onBookmarkToggle: (lemma: string) => void;
  handlePlaySpeech: (text: string) => void;
};

export const WordMeaningCard: React.FC<WordEntryCardProps> = ({
  entry,
  onBookmarkToggle,
  handlePlaySpeech,
}) => {
  return (
    <div className="w-11/12 bg-subBgAccent p-4">
      {/* lemma */}
      <div className="flex justify-between items-center border-b border-subSpot pb-1 mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl text-bg lowercase">{entry.lemma}</h2>
          <button
            onClick={() => handlePlaySpeech(entry.lemma)}
            className="text-bg text-xl focus:outline-none hover:text-red-400 transition-colors"
          >
            <GiSoundWaves size={20} />
          </button>
        </div>
        <button
          onClick={() => onBookmarkToggle(entry.lemma)}
          className="text-yellow-500 text-xl focus:outline-none"
        >
          {entry.isBookmarked ? "★" : "☆"}
        </button>
      </div>

      {/* synonyms */}
      <div className="bg-neutral-500 text-bg p-2 mb-4">
        <span>{entry.synonymsText}</span>
      </div>

      <p className="text-gray-700">
        <button
          onClick={() => handlePlaySpeech(entry.meaning)}
          className="text-bg text-xl focus:outline-none hover:text-red-400 transition-colors"
        >
          <GiSoundWaves size={12} />
        </button>
        <span className="text-bg">{entry.meaning}</span>
      </p>
    </div>
  );
};

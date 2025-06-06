import React from "react";
import { WordEntryDisplay } from "../models/wordEntryDisplay";
import { GiSoundWaves } from "react-icons/gi";

type WordEntryCardProps = {
  entry: WordEntryDisplay;
  onBookmarkToggle: (lemma: string) => void;
  handlePlaySpeech: (text: string) => void;
};

export const WordEntryCard: React.FC<WordEntryCardProps> = ({
  entry,
  onBookmarkToggle,
  handlePlaySpeech,
}) => {
  return (
    <div className="w-11/12 bg-spot border-b border-black p-4">
      {/* lemma */}
      <div className="flex justify-between items-center border-b border-black pb-1 mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold lowercase">{entry.lemma}</h2>
          <button
            onClick={() => handlePlaySpeech(entry.lemma)}
            className="text-gray-500 text-xl focus:outline-none hover:text-gray-800 transition-colors"
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
      <div className="bg-subSpot p-2 mb-4">
        <span>{entry.synonymsText}</span>
      </div>

      {/* 最初の例文 */}
      {entry.sentences[0] && (
        <p className="text-gray-700">
          <button
            onClick={() => handlePlaySpeech(entry.sentences[0].text)}
            className="text-gray-500 text-xl focus:outline-none hover:text-gray-800 transition-colors"
          >
            <GiSoundWaves size={12} />
          </button>
          <span
            dangerouslySetInnerHTML={{
              __html: entry.sentences[0].text.replace(
                new RegExp(`(${entry.lemma})`, "gi"),
                `<mark class="bg-red-400 rounded px-1">$1</mark>`
              ),
            }}
          />
        </p>
      )}
    </div>
  );
};

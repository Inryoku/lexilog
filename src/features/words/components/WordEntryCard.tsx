import React from "react";
import { WordEntry } from "../../../entities/types/wordEntry";

type WordEntryCardProps = {
  entry: WordEntry;
  onBookmarkToggle: (lemma: string) => void;
};

export const WordEntryCard: React.FC<WordEntryCardProps> = ({
  entry,
  onBookmarkToggle,
}) => {
  return (
    <div className="bg-spot mx-2 border-y border-black p-4 max-w-md  ">
      {/* 見出し */}
      <div className="flex justify-between items-center border-b border-black pb-1 mb-2">
        <h2 className="text-xl font-bold lowercase">{entry.lemma}</h2>
        <button
          onClick={() => onBookmarkToggle(entry.lemma)}
          className="text-yellow-500 text-xl focus:outline-none"
        >
          {entry.isBookmarked ? "★" : "☆"}
        </button>
      </div>

      {/* 類義語 */}
      <div className="bg-subSpot p-2  mb-4">
        {entry.synonyms.map((synonym, idx) => (
          <span key={idx}>
            {synonym}
            {idx < entry.synonyms.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      {/* 例文 */}
      {entry.sentences[0] && (
        <p className=" text-gray-700">
          •{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: entry.sentences[0].replace(
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

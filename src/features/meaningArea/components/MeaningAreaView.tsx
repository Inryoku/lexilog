import React from "react";
import { WordEntryCard } from "../../words/components/WordEntryCard";
import { WordEntryDisplay } from "../../words/models/wordEntryDisplay";

interface MeaningAreaViewProps {
  meaningAreaData: WordEntryDisplay | null;
  isLoading: boolean;
  handleBookmarkToggle: (id: string) => void;
  handlePlaySpeech: (text: string) => void;
}

export const MeaningAreaView: React.FC<MeaningAreaViewProps> = ({
  meaningAreaData,
  isLoading,
  handleBookmarkToggle,
  handlePlaySpeech,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {isLoading ? (
        <p className="flex flex-col p-4 bg-gray-100 rounded-lg">Loading...</p>
      ) : meaningAreaData ? (
        <WordEntryCard
          key={meaningAreaData.lemma}
          entry={meaningAreaData}
          onBookmarkToggle={handleBookmarkToggle}
          handlePlaySpeech={handlePlaySpeech}
        />
      ) : (
        <p>No word selected.</p>
      )}
    </div>
  );
};
export default MeaningAreaView;

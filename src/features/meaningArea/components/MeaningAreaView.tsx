import React from "react";
import { WordMeaningCard } from "../../words/components/WordMeaningCard";
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
        <p className="flex flex-col w-11/12 bg-subBgAccent text-bg p-4">
          Loading...
        </p>
      ) : meaningAreaData ? (
        <WordMeaningCard
          key={meaningAreaData.lemma}
          entry={meaningAreaData}
          onBookmarkToggle={handleBookmarkToggle}
          handlePlaySpeech={handlePlaySpeech}
        />
      ) : (
        <p className="flex flex-col w-11/12 bg-subBgAccent text-bg p-4">
          Sorry, no meaning available for this word.
        </p>
      )}
    </div>
  );
};
export default MeaningAreaView;

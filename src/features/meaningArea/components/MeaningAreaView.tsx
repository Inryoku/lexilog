import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../store/store";
import { WordEntry } from "../../../entities/types/wordEntry";

export const MeaningAreaView = () => {
  const displayWordData = useSelector(
    (state: RootState) => state.clickedWord.clickedWord
  ) as WordEntry | null;
  const isLoading = useSelector(
    (state: RootState) => state.clickedWord.isLoading
  );

  useEffect(() => {
    console.log("Redux:sentenceInput.sentences Has Changed:", displayWordData);
  }, [displayWordData]);

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      {isLoading ? (
        <p>Loading...</p>
      ) : displayWordData ? (
        <>
          <p>
            <strong>{displayWordData.lemma}</strong>
          </p>
          <p>
            <strong>{displayWordData.meaning}</strong>
          </p>
          <p>
            {displayWordData.synonyms.map((synonym, idx) => (
              <span key={idx}>
                {synonym}
                {idx < displayWordData.synonyms.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </>
      ) : (
        <p>No word selected.</p>
      )}
    </div>
  );
};
export default MeaningAreaView;

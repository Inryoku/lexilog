import { setSentences } from "../slices/sentenceInputSlice";
import { sentenceProcessor } from "../services/sentenceProcessor";
import { convertToSentenceSet } from "../services/convertToSentenceSet";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const setSentenceUseCase = (
  dispatch: Dispatch<UnknownAction>,
  text: string
) => {
  const rawSentences = sentenceProcessor(text); // 文を分割
  const sentenceSet = convertToSentenceSet(rawSentences); // SentenceSet に変換
  dispatch(setSentences([sentenceSet])); // 配列にして渡す
  console.log("setSentenceUseCase", sentenceSet);
};

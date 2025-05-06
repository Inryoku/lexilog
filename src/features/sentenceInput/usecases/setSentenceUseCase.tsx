import React from "react";
import { setSentences } from "../store/SentenceInputSlice";
import { sentenceProcessor } from "../services/sentenceProcessor";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const setSentenceUseCase = (
  dispatch: Dispatch<UnknownAction>,
  text: string
) => {
  const processedSentences = sentenceProcessor(text).join(" ");
  dispatch(setSentences(processedSentences));
  console.log("setSentenceUseCase", processedSentences);
};

import React from "react";
import { setSentence } from "../store/SentenceInputSlice";
import { sentenceProcessor } from "../services/sentenceProcessor";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const setSentenceUseCase = (
  dispatch: Dispatch<UnknownAction>,
  text: string
) => {
  const processedSentence = sentenceProcessor(text).join(" ");
  dispatch(setSentence(processedSentence));
  console.log("setSentenceUseCase", processedSentence);
};

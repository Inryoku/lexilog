import React from "react";
import { useSentenceInput } from "./hooks/useSentenceInput";
import { SentenceInputView } from "./components/SentenceInputView";

export const SentenceInputContainer = () => {
  console.log("🟣 SentenceInputContainer mounted");
  const { input, setInput } = useSentenceInput();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return <SentenceInputView value={input} onChange={handleChange} />;
};

export default SentenceInputContainer;

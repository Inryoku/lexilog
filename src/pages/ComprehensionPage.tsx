import React from "react";
import SentenceInputContainer from "../features/sentenceInput/SentenceInputContainer";
import DisplayAreaContainer from "../features/displayArea/DisplayAreaContainer";

export default function ComprehensionPage() {
  console.log("🟡 ComprehensionPage 表示");
  return (
    <div className="flex flex-col  h-screen bg-bg p-10">
      <p> This is the Comprehension Page. You can input a sentence here.</p>
      <SentenceInputContainer />
      <DisplayAreaContainer />
    </div>
  );
}

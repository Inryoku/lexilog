import React from "react";
import SentenceInputContainer from "../features/sentenceInput/SentenceInputContainer";
import DisplayAreaContainer from "../features/displayArea/DisplayAreaContainer";

export default function ComprehensionPage() {
  console.log("🟡 ComprehensionPage Displayed");
  return (
    <div className="h-screen bg-bg">
      <div className="flex flex-col  h-screen  max-w-6xl  mx-auto p-7">
        <p> This is the Comprehension Page. You can input a sentence here.</p>
        <SentenceInputContainer />
        <DisplayAreaContainer />
      </div>
    </div>
  );
}

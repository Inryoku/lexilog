import React from "react";
import SentenceInputContainer from "../features/sentenceInput/SentenceInputContainer";
import DisplayAreaContainer from "../features/displayArea/DisplayAreaContainer";

export default function ComprehensionPage() {
  console.log("🟡 ComprehensionPage Displayed");
  return (
    <div className="max-w-6xl mx-auto p-5 flex flex-col gap-2">
      <SentenceInputContainer />
      <DisplayAreaContainer />
    </div>
  );
}

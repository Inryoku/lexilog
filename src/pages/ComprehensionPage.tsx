import React from "react";
import SentenceInputContainer from "../features/sentenceInput/SentenceInputContainer";
import DisplayAreaContainer from "../features/displayArea/DisplayAreaContainer";

export default function ComprehensionPage() {
  console.log("🟡 ComprehensionPage Displayed");
  return (
    <div className="h-screen ">
      <div className="flex flex-col  h-screen  max-w-6xl  mx-auto p-7">
        <SentenceInputContainer />
        <DisplayAreaContainer />
      </div>
    </div>
  );
}

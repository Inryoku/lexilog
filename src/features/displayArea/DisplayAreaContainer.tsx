import React from "react";
import DisplayAreaView from "./components/DisplayAreaView";
import { useDisplayAreaHooks } from "./hooks/useDisplayAreaHooks";

export const DisplayAreaContainer = () => {
  console.log("🟣 DisplayAreaContainer mounted");

  const { handleWordClick } = useDisplayAreaHooks();
  return (
    <>
      <p>displayArea is here</p>
      <DisplayAreaView onWordClick={handleWordClick} />
    </>
  );
};

export default DisplayAreaContainer;

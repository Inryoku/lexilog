import { useState } from "react";

export const useWordbookTabHooks = () => {
  const [selectedTab, setSelectedTab] = useState<"history" | "bookmark">(
    "history"
  );

  const handleSelectedTab = (tab: "history" | "bookmark") => {
    setSelectedTab(tab);
  };

  return {
    selectedTab,
    handleSelectedTab,
  };
};

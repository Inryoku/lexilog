import clsx from "clsx";
import React from "react";

type ClickableWordProps = {
  word: string;
  isClickable: boolean;
  onClick: () => void;
};

export const ClickableWord = ({
  word,
  isClickable,
  onClick,
}: ClickableWordProps) => {
  const className = clsx("m-1", {
    "bg-subSpot cursor-pointer": isClickable,
  });

  return (
    <span className={className} onClick={isClickable ? onClick : undefined}>
      {word}
    </span>
  );
};

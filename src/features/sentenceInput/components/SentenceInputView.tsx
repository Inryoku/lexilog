import React, { useState } from "react";

type SentenceInputViewProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function SentenceInputView({ value, onChange }: SentenceInputViewProps) {
  return (
    <textarea
      rows={8}
      value={value}
      onChange={onChange}
      placeholder="Type or Paste here"
      className="my-2 w-full p-2 text-base bg-spot text-subText focus:text-text border-2 border-y-black border-x-bg focus:outline-none focus:border-black"
    />
  );
}

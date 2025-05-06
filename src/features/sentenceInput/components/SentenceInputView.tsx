import React, { useState } from "react";

type SentenceInputViewProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function SentenceInputView({ value, onChange }: SentenceInputViewProps) {
  return (
    <div className="my-8">
      <textarea
        rows={8}
        value={value}
        onChange={onChange}
        placeholder="Type or Paste here"
        className="w-full p-2 bg-spot text-subText focus:text-text border-2 border-y-black border-x-bg focus:outline-none focus:border-black"
      />
    </div>
  );
}

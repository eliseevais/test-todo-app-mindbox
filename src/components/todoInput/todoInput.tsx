import * as React from "react";
import { useState } from "react";
import s from "./todoInput.module.css";

type Props = {
  onAdd: (text: string) => void;
};

export const TodoInput = ({ onAdd }: Props) => {
  const [text, setText] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim()) {
      e.preventDefault();
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div className={s.inputWrapper}>
      <span className={s.checkIcon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E9E9E9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

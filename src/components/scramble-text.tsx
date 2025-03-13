// components/scramble-text.tsx
"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
}

export function ScrambleText({ text }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?`~";
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText((prevText) => {
          return text
            .split("")
            .map((char, index) => {
              // If we've already revealed this character, keep it
              if (index < iteration) {
                return text[index];
              }

              // If it's a space, keep it as a space
              if (char === " ") {
                return " ";
              }

              // Otherwise, show a random character
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
          setIsComplete(true);
        }
      }, 50);
    };

    scramble();

    return () => clearInterval(interval);
  }, [text]);

  return <span className={isComplete ? "" : ""}>{displayText}</span>;
}

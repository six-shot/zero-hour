"use client";
import React, { useState, useEffect } from "react";

interface ShufflingTextProps {
  text: string;
  className?: string;
  shuffleDuration?: number;
  restoreDuration?: number;
  shuffleCharacters?: string;
}

export const ShufflingText: React.FC<ShufflingTextProps> = ({
  text,
  className = "",
  shuffleDuration = 50,
  restoreDuration = 100,
  shuffleCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);

  const getRandomCharacter = () => {
    return shuffleCharacters[
      Math.floor(Math.random() * shuffleCharacters.length)
    ];
  };

  const shuffleText = () => {
    setIsShuffling(true);
    let iteration = 0;
    const maxIterations = 10;

    const shuffleInterval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return getRandomCharacter();
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(shuffleInterval);
        setDisplayText(text);
        setIsShuffling(false);
      }

      iteration += 1 / 3;
    }, shuffleDuration);
  };

  const handleMouseEnter = () => {
    if (!isShuffling) {
      shuffleText();
    }
  };

  return (
    <span className={className} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};

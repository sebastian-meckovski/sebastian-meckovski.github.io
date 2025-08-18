"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // ms per character
  pause?: number; // ms pause at end of word
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 120,
  pause = 1200,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const currentWord = words[wordIdx] || "";

    if (phase === "typing") {
      if (charIdx < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, speed);
      } else {
        setPhase("pausing");
        timeout = setTimeout(() => setPhase("deleting"), pause);
      }
    } else if (phase === "deleting") {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, speed / 2);
      } else {
        setWordIdx((wordIdx + 1) % words.length);
        setPhase("typing");
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pause);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [words, charIdx, phase, wordIdx, speed, pause]);

  return (
    <span className="whitespace-pre text-[var(--accent)] font-semibold">
      <span>{displayed}</span>
      <span
        className="font-thin text-[var(--accent)] caret-blink"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
};

export default Typewriter;

import React from "react";

interface TypewriterProps {
  words: string[];
  accentColor?: string;
  className?: string;
}

function generateKeyframes(words: string[], animName: string): string {
  const steps: { percent: number; content: string }[] = [];
  const wordSegments: { content: string; frames: number }[] = [];
  // Total animation: 4s per word (approx), adjust as needed
  const framesPerChar = 1;
  const framesPauseWord = 3;
  const framesPauseEmpty = 2;
  words.forEach((word) => {
    for (let i = 1; i <= word.length; i++)
      wordSegments.push({ content: word.slice(0, i), frames: framesPerChar });
    wordSegments.push({ content: word, frames: framesPauseWord });
    for (let i = word.length - 1; i >= 0; i--)
      wordSegments.push({ content: word.slice(0, i), frames: framesPerChar });
    wordSegments.push({ content: "", frames: framesPauseEmpty });
  });
  const totalSegmentFrames = wordSegments.reduce(
    (sum, seg) => sum + seg.frames,
    0
  );
  let currFrame = 0;
  wordSegments.forEach((seg) => {
    const percent = (currFrame / totalSegmentFrames) * 100;
    steps.push({ percent, content: seg.content });
    currFrame += seg.frames;
  });
  steps.push({ percent: 100, content: "" });

  let keyframes = `@keyframes ${animName} {`;
  for (let i = 0; i < steps.length - 1; i++) {
    const start = steps[i].percent;
    const end = steps[i + 1].percent;
    keyframes += `
      ${start.toFixed(4)}%, ${end.toFixed(4)}% { content: "${steps[
      i
    ].content.replace(/"/g, '\\"')}"; }
    `;
  }
  keyframes += "\n}";
  return keyframes;
}

function hashWords(arr: string[]): string {
  let hash = 0;
  arr
    .join("|")
    .split("")
    .forEach((c) => {
      hash = (hash << 5) - hash + c.charCodeAt(0);
      hash |= 0;
    });
  return Math.abs(hash).toString();
}

const caretKeyframes = `
@keyframes blink-caret {
  0%,100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  accentColor = "var(--accent)",
  className
}) => {
  const animName = "typing-" + hashWords(words);
  const uniqueClass = "tw-" + animName;
  // 4s per word (approx)
  const duration = 4 * words.length;
  const keyframes = generateKeyframes(words, animName);

  return (
    <>
      <style>
        {`
        ${keyframes}
        ${caretKeyframes}
        .${uniqueClass} {
          color: ${accentColor};
          font-weight: bold;
          font-family: 'Orbitron', monospace;
          white-space: pre;
        }
        .${uniqueClass}::before {
          content: "";
          animation: ${animName} ${duration}s steps(1) infinite;
        }
        .${uniqueClass}::after {
          content: "";
          border-right: 1px solid currentColor;
          animation: blink-caret 1.2s steps(1) infinite;
          vertical-align: bottom;
        }
      `}
      </style>
      <span className={uniqueClass + ' ' + className}></span>
    </>
  );
};

export default Typewriter;

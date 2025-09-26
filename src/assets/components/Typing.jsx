import { useState, useEffect } from "react";

export default function Typing({ phrases }) {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let timeout;
    if (!isDeleting && letterIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      }, Math.random() * (200 - 100) + 100);
    } else if (isDeleting && letterIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);
      }, Math.random() * (80 - 50) + 50);
    }

    if (letterIndex === currentPhrase.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (letterIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, phraseIndex, phrases]);

  return <span className="typing">{displayedText}</span>;
}

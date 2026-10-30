import { useEffect, useRef, useState, type FC } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface RotatingTextProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

const RotatingText: FC<RotatingTextProps> = ({
  words,
  interval = 2800,
  className = "",
}) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentWord = words[index] ?? words[0] ?? "";

  useEffect(() => {
    if (reduceMotion || words.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [interval, reduceMotion, words.length]);

  if (reduceMotion) {
    return (
      <span className={`hero-rotating-text ${className}`.trim()} aria-live="polite">
        <span className="hero-rotating-text__word">{currentWord}</span>
      </span>
    );
  }

  return (
    <span
      className={`hero-rotating-text ${className}`.trim()}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          className="hero-rotating-text__word"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;

import { motion, useReducedMotion } from "motion/react";
import type { FC } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "p";
}

const SplitText: FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  as = "span",
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const chars = [...text];

  return (
    <Tag className={className} aria-label={text}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: "0.75em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.025,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;

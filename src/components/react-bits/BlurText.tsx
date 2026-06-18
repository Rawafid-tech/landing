import { motion, useReducedMotion } from "motion/react";
import type { FC, ReactNode } from "react";

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const BlurText: FC<BlurTextProps> = ({
  children,
  className = "",
  delay = 0.55,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(12px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurText;

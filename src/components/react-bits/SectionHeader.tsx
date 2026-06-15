import { motion, useReducedMotion } from "motion/react";
import type { FC } from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "center" | "start";
}

const SectionHeader: FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  subheadline,
  align = "center",
}) => {
  const reduceMotion = useReducedMotion();

  const alignmentClasses = align === "center" 
    ? "text-center mx-auto" 
    : "text-start";

  return (
    <motion.header
      className={`flex flex-col gap-4 max-w-full ${alignmentClasses}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="section-header__eyebrow">
          {eyebrow}
        </span>
      )}
      
      <h2 className="section-header__headline">
        {headline}
      </h2>
      
      {subheadline && (
        <p className="section-header__subheadline">
          {subheadline}
        </p>
      )}
    </motion.header>
  );
};

export default SectionHeader;

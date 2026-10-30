import { motion, useReducedMotion } from "motion/react";
import { instantVariants } from "./instantVariants";
import type { FC } from "react";
import SectionHeader from "./SectionHeader";

export interface SolutionPair {
  id: string;
  before: string;
  after: string;
}

export interface SolutionSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  beforeLabel: string;
  afterLabel: string;
  pairs: readonly SolutionPair[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

const labelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

function XCircleIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="solution-cell-icon__svg"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="solution-cell-icon__svg"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5 8.5l2 2 4-4.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="solution-arrow__svg"
    >
      <path d="M3 8h10M10 5l3 3-3 3" />
    </svg>
  );
}

const SolutionSectionContent: FC<SolutionSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  beforeLabel,
  afterLabel,
  pairs,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        align="center"
      />

      <motion.div
        className="solution-panel"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-5% 0px" }}
        variants={reduceMotion ? instantVariants(containerVariants) : containerVariants}
        role="region"
        aria-label={headline}
      >
        {/* Column header labels — aria-hidden: the row aria-labels carry the accessible info */}
        <motion.div
          className="solution-panel__labels"
          aria-hidden="true"
          variants={reduceMotion ? instantVariants(labelVariants) : labelVariants}
        >
          <div className="solution-panel__label solution-panel__label--before">
            <span className="solution-panel__label-dot solution-panel__label-dot--before" />
            <span>{beforeLabel}</span>
          </div>
          <div className="solution-panel__label-spacer" aria-hidden="true" />
          <div className="solution-panel__label solution-panel__label--after">
            <span className="solution-panel__label-dot solution-panel__label-dot--after" />
            <span>{afterLabel}</span>
          </div>
        </motion.div>

        <div className="solution-panel__separator" aria-hidden="true" />

        {/* Comparison rows */}
        <ul className="solution-panel__rows" role="list">
          {pairs.map((pair) => (
            <motion.li
              key={pair.id}
              className="solution-panel__row"
              role="listitem"
              /* Each row has a complete screen-reader description */
              aria-label={`${beforeLabel}: ${pair.before} — ${afterLabel}: ${pair.after}`}
              variants={reduceMotion ? instantVariants(rowVariants) : rowVariants}
            >
              {/* Before — aria-hidden: the li's aria-label covers this */}
              <div
                className="solution-panel__cell solution-panel__cell--before"
                aria-hidden="true"
              >
                <span className="solution-panel__cell-icon solution-panel__cell-icon--before">
                  <XCircleIcon />
                </span>
                <span className="solution-panel__cell-text">{pair.before}</span>
              </div>

              {/* Arrow connector */}
              <div className="solution-panel__arrow" aria-hidden="true">
                <ArrowIcon />
              </div>

              {/* After — aria-hidden: the li's aria-label covers this */}
              <div
                className="solution-panel__cell solution-panel__cell--after"
                aria-hidden="true"
              >
                <span className="solution-panel__cell-icon solution-panel__cell-icon--after">
                  <CheckCircleIcon />
                </span>
                <span className="solution-panel__cell-text">{pair.after}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SolutionSectionContent;

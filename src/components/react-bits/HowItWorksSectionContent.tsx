import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, type CSSProperties, type FC } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export type StepIconType = "connect" | "create" | "track";

export interface HowItWorksStep {
  id: string;
  number: string;
  icon: StepIconType;
  title: string;
  description: string;
}

export interface HowItWorksSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  steps: readonly HowItWorksStep[];
  cta: string;
  ctaHref: string;
  ctaAriaLabel: string;
  locale?: "ar" | "en";
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP_DELAYS = [0.1, 0.35, 0.6] as const;

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: STEP_DELAYS[i] ?? i * 0.25 + 0.2 },
  }),
};

const nodeMotion = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: STEP_DELAYS[i] ?? i * 0.25 },
  }),
};

/* ─── Accent map ─────────────────────────────────────────────── */

const ACCENT: Record<StepIconType, { node: string; badge: string }> = {
  connect: { node: "hiw-node--connect", badge: "hiw-badge--connect" },
  create:  { node: "hiw-node--create",  badge: "hiw-badge--create"  },
  track:   { node: "hiw-node--track",   badge: "hiw-badge--track"   },
};

/** Always Western numerals regardless of page locale */
function formatStepNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/* ─── Icons ──────────────────────────────────────────────────── */

function ConnectIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="block shrink-0">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CreateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="block shrink-0">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="block shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const ICONS: Record<StepIconType, FC> = {
  connect: ConnectIcon,
  create: CreateIcon,
  track: TrackIcon,
};

function FlowArrow({ rtl, style }: { rtl: boolean; style?: CSSProperties }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={style}
      className={`hiw-flow-arrow block shrink-0 ${rtl ? "hiw-flow-arrow--rtl" : ""}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ─── Animated bridge between steps ──────────────────────────── */

interface FlowBridgeProps {
  index: number;
  rtl: boolean;
  animate: boolean;
  reduceMotion: boolean | null;
}

const FlowBridge: FC<FlowBridgeProps> = ({ index, rtl, animate, reduceMotion }) => (
  <div
    className="hiw-flow-bridge flex w-full min-w-0 flex-1 items-center"
    aria-hidden="true"
  >
    <div className="hiw-flow-bridge__track relative h-[3px] min-w-0 flex-1 overflow-hidden rounded-full">
      <div className="hiw-flow-bridge__bg absolute inset-0 rounded-full" />
      {animate && !reduceMotion && (
        <div
          className={`hiw-flow-bridge__shimmer absolute inset-0 rounded-full${rtl ? " hiw-flow-bridge__shimmer--rtl" : ""}`}
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      )}
    </div>
    <FlowArrow
      rtl={rtl}
      style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
    />
  </div>
);

/* ─── Flow node parts ────────────────────────────────────────── */

interface FlowNodeProps {
  step: HowItWorksStep;
  index: number;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const FlowNodeIcon: FC<FlowNodeProps> = ({ step, index, isInView, reduceMotion }) => {
  const Icon = ICONS[step.icon];
  const accent = ACCENT[step.icon];

  return (
    <motion.div
      className="hiw-flow-node flex shrink-0 flex-col items-center justify-center"
      custom={index}
      variants={reduceMotion ? {} : nodeMotion}
      initial={reduceMotion ? false : "hidden"}
      animate={isInView ? "visible" : "hidden"}
    >
      <div className={`hiw-flow-node__ring hiw-flow-node__ring--${step.icon}`}>
        <div className={`hiw-node flex h-14 w-14 items-center justify-center rounded-full border-2 ${accent.node}`}>
          <Icon />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Step card ──────────────────────────────────────────────── */

interface StepCardProps {
  step: HowItWorksStep;
  index: number;
  isLast: boolean;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const StepCard: FC<StepCardProps> = ({
  step,
  index,
  isLast,
  isInView,
  reduceMotion,
}) => {
  const Icon = ICONS[step.icon];
  const accent = ACCENT[step.icon];
  const num = formatStepNumber(index);

  return (
    <motion.li
      className={`hiw-step hiw-step--${step.icon} flex min-w-0 flex-row items-stretch gap-5 md:flex-col`}
      custom={index}
      variants={reduceMotion ? {} : cardMotion}
    >
      {/* Mobile vertical timeline */}
      <div className="flex w-14 shrink-0 flex-col items-center md:hidden" aria-hidden="true">
        <div className={`hiw-node flex h-14 w-14 items-center justify-center rounded-full border-2 ${accent.node}`}>
          <Icon />
        </div>
        {!isLast && (
          <div className="hiw-mobile-bridge relative my-2 flex min-h-8 w-[3px] flex-1 flex-col items-center overflow-hidden rounded-full">
            <div className="hiw-flow-bridge__bg absolute inset-0 rounded-full" />
            {isInView && !reduceMotion && (
              <div className="hiw-flow-bridge__shimmer-vertical absolute inset-0 rounded-full" />
            )}
            <FlowArrow rtl={false} />
          </div>
        )}
      </div>

      <article className="hiw-card flex min-h-[11rem] min-w-0 flex-1 flex-col gap-5 lg:gap-6">
        <header className="flex items-start justify-between gap-4">
          <div className={`hiw-node flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accent.node}`}>
            <Icon />
          </div>
          <span
            className={`hiw-badge inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-bold tabular-nums tracking-widest ${accent.badge}`}
            dir="ltr"
            aria-hidden="true"
          >
            {num}
          </span>
        </header>

        <div className="flex flex-col gap-3">
          <h3 className="hiw-card-title text-xl font-semibold leading-snug">
            {step.title}
          </h3>
          <p className="hiw-card-desc text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </article>
    </motion.li>
  );
};

/* ─── Main ───────────────────────────────────────────────────── */

const HowItWorksSectionContent: FC<HowItWorksSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  steps,
  cta,
  ctaHref,
  ctaAriaLabel,
  locale = "ar",
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const isRTL = locale === "ar";

  return (
    <div ref={ref} className="flex w-full flex-col gap-12 lg:gap-16">

      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        align="center"
      />

      {/* Desktop stepper — icons + bridges */}
      <div
        className="hiw-flow-rail hidden w-full md:grid"
        aria-hidden="true"
        style={{
          gridTemplateColumns: steps
            .flatMap((_, i) =>
              i < steps.length - 1 ? ["auto", "1fr"] : ["auto"]
            )
            .join(" "),
          columnGap: "0.5rem",
        }}
      >
        {steps.map((step, i) => (
          <div key={step.id} className="contents">
            <div
              className="flex h-14 items-center justify-center"
              style={{ gridColumn: i * 2 + 1 }}
            >
              <FlowNodeIcon
                step={step}
                index={i}
                isInView={isInView}
                reduceMotion={reduceMotion}
              />
            </div>

            {i < steps.length - 1 && (
              <div
                className="flex h-14 w-full min-w-0 items-center px-1"
                style={{ gridColumn: i * 2 + 2 }}
              >
                <FlowBridge
                  index={i}
                  rtl={isRTL}
                  animate={isInView}
                  reduceMotion={reduceMotion}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step cards */}
      <motion.ol
        className="m-0 grid w-full list-none grid-cols-1 gap-6 p-0 md:grid-cols-3 md:gap-6 lg:gap-8"
        role="list"
        aria-label={headline}
        initial={reduceMotion ? false : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        variants={reduceMotion ? {} : { visible: { transition: { staggerChildren: 0 } } }}
      >
        {steps.map((step, i) => (
          <StepCard
            key={step.id}
            step={step}
            index={i}
            isLast={i === steps.length - 1}
            isInView={isInView}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.ol>

      <motion.div
        className="flex justify-center pt-2"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={reduceMotion ? {} : { duration: 0.45, ease: EASE, delay: 0.9 }}
      >
        <a href={ctaHref} className="btn btn-primary btn-large" aria-label={ctaAriaLabel}>
          {cta}
        </a>
      </motion.div>
    </div>
  );
};

export default HowItWorksSectionContent;

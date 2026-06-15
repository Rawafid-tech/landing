import { motion, useReducedMotion } from "motion/react";
import { useCallback, type FC, type JSX, type PointerEvent } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export type FeatureIconType =
  | "shipments"
  | "returns"
  | "integrations"
  | "couriers"
  | "pricing"
  | "analytics";

export interface Feature {
  id: string;
  icon: FeatureIconType;
  title: string;
  description: string;
  benefits: readonly string[];
}

export interface FeaturesSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  features: readonly Feature[];
}

/* ─── Animation config ───────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ─── SVG Icons ──────────────────────────────────────────────── */

function ShipmentsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ReturnsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CouriersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
      <rect width="9" height="11" x="12" y="6" rx="2" />
      <circle cx="7" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="8" x2="10" y1="11" y2="11" />
      <line x1="12" x2="16" y1="11" y2="11" />
      <line x1="8" x2="10" y1="15" y2="15" />
      <line x1="12" x2="16" y1="15" y2="15" />
      <line x1="8" x2="10" y1="19" y2="19" />
      <line x1="12" x2="16" y1="19" y2="19" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-icon__svg"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}

const ICON_MAP: Record<FeatureIconType, () => JSX.Element> = {
  shipments: ShipmentsIcon,
  returns: ReturnsIcon,
  integrations: IntegrationsIcon,
  couriers: CouriersIcon,
  pricing: PricingIcon,
  analytics: AnalyticsIcon,
};

function BenefitCheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="feature-benefit__check-svg"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5 8.5l2 2 4-4.5" />
    </svg>
  );
}

/* ─── Feature Card ───────────────────────────────────────────── */

interface FeatureCardProps {
  feature: Feature;
  reduceMotion: boolean | null;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature, reduceMotion }) => {
  const IconComponent = ICON_MAP[feature.icon];

  /* Direct DOM mutation — no React re-renders on every pointer move */
  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLLIElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty(
        "--spotlight-x",
        `${e.clientX - rect.left}px`
      );
      e.currentTarget.style.setProperty(
        "--spotlight-y",
        `${e.clientY - rect.top}px`
      );
    },
    []
  );

  const handlePointerEnter = useCallback(
    (e: PointerEvent<HTMLLIElement>) => {
      e.currentTarget.style.setProperty("--spotlight-visible", "1");
    },
    []
  );

  const handlePointerLeave = useCallback(
    (e: PointerEvent<HTMLLIElement>) => {
      e.currentTarget.style.setProperty("--spotlight-visible", "0");
    },
    []
  );

  return (
    <motion.li
      className={`feature-card feature-card--${feature.icon}`}
      variants={reduceMotion ? {} : cardVariants}
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
      onPointerEnter={reduceMotion ? undefined : handlePointerEnter}
      onPointerLeave={reduceMotion ? undefined : handlePointerLeave}
    >
      {/* Spotlight overlay — purely decorative, driven by CSS vars */}
      <div className="feature-card__spotlight" aria-hidden="true" />

      <div className="feature-card__body">
        <div
          className={`feature-card__icon-wrap feature-card__icon-wrap--${feature.icon}`}
          aria-hidden="true"
        >
          <IconComponent />
        </div>

        <h3 className="feature-card__title">{feature.title}</h3>

        <p className="feature-card__description">{feature.description}</p>

        <ul className="feature-card__benefits" role="list">
          {feature.benefits.map((benefit) => (
            <li key={benefit} className="feature-card__benefit" role="listitem">
              <span
                className="feature-card__benefit-icon"
                aria-hidden="true"
              >
                <BenefitCheckIcon />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

/* ─── Main Export ────────────────────────────────────────────── */

const FeaturesSectionContent: FC<FeaturesSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  features,
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

      <motion.ul
        className="features-grid"
        role="list"
        aria-label={headline}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-5% 0px" }}
        variants={reduceMotion ? {} : containerVariants}
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default FeaturesSectionContent;

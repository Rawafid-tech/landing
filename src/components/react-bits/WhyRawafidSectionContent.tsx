import { motion, useReducedMotion } from "motion/react";
import { instantVariants } from "./instantVariants";
import { useCallback, type FC, type JSX, type PointerEvent } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export type WhyPointIcon =
  | "local"
  | "security"
  | "support"
  | "ease"
  | "pricing"
  | "updates";

export interface WhyPoint {
  id: string;
  icon: WhyPointIcon;
  title: string;
  description: string;
}

export interface ComparisonCell {
  kind: "text" | "yes" | "no";
  value?: string;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  rawafid: ComparisonCell;
  traditional: ComparisonCell;
}

export interface ComparisonContent {
  ariaLabel: string;
  headline: string;
  columns: {
    feature: string;
    rawafid: string;
    traditional: string;
  };
  rows: readonly ComparisonRow[];
  labels: {
    yes: string;
    no: string;
  };
}

export interface WhyRawafidSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  points: readonly WhyPoint[];
  comparison: ComparisonContent;
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ─── Icons ──────────────────────────────────────────────────── */

function LocalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
      <path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z" />
      <path d="M12 2a4 4 0 0 0-4 4v2h8V6a4 4 0 0 0-4-4Z" />
      <path d="M12 18v4" />
    </svg>
  );
}

function EaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function UpdatesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="why-icon__svg">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

const ICON_MAP: Record<WhyPointIcon, () => JSX.Element> = {
  local: LocalIcon,
  security: SecurityIcon,
  support: SupportIcon,
  ease: EaseIcon,
  pricing: PricingIcon,
  updates: UpdatesIcon,
};

function CheckBadge({ label }: { label: string }) {
  return (
    <span className="why-status why-status--yes" aria-label={label}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

function CrossBadge({ label }: { label: string }) {
  return (
    <span className="why-status why-status--no" aria-label={label}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

/* ─── Subcomponents ──────────────────────────────────────────── */

interface WhyPointCardProps {
  point: WhyPoint;
  reduceMotion: boolean | null;
}

const WhyPointCard: FC<WhyPointCardProps> = ({ point, reduceMotion }) => {
  const Icon = ICON_MAP[point.icon];

  const handlePointerMove = useCallback((e: PointerEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  const handlePointerEnter = useCallback((e: PointerEvent<HTMLLIElement>) => {
    e.currentTarget.style.setProperty("--spotlight-visible", "1");
  }, []);

  const handlePointerLeave = useCallback((e: PointerEvent<HTMLLIElement>) => {
    e.currentTarget.style.setProperty("--spotlight-visible", "0");
  }, []);

  return (
    <motion.li
      className={`why-card why-card--${point.icon}`}
      variants={reduceMotion ? instantVariants(cardVariants) : cardVariants}
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
      onPointerEnter={reduceMotion ? undefined : handlePointerEnter}
      onPointerLeave={reduceMotion ? undefined : handlePointerLeave}
    >
      <div className="why-card__spotlight" aria-hidden="true" />

      <div className="why-card__body">
        <div className={`why-card__icon-wrap why-card__icon-wrap--${point.icon}`} aria-hidden="true">
          <Icon />
        </div>

        <h3 className="why-card__title">{point.title}</h3>
        <p className="why-card__description">{point.description}</p>
      </div>
    </motion.li>
  );
};

interface ComparisonTableProps {
  comparison: ComparisonContent;
  reduceMotion: boolean | null;
}

function renderCell(cell: ComparisonCell, labels: ComparisonContent["labels"], tone?: "rawafid" | "traditional") {
  if (cell.kind === "yes") return <CheckBadge label={labels.yes} />;
  if (cell.kind === "no") return <CrossBadge label={labels.no} />;

  return (
    <span className={tone === "rawafid" ? "why-comparison__value why-comparison__value--highlight" : "why-comparison__value"}>
      {cell.value}
    </span>
  );
}

const ComparisonTable: FC<ComparisonTableProps> = ({ comparison, reduceMotion }) => {
  const { columns, rows, labels, headline, ariaLabel } = comparison;

  return (
    <motion.div
      className="why-comparison"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
    >
      <div className="why-comparison__header">
        <h3 className="why-comparison__headline">{headline}</h3>
      </div>

      <div className="why-comparison__panel" tabIndex={0} role="region" aria-label={ariaLabel}>
        <table className="why-comparison__table">
          <caption className="sr-only">{headline}</caption>
          <thead>
            <tr>
              <th scope="col" className="why-comparison__th why-comparison__th--feature">
                {columns.feature}
              </th>
              <th scope="col" className="why-comparison__th why-comparison__th--rawafid">
                {columns.rawafid}
              </th>
              <th scope="col" className="why-comparison__th why-comparison__th--traditional">
                {columns.traditional}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="why-comparison__row">
                <th scope="row" className="why-comparison__feature">
                  {row.feature}
                </th>
                <td className="why-comparison__cell why-comparison__cell--rawafid">
                  {renderCell(row.rawafid, labels, "rawafid")}
                </td>
                <td className="why-comparison__cell why-comparison__cell--traditional">
                  {renderCell(row.traditional, labels, "traditional")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

/* ─── Main export ────────────────────────────────────────────── */

const WhyRawafidSectionContent: FC<WhyRawafidSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  points,
  comparison,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="why-section__inner">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        align="center"
      />

      <motion.ul
        className="why-grid"
        role="list"
        aria-label={headline}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-5% 0px" }}
        variants={reduceMotion ? instantVariants(containerVariants) : containerVariants}
      >
        {points.map((point) => (
          <WhyPointCard key={point.id} point={point} reduceMotion={reduceMotion} />
        ))}
      </motion.ul>

      <ComparisonTable comparison={comparison} reduceMotion={reduceMotion} />
    </div>
  );
};

export default WhyRawafidSectionContent;

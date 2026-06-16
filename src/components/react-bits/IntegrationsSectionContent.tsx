import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export type StoreIconType = "shopify" | "ezorders" | "api";
export type CourierIconType = "bosta" | "local";

export interface StoreIntegration {
  id: string;
  icon: StoreIconType;
  name: string;
  description: string;
}

export interface CourierIntegration {
  id: string;
  icon: CourierIconType;
  name: string;
  description: string;
}

export interface ComingSoonItem {
  id: string;
  name: string;
}

export interface IntegrationLabels {
  stores: string;
  couriers: string;
  available: string;
  comingSoon: string;
}

export interface IntegrationsSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  hubLabel: string;
  hubTagline: string;
  stores: readonly StoreIntegration[];
  couriers: readonly CourierIntegration[];
  comingSoon: readonly ComingSoonItem[];
  labels: IntegrationLabels;
  locale?: "ar" | "en";
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const hubVariants = {
  hidden: { scale: 0.82, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: EASE, delay: 0.1 } },
};

const STORE_ACCENT = ["int-store--0", "int-store--1", "int-store--2"] as const;
const COURIER_ACCENT = ["int-courier--0", "int-courier--1", "int-courier--2"] as const;

/* ─── Icons ──────────────────────────────────────────────────── */

function ShopifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="int-icon">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function EzOrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="int-icon">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function APIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="int-icon">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BostaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="int-icon">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
      <rect width="13" height="8" x="9" y="11" rx="1" />
      <circle cx="11" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  );
}

function LocalCourierIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="int-icon">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 7.22 11.58 7.54 11.84a.75.75 0 0 0 .92 0C12.78 21.58 20 15.25 20 10a8 8 0 0 0-8-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HubBoxIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className="shrink-0">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

const STORE_ICONS: Record<StoreIconType, FC> = {
  shopify: ShopifyIcon,
  ezorders: EzOrdersIcon,
  api: APIIcon,
};

const COURIER_ICONS: Record<CourierIconType, FC> = {
  bosta: BostaIcon,
  local: LocalCourierIcon,
};

/* ─── Beam ───────────────────────────────────────────────────── */

interface BeamProps {
  index: number;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const Beam: FC<BeamProps> = ({ index, isInView, reduceMotion }) => (
  <div className="int-beam" aria-hidden="true">
    <div className="int-beam__track" />
    {isInView && !reduceMotion && (
      <div
        className="int-beam__shimmer"
        style={{ animationDelay: `${index * 0.4}s` }}
      />
    )}
  </div>
);

/* ─── Integration card ───────────────────────────────────────── */

interface IntegrationCardProps {
  icon: StoreIconType | CourierIconType;
  name: string;
  description: string;
  availableLabel: string;
  side: "store" | "courier";
  accentClass: string;
  /** icon sits toward the hub side of the card */
  iconTowardHub?: boolean;
}

const IntegrationCard: FC<IntegrationCardProps> = ({
  icon,
  name,
  description,
  availableLabel,
  side,
  accentClass,
  iconTowardHub = false,
}) => {
  const Icon = side === "store"
    ? STORE_ICONS[icon as StoreIconType]
    : COURIER_ICONS[icon as CourierIconType];

  const iconEl = (
    <div
      className={`int-card__icon ${accentClass}`}
      aria-hidden="true"
    >
      <Icon />
    </div>
  );

  const textEl = (
    <div className="int-card__content">
      <div className="int-card__header">
        <span className="int-card__name">{name}</span>
        <span className="int-available-badge">{availableLabel}</span>
      </div>
      <p className="int-card__desc">{description}</p>
    </div>
  );

  const innerClass =
    iconTowardHub && side === "store"
      ? "int-card__inner int-card__inner--store"
      : iconTowardHub && side === "courier"
        ? "int-card__inner int-card__inner--courier"
        : "int-card__inner";

  return (
    <motion.article
      className="int-card"
      variants={cardVariants}
      aria-label={`${name} — ${description}`}
    >
      <div className={innerClass}>
        {iconEl}
        {textEl}
      </div>
    </motion.article>
  );
};

/* ─── Hub ────────────────────────────────────────────────────── */

interface HubNodeProps {
  hubLabel: string;
  hubTagline: string;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const HubNode: FC<HubNodeProps> = ({ hubLabel, hubTagline, isInView, reduceMotion }) => (
  <motion.div
    className="int-hub-wrap flex flex-col items-center gap-4"
    variants={reduceMotion ? {} : hubVariants}
    initial={reduceMotion ? false : "hidden"}
    animate={isInView ? "visible" : "hidden"}
    aria-label={`${hubLabel} — ${hubTagline}`}
    role="img"
  >
    <div className="int-hub relative flex items-center justify-center">
      {!reduceMotion && (
        <>
          <div className="int-hub__ring int-hub__ring--outer absolute rounded-full" aria-hidden="true" />
          <div className="int-hub__ring int-hub__ring--inner absolute rounded-full" aria-hidden="true" />
        </>
      )}
      <div className="int-hub__core relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-white">
        <HubBoxIcon />
      </div>
    </div>
    <div className="text-center">
      <p className="int-hub__label text-base font-bold leading-none">{hubLabel}</p>
      <p className="int-hub__tagline mt-1.5 text-xs">{hubTagline}</p>
    </div>
  </motion.div>
);

/* ─── Group label ────────────────────────────────────────────── */

const GroupLabel: FC<{ children: string; align?: "start" | "end" | "center" }> = ({
  children,
  align = "center",
}) => (
  <p
    className={`int-group-label mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
      align === "end" ? "text-end" : align === "start" ? "text-start" : "text-center"
    }`}
  >
    {children}
  </p>
);

/* ─── Coming soon ────────────────────────────────────────────── */

interface ComingSoonStripProps {
  items: readonly ComingSoonItem[];
  label: string;
}

const ComingSoonStrip: FC<ComingSoonStripProps> = ({ items, label }) => (
  <div className="int-coming-soon" aria-label={label}>
    <span className="int-coming-soon__prefix">{label}</span>
    <div className="int-coming-soon__list">
      {items.map((item) => (
        <span key={item.id} className="int-coming-soon__badge">
          {item.name}
        </span>
      ))}
    </div>
  </div>
);

/* ─── Desktop diagram ────────────────────────────────────────── */

interface DesktopDiagramProps {
  stores: readonly StoreIntegration[];
  couriers: readonly CourierIntegration[];
  labels: IntegrationLabels;
  hubLabel: string;
  hubTagline: string;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const DesktopDiagram: FC<DesktopDiagramProps> = ({
  stores,
  couriers,
  labels,
  hubLabel,
  hubTagline,
  isInView,
  reduceMotion,
}) => {
  const rowCount = Math.max(stores.length, couriers.length);

  return (
    <div
      className="int-diagram hidden lg:grid"
      style={{
        gridTemplateColumns: "minmax(0, 16.5rem) 8rem auto 8rem minmax(0, 16.5rem)",
        gridTemplateRows: `auto repeat(${rowCount}, auto)`,
        columnGap: "1.5rem",
        rowGap: "1.25rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Row 1 — column labels */}
      <div style={{ gridColumn: 1, gridRow: 1 }}>
        <GroupLabel align="center">{labels.stores}</GroupLabel>
      </div>
      <div style={{ gridColumn: 5, gridRow: 1 }}>
        <GroupLabel align="center">{labels.couriers}</GroupLabel>
      </div>

      {/* Hub — spans all card rows in centre column */}
      <div
        style={{ gridColumn: 3, gridRow: `2 / ${rowCount + 2}` }}
        className="flex items-center justify-center self-center px-2"
      >
        <HubNode
          hubLabel={hubLabel}
          hubTagline={hubTagline}
          isInView={isInView}
          reduceMotion={reduceMotion}
        />
      </div>

      {/* Card + beam rows */}
      <motion.div
        className="contents"
        initial={reduceMotion ? false : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        variants={reduceMotion ? {} : listVariants}
      >
        {Array.from({ length: rowCount }, (_, i) => {
          const store = stores[i];
          const courier = couriers[i];
          const gridRow = i + 2;

          return (
            <div key={i} className="contents">
              {/* Store card */}
              <div style={{ gridColumn: 1, gridRow }} className="int-diagram__cell int-diagram__cell--store">
                {store ? (
                  <IntegrationCard
                    {...store}
                    availableLabel={labels.available}
                    side="store"
                    accentClass={STORE_ACCENT[i] ?? STORE_ACCENT[0]}
                    iconTowardHub
                  />
                ) : null}
              </div>

              {/* Beam → hub */}
              <div
                style={{ gridColumn: 2, gridRow }}
                className="int-diagram__beam"
                aria-hidden="true"
              >
                {store ? (
                  <Beam index={i} isInView={isInView} reduceMotion={reduceMotion} />
                ) : null}
              </div>

              {/* Beam ← hub */}
              <div
                style={{ gridColumn: 4, gridRow }}
                className="int-diagram__beam"
                aria-hidden="true"
              >
                {courier ? (
                  <Beam index={i} isInView={isInView} reduceMotion={reduceMotion} />
                ) : null}
              </div>

              {/* Courier card */}
              <div style={{ gridColumn: 5, gridRow }} className="int-diagram__cell int-diagram__cell--courier">
                {courier ? (
                  <IntegrationCard
                    {...courier}
                    availableLabel={labels.available}
                    side="courier"
                    accentClass={COURIER_ACCENT[i] ?? COURIER_ACCENT[0]}
                    iconTowardHub
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

/* ─── Main ───────────────────────────────────────────────────── */

const IntegrationsSectionContent: FC<IntegrationsSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  hubLabel,
  hubTagline,
  stores,
  couriers,
  comingSoon,
  labels,
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <div ref={ref} className="flex w-full flex-col gap-12 lg:gap-16">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        align="center"
      />

      <DesktopDiagram
        stores={stores}
        couriers={couriers}
        labels={labels}
        hubLabel={hubLabel}
        hubTagline={hubTagline}
        isInView={isInView}
        reduceMotion={reduceMotion}
      />

      {/* ── Tablet: simplified two-column ──────────────────── */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:hidden">
        <div>
          <GroupLabel align="start">{labels.stores}</GroupLabel>
          <motion.div
            className="flex flex-col gap-3"
            initial={reduceMotion ? false : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={reduceMotion ? {} : listVariants}
            role="list"
            aria-label={labels.stores}
          >
            {stores.map((store, i) => (
              <div key={store.id} role="listitem">
                <IntegrationCard
                  {...store}
                  availableLabel={labels.available}
                  side="store"
                  accentClass={STORE_ACCENT[i] ?? STORE_ACCENT[0]}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <GroupLabel align="start">{labels.couriers}</GroupLabel>
          <motion.div
            className="flex flex-col gap-3"
            initial={reduceMotion ? false : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={reduceMotion ? {} : listVariants}
            role="list"
            aria-label={labels.couriers}
          >
            {couriers.map((courier, i) => (
              <div key={courier.id} role="listitem">
                <IntegrationCard
                  {...courier}
                  availableLabel={labels.available}
                  side="courier"
                  accentClass={COURIER_ACCENT[i] ?? COURIER_ACCENT[0]}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Mobile ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-8 md:hidden">
        <div className="flex justify-center">
          <HubNode
            hubLabel={hubLabel}
            hubTagline={hubTagline}
            isInView={isInView}
            reduceMotion={reduceMotion}
          />
        </div>
        <div>
          <GroupLabel align="start">{labels.stores}</GroupLabel>
          <motion.div
            className="flex flex-col gap-3"
            initial={reduceMotion ? false : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={reduceMotion ? {} : listVariants}
            role="list"
            aria-label={labels.stores}
          >
            {stores.map((store, i) => (
              <div key={store.id} role="listitem">
                <IntegrationCard
                  {...store}
                  availableLabel={labels.available}
                  side="store"
                  accentClass={STORE_ACCENT[i] ?? STORE_ACCENT[0]}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <GroupLabel align="start">{labels.couriers}</GroupLabel>
          <motion.div
            className="flex flex-col gap-3"
            initial={reduceMotion ? false : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={reduceMotion ? {} : listVariants}
            role="list"
            aria-label={labels.couriers}
          >
            {couriers.map((courier, i) => (
              <div key={courier.id} role="listitem">
                <IntegrationCard
                  {...courier}
                  availableLabel={labels.available}
                  side="courier"
                  accentClass={COURIER_ACCENT[i] ?? COURIER_ACCENT[0]}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Coming soon ────────────────────────────────────── */}
      <div className="int-coming-soon-divider">
        <ComingSoonStrip items={comingSoon} label={labels.comingSoon} />
      </div>
    </div>
  );
};

export default IntegrationsSectionContent;

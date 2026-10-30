import { AnimatePresence, motion, useReducedMotion, useInView } from "motion/react";
import { instantVariants } from "./instantVariants";
import { useCallback, useId, useMemo, useRef, useState, type FC, type KeyboardEvent } from "react";
import SectionHeader from "./SectionHeader";

/* ─── Types ──────────────────────────────────────────────────── */

export type BillingPeriod = "monthly" | "annual";
export type PriceType = "free" | "numeric" | "custom";
export type CtaVariant = "primary" | "secondary";
export type PlanId = "starter" | "growth" | "enterprise";

export interface PricingPlan {
  id: PlanId;
  name: string;
  tagline: string;
  priceType: PriceType;
  monthlyPrice?: string;
  annualPrice?: string;
  priceSuffix?: string;
  freeLabel?: string;
  freeSub?: string;
  customLabel?: string;
  customSub?: string;
  popular?: boolean;
  popularBadge?: string;
  features: readonly string[];
  cta: string;
  ctaHref: string;
  ctaAriaLabel: string;
  ctaVariant: CtaVariant;
}

export interface BillingLabels {
  toggleLabel: string;
  monthly: string;
  annual: string;
  annualSave: string;
  monthlyHint: string;
  annualHint: string;
}

export interface PricingSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  billing: BillingLabels;
  plans: readonly PricingPlan[];
  featuresHeading: string;
  priceUpdated: string;
  locale?: "ar" | "en";
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: 0.06 + i * 0.09 },
  }),
};

/* ─── Icons ──────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="pricing-check-icon block shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ─── Billing toggle ─────────────────────────────────────────── */

interface BillingToggleProps {
  period: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  labels: BillingLabels;
  reduceMotion: boolean | null;
}

const BillingToggle: FC<BillingToggleProps> = ({
  period,
  onChange,
  labels,
  reduceMotion,
}) => {
  const monthlyId = useId();
  const annualId = useId();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        onChange(period === "monthly" ? "annual" : "monthly");
      }
    },
    [onChange, period],
  );

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-3"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div
        role="radiogroup"
        aria-label={labels.toggleLabel}
        onKeyDown={handleKeyDown}
        className="pricing-toggle relative grid w-full max-w-[22rem] grid-cols-2 gap-1 rounded-full border p-1 sm:max-w-[24rem]"
      >
        {!reduceMotion && (
          <motion.span
            layout
            className="pricing-toggle__indicator pointer-events-none absolute inset-y-1 rounded-full"
            style={{
              width: "calc(50% - 0.25rem)",
              insetInlineStart: period === "monthly" ? "0.25rem" : "calc(50% + 0.125rem)",
            }}
            transition={{ type: "spring", stiffness: 440, damping: 34 }}
            aria-hidden="true"
          />
        )}

        <button
          type="button"
          id={monthlyId}
          role="radio"
          aria-checked={period === "monthly"}
          aria-label={labels.monthlyHint}
          onClick={() => onChange("monthly")}
          className={`pricing-toggle__btn relative z-[1] min-h-[2.75rem] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
            period === "monthly" ? "pricing-toggle__btn--active" : ""
          }`}
        >
          {labels.monthly}
        </button>

        <button
          type="button"
          id={annualId}
          role="radio"
          aria-checked={period === "annual"}
          aria-label={labels.annualHint}
          onClick={() => onChange("annual")}
          className={`pricing-toggle__btn relative z-[1] flex min-h-[2.75rem] flex-col items-center justify-center gap-0.5 rounded-full px-3 py-2 text-sm font-semibold leading-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
            period === "annual" ? "pricing-toggle__btn--active" : ""
          }`}
        >
          <span>{labels.annual}</span>
          <span className="pricing-toggle__save rounded-full px-2 py-px text-[0.625rem] font-bold leading-none tracking-wide">
            {labels.annualSave}
          </span>
        </button>
      </div>
    </motion.div>
  );
};

/* ─── Price display ──────────────────────────────────────────── */

interface PriceDisplayProps {
  plan: PricingPlan;
  period: BillingPeriod;
  reduceMotion: boolean | null;
}

const PriceDisplay: FC<PriceDisplayProps> = ({ plan, period, reduceMotion }) => {
  const priceKey = useMemo(() => {
    if (plan.priceType === "free") return "free";
    if (plan.priceType === "custom") return "custom";
    return period === "monthly" ? plan.monthlyPrice : plan.annualPrice;
  }, [plan, period]);

  const content = useMemo(() => {
    if (plan.priceType === "free") {
      return (
        <div className="flex flex-col gap-1">
          <span className="pricing-price__amount text-[2rem] font-bold leading-none tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {plan.freeLabel}
          </span>
          {plan.freeSub && (
            <span className="pricing-price__sub text-sm font-medium">{plan.freeSub}</span>
          )}
        </div>
      );
    }

    if (plan.priceType === "custom") {
      return (
        <div className="flex flex-col gap-1">
          <span className="pricing-price__amount text-[2rem] font-bold leading-none tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {plan.customLabel}
          </span>
          {plan.customSub && (
            <span className="pricing-price__sub text-sm font-medium">{plan.customSub}</span>
          )}
        </div>
      );
    }

    const amount = period === "monthly" ? plan.monthlyPrice : plan.annualPrice;

    return (
      <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
        <span
          className="pricing-price__amount text-[2rem] font-bold tabular-nums leading-none tracking-tight sm:text-4xl lg:text-[2.75rem]"
          dir="ltr"
        >
          {amount}
        </span>
        {plan.priceSuffix && (
          <span className="pricing-price__suffix pb-1 text-sm font-medium">
            {plan.priceSuffix}
          </span>
        )}
      </div>
    );
  }, [plan, period]);

  if (reduceMotion) {
    return (
      <div className="pricing-price min-h-[4rem] sm:min-h-[4.5rem]" aria-live="off">
        {content}
      </div>
    );
  }

  return (
    <div className="pricing-price min-h-[4rem] overflow-hidden sm:min-h-[4.5rem]" aria-live="off">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={priceKey}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: EASE }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ─── Plan card ──────────────────────────────────────────────── */

interface PricingCardProps {
  plan: PricingPlan;
  period: BillingPeriod;
  index: number;
  featuresHeading: string;
  isInView: boolean;
  reduceMotion: boolean | null;
}

const PricingCard: FC<PricingCardProps> = ({
  plan,
  period,
  index,
  featuresHeading,
  isInView,
  reduceMotion,
}) => {
  const isPopular = Boolean(plan.popular);
  const ctaClass =
    plan.ctaVariant === "primary"
      ? "btn btn-primary pricing-card__cta w-full"
      : "btn btn-secondary pricing-card__cta w-full";

  return (
    <motion.li
      className={`pricing-grid__item pricing-grid__item--${plan.id} min-w-0`}
      custom={index}
      variants={reduceMotion ? instantVariants(cardVariants) : cardVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={isInView ? "visible" : "hidden"}
    >
      <article
        className={`pricing-card pricing-card--${plan.id} group relative flex h-full flex-col ${
          isPopular ? "pricing-card--popular" : ""
        }`}
        aria-labelledby={`pricing-plan-${plan.id}-name`}
      >
        {isPopular && plan.popularBadge && (
          <div className="pricing-card__badge-wrap" aria-hidden="true">
            <span className="pricing-popular-badge inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wide">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="shrink-0"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {plan.popularBadge}
            </span>
          </div>
        )}

        <header className="pricing-card__header flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h3
              id={`pricing-plan-${plan.id}-name`}
              className="pricing-card__name text-xl font-bold"
            >
              {plan.name}
            </h3>
            <p className="pricing-card__tagline text-sm leading-relaxed">{plan.tagline}</p>
          </div>

          <PriceDisplay plan={plan} period={period} reduceMotion={reduceMotion} />
        </header>

        <div className="pricing-card__divider" aria-hidden="true" />

        <div className="pricing-card__body flex flex-1 flex-col">
          <p className="visually-hidden">{featuresHeading}</p>
          <ul className="pricing-card__features m-0 flex flex-col gap-3 p-0" role="list">
            {plan.features.map((feature) => (
              <li key={feature} className="pricing-card__feature flex items-start gap-3 text-sm leading-relaxed">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <footer className="pricing-card__footer mt-auto">
          <a
            href={plan.ctaHref}
            className={ctaClass}
            aria-label={plan.ctaAriaLabel}
          >
            {plan.cta}
          </a>
        </footer>
      </article>
    </motion.li>
  );
};

/* ─── Main ───────────────────────────────────────────────────── */

const PricingSectionContent: FC<PricingSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  billing,
  plans,
  featuresHeading,
  priceUpdated,
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  const handlePeriodChange = useCallback((next: BillingPeriod) => {
    setPeriod(next);
  }, []);

  const liveMessage = useMemo(() => {
    const periodLabel = period === "monthly" ? billing.monthly : billing.annual;
    return priceUpdated.replace("{period}", periodLabel);
  }, [billing.annual, billing.monthly, period, priceUpdated]);

  return (
    <div ref={ref} className="flex w-full flex-col gap-10 lg:gap-12">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        align="center"
      />

      <BillingToggle
        period={period}
        onChange={handlePeriodChange}
        labels={billing}
        reduceMotion={reduceMotion}
      />

      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </p>

      <motion.ul
        className="pricing-grid m-0 w-full list-none p-0"
        role="list"
        aria-label={headline}
        initial={reduceMotion ? false : "hidden"}
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0 } } }}
      >
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            period={period}
            index={index}
            featuresHeading={featuresHeading}
            isInView={isInView}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default PricingSectionContent;

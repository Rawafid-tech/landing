import { motion, useReducedMotion } from "motion/react";
import type { FC } from "react";
import CountUp, { formatStatValue } from "./CountUp";
import ScrollReveal from "./ScrollReveal";
import StatIcon, { type MarketStatIcon } from "./StatIcon";

export interface MarketStat {
  id: string;
  icon: MarketStatIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  labelPrimary: string;
  labelSecondary: string;
}

export interface MarketProblemStatsContentProps {
  eyebrow: string;
  stats: readonly MarketStat[];
}

const MarketProblemStatsContent: FC<MarketProblemStatsContentProps> = ({
  eyebrow,
  stats,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex flex-col gap-8 md:gap-10">
      <ScrollReveal className="market-stats__header">
        <p className="market-stats__eyebrow">
          <span className="market-stats__eyebrow-icon" aria-hidden="true">
            <StatIcon name="insights" />
          </span>
          <span>{eyebrow}</span>
        </p>
      </ScrollReveal>

      <dl className="market-stats__grid">
        {stats.map((stat, index) => {
          const staticValue = formatStatValue(
            stat.value,
            stat.prefix,
            stat.suffix,
            stat.unit,
          );
          const ariaLabel = `${staticValue} — ${stat.labelPrimary} ${stat.labelSecondary}`;

          return (
            <ScrollReveal
              key={stat.id}
              delay={index * 0.07}
              className="market-stats__item-wrap"
            >
              <div
                className="market-stats__item group"
                role="group"
                aria-label={ariaLabel}
              >
                <motion.div
                  className={`market-stats__icon market-stats__icon--${stat.icon}`}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    delay: index * 0.07 + 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <StatIcon name={stat.icon} aria-hidden="true" />
                </motion.div>

                <dt className="mb-3">
                  <span className="sr-only">{staticValue}</span>
                  <span
                    className="inline-flex flex-wrap items-baseline gap-x-1.5 text-[clamp(2.5rem,6vw,3.25rem)] font-bold leading-none tracking-tight text-[var(--color-gray-900)]"
                    aria-hidden="true"
                  >
                    <CountUp
                      value={stat.value}
                      prefix={stat.prefix}
                      className="market-stats__value tabular-nums"
                    />
                    {stat.suffix ? (
                      <span className="text-[0.72em] font-bold text-[var(--color-primary)]">
                        {stat.suffix}
                      </span>
                    ) : null}
                    {stat.unit ? (
                      <span className="text-[0.38em] font-semibold tracking-normal text-[var(--color-gray-600)]">
                        {stat.unit}
                      </span>
                    ) : null}
                  </span>
                </dt>

                <dd className="space-y-1">
                  <span className="block text-base font-semibold leading-snug text-[var(--color-gray-800)]">
                    {stat.labelPrimary}
                  </span>
                  <span className="block text-sm leading-relaxed text-[var(--color-gray-500)]">
                    {stat.labelSecondary}
                  </span>
                </dd>
              </div>
            </ScrollReveal>
          );
        })}
      </dl>
    </div>
  );
};

export default MarketProblemStatsContent;

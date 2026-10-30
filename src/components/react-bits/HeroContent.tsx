import { motion, useReducedMotion } from "motion/react";
import type { FC } from "react";
import BlurText from "./BlurText";
import RotatingText from "./RotatingText";

export interface HeroContentProps {
  badge: string;
  headlinePrefix: string;
  rotatingWords: readonly string[];
  subheadline: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  trustBadges: readonly string[];
}

const HeroContent: FC<HeroContentProps> = ({
  badge,
  headlinePrefix,
  rotatingWords,
  subheadline,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
  trustBadges,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero__content">
      <motion.div
        className="hero__badge"
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.span
          className="hero__badge-inner"
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: 0.8,
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          {badge}
        </motion.span>
      </motion.div>

      <h1 className="hero__headline">
        <motion.span
          className="hero__headline-line"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.12,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {headlinePrefix}
        </motion.span>
        <span className="hero__headline-accent">
          <RotatingText words={rotatingWords} />
        </span>
      </h1>

      <BlurText className="hero__subheadline-wrap" delay={0.55}>
        <p className="hero__subheadline">{subheadline}</p>
      </BlurText>

      <motion.div
        className="hero__actions"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href={ctaPrimaryHref} className="btn btn-primary btn-large hero__cta-primary">
          {ctaPrimary}
        </a>

        <a href={ctaSecondaryHref} className="btn btn-large hero__cta-secondary">
          {ctaSecondary}
        </a>
      </motion.div>

      <ul className="hero__trust-list" role="list">
        {trustBadges.map((item, index) => (
          <motion.li
            key={item}
            className="hero__trust-item"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.85 + index * 0.12,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <svg
              className="hero__trust-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HeroContent;

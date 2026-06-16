import { motion, useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
} from "react";
import Magnet from "./Magnet";

/* ─── Types ──────────────────────────────────────────────────── */

export interface FinalCtaSectionContentProps {
  icon: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaPrimaryAriaLabel: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  ctaSecondaryAriaLabel: string;
  trustBadges: readonly string[];
  trustListAriaLabel: string;
}

/* ─── Animation ──────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, amount: 0.35, margin: "0px 0px -8% 0px" } as const;

/* ─── Helpers ────────────────────────────────────────────────── */

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function TrustCheckIcon() {
  return (
    <svg
      className="final-cta-section__trust-icon"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── CTA button ─────────────────────────────────────────────── */

interface CtaButtonProps {
  href: string;
  ariaLabel: string;
  variant: "primary" | "secondary";
  children: string;
  magnetDisabled: boolean;
}

const CtaButton: FC<CtaButtonProps> = ({
  href,
  ariaLabel,
  variant,
  children,
  magnetDisabled,
}) => {
  const external = isExternalHref(href);
  const className =
    variant === "primary"
      ? "final-cta-section__btn final-cta-section__btn--primary"
      : "final-cta-section__btn final-cta-section__btn--secondary";

  const link = (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );

  if (magnetDisabled) {
    return <div className="final-cta-section__action">{link}</div>;
  }

  return (
    <div className="final-cta-section__action">
      <Magnet padding={72} magnetStrength={2.5} disabled={magnetDisabled}>
        {link}
      </Magnet>
    </div>
  );
};

/* ─── Main component ─────────────────────────────────────────── */

const FinalCtaSectionContent: FC<FinalCtaSectionContentProps> = ({
  icon,
  headline,
  subheadline,
  ctaPrimary,
  ctaPrimaryHref,
  ctaPrimaryAriaLabel,
  ctaSecondary,
  ctaSecondaryHref,
  ctaSecondaryAriaLabel,
  trustBadges,
  trustListAriaLabel,
}) => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [magnetDisabled, setMagnetDisabled] = useState(true);

  const syncMagnet = useCallback(() => {
    setMagnetDisabled(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    syncMagnet();

    const mediaQuery = window.matchMedia("(pointer: fine)");
    mediaQuery.addEventListener("change", syncMagnet);
    return () => mediaQuery.removeEventListener("change", syncMagnet);
  }, [syncMagnet]);

  const motionEnabled = isMounted && !reduceMotion;

  const reveal = (delay = 0) =>
    motionEnabled
      ? {
          initial: { opacity: 1, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEWPORT,
          transition: { duration: 0.55, ease: EASE, delay },
        }
      : {};

  return (
    <div ref={sectionRef} className="final-cta-section__inner">
      <div className="final-cta-section__panel">
        <div className="final-cta-section__backdrop" aria-hidden="true">
          <div className="final-cta-section__mesh" />
          <div className="final-cta-section__grid" />
          <div className="final-cta-section__glow final-cta-section__glow--start" />
          <div className="final-cta-section__glow final-cta-section__glow--end" />
        </div>

        <div className="final-cta-section__content">
          <motion.div className="final-cta-section__heading" {...reveal(0.08)}>
            <span className="final-cta-section__icon" aria-hidden="true">
              {icon}
            </span>
            <h2 className="final-cta-section__headline">{headline}</h2>
          </motion.div>

          <motion.p className="final-cta-section__subheadline" {...reveal(0.16)}>
            {subheadline}
          </motion.p>

          <motion.div className="final-cta-section__actions" {...reveal(0.24)}>
            <CtaButton
              href={ctaPrimaryHref}
              ariaLabel={ctaPrimaryAriaLabel}
              variant="primary"
              magnetDisabled={magnetDisabled || !motionEnabled}
            >
              {ctaPrimary}
            </CtaButton>

            <CtaButton
              href={ctaSecondaryHref}
              ariaLabel={ctaSecondaryAriaLabel}
              variant="secondary"
              magnetDisabled={magnetDisabled || !motionEnabled}
            >
              {ctaSecondary}
            </CtaButton>
          </motion.div>

          <motion.ul
            className="final-cta-section__trust"
            role="list"
            aria-label={trustListAriaLabel}
            {...reveal(0.32)}
          >
            {trustBadges.map((badge, index) => (
              <motion.li
                key={badge}
                className="final-cta-section__trust-item"
                {...(motionEnabled
                  ? {
                      initial: { opacity: 1, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: VIEWPORT,
                      transition: {
                        duration: 0.45,
                        ease: EASE,
                        delay: 0.38 + index * 0.08,
                      },
                    }
                  : {})}
              >
                <TrustCheckIcon />
                <span>{badge}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default FinalCtaSectionContent;

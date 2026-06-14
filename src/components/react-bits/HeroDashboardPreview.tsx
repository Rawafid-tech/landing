import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, FC } from "react";

export interface FloatingIcon {
  emoji: string;
  label: string;
  position: "top-start" | "top-end" | "bottom-start" | "bottom-end";
  delay: number;
}

interface HeroDashboardPreviewProps {
  imageSrc: string;
  imageAlt: string;
  floatingIcons: readonly FloatingIcon[];
}

const HeroDashboardPreview: FC<HeroDashboardPreviewProps> = ({
  imageSrc,
  imageAlt,
  floatingIcons,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-dashboard" data-hero-dashboard>
      <div
        className="hero-dashboard__frame"
        style={
          {
            "--tilt-x": "0deg",
            "--tilt-y": "0deg",
            "--parallax-x": "0px",
            "--parallax-y": "0px",
          } as CSSProperties
        }
      >
        <div className="hero-dashboard__shadow" aria-hidden="true" />

        <motion.div
          className="hero-dashboard__card"
          initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-dashboard__browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <img
            src={imageSrc}
            alt={imageAlt}
            width={1280}
            height={720}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-dashboard__image"
          />
        </motion.div>

        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.label}
            className={`hero-dashboard__float hero-dashboard__float--${icon.position}`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1 + icon.delay,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
            title={icon.label}
          >
            <span className="hero-dashboard__float-emoji">{icon.emoji}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroDashboardPreview;

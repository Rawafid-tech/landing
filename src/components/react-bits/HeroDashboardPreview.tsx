import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, FC } from "react";

export interface HeroImageSource {
  avifSrcSet: string;
  webpSrcSet: string;
  fallbackSrc: string;
  fallbackWidth: number;
  fallbackHeight: number;
  sizes: string;
}

export interface FloatingIcon {
  emoji: string;
  label: string;
  position: "top-start" | "top-end" | "bottom-start" | "bottom-end";
  delay: number;
}

interface HeroDashboardPreviewProps {
  image: HeroImageSource;
  imageAlt: string;
  floatingIcons: readonly FloatingIcon[];
}

const HeroDashboardPreview: FC<HeroDashboardPreviewProps> = ({
  image,
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

          <picture>
            <source type="image/avif" srcSet={image.avifSrcSet} sizes={image.sizes} />
            <source type="image/webp" srcSet={image.webpSrcSet} sizes={image.sizes} />
            <img
              src={image.fallbackSrc}
              srcSet={image.webpSrcSet}
              sizes={image.sizes}
              alt={imageAlt}
              width={image.fallbackWidth}
              height={image.fallbackHeight}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="hero-dashboard__image"
            />
          </picture>
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

import { motion, useReducedMotion } from "motion/react";
import { instantVariants } from "./instantVariants";
import type { FC } from "react";
import SectionHeader from "./SectionHeader";

export type ProblemImage = "dashboards" | "tracking" | "returns" | "manual" | "pricing" | "hidden-costs";

export interface Problem {
  id: string;
  title: string;
  description: string;
  image: ProblemImage;
}

export interface OptimizedImage {
  avifSrcSet: string;
  webpSrcSet: string;
  src: string;
  width: number;
  height: number;
}

export interface ProblemSectionContentProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  problems: readonly Problem[];
  images: Record<ProblemImage, OptimizedImage>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ProblemSectionContent: FC<ProblemSectionContentProps> = ({
  eyebrow,
  headline,
  subheadline,
  problems,
  images,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
        {problems.map((problem, index) => {
          const imageSrc = images[problem.image];
          
          return (
            <motion.article
              key={problem.id}
              className="problem-card group"
              role="listitem"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5% 0px" }}
              variants={reduceMotion ? instantVariants(cardVariants) : cardVariants}
            >
              <div className="problem-card__image-wrapper">
                <picture>
                  <source type="image/avif" srcSet={imageSrc.avifSrcSet} />
                  <source type="image/webp" srcSet={imageSrc.webpSrcSet} />
                  <img
                    src={imageSrc.src}
                    alt=""
                    width={imageSrc.width}
                    height={imageSrc.height}
                    loading="lazy"
                    decoding="async"
                    className="problem-card__image"
                  />
                </picture>
                <div className="problem-card__image-overlay" aria-hidden="true" />
              </div>

              <div className="problem-card__content">
                <h3 className="problem-card__title">{problem.title}</h3>
                <p className="problem-card__description">{problem.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemSectionContent;

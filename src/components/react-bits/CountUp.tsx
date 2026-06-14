import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export interface CountUpProps {
  value: number;
  prefix?: string;
  duration?: number;
  className?: string;
}

function easeOutQuart(progress: number): number {
  return 1 - Math.pow(1 - progress, 4);
}

function formatStatValue(
  value: number,
  prefix = "",
  suffix = "",
  unit?: string,
): string {
  const core = `${prefix}${value}${suffix}`;
  return unit ? `${core} ${unit}` : core;
}

const CountUp = ({
  value,
  prefix = "",
  duration = 1600,
  className = "",
}: CountUpProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(
    reduceMotion ? value : 0,
  );

  useEffect(() => {
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const element = ref.current;
    if (!element) return;

    let animationFrameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setDisplayValue(Math.round(easeOutQuart(progress) * value));

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(tick);
          }
        };

        animationFrameId = requestAnimationFrame(tick);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration, reduceMotion, value]);

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {prefix}
      {displayValue}
    </span>
  );
};

export { formatStatValue };
export default CountUp;

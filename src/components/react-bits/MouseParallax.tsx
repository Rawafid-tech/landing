import { useEffect, useRef, type FC } from "react";
import { useReducedMotion } from "motion/react";

interface MouseParallaxProps {
  /** Root element id to apply parallax transforms */
  targetId: string;
  /** Max dashboard tilt in degrees */
  tilt?: number;
  /** Max background shift in pixels */
  shift?: number;
}

/**
 * React Bits — subtle viewport-wide mouse parallax for hero sections.
 * Tracks pointer anywhere on the page, lerps via rAF, pointer:fine only.
 */
const MouseParallax: FC<MouseParallaxProps> = ({
  targetId,
  tilt = 3.5,
  shift = 16,
}) => {
  const reduceMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const root = document.getElementById(targetId);
    if (!root) return;

    const abortController = new AbortController();
    const { signal } = abortController;

    const mesh = root.querySelector<HTMLElement>(".hero-background__mesh");
    const grid = root.querySelector<HTMLElement>(".hero-background__grid");
    const glowPrimary = root.querySelector<HTMLElement>(".hero-background__glow--primary");
    const glowAccent = root.querySelector<HTMLElement>(".hero-background__glow--accent");
    const dashboardFrame = root.querySelector<HTMLElement>(".hero-dashboard__frame");
    const heroContent = root.querySelector<HTMLElement>(".hero__content");
    const floatingIcons = root.querySelectorAll<HTMLElement>(".hero-dashboard__float");

    const floatFactors = [
      { x: 0.55, y: 0.45 },
      { x: -0.45, y: 0.5 },
      { x: 0.4, y: -0.55 },
      { x: -0.5, y: -0.4 },
    ];

    const onPointerMove = (event: PointerEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (vw === 0 || vh === 0) return;

      targetRef.current = {
        x: event.clientX / vw - 0.5,
        y: event.clientY / vh - 0.5,
      };
    };

    const resetTarget = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const tick = () => {
      const ease = 0.07;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;

      const { x, y } = currentRef.current;
      const isActive = Math.abs(x) > 0.002 || Math.abs(y) > 0.002;

      root.classList.toggle("hero--mouse-active", isActive);

      if (mesh) {
        mesh.style.transform = `translate3d(${(x * shift * 0.4).toFixed(2)}px, ${(y * shift * 0.35).toFixed(2)}px, 0) scale(1.02)`;
      }

      if (grid) {
        grid.style.transform = `translate3d(${(x * shift * 0.25).toFixed(2)}px, ${(y * shift * 0.2).toFixed(2)}px, 0)`;
      }

      if (dashboardFrame) {
        dashboardFrame.style.setProperty("--tilt-x", `${(y * -tilt).toFixed(3)}deg`);
        dashboardFrame.style.setProperty("--tilt-y", `${(x * tilt).toFixed(3)}deg`);
        dashboardFrame.style.setProperty("--parallax-x", `${(x * shift * 0.35).toFixed(2)}px`);
        dashboardFrame.style.setProperty("--parallax-y", `${(y * shift * 0.3).toFixed(2)}px`);
      }

      if (glowPrimary) {
        glowPrimary.style.transform = `translate3d(${(x * -shift).toFixed(2)}px, ${(y * -shift * 0.75).toFixed(2)}px, 0)`;
      }

      if (glowAccent) {
        glowAccent.style.transform = `translate3d(${(x * shift * 0.65).toFixed(2)}px, ${(y * shift * 0.55).toFixed(2)}px, 0)`;
      }

      if (heroContent) {
        heroContent.style.transform = `translate3d(${(x * -6).toFixed(2)}px, ${(y * -5).toFixed(2)}px, 0)`;
      }

      floatingIcons.forEach((icon, index) => {
        const factor = floatFactors[index % floatFactors.length];
        icon.style.transform = `translate3d(${(x * shift * factor.x).toFixed(2)}px, ${(y * shift * factor.y).toFixed(2)}px, 0)`;
      });

      rafRef.current = window.requestAnimationFrame(tick);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true, signal });
    document.addEventListener("pointerleave", resetTarget, { signal });
    rafRef.current = window.requestAnimationFrame(tick);

    const onPointerChange = () => {
      if (!finePointer.matches) resetTarget();
    };

    finePointer.addEventListener("change", onPointerChange, { signal });

    return () => {
      abortController.abort();
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      root.classList.remove("hero--mouse-active");

      mesh?.style.removeProperty("transform");
      grid?.style.removeProperty("transform");

      if (dashboardFrame) {
        dashboardFrame.style.removeProperty("--tilt-x");
        dashboardFrame.style.removeProperty("--tilt-y");
        dashboardFrame.style.removeProperty("--parallax-x");
        dashboardFrame.style.removeProperty("--parallax-y");
      }

      glowPrimary?.style.removeProperty("transform");
      glowAccent?.style.removeProperty("transform");
      heroContent?.style.removeProperty("transform");
      floatingIcons.forEach((icon) => icon.style.removeProperty("transform"));
    };
  }, [reduceMotion, shift, targetId, tilt]);

  return null;
};

export default MouseParallax;

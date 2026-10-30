import type { Variants } from "motion/react";

/**
 * Reduced-motion version of a variants map: same states, zero-duration transitions.
 *
 * Don't swap variants for `{}` when the user prefers reduced motion. The server can't
 * read that preference, so it renders the "hidden" state (inline `opacity: 0`). With
 * `{}` on the client, the "visible" label no longer exists, nothing overwrites that
 * inline style, and the content stays invisible. Keeping the states and dropping the
 * timing reveals the content immediately instead.
 */
export function instantVariants(variants: Variants): Variants {
  const instant = { duration: 0, delay: 0, staggerChildren: 0, delayChildren: 0 };

  return Object.fromEntries(
    Object.entries(variants).map(([label, target]) => [
      label,
      typeof target === "function"
        ? (...args: Parameters<typeof target>) => ({ ...target(...args), transition: instant })
        : { ...target, transition: instant },
    ]),
  ) as Variants;
}

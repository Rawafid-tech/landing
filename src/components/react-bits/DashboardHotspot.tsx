import { useReducedMotion } from "motion/react";
import type { FC } from "react";

export interface HotspotConfig {
  id: string;
  view: "overview" | "shipments" | "returns";
  /** % from left of the demo frame (LTR coordinate space) */
  x: number;
  /** % from top of the demo viewport (below browser chrome) */
  y: number;
}

interface DashboardHotspotProps {
  config: HotspotConfig;
  label: string;
  isActive: boolean;
  onActivate: (id: string) => void;
}

/**
 * A pulsing ring button positioned absolutely inside the pan/zoom layer.
 * Tooltip rendering is handled by the parent to avoid clipping issues.
 */
const DashboardHotspot: FC<DashboardHotspotProps> = ({
  config,
  label,
  isActive,
  onActivate,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      id={`hotspot-btn-${config.id}`}
      aria-label={label}
      aria-expanded={isActive}
      aria-haspopup="dialog"
      className={[
        "absolute z-10 -translate-x-1/2 -translate-y-1/2",
        "h-7 w-7 rounded-full",
        "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600",
        "transition-transform duration-200",
        isActive ? "scale-125" : "hover:scale-110",
      ].join(" ")}
      style={{ left: `${config.x}%`, top: `${config.y}%` }}
      onClick={() => onActivate(config.id)}
    >
      {/* Outer pulse ring — hidden when active or reduced-motion */}
      {!reduceMotion && !isActive && (
        <span
          className="absolute inset-0 rounded-full bg-blue-500 opacity-40 demo-hotspot-ping"
          aria-hidden="true"
        />
      )}

      {/* Secondary ring */}
      <span
        className={[
          "absolute inset-[-3px] rounded-full border transition-all duration-300",
          isActive
            ? "border-blue-400 opacity-80 scale-100"
            : "border-blue-300 opacity-50 scale-100",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Core dot */}
      <span
        className={[
          "absolute inset-0 rounded-full border-[1.5px] border-white shadow-md",
          "transition-all duration-200",
          isActive
            ? "bg-blue-600 shadow-blue-500/60 shadow-lg"
            : "bg-blue-500 hover:bg-blue-600",
        ].join(" ")}
        aria-hidden="true"
      />
    </button>
  );
};

export default DashboardHotspot;

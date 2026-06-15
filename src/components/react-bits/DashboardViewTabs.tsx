import { motion, useReducedMotion } from "motion/react";
import { useRef, type FC, type KeyboardEvent } from "react";

export type DemoView = "overview" | "shipments" | "returns";

interface Tab {
  id: DemoView;
  label: string;
}

interface DashboardViewTabsProps {
  tabs: readonly Tab[];
  activeTab: DemoView;
  onChange: (id: DemoView) => void;
  /** aria-label for the tablist element */
  ariaLabel: string;
}

/**
 * Animated tab bar for switching between dashboard views.
 * Uses motion layoutId for a sliding underline indicator.
 * Full keyboard navigation: arrow keys, Home, End.
 */
const DashboardViewTabs: FC<DashboardViewTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  ariaLabel,
}) => {
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const count = tabs.length;
    let next = index;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (index + 1) % count;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (index - 1 + count) % count;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = count - 1;
    } else {
      return;
    }

    e.preventDefault();
    tabRefs.current[next]?.focus();
    onChange(tabs[next].id);
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex items-center gap-1 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-1"
    >
      {tabs.map((tab, i) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            type="button"
            id={`demo-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`demo-panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={[
              "relative rounded-lg px-4 py-2 text-sm font-medium",
              "outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1",
              "transition-colors duration-150",
              isActive
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-gray-500)] hover:text-[var(--color-gray-700)]",
            ].join(" ")}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onClick={() => onChange(tab.id)}
          >
            {/* Sliding background pill */}
            {isActive && (
              <motion.span
                layoutId={reduceMotion ? undefined : "demo-tab-bg"}
                className="absolute inset-0 rounded-lg bg-[var(--bg-primary)] shadow-sm"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-hidden="true"
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default DashboardViewTabs;

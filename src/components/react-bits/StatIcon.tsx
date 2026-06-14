import type { FC, SVGProps } from "react";

export type MarketStatIcon =
  | "merchants"
  | "carriers"
  | "time"
  | "market"
  | "insights";

interface StatIconProps extends SVGProps<SVGSVGElement> {
  name: MarketStatIcon;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<MarketStatIcon, FC<SVGProps<SVGSVGElement>>> = {
  insights: (props) => (
    <svg {...iconProps} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-5 4 3 5-7" />
    </svg>
  ),
  merchants: (props) => (
    <svg {...iconProps} {...props}>
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="3.25" />
      <path d="M22 19v-1a3 3 0 0 0-2.2-2.87" />
      <path d="M16 3.3a3.25 3.25 0 0 1 0 6.3" />
    </svg>
  ),
  carriers: (props) => (
    <svg {...iconProps} {...props}>
      <path d="M14 18V7.2a1.2 1.2 0 0 0-1.2-1.2H3.2A1.2 1.2 0 0 0 2 7.2V16a1 1 0 0 0 1 1h1.2" />
      <path d="M15 18h3.3" />
      <path d="M19.8 18H21a1 1 0 0 0 1-1v-2.8a1 1 0 0 0-.76-.97l-1.8-.54a1.2 1.2 0 0 1-.84-1.14V10a1 1 0 0 0-1-1h-1.8" />
      <circle cx="6.5" cy="18" r="1.5" />
      <circle cx="17.5" cy="18" r="1.5" />
    </svg>
  ),
  time: (props) => (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 8v4.2l2.8 1.6" />
    </svg>
  ),
  market: (props) => (
    <svg {...iconProps} {...props}>
      <path d="M4 19V11" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V8" />
    </svg>
  ),
};

const StatIcon: FC<StatIconProps> = ({ name, ...props }) => {
  const Icon = icons[name];
  return <Icon {...props} />;
};

export default StatIcon;

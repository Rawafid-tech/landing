import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FC,
  type ReactElement,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "motion/react";
import SectionHeader from "./SectionHeader";
import DashboardViewTabs, { type DemoView } from "./DashboardViewTabs";
import DashboardHotspot, { type HotspotConfig } from "./DashboardHotspot";
import TiltCard from "./TiltCard";

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */

type ShipStatus   = "delivered" | "transit" | "pending" | "failed";
type ReturnStatus = "pending"   | "collected" | "refunded";

interface ShipRow    { id:string; ref:string; customer:string; city:string; courier:string; status:ShipStatus;   date:string; amount:string }
interface ReturnRow  { id:string; ref:string; shipRef:string; customer:string; reason:string; courier:string; status:ReturnStatus; date:string }
interface StatData   { id:string; label:string; value:string; sub:string; change:string; positive:boolean; spark:number[]; color:string }
interface FilterItem { id:string; label:string; count:number }

interface DemoLocaleData {
  greeting:         string;
  date:             string;
  createBtn:        string;
  searchPlaceholder:string;
  sidebarItems:     { id:string; label:string; view?:DemoView; badge?:string; badgeColor?:string }[];
  userLabel:        string;
  userEmail:        string;
  overviewStats:    StatData[];
  chartLabel:       string;
  chartLegend:      [string, string];
  chartLabels:      string[];
  recentTitle:      string;
  viewAll:          string;
  courierTitle:     string;
  couriers:         { name:string; pct:number; color:string }[];
  shipmentsTitle:   string;
  returnsTitle:     string;
  shipmentFilters:  FilterItem[];
  shipColHeaders:   string[];
  returnColHeaders: string[];
  returnStats:      { label:string; value:string; color:string }[];
  statusLabel:      Record<ShipStatus,   string>;
  returnStatusLabel:Record<ReturnStatus, string>;
  shipRows:         ShipRow[];
  returnRows:       ReturnRow[];
  todayStats:       { label:string; value:string; icon:string }[];
  returnProgressLabels: [string,string,string];
}

export interface DashboardPreviewContentProps {
  locale?: "ar" | "en";
  eyebrow: string;
  headline: string;
  subheadline: string;
  tabs: readonly { id: "overview"|"shipments"|"returns"; label:string }[];
  hotspots: readonly {
    id:string; view:"overview"|"shipments"|"returns";
    title:string; description:string;
    countUp?:{ value:number; suffix:string };
    navigatesTo?:"overview"|"shipments"|"returns";
  }[];
  hints:    { drag:string; click:string };
  controls: { zoomIn:string; zoomOut:string; zoomReset:string; closeHotspot:string };
  cta: { primary:string; primaryHref:string; primaryAriaLabel:string;
         secondary:string; secondaryHref:string; secondaryAriaLabel:string };
  ariaLabel: string;
}

/* ═══════════════════════════════════════════════════════════════
   FIXTURE DATA
═══════════════════════════════════════════════════════════════ */

const CHART_DATA = {
  primary:   [45,52,48,67,61,73,69,82,75,89,81,95,88,92],
  secondary: [41,47,43,61,55,66,63,74,68,81,73,87,80,84],
};

const AR_DEMO: DemoLocaleData = {
  greeting:  "أهلاً، أحمد 👋",
  date:      "الإثنين، 15 يونيو 2026",
  createBtn: "+ إنشاء شحنة",
  searchPlaceholder: "ابحث...",
  sidebarItems: [
    { id:"overview",     label:"نظرة عامة" },
    { id:"shipments",    label:"الشحنات",    view:"shipments", badge:"87", badgeColor:"bg-blue-500"  },
    { id:"returns",      label:"المرتجعات",  view:"returns",   badge:"4",  badgeColor:"bg-red-500"   },
    { id:"integrations", label:"التكاملات" },
    { id:"settings",     label:"الإعدادات"  },
  ],
  userLabel: "أحمد محمد",
  userEmail: "ahmed@rawafid.com",
  overviewStats: [
    { id:"total",     label:"إجمالي الشحنات",  value:"1,247",      sub:"هذا الشهر",        change:"+12%",  positive:true,  spark:[78,83,71,95,87,102,92], color:"#3b82f6" },
    { id:"delivered", label:"نسبة التسليم",     value:"89.3%",      sub:"متوسط الشهر",      change:"+2.1%", positive:true,  spark:[87,88,87.8,89,89.3,89.1,89.5], color:"#10b981" },
    { id:"cod",       label:"COD محصّل",        value:"34,820",     sub:"ج.م هذا الشهر",    change:"+8%",   positive:true,  spark:[2800,3100,2700,3600,3200,3800,3400], color:"#8b5cf6" },
  ],
  chartLabel:  "الشحنات — آخر 14 يوم",
  chartLegend: ["شحنات مُنشأة", "تم التسليم"],
  chartLabels: ["1 يون","3 يون","5 يون","7 يون","9 يون","11 يون","13 يون","15 يون"],
  recentTitle: "آخر الشحنات",
  viewAll:     "عرض الكل",
  courierTitle:"أداء الشركات",
  couriers: [
    { name:"Bosta",  pct:65, color:"bg-orange-500" },
    { name:"J&T",    pct:22, color:"bg-red-500"    },
    { name:"Aramex", pct:13, color:"bg-yellow-500" },
  ],
  shipmentsTitle: "الشحنات",
  returnsTitle:   "المرتجعات",
  shipmentFilters: [
    { id:"all",       label:"الكل",          count:87 },
    { id:"transit",   label:"في الطريق",     count:23 },
    { id:"pending",   label:"في الانتظار",   count:15 },
    { id:"delivered", label:"تم التسليم",    count:45 },
    { id:"failed",    label:"فاشلة",         count:4  },
  ],
  shipColHeaders:   ["الشحنة","العميل","المدينة","الشركة","الحالة","المبلغ","التاريخ"],
  returnColHeaders: ["الرقم","العميل","السبب","الشركة","الحالة","التاريخ"],
  returnStats: [
    { label:"في الانتظار", value:"2",  color:"text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/40 dark:text-amber-400" },
    { label:"تم الاستلام", value:"1",  color:"text-blue-600  bg-blue-50  border-blue-200  dark:bg-blue-900/20  dark:border-blue-800/40  dark:text-blue-400"  },
    { label:"تم الاسترداد","value":"1",color:"text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/40 dark:text-green-400" },
  ],
  statusLabel:      { delivered:"تم التسليم", transit:"في الطريق", pending:"في الانتظار", failed:"فاشلة" },
  returnStatusLabel:{ pending:"في الانتظار", collected:"تم الاستلام", refunded:"تم الاسترداد" },
  todayStats: [
    { label:"اليوم",       value:"34", icon:"📦" },
    { label:"مُسلَّم",     value:"28", icon:"✅" },
    { label:"في الطريق",  value:"12", icon:"🚚" },
    { label:"فاشلة",      value:"2",  icon:"⚠️" },
  ],
  returnProgressLabels: ["طُلب","جُمع","استُرد"],
  shipRows: [
    { id:"1",ref:"#RW-2847",customer:"أحمد محمد",    city:"القاهرة",    courier:"Bosta", status:"delivered",amount:"450 ج.م",date:"14 يون" },
    { id:"2",ref:"#RW-2846",customer:"سارة علي",     city:"الإسكندرية",courier:"Bosta", status:"transit",  amount:"320 ج.م",date:"14 يون" },
    { id:"3",ref:"#RW-2845",customer:"محمد خالد",   city:"الجيزة",     courier:"J&T",   status:"pending",  amount:"180 ج.م",date:"13 يون" },
    { id:"4",ref:"#RW-2844",customer:"نور حسن",      city:"المنصورة",  courier:"Bosta", status:"delivered",amount:"890 ج.م",date:"13 يون" },
    { id:"5",ref:"#RW-2843",customer:"علي سالم",     city:"القاهرة",   courier:"Aramex",status:"failed",   amount:"650 ج.م",date:"12 يون" },
    { id:"6",ref:"#RW-2842",customer:"ريم عمر",      city:"طنطا",      courier:"Bosta", status:"transit",  amount:"210 ج.م",date:"12 يون" },
    { id:"7",ref:"#RW-2841",customer:"كريم فاروق",  city:"القاهرة",   courier:"J&T",   status:"delivered",amount:"740 ج.م",date:"11 يون" },
    { id:"8",ref:"#RW-2840",customer:"منة الله عادل",city:"الإسكندرية",courier:"Bosta",status:"pending",  amount:"380 ج.م",date:"11 يون" },
  ],
  returnRows: [
    { id:"1",ref:"#RT-582",shipRef:"#RW-2831",customer:"خالد عمر",   reason:"رفض الاستلام", courier:"Bosta", status:"pending",   date:"14 يون" },
    { id:"2",ref:"#RT-581",shipRef:"#RW-2829",customer:"ليلى سمير",  reason:"منتج تالف",    courier:"J&T",   status:"collected", date:"13 يون" },
    { id:"3",ref:"#RT-580",shipRef:"#RW-2825",customer:"يوسف ناصر", reason:"تغيير رأي",    courier:"Bosta", status:"refunded",  date:"12 يون" },
    { id:"4",ref:"#RT-579",shipRef:"#RW-2820",customer:"هنا حسام",  reason:"عنوان خاطئ",  courier:"Aramex",status:"pending",   date:"11 يون" },
  ],
};

const EN_DEMO: DemoLocaleData = {
  greeting:  "Hello, Ahmed 👋",
  date:      "Monday, June 15, 2026",
  createBtn: "+ New Shipment",
  searchPlaceholder: "Search...",
  sidebarItems: [
    { id:"overview",     label:"Overview"     },
    { id:"shipments",    label:"Shipments",    view:"shipments", badge:"87", badgeColor:"bg-blue-500" },
    { id:"returns",      label:"Returns",      view:"returns",   badge:"4",  badgeColor:"bg-red-500"  },
    { id:"integrations", label:"Integrations" },
    { id:"settings",     label:"Settings"     },
  ],
  userLabel: "Ahmed Mohamed",
  userEmail: "ahmed@rawafid.com",
  overviewStats: [
    { id:"total",     label:"Total Shipments", value:"1,247",      sub:"this month",        change:"+12%",  positive:true,  spark:[78,83,71,95,87,102,92], color:"#3b82f6" },
    { id:"delivered", label:"Delivery Rate",   value:"89.3%",      sub:"monthly avg",       change:"+2.1%", positive:true,  spark:[87,88,87.8,89,89.3,89.1,89.5], color:"#10b981" },
    { id:"cod",       label:"COD Collected",   value:"34,820",     sub:"EGP this month",    change:"+8%",   positive:true,  spark:[2800,3100,2700,3600,3200,3800,3400], color:"#8b5cf6" },
  ],
  chartLabel:  "Shipments — Last 14 days",
  chartLegend: ["Created","Delivered"],
  chartLabels: ["Jun 1","Jun 3","Jun 5","Jun 7","Jun 9","Jun 11","Jun 13","Jun 15"],
  recentTitle: "Recent Shipments",
  viewAll:     "View all",
  courierTitle:"Courier Performance",
  couriers: [
    { name:"Bosta",  pct:65, color:"bg-orange-500" },
    { name:"J&T",    pct:22, color:"bg-red-500"    },
    { name:"Aramex", pct:13, color:"bg-yellow-500" },
  ],
  shipmentsTitle: "Shipments",
  returnsTitle:   "Returns",
  shipmentFilters: [
    { id:"all",       label:"All",         count:87 },
    { id:"transit",   label:"In Transit",  count:23 },
    { id:"pending",   label:"Pending",     count:15 },
    { id:"delivered", label:"Delivered",   count:45 },
    { id:"failed",    label:"Failed",      count:4  },
  ],
  shipColHeaders:   ["Shipment","Customer","City","Carrier","Status","Amount","Date"],
  returnColHeaders: ["Return #","Customer","Reason","Carrier","Status","Date"],
  returnStats: [
    { label:"Pending",   value:"2", color:"text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/40 dark:text-amber-400" },
    { label:"Collected", value:"1", color:"text-blue-600  bg-blue-50  border-blue-200  dark:bg-blue-900/20  dark:border-blue-800/40  dark:text-blue-400"  },
    { label:"Refunded",  value:"1", color:"text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/40 dark:text-green-400" },
  ],
  statusLabel:      { delivered:"Delivered", transit:"In Transit", pending:"Pending", failed:"Failed" },
  returnStatusLabel:{ pending:"Pending", collected:"Collected", refunded:"Refunded" },
  todayStats: [
    { label:"Today",      value:"34", icon:"📦" },
    { label:"Delivered",  value:"28", icon:"✅" },
    { label:"In Transit", value:"12", icon:"🚚" },
    { label:"Failed",     value:"2",  icon:"⚠️" },
  ],
  returnProgressLabels: ["Requested","Collected","Refunded"],
  shipRows: [
    { id:"1",ref:"#RW-2847",customer:"Ahmed Mohamed",  city:"Cairo",      courier:"Bosta", status:"delivered",amount:"450 EGP",date:"14 Jun" },
    { id:"2",ref:"#RW-2846",customer:"Sara Ali",       city:"Alexandria", courier:"Bosta", status:"transit",  amount:"320 EGP",date:"14 Jun" },
    { id:"3",ref:"#RW-2845",customer:"Mohamed Khaled", city:"Giza",       courier:"J&T",   status:"pending",  amount:"180 EGP",date:"13 Jun" },
    { id:"4",ref:"#RW-2844",customer:"Nour Hassan",    city:"Mansoura",   courier:"Bosta", status:"delivered",amount:"890 EGP",date:"13 Jun" },
    { id:"5",ref:"#RW-2843",customer:"Ali Salem",      city:"Cairo",      courier:"Aramex",status:"failed",   amount:"650 EGP",date:"12 Jun" },
    { id:"6",ref:"#RW-2842",customer:"Reem Omar",      city:"Tanta",      courier:"Bosta", status:"transit",  amount:"210 EGP",date:"12 Jun" },
    { id:"7",ref:"#RW-2841",customer:"Karim Farouk",   city:"Cairo",      courier:"J&T",   status:"delivered",amount:"740 EGP",date:"11 Jun" },
    { id:"8",ref:"#RW-2840",customer:"Menna Adel",     city:"Alexandria", courier:"Bosta", status:"pending",  amount:"380 EGP",date:"11 Jun" },
  ],
  returnRows: [
    { id:"1",ref:"#RT-582",shipRef:"#RW-2831",customer:"Khaled Omar",  reason:"Refused delivery",courier:"Bosta", status:"pending",   date:"14 Jun" },
    { id:"2",ref:"#RT-581",shipRef:"#RW-2829",customer:"Layla Samir",  reason:"Damaged product",  courier:"J&T",   status:"collected", date:"13 Jun" },
    { id:"3",ref:"#RT-580",shipRef:"#RW-2825",customer:"Youssef Nasser",reason:"Changed mind",    courier:"Bosta", status:"refunded",  date:"12 Jun" },
    { id:"4",ref:"#RT-579",shipRef:"#RW-2820",customer:"Hana Hossam",  reason:"Wrong address",    courier:"Aramex",status:"pending",   date:"11 Jun" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   HOTSPOT POSITIONS  (LTR %, from left / from top of viewport)
═══════════════════════════════════════════════════════════════ */

const HOTSPOT_LAYOUT: HotspotConfig[] = [
  { id:"stat-total",        view:"overview",  x:30,  y:27 },
  { id:"stat-delivered",    view:"overview",  x:57,  y:27 },
  { id:"stat-cod",          view:"overview",  x:83,  y:27 },
  { id:"sidebar-shipments", view:"overview",  x:10,  y:27 },
  { id:"sidebar-returns",   view:"overview",  x:10,  y:36 },
  { id:"create-shipment",   view:"shipments", x:87,  y:7  },
  { id:"shipment-row",      view:"shipments", x:55,  y:50 },
  { id:"return-row",        view:"returns",   x:50,  y:47 },
  { id:"return-status",     view:"returns",   x:73,  y:47 },
];

/* ═══════════════════════════════════════════════════════════════
   STYLE MAPS
═══════════════════════════════════════════════════════════════ */

const SHIP_STATUS: Record<ShipStatus, { dot:string; pill:string; label?:string }> = {
  delivered: { dot:"bg-emerald-500", pill:"bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" },
  transit:   { dot:"bg-blue-500",    pill:"bg-blue-50   text-blue-700   dark:bg-blue-900/40   dark:text-blue-400"   },
  pending:   { dot:"bg-amber-500",   pill:"bg-amber-50  text-amber-700  dark:bg-amber-900/40  dark:text-amber-500"  },
  failed:    { dot:"bg-red-500",     pill:"bg-red-50    text-red-700    dark:bg-red-900/40    dark:text-red-400"    },
};
const RETURN_STATUS: Record<ReturnStatus, { step:number; pill:string }> = {
  pending:   { step:0, pill:"bg-amber-50  text-amber-700  dark:bg-amber-900/40  dark:text-amber-500"  },
  collected: { step:1, pill:"bg-blue-50   text-blue-700   dark:bg-blue-900/40   dark:text-blue-400"   },
  refunded:  { step:2, pill:"bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" },
};
const COURIER_PILL: Record<string, string> = {
  Bosta:  "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  "J&T":  "bg-red-100    text-red-700    dark:bg-red-900/40    dark:text-red-400",
  Aramex: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400",
};
const AVATAR_COLORS = [
  "bg-violet-500","bg-blue-500","bg-emerald-500","bg-rose-500",
  "bg-amber-500","bg-sky-500","bg-pink-500","bg-teal-500",
];

/* ═══════════════════════════════════════════════════════════════
   SIDEBAR ICONS
═══════════════════════════════════════════════════════════════ */

const SIDEBAR_ICONS: Record<string,(p?:{ size?:number })=>ReactElement> = {
  overview:     ({ size=13 } = {}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  shipments:    ({ size=13 } = {}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
  ),
  returns:      ({ size=13 } = {}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
    </svg>
  ),
  integrations: ({ size=13 } = {}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  settings:     ({ size=13 } = {}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    </svg>
  ),
};

/* ═══════════════════════════════════════════════════════════════
   useCountUp
═══════════════════════════════════════════════════════════════ */

function useCountUp(target: number, enabled: boolean, duration = 900): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    setVal(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(e * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, enabled, duration]);
  return val;
}

/* ═══════════════════════════════════════════════════════════════
   CHART UTILITIES
═══════════════════════════════════════════════════════════════ */

function smoothPath(data: number[], w: number, h: number, pad = 6): string {
  if (data.length < 2) return "";
  const max = Math.max(...data), min = Math.min(...data);
  const range = (max - min) * 1.15 || 1;
  const innerW = w - pad * 2, innerH = h - pad * 2;
  const pts: [number,number][] = data.map((v,i) => [
    pad + (i / (data.length - 1)) * innerW,
    pad + innerH - ((v - min) / range) * innerH,
  ]);
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [px,py] = pts[i-1], [cx,cy] = pts[i];
    const tension = (cx - px) / 2.8;
    d += ` C${(px+tension).toFixed(1)},${py.toFixed(1)} ${(cx-tension).toFixed(1)},${cy.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}`;
  }
  return d;
}
function areaPath(data: number[], w: number, h: number, pad = 6): string {
  const line = smoothPath(data, w, h, pad);
  if (!line) return "";
  return `${line} L${(w-pad).toFixed(1)},${(h-pad).toFixed(1)} L${pad},${(h-pad).toFixed(1)} Z`;
}

/* ─── Mini sparkline ─────────────────────────────────────────── */

function Sparkline({ data, color }: { data:number[]; color:string }) {
  const W = 46, H = 20;
  const line = smoothPath(data, W, H, 2);
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      <path d={areaPath(data, W, H, 2)} fill={color} fillOpacity={0.12} />
      <path d={line} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Area chart ─────────────────────────────────────────────── */

function AreaChart({ primaryData, secondaryData, labels, legend, labelColor }:{
  primaryData:number[]; secondaryData:number[];
  labels:string[]; legend:[string,string]; labelColor:string;
}) {
  const W = 320, H = 72, PAD = 8;
  const p1 = smoothPath(primaryData, W, H, PAD);
  const p2 = smoothPath(secondaryData, W, H, PAD);
  const a1 = areaPath(primaryData, W, H, PAD);
  const a2 = areaPath(secondaryData, W, H, PAD);

  const gridYs = [H*0.2, H*0.5, H*0.8];

  return (
    <div className="flex flex-col gap-1">
      {/* Legend */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-full bg-blue-500" />
          <span style={{ fontSize:"8px", color: labelColor }}>{legend[0]}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-full bg-emerald-500" />
          <span style={{ fontSize:"8px", color: labelColor }}>{legend[1]}</span>
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} aria-hidden="true" focusable="false"
        style={{ overflow:"visible" }}>
        <defs>
          <linearGradient id="grad-primary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.18}/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="grad-secondary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.15}/>
            <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {gridYs.map((y,i) => (
          <line key={i} x1={PAD} y1={y} x2={W-PAD} y2={y}
            stroke="currentColor" strokeOpacity={0.06} strokeWidth={0.8} strokeDasharray="3 3" />
        ))}

        {/* Area fills */}
        <path d={a1} fill="url(#grad-primary)" />
        <path d={a2} fill="url(#grad-secondary)" />

        {/* Lines */}
        <path d={p1} fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <path d={p2} fill="none" stroke="#10b981" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />

        {/* X-axis labels */}
        {labels.map((lbl, i) => {
          const x = PAD + (i / (labels.length - 1)) * (W - PAD * 2);
          return (
            <text key={i} x={x} y={H + 10} fontSize={7} fill={labelColor}
              textAnchor="middle" fontFamily="inherit">{lbl}</text>
          );
        })}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MICRO UI COMPONENTS
═══════════════════════════════════════════════════════════════ */

function CustomerAvatar({ name, index }: { name:string; index:number }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const initials = name.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase();
  return (
    <span className={`inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white ${color}`}
      style={{ fontSize:"7px", fontWeight:700 }}>
      {initials}
    </span>
  );
}

function CourierBadge({ courier }: { courier:string }) {
  const cls = COURIER_PILL[courier] ?? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
  return (
    <span className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${cls}`}>
      {courier}
    </span>
  );
}

function ShipStatusBadge({ status, label }: { status:ShipStatus; label:string }) {
  const { dot, pill } = SHIP_STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${pill}`}>
      <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}

function ReturnStatusBadge({ status, label }: { status:ReturnStatus; label:string }) {
  const { pill } = RETURN_STATUS[status];
  return <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${pill}`}>{label}</span>;
}

function ReturnProgress({ status, labels, step }: { status:ReturnStatus; labels:[string,string,string]; step:number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {labels.map((lbl, i) => (
        <div key={i} className="flex items-center gap-0.5">
          <div className={`h-1.5 w-1.5 rounded-full ${i <= step ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"}`} />
          {i < labels.length - 1 && (
            <div className={`h-px w-3 ${i < step ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════════════════════ */

function DashboardSidebar({ data, activeView, onNavigate }: {
  data:DemoLocaleData; activeView:DemoView; onNavigate:(v:DemoView)=>void;
}) {
  return (
    <aside
      className="flex w-[20%] flex-shrink-0 flex-col bg-slate-900 dark:bg-slate-950"
      aria-hidden="true"
    >
      {/* Logo */}
      <div className="flex h-[46px] flex-shrink-0 items-center gap-2 border-b border-slate-800 px-3">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-500/30">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white"
            strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
          </svg>
        </div>
        <span className="text-[11px] font-bold text-white">روافد</span>
        <span className="ms-auto rounded bg-slate-800 px-1 py-0.5 text-[7px] font-medium text-slate-500">v2</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        {data.sidebarItems.map((item) => {
          const Icon = SIDEBAR_ICONS[item.id] ?? SIDEBAR_ICONS.settings;
          const isActive = item.view === activeView || (!item.view && item.id === activeView);
          return (
            <button key={item.id} type="button" tabIndex={-1}
              onClick={() => item.view && onNavigate(item.view)}
              className={[
                "flex w-full items-center gap-2 rounded-lg px-2 py-[5px] text-left text-[9.5px] font-medium",
                "transition-colors duration-100",
                isActive
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200",
              ].join(" ")}>
              <Icon />
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <span className={`ms-auto flex-shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-bold text-white ${isActive ? "bg-white/20" : item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="mx-2 mb-1 h-px bg-slate-800" aria-hidden="true" />

      {/* User profile */}
      <div className="flex items-center gap-2 px-2.5 py-2.5">
        <div className="relative flex-shrink-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500">
            <span className="text-[8px] font-bold text-white">
              {data.userLabel.split(" ").slice(0,2).map(w=>w[0]).join("")}
            </span>
          </div>
          <span className="absolute -bottom-px -right-px h-2 w-2 rounded-full border border-slate-900 bg-emerald-500" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[8.5px] font-semibold text-slate-200">{data.userLabel}</p>
          <p className="truncate text-[7.5px] text-slate-500">{data.userEmail}</p>
        </div>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          className="flex-shrink-0 text-slate-600" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
        </svg>
      </div>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TOP BAR (shared)
═══════════════════════════════════════════════════════════════ */

function TopBar({ greeting, date, createBtn, searchPlaceholder, showSearch = false }: {
  greeting?:string; date?:string; createBtn:string;
  searchPlaceholder:string; showSearch?:boolean;
}) {
  return (
    <div className="flex h-[46px] flex-shrink-0 items-center justify-between border-b border-slate-100 bg-white px-3 dark:border-slate-800 dark:bg-slate-900">
      {/* Left: title / greeting */}
      <div className="flex flex-col min-w-0">
        {greeting
          ? <span className="text-[10.5px] font-semibold text-slate-800 dark:text-slate-100">{greeting}</span>
          : null}
        {date && <span className="text-[7.5px] text-slate-400">{date}</span>}
      </div>

      {/* Right: search + notification + create */}
      <div className="flex items-center gap-1.5">
        {showSearch && (
          <div className="flex h-6 items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 dark:border-slate-700 dark:bg-slate-800">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth={2} strokeLinecap="round" className="text-slate-400 flex-shrink-0"
              aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <span className="text-[8px] text-slate-400">{searchPlaceholder}</span>
          </div>
        )}
        {/* Bell */}
        <div className="relative flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"
            aria-hidden="true" focusable="false">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          <span className="absolute -right-px -top-px flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 text-[5px] font-bold text-white">3</span>
        </div>
        <button type="button" tabIndex={-1} aria-hidden="true"
          className="flex h-6 items-center gap-1 rounded-md bg-blue-600 px-2 text-[8.5px] font-semibold text-white shadow-sm shadow-blue-500/30 hover:bg-blue-700">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          {createBtn}
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OVERVIEW VIEW
═══════════════════════════════════════════════════════════════ */

function OverviewView({ data }: { data:DemoLocaleData }) {
  const mutedText = "text-slate-400 dark:text-slate-500";
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50 dark:bg-slate-800/40">
      <TopBar greeting={data.greeting} date={data.date} createBtn={data.createBtn}
        searchPlaceholder={data.searchPlaceholder} />

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 p-2.5">
        {data.overviewStats.map((s) => (
          <div key={s.id}
            className="flex flex-col rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm dark:border-slate-700/60 dark:bg-slate-800">
            {/* Top: icon + sparkline */}
            <div className="mb-2 flex items-start justify-between">
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                s.id === "total"    ? "bg-blue-50   dark:bg-blue-900/30" :
                s.id === "delivered"? "bg-emerald-50 dark:bg-emerald-900/30" :
                                      "bg-violet-50  dark:bg-violet-900/30"
              }`}>
                {s.id === "total"    && <SIDEBAR_ICONS.shipments size={11} />}
                {s.id === "delivered"&& <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>}
                {s.id === "cod"      && <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
              </div>
              <Sparkline data={s.spark} color={s.color} />
            </div>
            {/* Value */}
            <span className="text-[13px] font-bold leading-tight text-slate-800 dark:text-slate-50">
              {s.value}
            </span>
            {/* Label + change */}
            <div className="mt-1 flex items-center gap-1.5 flex-wrap">
              <span className={`text-[8px] ${mutedText}`}>{s.label}</span>
              <span className={`inline-flex items-center gap-0.5 text-[8px] font-semibold ${s.positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                {s.positive ? "↑" : "↓"} {s.change}
              </span>
            </div>
            <span className={`mt-0.5 text-[7.5px] ${mutedText}`}>{s.sub}</span>
          </div>
        ))}
      </div>

      {/* Chart + quick stats */}
      <div className="mx-2.5 mb-2 grid grid-cols-[1fr_auto] gap-2">
        {/* Area chart */}
        <div className="rounded-xl border border-slate-100 bg-white p-2.5 dark:border-slate-700/60 dark:bg-slate-800">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-slate-600 dark:text-slate-300">{data.chartLabel}</span>
          </div>
          <AreaChart
            primaryData={CHART_DATA.primary}
            secondaryData={CHART_DATA.secondary}
            labels={data.chartLabels}
            legend={data.chartLegend}
            labelColor="var(--color-gray-400, #94a3b8)"
          />
        </div>

        {/* Today stats column */}
        <div className="flex flex-col justify-between gap-1.5 rounded-xl border border-slate-100 bg-white p-2 dark:border-slate-700/60 dark:bg-slate-800" style={{ minWidth:"52px" }}>
          {data.todayStats.map((ts) => (
            <div key={ts.label} className="flex flex-col items-center text-center">
              <span style={{ fontSize:"11px" }}>{ts.icon}</span>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-100">{ts.value}</span>
              <span className={`text-[7px] leading-tight ${mutedText}`}>{ts.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent shipments + courier perf */}
      <div className="mx-2.5 mb-2.5 grid grid-cols-[1fr_auto] gap-2" style={{ minHeight:0 }}>
        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white dark:border-slate-700/60 dark:bg-slate-800">
          <div className="flex items-center justify-between border-b border-slate-100 px-2.5 py-1.5 dark:border-slate-700/60">
            <span className="text-[9px] font-semibold text-slate-600 dark:text-slate-300">{data.recentTitle}</span>
            <span className="text-[8px] text-blue-600 dark:text-blue-400 cursor-pointer">{data.viewAll}</span>
          </div>
          <table className="w-full" aria-hidden="true">
            <tbody>
              {data.shipRows.slice(0,4).map((row, i) => (
                <tr key={row.id} className="border-b border-slate-50 hover:bg-blue-50/30 dark:border-slate-700/30 dark:hover:bg-slate-700/20">
                  <td className="px-2 py-[4px]">
                    <div className="flex items-center gap-1.5">
                      <CustomerAvatar name={row.customer} index={i} />
                      <div>
                        <p className="text-[8.5px] font-medium text-slate-700 dark:text-slate-200">{row.customer}</p>
                        <p className="text-[7px] font-mono text-blue-500">{row.ref}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-1 py-[4px]"><CourierBadge courier={row.courier} /></td>
                  <td className="px-1 py-[4px]"><ShipStatusBadge status={row.status} label={data.statusLabel[row.status]} /></td>
                  <td className="px-2 py-[4px] text-right text-[8px] font-mono font-semibold text-slate-600 dark:text-slate-300">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Courier perf */}
        <div className="flex flex-col justify-center gap-1.5 rounded-xl border border-slate-100 bg-white p-2.5 dark:border-slate-700/60 dark:bg-slate-800" style={{ minWidth:"72px" }}>
          <span className="text-[8px] font-semibold text-slate-500 dark:text-slate-400">{data.courierTitle}</span>
          {data.couriers.map((c) => (
            <div key={c.name} className="flex flex-col gap-0.5">
              <div className="flex justify-between">
                <span className="text-[7.5px] font-medium text-slate-600 dark:text-slate-400">{c.name}</span>
                <span className="text-[7.5px] font-bold text-slate-700 dark:text-slate-300">{c.pct}%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                <div className={`h-full rounded-full ${c.color}`} style={{ width:`${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SHIPMENTS VIEW
═══════════════════════════════════════════════════════════════ */

function ShipmentsView({ data }: { data:DemoLocaleData }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visible = activeFilter === "all"
    ? data.shipRows
    : data.shipRows.filter(r => r.status === activeFilter);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50 dark:bg-slate-800/40">
      <TopBar createBtn={data.createBtn} searchPlaceholder={data.searchPlaceholder} showSearch />

      {/* Filter tabs with counts */}
      <div className="flex items-center gap-1 border-b border-slate-100 bg-white px-2.5 py-1.5 dark:border-slate-800 dark:bg-slate-900">
        {data.shipmentFilters.map((f) => (
          <button key={f.id} type="button" tabIndex={-1} aria-hidden="true"
            onClick={() => setActiveFilter(f.id)}
            className={[
              "flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-medium transition-colors",
              activeFilter === f.id
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700",
            ].join(" ")}>
            {f.label}
            <span className={`rounded-full px-1 text-[6.5px] font-bold ${activeFilter === f.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400"}`}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mx-2.5 mt-2 flex-1 overflow-hidden rounded-xl border border-slate-100 bg-white dark:border-slate-700/60 dark:bg-slate-800">
        <table className="w-full" aria-hidden="true">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 dark:border-slate-700/60 dark:bg-slate-800/80">
              {data.shipColHeaders.map(h => (
                <th key={h} className="px-2 py-1.5 text-left text-[8px] font-semibold uppercase tracking-wide text-slate-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((row, i) => (
              <tr key={row.id} className="border-b border-slate-50 hover:bg-blue-50/40 dark:border-slate-700/30 dark:hover:bg-slate-700/20">
                <td className="px-2 py-[5px] font-mono text-[8px] font-semibold text-blue-600 dark:text-blue-400">{row.ref}</td>
                <td className="px-2 py-[5px]">
                  <div className="flex items-center gap-1.5">
                    <CustomerAvatar name={row.customer} index={i} />
                    <span className="text-[8.5px] text-slate-700 dark:text-slate-300">{row.customer}</span>
                  </div>
                </td>
                <td className="px-2 py-[5px] text-[8.5px] text-slate-500 dark:text-slate-400">{row.city}</td>
                <td className="px-2 py-[5px]"><CourierBadge courier={row.courier} /></td>
                <td className="px-2 py-[5px]"><ShipStatusBadge status={row.status} label={data.statusLabel[row.status]} /></td>
                <td className="px-2 py-[5px] font-mono text-[8px] font-semibold text-slate-600 dark:text-slate-300">{row.amount}</td>
                <td className="px-2 py-[5px] text-[8px] text-slate-400">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RETURNS VIEW
═══════════════════════════════════════════════════════════════ */

function ReturnsView({ data }: { data:DemoLocaleData }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50 dark:bg-slate-800/40">
      {/* Top bar (no create button for returns) */}
      <div className="flex h-[46px] flex-shrink-0 items-center justify-between border-b border-slate-100 bg-white px-3 dark:border-slate-800 dark:bg-slate-900">
        <span className="text-[10.5px] font-semibold text-slate-800 dark:text-slate-100">{data.returnsTitle}</span>
        <div className="flex h-6 items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 dark:border-slate-700 dark:bg-slate-800">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" className="text-slate-400 flex-shrink-0"
            aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-[8px] text-slate-400">{data.searchPlaceholder}</span>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-2 p-2.5">
        {data.returnStats.map((rs) => (
          <div key={rs.label} className={`flex flex-col items-center rounded-xl border p-2 ${rs.color}`}>
            <span className="text-[15px] font-bold">{rs.value}</span>
            <span className="text-[8px] font-medium opacity-80">{rs.label}</span>
          </div>
        ))}
      </div>

      {/* Return progress legend */}
      <div className="mx-2.5 mb-1.5 flex items-center gap-4 rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 dark:border-slate-700/60 dark:bg-slate-800">
        {data.returnProgressLabels.map((lbl, i) => (
          <div key={lbl} className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
            <span className="text-[8px] text-slate-500 dark:text-slate-400">{i+1}. {lbl}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="mx-2.5 mb-2.5 flex-1 overflow-hidden rounded-xl border border-slate-100 bg-white dark:border-slate-700/60 dark:bg-slate-800">
        <table className="w-full" aria-hidden="true">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 dark:border-slate-700/60 dark:bg-slate-800/80">
              {data.returnColHeaders.map(h => (
                <th key={h} className="px-2 py-1.5 text-left text-[8px] font-semibold uppercase tracking-wide text-slate-400">{h}</th>
              ))}
              <th className="px-2 py-1.5 text-left text-[8px] font-semibold uppercase tracking-wide text-slate-400">
                {data.returnProgressLabels[0]}→
              </th>
            </tr>
          </thead>
          <tbody>
            {data.returnRows.map((row, i) => (
              <tr key={row.id} className="border-b border-slate-50 hover:bg-blue-50/40 dark:border-slate-700/30 dark:hover:bg-slate-700/20">
                <td className="px-2 py-[5px]">
                  <div>
                    <p className="font-mono text-[8px] font-semibold text-blue-600 dark:text-blue-400">{row.ref}</p>
                    <p className="text-[7px] text-slate-400">{row.shipRef}</p>
                  </div>
                </td>
                <td className="px-2 py-[5px]">
                  <div className="flex items-center gap-1.5">
                    <CustomerAvatar name={row.customer} index={i+4} />
                    <span className="text-[8.5px] text-slate-700 dark:text-slate-300">{row.customer}</span>
                  </div>
                </td>
                <td className="px-2 py-[5px] text-[8.5px] text-slate-500 dark:text-slate-400">{row.reason}</td>
                <td className="px-2 py-[5px]"><CourierBadge courier={row.courier} /></td>
                <td className="px-2 py-[5px]"><ReturnStatusBadge status={row.status} label={data.returnStatusLabel[row.status]} /></td>
                <td className="px-2 py-[5px] text-[8px] text-slate-400">{row.date}</td>
                <td className="px-2 py-[5px]">
                  <ReturnProgress status={row.status} labels={data.returnProgressLabels} step={RETURN_STATUS[row.status].step} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TOOLTIP CARD
═══════════════════════════════════════════════════════════════ */

function TooltipCard({ hotspot, onClose, closeLabel, onNavigate, navigateLabel }: {
  hotspot: DashboardPreviewContentProps["hotspots"][number];
  onClose:()=>void; closeLabel:string;
  onNavigate?:(v:DemoView)=>void; navigateLabel?:string;
}) {
  const reduceMotion = useReducedMotion();
  const countVal = useCountUp(hotspot.countUp?.value ?? 0, !!hotspot.countUp, 900);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog" aria-modal="false" aria-label={hotspot.title}
      initial={reduceMotion ? false : { opacity:0, y:-8, scale:0.95 }}
      animate={{ opacity:1, y:0, scale:1 }}
      exit={reduceMotion ? {} : { opacity:0, y:-6, scale:0.95 }}
      transition={{ type:"spring", stiffness:400, damping:28 }}
      className={[
        "absolute end-3 top-3 z-50 w-56",
        "rounded-xl border border-[var(--border-primary)] shadow-xl",
        "bg-white/96 backdrop-blur-md dark:bg-slate-900/96",
        "p-3 flex flex-col gap-2",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[11px] font-semibold leading-snug text-slate-800 dark:text-slate-100">{hotspot.title}</h3>
        <button type="button" aria-label={closeLabel} onClick={onClose}
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-slate-800 dark:hover:text-slate-300">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      {hotspot.countUp && (
        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-violet-50 px-2.5 py-2 dark:from-blue-950/50 dark:to-violet-950/50">
          <span className="font-mono text-base font-bold text-blue-700 dark:text-blue-300" dir="ltr">
            {countVal.toLocaleString()}{hotspot.countUp.suffix}
          </span>
        </div>
      )}
      <p className="text-[10.5px] leading-relaxed text-slate-500 dark:text-slate-400">{hotspot.description}</p>
      {hotspot.navigatesTo && onNavigate && navigateLabel && (
        <button type="button"
          onClick={() => { onNavigate(hotspot.navigatesTo!); onClose(); }}
          className="flex w-full items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-[10.5px] font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-150">
          {navigateLabel}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ZOOM CONTROLS
═══════════════════════════════════════════════════════════════ */

function ZoomControls({ zoom, onIn, onOut, onReset, labels }: {
  zoom:number; onIn:()=>void; onOut:()=>void; onReset:()=>void;
  labels:{ zoomIn:string; zoomOut:string; zoomReset:string };
}) {
  const btn = [
    "flex h-7 w-7 items-center justify-center rounded-lg",
    "border border-[var(--border-primary)] bg-white/92 dark:bg-slate-900/92",
    "text-slate-500 shadow-sm backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800",
    "outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    "transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed",
  ].join(" ");
  return (
    <div className="absolute bottom-3 end-3 z-20 flex items-center gap-1">
      <button type="button" aria-label={labels.zoomIn} onClick={onIn} disabled={zoom >= 2.5} className={btn}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" focusable="false">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
        </svg>
      </button>
      <button type="button" aria-label={labels.zoomOut} onClick={onOut} disabled={zoom <= 0.85} className={btn}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true" focusable="false">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6"/>
        </svg>
      </button>
      {zoom !== 1 && (
        <button type="button" aria-label={labels.zoomReset} onClick={onReset} className={btn}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
          </svg>
        </button>
      )}
      <span className="ms-0.5 rounded-md border border-[var(--border-primary)] bg-white/92 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 shadow-sm backdrop-blur-sm dark:bg-slate-900/92" dir="ltr">
        {Math.round(zoom * 100)}%
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DRAG HINT
═══════════════════════════════════════════════════════════════ */

function DragHint({ dragLabel, clickLabel }: { dragLabel:string; clickLabel:string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity:0, y:6 }}
      animate={{ opacity:1, y:0 }}
      exit={reduceMotion ? {} : { opacity:0, y:4 }}
      transition={{ delay:0.8, duration:0.4 }}
      className="absolute bottom-3 start-1/2 z-20 -translate-x-1/2 flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-white/92 px-3 py-1.5 shadow-sm backdrop-blur-sm dark:bg-slate-900/92"
      aria-hidden="true"
    >
      <span className="text-[9.5px] text-slate-400">✦ {clickLabel}</span>
      <span className="h-3 w-px bg-slate-200 dark:bg-slate-700" />
      <span className="text-[9.5px] text-slate-400">⠿ {dragLabel}</span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BROWSER BAR
═══════════════════════════════════════════════════════════════ */

function BrowserBar({ url }: { url:string }) {
  return (
    <div className="flex h-8 flex-shrink-0 items-center gap-2 border-b border-slate-200 bg-slate-100/80 px-3 dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-5 max-w-xs flex-1 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 shadow-xs dark:border-slate-600 dark:bg-slate-700">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" className="flex-shrink-0 text-emerald-500"
            aria-hidden="true" focusable="false">
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span className="truncate font-mono text-[8px] text-slate-400">{url}</span>
        </div>
      </div>
      {/* Fake browser actions */}
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {[0,1,2].map(i => (
          <div key={i} className="h-4 w-4 rounded bg-slate-200/70 dark:bg-slate-700/70" />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */

const EASE = [0.22, 1, 0.36, 1] as const;
const MIN_ZOOM = 0.85, MAX_ZOOM = 2.5, ZOOM_STEP = 0.18;

const DashboardPreviewContent: FC<DashboardPreviewContentProps> = ({
  locale = "ar", eyebrow, headline, subheadline,
  tabs, hotspots, hints, controls, cta, ariaLabel,
}) => {
  const reduceMotion  = useReducedMotion();
  const sectionRef    = useRef<HTMLDivElement>(null);
  const viewportRef   = useRef<HTMLDivElement>(null);
  const panStartRef   = useRef({ px:0, py:0, cx:0, cy:0 });

  const isInView = useInView(sectionRef, { once:true, margin:"-8% 0px" });
  const data = locale === "ar" ? AR_DEMO : EN_DEMO;

  const [activeView,   setActiveView]   = useState<DemoView>("overview");
  const [pan,          setPan]          = useState({ x:0, y:0 });
  const [zoom,         setZoom]         = useState(1);
  const [isPanning,    setIsPanning]    = useState(false);
  const [activeHotspot,setActiveHotspot]= useState<string|null>(null);
  const [hintVisible,  setHintVisible]  = useState(true);

  const activeHotspotData = hotspots.find(h => h.id === activeHotspot) ?? null;
  const tabLabel = tabs.find(t => t.id === activeView)?.label ?? "";

  const dismissHint    = useCallback(()  => setHintVisible(false), []);
  const handleViewChange= useCallback((view: DemoView) => { setActiveView(view); setActiveHotspot(null); }, []);
  const handleHotspotActivate= useCallback((id:string) => { dismissHint(); setActiveHotspot(p => p===id?null:id); }, [dismissHint]);
  const handleHotspotClose   = useCallback(() => setActiveHotspot(null), []);

  const handlePointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return;
    dismissHint();
    setIsPanning(true);
    panStartRef.current = { px:pan.x, py:pan.y, cx:e.clientX, cy:e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, [pan.x, pan.y, dismissHint]);

  const handlePointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setPan({ x: panStartRef.current.px + e.clientX - panStartRef.current.cx,
             y: panStartRef.current.py + e.clientY - panStartRef.current.cy });
  }, [isPanning]);

  const handlePointerUp = useCallback(() => setIsPanning(false), []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: globalThis.WheelEvent) => {
      e.preventDefault();
      setZoom(z => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, parseFloat((z + (e.deltaY>0 ? -ZOOM_STEP : ZOOM_STEP)).toFixed(2)))));
    };
    el.addEventListener("wheel", onWheel, { passive:false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const zoomIn    = useCallback(() => setZoom(z => Math.min(MAX_ZOOM, parseFloat((z+ZOOM_STEP).toFixed(2)))), []);
  const zoomOut   = useCallback(() => setZoom(z => Math.max(MIN_ZOOM, parseFloat((z-ZOOM_STEP).toFixed(2)))), []);
  const zoomReset = useCallback(() => { setZoom(1); setPan({x:0,y:0}); }, []);

  useEffect(() => { setPan({x:0,y:0}); setZoom(1); }, [activeView]);

  const visibleHotspots = HOTSPOT_LAYOUT.filter(h => h.view === activeView);
  const navigateBtnLabel = locale === "ar" ? "انتقل إلى" : "Go to";

  return (
    <motion.div
      ref={sectionRef}
      className="flex w-full flex-col gap-10 lg:gap-14"
      initial={reduceMotion ? false : { opacity:0, y:32 }}
      animate={isInView ? { opacity:1, y:0 } : { opacity:0, y:32 }}
      transition={{ duration:0.65, ease:EASE }}
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} align="center" />

      <div className="flex flex-col items-center gap-4">
        <DashboardViewTabs tabs={tabs} activeTab={activeView} onChange={handleViewChange} ariaLabel={ariaLabel} />

        <TiltCard tiltAmount={3} glareOpacity={0.06} className="w-full max-w-5xl">
          <div
            id={`demo-panel-${activeView}`}
            role="region"
            aria-label={`${ariaLabel} — ${tabLabel}`}
            aria-live="polite" aria-atomic="true"
            dir="ltr"
            className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-white shadow-2xl dark:bg-slate-900"
            style={{ aspectRatio:"8 / 5" }}
          >
            <BrowserBar url="app.rawafid.com" />

            <div
              ref={viewportRef}
              className={`relative overflow-hidden select-none ${isPanning ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ height:"calc(100% - 2rem)" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* Pan/zoom layer */}
              <div
                className="absolute inset-0 flex"
                style={{
                  transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,
                  transformOrigin:"center center",
                  willChange: isPanning || zoom !== 1 ? "transform" : "auto",
                  transition: isPanning ? "none" : "transform 0.2s ease-out",
                }}
              >
                <DashboardSidebar data={data} activeView={activeView} onNavigate={handleViewChange} />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeView}
                    className="flex min-h-0 flex-1 flex-col overflow-hidden"
                    initial={reduceMotion ? false : { opacity:0, x:10 }}
                    animate={{ opacity:1, x:0 }}
                    exit={reduceMotion ? {} : { opacity:0, x:-10 }}
                    transition={{ duration:0.18, ease:EASE }}
                  >
                    {activeView === "overview"  && <OverviewView data={data} />}
                    {activeView === "shipments" && <ShipmentsView data={data} />}
                    {activeView === "returns"   && <ReturnsView data={data} />}
                  </motion.div>
                </AnimatePresence>

                {/* Hotspot rings */}
                {visibleHotspots.map(cfg => {
                  const meta = hotspots.find(h => h.id === cfg.id);
                  if (!meta) return null;
                  return (
                    <DashboardHotspot
                      key={cfg.id} config={cfg} label={meta.title}
                      isActive={activeHotspot === cfg.id}
                      onActivate={handleHotspotActivate}
                    />
                  );
                })}
              </div>

              {/* Tooltip (outside pan layer) */}
              <AnimatePresence>
                {activeHotspotData && (
                  <TooltipCard
                    key={activeHotspotData.id}
                    hotspot={activeHotspotData}
                    onClose={handleHotspotClose}
                    closeLabel={controls.closeHotspot}
                    onNavigate={activeHotspotData.navigatesTo ? handleViewChange : undefined}
                    navigateLabel={activeHotspotData.navigatesTo
                      ? `${navigateBtnLabel} ${tabs.find(t => t.id === activeHotspotData.navigatesTo)?.label ?? ""}`
                      : undefined}
                  />
                )}
              </AnimatePresence>

              <ZoomControls zoom={zoom} onIn={zoomIn} onOut={zoomOut} onReset={zoomReset} labels={controls} />

              <AnimatePresence>
                {hintVisible && <DragHint dragLabel={hints.drag} clickLabel={hints.click} />}
              </AnimatePresence>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* CTAs */}
      <motion.div
        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        initial={reduceMotion ? false : { opacity:0, y:16 }}
        animate={isInView ? { opacity:1, y:0 } : { opacity:0, y:16 }}
        transition={{ duration:0.45, ease:EASE, delay:0.5 }}
      >
        <a href={cta.primaryHref} className="btn btn-primary btn-large" aria-label={cta.primaryAriaLabel}>{cta.primary}</a>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPreviewContent;

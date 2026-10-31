/**
 * Fixture data for the interactive dashboard preview (#demo section).
 * Everything here is rendered at build time — sparklines and the area chart
 * become static SVG paths, so the section ships no charting code.
 */
import type { Locale } from "../i18n";

export type DemoView = "overview" | "shipments" | "returns";
export type ShipStatus = "delivered" | "transit" | "pending" | "failed";
export type ReturnStatus = "pending" | "collected" | "refunded";
export type StatTone = "blue" | "green" | "navy";
export type TodayIcon = "package" | "check" | "truck" | "alert";

export interface ShipRow {
  id: string;
  ref: string;
  customer: string;
  city: string;
  courier: string;
  status: ShipStatus;
  date: string;
  amount: string;
}

export interface ReturnRow {
  id: string;
  ref: string;
  shipRef: string;
  customer: string;
  reason: string;
  courier: string;
  status: ReturnStatus;
  date: string;
}

export interface StatData {
  id: "total" | "delivered" | "cod";
  label: string;
  value: string;
  sub: string;
  change: string;
  positive: boolean;
  spark: number[];
  tone: StatTone;
}

export interface FilterItem {
  id: "all" | ShipStatus;
  label: string;
  count: number;
}

export interface SidebarItem {
  id: "overview" | "shipments" | "returns" | "integrations" | "settings";
  label: string;
  view?: DemoView;
  badge?: string;
  badgeTone?: "blue" | "red";
}

export interface DemoLocaleData {
  brand: string;
  greeting: string;
  date: string;
  createBtn: string;
  searchPlaceholder: string;
  sidebarItems: SidebarItem[];
  userLabel: string;
  userEmail: string;
  overviewStats: StatData[];
  chartLabel: string;
  chartLegend: [string, string];
  chartLabels: string[];
  recentTitle: string;
  viewAll: string;
  courierTitle: string;
  couriers: { name: string; pct: number }[];
  shipmentsTitle: string;
  returnsTitle: string;
  shipmentFilters: FilterItem[];
  shipColHeaders: string[];
  returnColHeaders: string[];
  returnProgressHeader: string;
  returnStats: { label: string; value: string; status: ReturnStatus }[];
  statusLabel: Record<ShipStatus, string>;
  returnStatusLabel: Record<ReturnStatus, string>;
  shipRows: ShipRow[];
  returnRows: ReturnRow[];
  todayStats: { label: string; value: string; icon: TodayIcon }[];
  returnProgressLabels: [string, string, string];
}

/* ─── Shared fixtures ─────────────────────────────────────── */

export const CHART_DATA = {
  primary: [45, 52, 48, 67, 61, 73, 69, 82, 75, 89, 81, 95, 88, 92],
  secondary: [41, 47, 43, 61, 55, 66, 63, 74, 68, 81, 73, 87, 80, 84],
};

/** Step index in the return workflow (requested → collected → refunded). */
export const RETURN_STEP: Record<ReturnStatus, number> = {
  pending: 0,
  collected: 1,
  refunded: 2,
};

/**
 * Hotspot anchor points, as % of the dashboard canvas (x from the inline-start
 * edge, y from the top). Inline-start means the dots mirror with the RTL layout.
 * Ids match `dashboardPreviewSection.hotspots` in the translations.
 */
export const HOTSPOT_LAYOUT: { id: string; view: DemoView; x: number; y: number }[] = [
  { id: "stat-total", view: "overview", x: 30, y: 16 },
  { id: "stat-delivered", view: "overview", x: 57, y: 16 },
  { id: "stat-cod", view: "overview", x: 83, y: 16 },
  { id: "sidebar-shipments", view: "overview", x: 13, y: 20.5 },
  { id: "sidebar-returns", view: "overview", x: 2.9, y: 27 },
  { id: "create-shipment", view: "shipments", x: 97.5, y: 2.5 },
  { id: "shipment-row", view: "shipments", x: 55, y: 27.5 },
  { id: "return-row", view: "returns", x: 50, y: 47 },
  { id: "return-status", view: "returns", x: 73, y: 47 },
];

/* ─── Locale data ─────────────────────────────────────────── */

const AR_DEMO: DemoLocaleData = {
  brand: "روافد",
  greeting: "أهلاً، أحمد 👋",
  date: "الإثنين، 15 يونيو 2026",
  createBtn: "إنشاء شحنة",
  searchPlaceholder: "ابحث...",
  sidebarItems: [
    { id: "overview", label: "نظرة عامة", view: "overview" },
    { id: "shipments", label: "الشحنات", view: "shipments", badge: "87", badgeTone: "blue" },
    { id: "returns", label: "المرتجعات", view: "returns", badge: "4", badgeTone: "red" },
    { id: "integrations", label: "التكاملات" },
    { id: "settings", label: "الإعدادات" },
  ],
  userLabel: "أحمد محمد",
  userEmail: "ahmed@rawafid.com",
  overviewStats: [
    { id: "total", label: "إجمالي الشحنات", value: "1,247", sub: "هذا الشهر", change: "+12%", positive: true, spark: [78, 83, 71, 95, 87, 102, 92], tone: "blue" },
    { id: "delivered", label: "نسبة التسليم", value: "89.3%", sub: "متوسط الشهر", change: "+2.1%", positive: true, spark: [87, 88, 87.8, 89, 89.3, 89.1, 89.5], tone: "green" },
    { id: "cod", label: "COD محصّل", value: "34,820", sub: "ج.م هذا الشهر", change: "+8%", positive: true, spark: [2800, 3100, 2700, 3600, 3200, 3800, 3400], tone: "navy" },
  ],
  chartLabel: "الشحنات — آخر 14 يوم",
  chartLegend: ["شحنات مُنشأة", "تم التسليم"],
  chartLabels: ["1 يون", "3 يون", "5 يون", "7 يون", "9 يون", "11 يون", "13 يون", "15 يون"],
  recentTitle: "آخر الشحنات",
  viewAll: "عرض الكل",
  courierTitle: "أداء الشركات",
  couriers: [
    { name: "Bosta", pct: 65 },
    { name: "J&T Express", pct: 22 },
    { name: "Aramex", pct: 13 },
  ],
  shipmentsTitle: "الشحنات",
  returnsTitle: "المرتجعات",
  shipmentFilters: [
    { id: "all", label: "الكل", count: 87 },
    { id: "transit", label: "في الطريق", count: 23 },
    { id: "pending", label: "في الانتظار", count: 15 },
    { id: "delivered", label: "تم التسليم", count: 45 },
    { id: "failed", label: "فاشلة", count: 4 },
  ],
  shipColHeaders: ["الشحنة", "العميل", "المدينة", "الشركة", "الحالة", "المبلغ", "التاريخ"],
  returnColHeaders: ["الرقم", "العميل", "السبب", "الشركة", "الحالة", "التاريخ"],
  returnProgressHeader: "المرحلة",
  returnStats: [
    { label: "في الانتظار", value: "2", status: "pending" },
    { label: "تم الاستلام", value: "1", status: "collected" },
    { label: "تم الاسترداد", value: "1", status: "refunded" },
  ],
  statusLabel: { delivered: "تم التسليم", transit: "في الطريق", pending: "في الانتظار", failed: "فاشلة" },
  returnStatusLabel: { pending: "في الانتظار", collected: "تم الاستلام", refunded: "تم الاسترداد" },
  todayStats: [
    { label: "اليوم", value: "34", icon: "package" },
    { label: "مُسلَّم", value: "28", icon: "check" },
    { label: "في الطريق", value: "12", icon: "truck" },
    { label: "فاشلة", value: "2", icon: "alert" },
  ],
  returnProgressLabels: ["طُلب", "جُمع", "استُرد"],
  shipRows: [
    { id: "1", ref: "#RW-2847", customer: "أحمد محمد", city: "القاهرة", courier: "Bosta", status: "delivered", amount: "450 ج.م", date: "14 يون" },
    { id: "2", ref: "#RW-2846", customer: "سارة علي", city: "الإسكندرية", courier: "Bosta", status: "transit", amount: "320 ج.م", date: "14 يون" },
    { id: "3", ref: "#RW-2845", customer: "محمد خالد", city: "الجيزة", courier: "J&T Express", status: "pending", amount: "180 ج.م", date: "13 يون" },
    { id: "4", ref: "#RW-2844", customer: "نور حسن", city: "المنصورة", courier: "Bosta", status: "delivered", amount: "890 ج.م", date: "13 يون" },
    { id: "5", ref: "#RW-2843", customer: "علي سالم", city: "القاهرة", courier: "Aramex", status: "failed", amount: "650 ج.م", date: "12 يون" },
    { id: "6", ref: "#RW-2842", customer: "ريم عمر", city: "طنطا", courier: "Bosta", status: "transit", amount: "210 ج.م", date: "12 يون" },
    { id: "7", ref: "#RW-2841", customer: "كريم فاروق", city: "القاهرة", courier: "J&T Express", status: "delivered", amount: "740 ج.م", date: "11 يون" },
    { id: "8", ref: "#RW-2840", customer: "منة الله عادل", city: "الإسكندرية", courier: "Bosta", status: "pending", amount: "380 ج.م", date: "11 يون" },
  ],
  returnRows: [
    { id: "1", ref: "#RT-582", shipRef: "#RW-2831", customer: "خالد عمر", reason: "رفض الاستلام", courier: "Bosta", status: "pending", date: "14 يون" },
    { id: "2", ref: "#RT-581", shipRef: "#RW-2829", customer: "ليلى سمير", reason: "منتج تالف", courier: "J&T Express", status: "collected", date: "13 يون" },
    { id: "3", ref: "#RT-580", shipRef: "#RW-2825", customer: "يوسف ناصر", reason: "تغيير رأي", courier: "Bosta", status: "refunded", date: "12 يون" },
    { id: "4", ref: "#RT-579", shipRef: "#RW-2820", customer: "هنا حسام", reason: "عنوان خاطئ", courier: "Aramex", status: "pending", date: "11 يون" },
  ],
};

const EN_DEMO: DemoLocaleData = {
  brand: "Rawafid",
  greeting: "Hello, Ahmed 👋",
  date: "Monday, June 15, 2026",
  createBtn: "New Shipment",
  searchPlaceholder: "Search...",
  sidebarItems: [
    { id: "overview", label: "Overview", view: "overview" },
    { id: "shipments", label: "Shipments", view: "shipments", badge: "87", badgeTone: "blue" },
    { id: "returns", label: "Returns", view: "returns", badge: "4", badgeTone: "red" },
    { id: "integrations", label: "Integrations" },
    { id: "settings", label: "Settings" },
  ],
  userLabel: "Ahmed Mohamed",
  userEmail: "ahmed@rawafid.com",
  overviewStats: [
    { id: "total", label: "Total Shipments", value: "1,247", sub: "this month", change: "+12%", positive: true, spark: [78, 83, 71, 95, 87, 102, 92], tone: "blue" },
    { id: "delivered", label: "Delivery Rate", value: "89.3%", sub: "monthly avg", change: "+2.1%", positive: true, spark: [87, 88, 87.8, 89, 89.3, 89.1, 89.5], tone: "green" },
    { id: "cod", label: "COD Collected", value: "34,820", sub: "EGP this month", change: "+8%", positive: true, spark: [2800, 3100, 2700, 3600, 3200, 3800, 3400], tone: "navy" },
  ],
  chartLabel: "Shipments — Last 14 days",
  chartLegend: ["Created", "Delivered"],
  chartLabels: ["Jun 1", "Jun 3", "Jun 5", "Jun 7", "Jun 9", "Jun 11", "Jun 13", "Jun 15"],
  recentTitle: "Recent Shipments",
  viewAll: "View all",
  courierTitle: "Courier Performance",
  couriers: [
    { name: "Bosta", pct: 65 },
    { name: "J&T Express", pct: 22 },
    { name: "Aramex", pct: 13 },
  ],
  shipmentsTitle: "Shipments",
  returnsTitle: "Returns",
  shipmentFilters: [
    { id: "all", label: "All", count: 87 },
    { id: "transit", label: "In Transit", count: 23 },
    { id: "pending", label: "Pending", count: 15 },
    { id: "delivered", label: "Delivered", count: 45 },
    { id: "failed", label: "Failed", count: 4 },
  ],
  shipColHeaders: ["Shipment", "Customer", "City", "Carrier", "Status", "Amount", "Date"],
  returnColHeaders: ["Return #", "Customer", "Reason", "Carrier", "Status", "Date"],
  returnProgressHeader: "Progress",
  returnStats: [
    { label: "Pending", value: "2", status: "pending" },
    { label: "Collected", value: "1", status: "collected" },
    { label: "Refunded", value: "1", status: "refunded" },
  ],
  statusLabel: { delivered: "Delivered", transit: "In Transit", pending: "Pending", failed: "Failed" },
  returnStatusLabel: { pending: "Pending", collected: "Collected", refunded: "Refunded" },
  todayStats: [
    { label: "Today", value: "34", icon: "package" },
    { label: "Delivered", value: "28", icon: "check" },
    { label: "In Transit", value: "12", icon: "truck" },
    { label: "Failed", value: "2", icon: "alert" },
  ],
  returnProgressLabels: ["Requested", "Collected", "Refunded"],
  shipRows: [
    { id: "1", ref: "#RW-2847", customer: "Ahmed Mohamed", city: "Cairo", courier: "Bosta", status: "delivered", amount: "450 EGP", date: "14 Jun" },
    { id: "2", ref: "#RW-2846", customer: "Sara Ali", city: "Alexandria", courier: "Bosta", status: "transit", amount: "320 EGP", date: "14 Jun" },
    { id: "3", ref: "#RW-2845", customer: "Mohamed Khaled", city: "Giza", courier: "J&T Express", status: "pending", amount: "180 EGP", date: "13 Jun" },
    { id: "4", ref: "#RW-2844", customer: "Nour Hassan", city: "Mansoura", courier: "Bosta", status: "delivered", amount: "890 EGP", date: "13 Jun" },
    { id: "5", ref: "#RW-2843", customer: "Ali Salem", city: "Cairo", courier: "Aramex", status: "failed", amount: "650 EGP", date: "12 Jun" },
    { id: "6", ref: "#RW-2842", customer: "Reem Omar", city: "Tanta", courier: "Bosta", status: "transit", amount: "210 EGP", date: "12 Jun" },
    { id: "7", ref: "#RW-2841", customer: "Karim Farouk", city: "Cairo", courier: "J&T Express", status: "delivered", amount: "740 EGP", date: "11 Jun" },
    { id: "8", ref: "#RW-2840", customer: "Menna Adel", city: "Alexandria", courier: "Bosta", status: "pending", amount: "380 EGP", date: "11 Jun" },
  ],
  returnRows: [
    { id: "1", ref: "#RT-582", shipRef: "#RW-2831", customer: "Khaled Omar", reason: "Refused delivery", courier: "Bosta", status: "pending", date: "14 Jun" },
    { id: "2", ref: "#RT-581", shipRef: "#RW-2829", customer: "Layla Samir", reason: "Damaged product", courier: "J&T Express", status: "collected", date: "13 Jun" },
    { id: "3", ref: "#RT-580", shipRef: "#RW-2825", customer: "Youssef Nasser", reason: "Changed mind", courier: "Bosta", status: "refunded", date: "12 Jun" },
    { id: "4", ref: "#RT-579", shipRef: "#RW-2820", customer: "Hana Hossam", reason: "Wrong address", courier: "Aramex", status: "pending", date: "11 Jun" },
  ],
};

export function getDemoData(locale: Locale): DemoLocaleData {
  return locale === "en" ? EN_DEMO : AR_DEMO;
}

/** Two-letter initials for the fake avatars. */
export function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/* ─── Build-time SVG path helpers ─────────────────────────── */

/**
 * Smooth cubic-bezier line through `data`, scaled into a w×h box with `pad` inset.
 * Pass `bounds` ([min, max]) to put several series on one shared y-scale.
 */
export function smoothPath(
  data: number[],
  w: number,
  h: number,
  pad = 6,
  bounds?: [number, number]
): string {
  if (data.length < 2) return "";
  const [min, max] = bounds ?? [Math.min(...data), Math.max(...data)];
  const range = (max - min) * 1.15 || 1;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const pts: [number, number][] = data.map((v, i) => [
    pad + (i / (data.length - 1)) * innerW,
    pad + innerH - ((v - min) / range) * innerH,
  ]);
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const tension = (cx - px) / 2.8;
    d += ` C${(px + tension).toFixed(1)},${py.toFixed(1)} ${(cx - tension).toFixed(1)},${cy.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)}`;
  }
  return d;
}

/** `smoothPath` closed down to the baseline, for area fills. */
export function areaPath(
  data: number[],
  w: number,
  h: number,
  pad = 6,
  bounds?: [number, number]
): string {
  const line = smoothPath(data, w, h, pad, bounds);
  if (!line) return "";
  return `${line} L${(w - pad).toFixed(1)},${(h - pad).toFixed(1)} L${pad},${(h - pad).toFixed(1)} Z`;
}

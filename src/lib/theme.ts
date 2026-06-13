export const THEME_STORAGE_KEY = "rawafid-theme";
export type Theme = "light" | "dark";

export function getStoredTheme(): Theme | null {
  if (typeof localStorage === "undefined") return null;
  const value = localStorage.getItem(THEME_STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
}

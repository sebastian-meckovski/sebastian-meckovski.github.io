// accentColors.ts
// Maps color scheme names to accent color values from globals.css

export const accentColors: Record<string, string> = {
  cyan: "#06b6d4",
  purple: "#8b5cf6",
  emerald: "#10b981",
  orange: "#f97316",
  rose: "#f43f5e",
  stone: "#78716c",
};

export function getAccentColor(scheme: string | undefined): string {
  return accentColors[scheme || "cyan"] || accentColors["cyan"];
}

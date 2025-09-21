export const themes = [
  { name: "light", label: "Light", backgroundColor: "#fefefe" },
  { name: "dark", label: "Dark", backgroundColor: "#0f172a" },
  {
    name: "auto",
    label: "Auto*",
    backgroundColor: "linear-gradient(#fefefe 50%, #0f172a 50%)",
  },
] as const;

export const colorSchemes = [
  { name: "cyan", label: "Cyan", color: "#06b6d4" },
  { name: "purple", label: "Purple", color: "#8b5cf6" },
  { name: "emerald", label: "Emerald", color: "#10b981" },
  { name: "orange", label: "Orange", color: "#f97316" },
  { name: "rose", label: "Rose", color: "#f43f5e" },
  { name: "stone", label: "Stone", color: "#78716c" },
] as const;

export type ThemeName = typeof themes[number]["name"];
export type ColorSchemeName = typeof colorSchemes[number]["name"];

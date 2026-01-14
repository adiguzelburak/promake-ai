export type ThemeColor = {
  id: string;
  name: string;
  primary: string;
  primaryForeground: string;
};

export type ThemeFont = {
  id: string;
  name: string;
  fontFamily: string;
};

export type ThemeRadius = {
  id: string;
  name: string;
  value: string;
};

export type ThemeSpacing = {
  id: string;
  name: string;
  base: string;
};

export const themeColors: ThemeColor[] = [
  {
    id: "zinc",
    name: "Zinc",
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "red",
    name: "Red",
    primary: "oklch(0.577 0.245 27.325)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "rose",
    name: "Rose",
    primary: "oklch(0.585 0.233 14.717)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "orange",
    name: "Orange",
    primary: "oklch(0.646 0.222 41.116)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "green",
    name: "Green",
    primary: "oklch(0.527 0.154 150.069)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "blue",
    name: "Blue",
    primary: "oklch(0.546 0.245 262.881)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    id: "yellow",
    name: "Yellow",
    primary: "oklch(0.795 0.184 86.047)",
    primaryForeground: "oklch(0.205 0 0)",
  },
  {
    id: "violet",
    name: "Violet",
    primary: "oklch(0.541 0.281 293.009)",
    primaryForeground: "oklch(0.985 0 0)",
  },
];

export const themeFonts: ThemeFont[] = [
  {
    id: "inter",
    name: "Inter",
    fontFamily:
      '"Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
  },
  {
    id: "mono",
    name: "Monospace",
    fontFamily:
      'ui-monospace, "SF Mono", "Roboto Mono", "Fira Code", Menlo, Monaco, monospace',
  },
];

export const themeRadii: ThemeRadius[] = [
  { id: "none", name: "None", value: "0" },
  { id: "sm", name: "Small", value: "0.375rem" },
  { id: "md", name: "Medium", value: "0.5rem" },
  { id: "lg", name: "Large", value: "0.625rem" },
  { id: "xl", name: "Extra Large", value: "0.75rem" },
  { id: "2xl", name: "2X Large", value: "1rem" },
];

export const themeSpacings: ThemeSpacing[] = [
  { id: "compact", name: "Compact", base: "0.2rem" },
  { id: "default", name: "Default", base: "0.25rem" },
  { id: "comfortable", name: "Comfortable", base: "0.3rem" },
];

export interface ThemeCustomization {
  colorId: string;
  fontId: string;
  radiusId: string;
  spacingId: string;
}

export const defaultThemeCustomization: ThemeCustomization = {
  colorId: "zinc",
  fontId: "inter",
  radiusId: "lg",
  spacingId: "default",
};

export function getThemeColor(id: string): ThemeColor | undefined {
  return themeColors.find((c) => c.id === id);
}

export function getThemeFont(id: string): ThemeFont | undefined {
  return themeFonts.find((f) => f.id === id);
}

export function getThemeRadius(id: string): ThemeRadius | undefined {
  return themeRadii.find((r) => r.id === id);
}

export function getThemeSpacing(id: string): ThemeSpacing | undefined {
  return themeSpacings.find((s) => s.id === id);
}

export function applyThemeCustomization(
  customization: ThemeCustomization
): void {
  const root = document.documentElement;

  const color = getThemeColor(customization.colorId);
  if (color) {
    root.style.setProperty("--primary", color.primary);
    root.style.setProperty("--primary-foreground", color.primaryForeground);
  }

  const font = getThemeFont(customization.fontId);
  if (font) {
    root.style.setProperty("--font-sans", font.fontFamily);
  }

  const radius = getThemeRadius(customization.radiusId);
  if (radius) {
    root.style.setProperty("--radius", radius.value);
  }

  const spacing = getThemeSpacing(customization.spacingId);
  if (spacing) {
    root.style.setProperty("--spacing-base", spacing.base);
  }
}

export const themeConfigCatalog = {
  colors: themeColors.map((c) => ({ id: c.id, name: c.name })),
  fonts: themeFonts.map((f) => ({ id: f.id, name: f.name })),
  radii: themeRadii.map((r) => ({ id: r.id, name: r.name })),
  spacings: themeSpacings.map((s) => ({ id: s.id, name: s.name })),
};

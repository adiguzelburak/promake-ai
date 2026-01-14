/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  type ThemeCustomization,
  defaultThemeCustomization,
  applyThemeCustomization,
  themeColors,
  themeFonts,
  themeRadii,
  themeSpacings,
  getThemeColor,
  getThemeFont,
  getThemeRadius,
  getThemeSpacing,
} from "@/lib/theme-config";

// Validate and fix customization values
function validateCustomization(
  customization: ThemeCustomization
): ThemeCustomization {
  return {
    colorId: getThemeColor(customization.colorId)
      ? customization.colorId
      : defaultThemeCustomization.colorId,
    fontId: getThemeFont(customization.fontId)
      ? customization.fontId
      : defaultThemeCustomization.fontId,
    radiusId: getThemeRadius(customization.radiusId)
      ? customization.radiusId
      : defaultThemeCustomization.radiusId,
    spacingId: getThemeSpacing(customization.spacingId)
      ? customization.spacingId
      : defaultThemeCustomization.spacingId,
  };
}

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultCustomization?: Partial<ThemeCustomization>;
  storageKey?: string;
  customizationStorageKey?: string;
};

type ThemeProviderState = {
  // Dark/Light mode
  theme: Theme;
  setTheme: (theme: Theme) => void;

  // Theme customization
  customization: ThemeCustomization;
  setColorId: (colorId: string) => void;
  setFontId: (fontId: string) => void;
  setRadiusId: (radiusId: string) => void;
  setSpacingId: (spacingId: string) => void;
  setCustomization: (customization: Partial<ThemeCustomization>) => void;
  resetCustomization: () => void;

  // Catalog references for easy access
  colors: typeof themeColors;
  fonts: typeof themeFonts;
  radii: typeof themeRadii;
  spacings: typeof themeSpacings;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  customization: defaultThemeCustomization,
  setColorId: () => null,
  setFontId: () => null,
  setRadiusId: () => null,
  setSpacingId: () => null,
  setCustomization: () => null,
  resetCustomization: () => null,
  colors: themeColors,
  fonts: themeFonts,
  radii: themeRadii,
  spacings: themeSpacings,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultCustomization,
  storageKey = "vite-ui-theme",
  customizationStorageKey = "vite-ui-theme-customization",
  ...props
}: ThemeProviderProps) {
  // Dark/Light mode state
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Theme customization state
  const [customization, setCustomizationState] = useState<ThemeCustomization>(
    () => {
      const stored = localStorage.getItem(customizationStorageKey);
      if (stored) {
        try {
          const parsed = {
            ...defaultThemeCustomization,
            ...JSON.parse(stored),
          };
          // Validate stored values - reset invalid ones to defaults
          return validateCustomization(parsed);
        } catch {
          return validateCustomization({
            ...defaultThemeCustomization,
            ...defaultCustomization,
          });
        }
      }
      return validateCustomization({
        ...defaultThemeCustomization,
        ...defaultCustomization,
      });
    }
  );

  // Apply dark/light mode
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Apply theme customization
  useEffect(() => {
    applyThemeCustomization(customization);
  }, [customization]);

  // Theme mode setter
  const setTheme = useCallback(
    (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setThemeState(theme);
    },
    [storageKey]
  );

  // Full customization setter
  const setCustomization = useCallback(
    (partial: Partial<ThemeCustomization>) => {
      setCustomizationState((prev) => {
        const updated = { ...prev, ...partial };
        localStorage.setItem(customizationStorageKey, JSON.stringify(updated));
        return updated;
      });
    },
    [customizationStorageKey]
  );

  // Individual setters
  const setColorId = useCallback(
    (colorId: string) => {
      setCustomization({ colorId });
    },
    [setCustomization]
  );

  const setFontId = useCallback(
    (fontId: string) => {
      setCustomization({ fontId });
    },
    [setCustomization]
  );

  const setRadiusId = useCallback(
    (radiusId: string) => {
      setCustomization({ radiusId });
    },
    [setCustomization]
  );

  const setSpacingId = useCallback(
    (spacingId: string) => {
      setCustomization({ spacingId });
    },
    [setCustomization]
  );

  // Reset to defaults
  const resetCustomization = useCallback(() => {
    localStorage.removeItem(customizationStorageKey);
    setCustomizationState(defaultThemeCustomization);
  }, [customizationStorageKey]);

  const value: ThemeProviderState = {
    theme,
    setTheme,
    customization,
    setColorId,
    setFontId,
    setRadiusId,
    setSpacingId,
    setCustomization,
    resetCustomization,
    colors: themeColors,
    fonts: themeFonts,
    radii: themeRadii,
    spacings: themeSpacings,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

// Convenience hook for just customization
export const useThemeCustomization = () => {
  const {
    customization,
    setColorId,
    setFontId,
    setRadiusId,
    setSpacingId,
    setCustomization,
    resetCustomization,
    colors,
    fonts,
    radii,
    spacings,
  } = useTheme();

  return {
    customization,
    setColorId,
    setFontId,
    setRadiusId,
    setSpacingId,
    setCustomization,
    resetCustomization,
    colors,
    fonts,
    radii,
    spacings,
  };
};

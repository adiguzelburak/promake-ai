/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  type SectionInstance,
  type SectionCategory,
  getSectionById,
} from "@/lib/section-registry";

interface BuilderState {
  sections: SectionInstance[];
}

interface BuilderContextType extends BuilderState {
  addSection: (variantId: string) => void;
  removeSection: (instanceId: string) => void;
  moveSection: (instanceId: string, direction: "up" | "down") => void;
  clearSections: () => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

let instanceCounter = 0;
function generateInstanceId(): string {
  return `section-${Date.now()}-${++instanceCounter}`;
}

const CATEGORY_ORDER: Record<SectionCategory, number> = {
  header: 0,
  hero: 1,
  features: 2,
};

function getCategoryOrder(variantId: string): number {
  const variant = getSectionById(variantId);
  return variant ? CATEGORY_ORDER[variant.category] : 999;
}

function sortSectionsByCategory(
  sections: SectionInstance[]
): SectionInstance[] {
  return [...sections].sort((a, b) => {
    return getCategoryOrder(a.variantId) - getCategoryOrder(b.variantId);
  });
}

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BuilderState>({
    sections: [],
  });

  const addSection = useCallback((variantId: string) => {
    const variant = getSectionById(variantId);
    if (!variant) return;

    setState((prev) => {
      const existingIndex = prev.sections.findIndex((section) => {
        const existingVariant = getSectionById(section.variantId);
        return existingVariant?.category === variant.category;
      });

      let newSections: SectionInstance[];

      if (existingIndex !== -1) {
        newSections = [...prev.sections];
        newSections[existingIndex] = {
          id: newSections[existingIndex].id,
          variantId,
        };
      } else {
        const newSection: SectionInstance = {
          id: generateInstanceId(),
          variantId,
        };
        const newCategoryOrder = getCategoryOrder(variantId);

        let insertIndex = prev.sections.length;
        for (let i = 0; i < prev.sections.length; i++) {
          const currentOrder = getCategoryOrder(prev.sections[i].variantId);
          if (newCategoryOrder < currentOrder) {
            insertIndex = i;
            break;
          }
        }

        newSections = [...prev.sections];
        newSections.splice(insertIndex, 0, newSection);
      }

      return {
        ...prev,
        sections: sortSectionsByCategory(newSections),
      };
    });
  }, []);

  const removeSection = useCallback((instanceId: string) => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections.filter((s) => s.id !== instanceId),
    }));
  }, []);

  const moveSection = useCallback(
    (instanceId: string, direction: "up" | "down") => {
      setState((prev) => {
        const index = prev.sections.findIndex((s) => s.id === instanceId);
        if (index === -1) return prev;

        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= prev.sections.length) return prev;

        const currentSection = prev.sections[index];
        const targetSection = prev.sections[newIndex];

        const currentOrder = getCategoryOrder(currentSection.variantId);
        const targetOrder = getCategoryOrder(targetSection.variantId);

        if (currentOrder !== targetOrder) {
          return prev;
        }

        const newSections = [...prev.sections];
        [newSections[index], newSections[newIndex]] = [
          newSections[newIndex],
          newSections[index],
        ];

        return {
          ...prev,
          sections: sortSectionsByCategory(newSections),
        };
      });
    },
    []
  );

  const clearSections = useCallback(() => {
    setState((prev) => ({
      ...prev,
      sections: [],
    }));
  }, []);

  const value: BuilderContextType = {
    ...state,
    addSection,
    removeSection,
    moveSection,
    clearSections,
  };

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
}

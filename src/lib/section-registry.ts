import { type ComponentType } from "react";

export type SectionCategory = "header" | "hero" | "features";

export interface SectionVariant {
  id: string;
  name: string;
  description: string;
  category: SectionCategory;
  component: ComponentType;
  thumbnail?: string;
}

export interface SectionInstance {
  id: string;
  variantId: string;
}

import { HeaderA, HeaderB, HeaderC } from "@/sections/header";
import { HeroA, HeroB, HeroC } from "@/sections/hero";
import { FeaturesA, FeaturesB, FeaturesC } from "@/sections/features";

export const sectionRegistry: SectionVariant[] = [
  {
    id: "header-a",
    name: "Header A",
    description: "Clean minimal header with centered navigation",
    category: "header",
    component: HeaderA,
  },
  {
    id: "header-b",
    name: "Header B",
    description: "Bold header with primary background and tagline",
    category: "header",
    component: HeaderB,
  },
  {
    id: "header-c",
    name: "Header C",
    description: "Modern floating header with pill-shaped container",
    category: "header",
    component: HeaderC,
  },

  {
    id: "hero-a",
    name: "Hero A",
    description: "Centered hero with badge and dual CTAs",
    category: "hero",
    component: HeroA,
  },
  {
    id: "hero-b",
    name: "Hero B",
    description: "Split layout hero with stats and image placeholder",
    category: "hero",
    component: HeroB,
  },
  {
    id: "hero-c",
    name: "Hero C",
    description: "Full-width dark hero with large typography",
    category: "hero",
    component: HeroC,
  },

  {
    id: "features-a",
    name: "Features A",
    description: "Card grid layout with icons",
    category: "features",
    component: FeaturesA,
  },
  {
    id: "features-b",
    name: "Features B",
    description: "Numbered steps with hover effects",
    category: "features",
    component: FeaturesB,
  },
  {
    id: "features-c",
    name: "Features C",
    description: "Dark background with centered cards",
    category: "features",
    component: FeaturesC,
  },
];

export function getSectionsByCategory(
  category: SectionCategory
): SectionVariant[] {
  return sectionRegistry.filter((section) => section.category === category);
}

export function getSectionById(id: string): SectionVariant | undefined {
  return sectionRegistry.find((section) => section.id === id);
}

export function getAllCategories(): SectionCategory[] {
  return ["header", "hero", "features"];
}

export function getCategoryLabel(category: SectionCategory): string {
  const labels: Record<SectionCategory, string> = {
    header: "Header",
    hero: "Hero",
    features: "Features",
  };
  return labels[category];
}

export const sectionCatalog = {
  categories: getAllCategories().map((cat) => ({
    id: cat,
    label: getCategoryLabel(cat),
    variants: getSectionsByCategory(cat).map((v) => ({
      id: v.id,
      name: v.name,
      description: v.description,
    })),
  })),
};

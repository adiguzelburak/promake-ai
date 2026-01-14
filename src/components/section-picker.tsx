import { Plus, Check } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useBuilder } from "@/components/builder-provider";
import {
  getAllCategories,
  getCategoryLabel,
  getSectionsByCategory,
  type SectionVariant,
} from "@/lib/section-registry";
import { cn } from "@/lib/utils";

function SectionPreviewCard({
  variant,
  onSelect,
  isSelected,
}: {
  variant: SectionVariant;
  onSelect: () => void;
  isSelected: boolean;
}) {
  const Component = variant.component;

  return (
    <button
      onClick={onSelect}
      className={cn(
        "group relative w-full rounded-lg border bg-background overflow-hidden transition-all",
        "hover:border-primary hover:shadow-md",
        isSelected && "border-primary shadow-sm"
      )}
    >
      <div className="relative h-24 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 origin-top-left"
          style={{
            transform: "scale(0.2)",
            width: "500%",
            height: "500%",
          }}
        >
          <Component />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="p-2 text-left">
        <div className="text-xs font-medium truncate">{variant.name}</div>
        <div className="text-[10px] text-muted-foreground truncate">
          {variant.description}
        </div>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2 size-5 rounded-full bg-primary flex items-center justify-center">
          <Check className="size-3 text-primary-foreground" />
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium">
          {isSelected ? (
            <>
              <Check className="size-3" />
              Replace
            </>
          ) : (
            <>
              <Plus className="size-3" />
              Add
            </>
          )}
        </div>
      </div>
    </button>
  );
}

export function SectionPicker() {
  const { addSection, sections } = useBuilder();
  const categories = getAllCategories();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Sections</SidebarGroupLabel>
      <SidebarMenu>
        {categories.map((category) => {
          const variants = getSectionsByCategory(category);
          const label = getCategoryLabel(category);

          return (
            <Collapsible key={category} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    {label}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 p-2">
                    {variants.map((variant) => {
                      const isSelected = sections.some(
                        (section) => section.variantId === variant.id
                      );

                      return (
                        <SectionPreviewCard
                          key={variant.id}
                          variant={variant}
                          isSelected={isSelected}
                          onSelect={() => addSection(variant.id)}
                        />
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

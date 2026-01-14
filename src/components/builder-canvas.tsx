import { useBuilder } from "@/components/builder-provider";
import { getSectionById } from "@/lib/section-registry";
import { Button } from "@/components/ui/button";
import { Trash2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function BuilderCanvas() {
  const { sections, removeSection, clearSections } = useBuilder();

  if (sections.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <Layers className="size-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No sections yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Click on a section variant from the sidebar to add it to your page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between p-2 border-b bg-muted/30">
        <span className="text-sm text-muted-foreground">
          {sections.length} section{sections.length !== 1 ? "s" : ""}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearSections}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="size-4 mr-1" />
          Clear All
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {sections.map((instance) => {
          const variant = getSectionById(instance.variantId);
          if (!variant) return null;

          const Component = variant.component;

          return (
            <div key={instance.id} className="group relative">
              <div
                className={cn(
                  "absolute top-2 right-2 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                  "bg-background/90 backdrop-blur-sm rounded-md border shadow-sm p-1"
                )}
              >
                <span className="text-xs font-medium px-2 text-muted-foreground">
                  {variant.name}
                </span>
                <div className="w-px h-4 bg-border" />
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => removeSection(instance.id)}
                  className="size-6 text-destructive hover:text-destructive"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 pointer-events-none transition-colors" />

              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}

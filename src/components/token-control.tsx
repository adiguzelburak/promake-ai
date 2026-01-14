import { Paintbrush, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeCustomization } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function TokenControl() {
  const {
    customization,
    setColorId,
    setFontId,
    setRadiusId,
    setSpacingId,
    resetCustomization,
    colors,
    fonts,
    radii,
    spacings,
  } = useThemeCustomization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <Paintbrush className="size-4" />
          <span className="sr-only">Theme Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Theme Color</span>
            <span className="text-xs text-muted-foreground font-normal">
              {colors.find((c) => c.id === customization.colorId)?.name}
            </span>
          </DropdownMenuLabel>
          <div className="px-2 pb-2">
            <div className="grid grid-cols-5 gap-1.5">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setColorId(color.id)}
                  className={cn(
                    "group relative size-8 rounded-md transition-all",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "hover:scale-110"
                  )}
                  style={{ backgroundColor: color.primary }}
                  title={color.name}
                >
                  {customization.colorId === color.id && (
                    <Check
                      className="absolute inset-0 m-auto size-4"
                      style={{ color: color.primaryForeground }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Font</span>
            <span className="text-xs text-muted-foreground font-normal">
              {fonts.find((f) => f.id === customization.fontId)?.name}
            </span>
          </DropdownMenuLabel>
          <div className="px-2 pb-2">
            <div className="grid grid-cols-2 gap-1.5">
              {fonts.map((font) => (
                <button
                  key={font.id}
                  onClick={() => setFontId(font.id)}
                  className={cn(
                    "flex items-center justify-center px-2 py-1.5 text-xs rounded-md transition-all",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "border hover:bg-accent",
                    customization.fontId === font.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border"
                  )}
                  style={{ fontFamily: font.fontFamily }}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Radius</span>
            <span className="text-xs text-muted-foreground font-normal">
              {radii.find((r) => r.id === customization.radiusId)?.name}
            </span>
          </DropdownMenuLabel>
          <div className="px-2 pb-2">
            <div className="flex gap-1.5">
              {radii.map((radius) => (
                <button
                  key={radius.id}
                  onClick={() => setRadiusId(radius.id)}
                  className={cn(
                    "flex-1 flex items-center justify-center p-1.5 transition-all",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "border hover:bg-accent",
                    customization.radiusId === radius.id
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  )}
                  style={{ borderRadius: radius.value }}
                  title={radius.name}
                >
                  <div
                    className={cn(
                      "size-4 bg-primary/80",
                      customization.radiusId === radius.id && "bg-primary"
                    )}
                    style={{ borderRadius: radius.value }}
                  />
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Spacing</span>
            <span className="text-xs text-muted-foreground font-normal">
              {spacings.find((s) => s.id === customization.spacingId)?.name}
            </span>
          </DropdownMenuLabel>
          <div className="px-2 pb-2">
            <div className="flex gap-1.5">
              {spacings.map((spacing, index) => (
                <button
                  key={spacing.id}
                  onClick={() => setSpacingId(spacing.id)}
                  className={cn(
                    "flex-1 flex items-end justify-center p-1.5 h-10 rounded-md transition-all",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "border hover:bg-accent",
                    customization.spacingId === spacing.id
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  )}
                  title={spacing.name}
                >
                  <div className="flex items-end gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-1.5 bg-primary/60",
                          customization.spacingId === spacing.id && "bg-primary"
                        )}
                        style={{
                          height: `${(i + 1) * (6 + index * 2)}px`,
                        }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <div className="p-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={resetCustomization}
          >
            <RotateCcw className="size-3.5" />
            Reset to Defaults
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

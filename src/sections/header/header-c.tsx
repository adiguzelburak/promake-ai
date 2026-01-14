import { Button } from "@/components/ui/button";

export function HeaderC() {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex h-14 items-center justify-between rounded-full border bg-background/80 backdrop-blur-sm px-6">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-gradient-to-br from-primary to-primary/60" />
            <span className="text-lg font-semibold">Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="rounded-full">Home</Button>
            <Button variant="ghost" size="sm" className="rounded-full">Work</Button>
            <Button variant="ghost" size="sm" className="rounded-full">About</Button>
            <Button variant="ghost" size="sm" className="rounded-full">Contact</Button>
          </nav>
          <Button size="sm" className="rounded-full">
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
}

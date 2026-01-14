import { Button } from "@/components/ui/button";

export function HeaderB() {
  return (
    <header className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <span className="text-lg font-bold">B</span>
          </div>
          <div>
            <span className="text-lg font-bold block leading-tight">
              BrandName
            </span>
            <span className="text-xs opacity-80">Tagline here</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Company
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            Login
          </Button>
          <Button variant="secondary" size="sm">
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button";

export function HeroC() {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-medium mb-4 opacity-80 uppercase tracking-wider">
            Welcome to the future
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            We create digital experiences that matter.
          </h1>
          <p className="text-xl opacity-80 mb-10 max-w-2xl">
            Partner with us to bring your vision to life. From concept to launch, we're with you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary">
              Explore Our Work
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

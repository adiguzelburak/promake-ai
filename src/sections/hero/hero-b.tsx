import { Button } from "@/components/ui/button";

export function HeroB() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transform your <span className="text-primary">workflow</span> today
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Streamline your processes, boost productivity, and achieve more with our comprehensive suite of tools designed for modern teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Start Building</Button>
              <Button size="lg" variant="ghost">Learn More →</Button>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-10 border-t">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
            <div className="absolute -bottom-4 -left-4 size-24 rounded-xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -right-4 size-32 rounded-full bg-primary/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

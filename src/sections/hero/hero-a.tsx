import { Button } from "@/components/ui/button";

export function HeroA() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            ✨ New Feature Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build something amazing with our platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The modern way to build and ship products. Fast, reliable, and scalable infrastructure for your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started Free</Button>
            <Button size="lg" variant="outline">View Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

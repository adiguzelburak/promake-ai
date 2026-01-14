import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "🎯",
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with AI-powered targeting.",
  },
  {
    icon: "📈",
    title: "Growth Analytics",
    description: "Track every metric that matters with real-time dashboards.",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in collaboration tools.",
  },
];

export function FeaturesC() {
  return (
    <section className="w-full py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Everything you need to succeed, all in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="secondary">
            See All Features
          </Button>
        </div>
      </div>
    </section>
  );
}

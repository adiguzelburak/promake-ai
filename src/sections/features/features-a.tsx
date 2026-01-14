import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Built for speed with optimized performance at every level.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "Enterprise-grade security to protect your data and users.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Deep insights and analytics to understand your audience.",
  },
  {
    icon: "🔄",
    title: "Auto Sync",
    description: "Real-time synchronization across all your devices.",
  },
  {
    icon: "🎨",
    title: "Customizable",
    description: "Fully customizable to match your brand and needs.",
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description: "Content delivered from the edge for fastest load times.",
  },
];

export function FeaturesA() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you build, deploy, and scale your applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

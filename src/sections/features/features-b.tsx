const features = [
  {
    number: "01",
    title: "Design",
    description: "Create stunning designs with our intuitive tools and templates.",
  },
  {
    number: "02",
    title: "Develop",
    description: "Build with modern technologies and best practices baked in.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Ship to production with one click. Zero configuration needed.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Grow without limits. Our infrastructure scales with you.",
  },
];

export function FeaturesB() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 sticky top-20">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple four-step process to take your idea from concept to reality.
            </p>
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex gap-6 p-6 rounded-xl transition-colors hover:bg-muted/50"
              >
                <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

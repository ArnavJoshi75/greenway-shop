import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Truck, Gift } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Verified Vendors",
    description: "Every vendor undergoes rigorous sustainability certification and supply chain verification"
  },
  {
    icon: Shield,
    title: "Eco-Certified Products",
    description: "Browse products filtered by carbon footprint, biodegradability, and material sustainability"
  },
  {
    icon: Truck,
    title: "Carbon-Neutral Shipping",
    description: "Optional carbon offset at checkout with eco-friendly packaging options"
  },
  {
    icon: Gift,
    title: "Rewards Program",
    description: "Earn points for sustainable purchases, redeemable for discounts or environmental donations"
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose EcoConnect?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to making sustainable shopping accessible, transparent, and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                🌱 Sustainable Shopping Made Simple
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Shop with
                <span className="block text-primary mt-2">Purpose & Planet</span>
              </h1>
              
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                Connect with verified eco-friendly vendors offering sustainable, reusable, and biodegradable products. 
                Every purchase helps build a greener future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/vendors">
                  Meet Our Vendors
                </Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">100% Verified</p>
                  <p className="text-xs text-muted-foreground">Eco-certified vendors</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-secondary/10 p-2">
                  <Recycle className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Carbon Neutral</p>
                  <p className="text-xs text-muted-foreground">Offset shipping</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-slide-up">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-32 w-32 text-primary animate-pulse" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">2.5K+ Products</p>
                  <p className="text-sm text-muted-foreground">Eco-certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

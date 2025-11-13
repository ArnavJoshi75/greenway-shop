import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Droplet, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Bamboo Coffee Tumbler",
    vendor: "EcoEssentials Co.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&q=80",
    rating: 4.8,
    reviews: 234,
    ecoScore: 95,
    badges: ["Biodegradable", "Carbon Neutral"],
    carbonFootprint: "2.1 kg CO₂"
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    vendor: "GreenThreads",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
    rating: 4.9,
    reviews: 456,
    ecoScore: 98,
    badges: ["Reusable", "Fair Trade"],
    carbonFootprint: "1.5 kg CO₂"
  },
  {
    id: 3,
    name: "Reusable Food Wraps Set",
    vendor: "ZeroWaste Living",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&q=80",
    rating: 4.7,
    reviews: 189,
    ecoScore: 92,
    badges: ["Plastic-Free", "Compostable"],
    carbonFootprint: "1.8 kg CO₂"
  },
  {
    id: 4,
    name: "Solar Power Bank",
    vendor: "SunCharge Tech",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    rating: 4.6,
    reviews: 312,
    ecoScore: 88,
    badges: ["Renewable Energy", "Durable"],
    carbonFootprint: "3.2 kg CO₂"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Eco-Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked sustainable essentials from verified vendors
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-primary/90 text-primary-foreground border-0">
                    <Leaf className="h-3 w-3 mr-1" />
                    {product.ecoScore}% Eco
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-card/95 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {product.rating}
                  </div>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{product.vendor}</p>
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.badges.slice(0, 2).map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Wind className="h-3 w-3" />
                  <span>{product.carbonFootprint}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button size="sm" asChild>
                    <Link to={`/products/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

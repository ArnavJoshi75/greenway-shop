import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Leaf, Wind } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  vendor: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  ecoScore: number;
  badges: string[];
  carbonFootprint: number;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
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
          <span>{product.carbonFootprint} kg CO₂</span>
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
  );
};

export default ProductCard;

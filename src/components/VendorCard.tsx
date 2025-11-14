import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Package, Award } from 'lucide-react';

interface Vendor {
  id: number;
  name: string;
  location: string;
  category: string;
  rating: number;
  sustainabilityScore: number;
  certifications: string[];
  description: string;
  productsCount: number;
  image: string;
}

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const navigate = useNavigate();

  const getSustainabilityColor = (score: number) => {
    if (score >= 90) return 'text-eco-light';
    if (score >= 80) return 'text-eco-medium';
    return 'text-eco-dark';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer" onClick={() => navigate(`/vendors/${vendor.id}`)}>
      {/* Vendor Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${getSustainabilityColor(vendor.sustainabilityScore)} bg-background/90 backdrop-blur-sm`}>
            <Award className="h-3 w-3 mr-1" />
            {vendor.sustainabilityScore}% Eco
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Vendor Name and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-eco-medium transition-colors">
            {vendor.name}
          </h3>
          <Badge variant="secondary" className="text-xs">
            {vendor.category}
          </Badge>
        </div>

        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{vendor.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-eco-medium text-eco-medium" />
            <span className="font-semibold text-foreground">{vendor.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {vendor.description}
        </p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vendor.certifications.slice(0, 3).map((cert) => (
            <Badge key={cert} variant="outline" className="text-xs">
              {cert}
            </Badge>
          ))}
          {vendor.certifications.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{vendor.certifications.length - 3}
            </Badge>
          )}
        </div>

        {/* Products Count */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Package className="h-4 w-4" />
          <span>{vendor.productsCount} products</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant="outline" onClick={(e) => {
          e.stopPropagation();
          navigate(`/vendors/${vendor.id}`);
        }}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

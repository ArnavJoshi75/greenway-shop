import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  Leaf,
  Package,
  Truck,
  Shield,
  Heart,
  Share2,
  Plus,
  Minus,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getRelatedProducts } from "@/data/products";

const mockReviews = [
  {
    id: 1,
    user: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Amazing quality! Love that it's truly eco-friendly and doesn't retain odors.",
    verified: true,
  },
  {
    id: 2,
    user: "Mike R.",
    rating: 4,
    date: "2024-01-10",
    comment: "Great product, exactly what I expected. Highly recommend!",
    verified: true,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [ecoPackaging, setEcoPackaging] = useState(true);
  const [carbonOffset, setCarbonOffset] = useState(false);

  const productId = parseInt(id || "1", 10);
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 mt-20">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/products")}>
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name}${
        ecoPackaging ? " with eco-packaging" : ""
      }${carbonOffset ? " + carbon offset" : ""}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.biodegradable && (
                <Badge className="absolute top-4 left-4 bg-eco-light text-white">
                  <Leaf className="h-3 w-3 mr-1" />
                  100% Biodegradable
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-eco-medium"
                      : "border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.vendor.name}</Badge>
                {product.vendor.verified && (
                  <Badge
                    variant="outline"
                    className="text-eco-medium border-eco-medium"
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-eco-medium text-eco-medium" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">
                ₹{Math.round(product.price * 83)}
              </span>
              <span className="text-sm text-muted-foreground">
                (inclusive of all taxes)
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <Badge key={cert} variant="outline">
                  {cert}
                </Badge>
              ))}
            </div>

            {/* Eco Options */}
            <Card className="bg-eco-light/10 border-eco-light">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="eco-packaging"
                    checked={ecoPackaging}
                    onCheckedChange={(checked) =>
                      setEcoPackaging(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="eco-packaging"
                    className="text-sm font-medium cursor-pointer flex items-center gap-2"
                  >
                    <Package className="h-4 w-4 text-eco-medium" />
                    Use 100% biodegradable packaging (Free)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="carbon-offset"
                    checked={carbonOffset}
                    onCheckedChange={(checked) =>
                      setCarbonOffset(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="carbon-offset"
                    className="text-sm font-medium cursor-pointer flex items-center gap-2"
                  >
                    <Leaf className="h-4 w-4 text-eco-medium" />
                    Add carbon offset donation (+₹50)
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="h-5 w-5 text-eco-medium" />
                <div>
                  <div className="font-semibold">Carbon Footprint</div>
                  <div className="text-muted-foreground">
                    {product.carbonFootprint} kg CO₂
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-eco-medium" />
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-muted-foreground">
                    Carbon-neutral delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="reviews">
              Reviews ({product.reviews})
            </TabsTrigger>
            <TabsTrigger value="vendor">About Vendor</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-eco-medium mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sustainability" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Environmental Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-eco-light/10 rounded-lg">
                    <Leaf className="h-12 w-12 text-eco-medium mx-auto mb-2" />
                    <div className="font-semibold">Carbon Saved</div>
                    <div className="text-sm text-muted-foreground">
                      {product.sustainability.carbonSaved}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-eco-light/10 rounded-lg">
                    <Package className="h-12 w-12 text-eco-medium mx-auto mb-2" />
                    <div className="font-semibold">Water Saved</div>
                    <div className="text-sm text-muted-foreground">
                      {product.sustainability.waterSaved}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-eco-light/10 rounded-lg">
                    <Shield className="h-12 w-12 text-eco-medium mx-auto mb-2" />
                    <div className="font-semibold">100% Recyclable</div>
                    <div className="text-sm text-muted-foreground">
                      End-of-life friendly
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{review.user}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? "fill-eco-medium text-eco-medium"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vendor" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {product.vendor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {product.vendor.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-eco-medium text-eco-medium" />
                      <span>{product.vendor.rating} rating</span>
                      {product.vendor.verified && (
                        <Badge
                          variant="outline"
                          className="text-eco-medium border-eco-medium"
                        >
                          <Shield className="h-3 w-3 mr-1" />
                          Verified Vendor
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  This is a verified eco-friendly vendor committed to
                  sustainable sourcing and ethical practices.
                </p>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/vendors/${product.vendor.id}`)}
                >
                  View Vendor Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹{product.price}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Leaf className="h-4 w-4 text-eco-medium" />
                        {product.carbonFootprint} kg CO₂
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

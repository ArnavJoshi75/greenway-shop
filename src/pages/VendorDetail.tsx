import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  MapPin,
  Package,
  Award,
  Shield,
  Leaf,
  Factory,
  Users,
} from "lucide-react";
import { getVendorById } from "@/data/vendors";

export default function VendorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");

  const vendorId = parseInt(id || "1", 10);
  const vendor = getVendorById(vendorId);

  if (!vendor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 mt-20">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Vendor not found</h1>
            <Button onClick={() => navigate("/vendors")}>
              Back to Vendors
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const initials = vendor.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Vendor Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-foreground">
                      {vendor.name}
                    </h1>
                    <Badge className="bg-eco-light text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{vendor.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-eco-medium text-eco-medium" />
                      <span className="font-semibold">{vendor.rating}</span>
                      <span>({vendor.reviewsCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      <span>{vendor.productsCount} products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold text-eco-medium">
                  {vendor.sustainabilityScore}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Sustainability Score
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Leaf className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {vendor.impact.carbonOffset}
                </div>
                <div className="text-sm text-muted-foreground">
                  Carbon Offset
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Factory className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {vendor.impact.treesPlanted}
                </div>
                <div className="text-sm text-muted-foreground">
                  Trees Planted
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">{vendor.established}</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vendor.products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      About {vendor.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {vendor.description}
                    </p>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Our Mission</h4>
                      <p className="text-muted-foreground">{vendor.mission}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Environmental Impact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Leaf className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Carbon Offset</div>
                            <div className="text-sm text-muted-foreground">
                              Total emissions prevented
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">
                          {vendor.impact.carbonOffset}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Factory className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Trees Planted</div>
                            <div className="text-sm text-muted-foreground">
                              Reforestation efforts
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">
                          {vendor.impact.treesPlanted}
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Package className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Plastic Saved</div>
                            <div className="text-sm text-muted-foreground">
                              Waste reduction
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">
                          {vendor.impact.plasticSaved}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-semibold">{vendor.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Established:
                        </span>
                        <span className="font-semibold">
                          {vendor.established}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Products:</span>
                        <span className="font-semibold">
                          {vendor.productsCount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-semibold">{vendor.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {vendor.reviews.map((review: any) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{review.user}</div>
                          <div className="flex items-center gap-1">
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

          <TabsContent value="certifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Certifications & Standards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendor.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-3 p-4 border rounded-lg"
                    >
                      <Award className="h-8 w-8 text-eco-medium" />
                      <div>
                        <div className="font-semibold">{cert}</div>
                        <div className="text-sm text-muted-foreground">
                          Verified certification
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}

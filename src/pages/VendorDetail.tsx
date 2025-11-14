import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Package, Award, Shield, Leaf, Factory, Users } from 'lucide-react';

const mockVendor = {
  id: 1,
  name: "Green Earth Co.",
  location: "Portland, OR",
  category: "Home & Garden",
  rating: 4.8,
  sustainabilityScore: 95,
  certifications: ["B-Corp", "Carbon Neutral", "Fair Trade", "GOTS"],
  description: "Leading supplier of eco-friendly home and garden products with a commitment to zero waste and ethical sourcing. We work directly with sustainable farms and manufacturers to bring you the highest quality products.",
  productsCount: 127,
  reviewsCount: 1243,
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  established: "2018",
  mission: "To make sustainable living accessible and affordable for everyone while supporting ethical manufacturing practices.",
  impact: {
    carbonOffset: "500 tons CO₂",
    treesPlanted: "10,000+",
    plasticSaved: "25 tons",
  },
};

const vendorProducts = [
  {
    id: 1,
    name: "Bamboo Fiber Water Bottle",
    vendor: "Green Earth Co.",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    ecoScore: 95,
    badges: ["Biodegradable", "Zero Waste"],
    carbonFootprint: 0.8,
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    vendor: "Green Earth Co.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 189,
    ecoScore: 92,
    badges: ["Organic", "Fair Trade"],
    carbonFootprint: 0.5,
  },
  {
    id: 3,
    name: "Bamboo Cutlery Set",
    vendor: "Green Earth Co.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606478250954-3cde77c6ac38?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    ecoScore: 94,
    badges: ["Biodegradable", "Plastic-Free"],
    carbonFootprint: 0.3,
  },
  {
    id: 4,
    name: "Hemp Yoga Mat",
    vendor: "Green Earth Co.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 278,
    ecoScore: 96,
    badges: ["Natural", "Biodegradable"],
    carbonFootprint: 1.2,
  },
];

const vendorReviews = [
  {
    id: 1,
    user: "Emily Johnson",
    rating: 5,
    date: "2024-01-20",
    comment: "Amazing vendor! All products are high quality and truly sustainable. Love supporting a company that cares about the planet.",
  },
  {
    id: 2,
    user: "David Chen",
    rating: 5,
    date: "2024-01-18",
    comment: "Fast shipping, great customer service, and products that actually live up to their eco-friendly claims. Highly recommend!",
  },
  {
    id: 3,
    user: "Maria Garcia",
    rating: 4,
    date: "2024-01-15",
    comment: "Very impressed with their commitment to sustainability. Packaging was completely plastic-free and products are excellent quality.",
  },
];

export default function VendorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Vendor Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={mockVendor.image}
              alt={mockVendor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">GE</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-foreground">{mockVendor.name}</h1>
                    <Badge className="bg-eco-light text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{mockVendor.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-eco-medium text-eco-medium" />
                      <span className="font-semibold">{mockVendor.rating}</span>
                      <span>({mockVendor.reviewsCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      <span>{mockVendor.productsCount} products</span>
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
                <div className="text-2xl font-bold text-eco-medium">{mockVendor.sustainabilityScore}%</div>
                <div className="text-sm text-muted-foreground">Sustainability Score</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Leaf className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">{mockVendor.impact.carbonOffset}</div>
                <div className="text-sm text-muted-foreground">Carbon Offset</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Factory className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">{mockVendor.impact.treesPlanted}</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-eco-medium mx-auto mb-2" />
                <div className="text-2xl font-bold">{mockVendor.established}</div>
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
              {vendorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">About {mockVendor.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {mockVendor.description}
                    </p>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Our Mission</h4>
                      <p className="text-muted-foreground">{mockVendor.mission}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Leaf className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Carbon Offset</div>
                            <div className="text-sm text-muted-foreground">Total emissions prevented</div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">{mockVendor.impact.carbonOffset}</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Factory className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Trees Planted</div>
                            <div className="text-sm text-muted-foreground">Reforestation efforts</div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">{mockVendor.impact.treesPlanted}</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-eco-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Package className="h-8 w-8 text-eco-medium" />
                          <div>
                            <div className="font-semibold">Plastic Saved</div>
                            <div className="text-sm text-muted-foreground">Waste reduction</div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-eco-medium">{mockVendor.impact.plasticSaved}</div>
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
                        <span className="font-semibold">{mockVendor.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Established:</span>
                        <span className="font-semibold">{mockVendor.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Products:</span>
                        <span className="font-semibold">{mockVendor.productsCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-semibold">{mockVendor.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {vendorReviews.map((review) => (
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
                                  i < review.rating ? 'fill-eco-medium text-eco-medium' : 'text-muted'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
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
                <h3 className="text-xl font-semibold mb-4">Certifications & Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockVendor.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-4 border rounded-lg">
                      <Award className="h-8 w-8 text-eco-medium" />
                      <div>
                        <div className="font-semibold">{cert}</div>
                        <div className="text-sm text-muted-foreground">Verified certification</div>
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

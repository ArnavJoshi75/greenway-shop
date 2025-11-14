import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VendorCard } from "@/components/VendorCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin } from "lucide-react";

const mockVendors = [
  {
    id: 1,
    name: "Green Earth Co.",
    location: "Portland, OR",
    category: "Home & Garden",
    rating: 4.8,
    sustainabilityScore: 95,
    certifications: ["B-Corp", "Carbon Neutral", "Fair Trade"],
    description:
      "Leading supplier of eco-friendly home and garden products with a commitment to zero waste.",
    productsCount: 127,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "EcoStyle Fashion",
    location: "San Francisco, CA",
    category: "Fashion & Apparel",
    rating: 4.6,
    sustainabilityScore: 88,
    certifications: ["GOTS", "Fair Trade", "Vegan"],
    description:
      "Sustainable fashion brand creating beautiful, ethical clothing from organic materials.",
    productsCount: 89,
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Pure Living",
    location: "Austin, TX",
    category: "Beauty & Personal Care",
    rating: 4.9,
    sustainabilityScore: 92,
    certifications: ["Organic", "Cruelty-Free", "Zero Waste"],
    description:
      "Handcrafted natural beauty products in biodegradable packaging.",
    productsCount: 45,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Nature's Kitchen",
    location: "Seattle, WA",
    category: "Food & Beverage",
    rating: 4.7,
    sustainabilityScore: 90,
    certifications: ["Organic", "Local", "Non-GMO"],
    description:
      "Farm-to-table organic foods supporting local farmers and sustainable agriculture.",
    productsCount: 203,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "ReNew Tech",
    location: "Boulder, CO",
    category: "Electronics",
    rating: 4.5,
    sustainabilityScore: 85,
    certifications: ["E-Waste Certified", "Energy Star"],
    description:
      "Refurbished electronics and sustainable tech accessories with minimal environmental impact.",
    productsCount: 156,
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Ocean Care",
    location: "Miami, FL",
    category: "Home & Garden",
    rating: 4.8,
    sustainabilityScore: 93,
    certifications: ["Ocean Safe", "Plastic-Free", "B-Corp"],
    description:
      "Cleaning and home care products that protect our oceans and marine life.",
    productsCount: 67,
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop",
  },
];

const categories = [
  "All Categories",
  "Home & Garden",
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Food & Beverage",
  "Electronics",
];
const locations = [
  "All Locations",
  "Portland, OR",
  "San Francisco, CA",
  "Austin, TX",
  "Seattle, WA",
  "Boulder, CO",
  "Miami, FL",
];

export default function Vendors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("rating");

  const filteredVendors = useMemo(() => {
    let filtered = mockVendors;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (vendor) => vendor.category === selectedCategory
      );
    }

    // Location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(
        (vendor) => vendor.location === selectedLocation
      );
    }

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "sustainability":
          return b.sustainabilityScore - a.sustainabilityScore;
        case "products":
          return b.productsCount - a.productsCount;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedLocation, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Verified Vendors
          </h1>
          <p className="text-muted-foreground">
            Discover trusted eco-friendly businesses committed to sustainability
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="sustainability">
                  Sustainability Score
                </SelectItem>
                <SelectItem value="products">Most Products</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSearchQuery("")}
              >
                Search: {searchQuery} ✕
              </Badge>
            )}
            {selectedCategory !== "All Categories" && (
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSelectedCategory("All Categories")}
              >
                {selectedCategory} ✕
              </Badge>
            )}
            {selectedLocation !== "All Locations" && (
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSelectedLocation("All Locations")}
              >
                {selectedLocation} ✕
              </Badge>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredVendors.length}{" "}
            {filteredVendors.length === 1 ? "vendor" : "vendors"}
          </p>
        </div>

        {/* Vendors Grid */}
        {filteredVendors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No vendors found matching your criteria.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

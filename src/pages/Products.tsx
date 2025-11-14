import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Bamboo Coffee Tumbler",
    vendor: "EcoEssentials Co.",
    price: 24.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzG9LXxPfCQ5L6Cu61haQ61bjxSb9SGs8fEQ&s",
    rating: 4.8,
    reviews: 234,
    ecoScore: 95,
    badges: ["Biodegradable", "Carbon Neutral"],
    carbonFootprint: 2.1,
    material: "Bamboo",
    biodegradable: true,
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    vendor: "GreenThreads",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
    rating: 4.9,
    reviews: 456,
    ecoScore: 98,
    badges: ["Reusable", "Fair Trade"],
    carbonFootprint: 1.5,
    material: "Organic Cotton",
    biodegradable: true,
  },
  {
    id: 3,
    name: "Reusable Food Wraps Set",
    vendor: "ZeroWaste Living",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&q=80",
    rating: 4.7,
    reviews: 189,
    ecoScore: 92,
    badges: ["Plastic-Free", "Compostable"],
    carbonFootprint: 1.8,
    material: "Organic Cotton",
    biodegradable: true,
  },
  {
    id: 4,
    name: "Solar Power Bank",
    vendor: "SunCharge Tech",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    rating: 4.6,
    reviews: 312,
    ecoScore: 88,
    badges: ["Renewable Energy", "Durable"],
    carbonFootprint: 3.2,
    material: "Recycled Plastic",
    biodegradable: false,
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    vendor: "PureHydro",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    rating: 4.9,
    reviews: 567,
    ecoScore: 96,
    badges: ["Reusable", "BPA-Free"],
    carbonFootprint: 2.5,
    material: "Stainless Steel",
    biodegradable: false,
  },
  {
    id: 6,
    name: "Biodegradable Phone Case",
    vendor: "EcoTech Solutions",
    price: 22.5,
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    rating: 4.5,
    reviews: 198,
    ecoScore: 93,
    badges: ["Biodegradable", "Compostable"],
    carbonFootprint: 1.2,
    material: "Plant-based Polymer",
    biodegradable: true,
  },
  {
    id: 7,
    name: "Hemp Canvas Backpack",
    vendor: "NaturePack",
    price: 68.0,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    rating: 4.8,
    reviews: 342,
    ecoScore: 97,
    badges: ["Durable", "Fair Trade"],
    carbonFootprint: 3.8,
    material: "Hemp",
    biodegradable: true,
  },
  {
    id: 8,
    name: "Recycled Paper Notebook Set",
    vendor: "EarthWrite",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1531346590447-684e6dc63156?w=500&q=80",
    rating: 4.7,
    reviews: 289,
    ecoScore: 94,
    badges: ["Recycled", "Plastic-Free"],
    carbonFootprint: 0.8,
    material: "Recycled Paper",
    biodegradable: true,
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    carbonFootprint: [0, 5] as [number, number],
    biodegradable: false,
    materials: [] as string[],
    priceRange: [0, 8300] as [number, number],
  });

  const itemsPerPage = 8;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.vendor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCarbonFootprint =
        product.carbonFootprint >= filters.carbonFootprint[0] &&
        product.carbonFootprint <= filters.carbonFootprint[1];

      const matchesBiodegradable =
        !filters.biodegradable || product.biodegradable;

      const matchesMaterial =
        filters.materials.length === 0 ||
        filters.materials.includes(product.material);

      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      return (
        matchesSearch &&
        matchesCarbonFootprint &&
        matchesBiodegradable &&
        matchesMaterial &&
        matchesPrice
      );
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "eco-score":
        filtered.sort((a, b) => b.ecoScore - a.ecoScore);
        break;
      case "popular":
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
                Sustainable Products
              </h1>
              <p
                className="text-lg text-muted-foreground animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Discover eco-friendly alternatives for everyday items. Every
                purchase makes a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters Bar */}
        <section className="border-b border-border bg-card">
          <div className="container px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products or vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Mobile Filter Toggle */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden flex-1">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <ProductFilters
                      filters={filters}
                      onFilterChange={handleFilterChange}
                    />
                  </SheetContent>
                </Sheet>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="eco-score">Eco Score</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </div>
          </div>
        </section>

        {/* Products Grid with Sidebar */}
        <section className="py-8">
          <div className="container px-4">
            <div className="flex gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden md:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <ProductFilters
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {paginatedProducts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {paginatedProducts.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={index}
                        />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="mt-12 flex justify-center gap-2">
                        <Button
                          variant="outline"
                          onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                          }
                          disabled={currentPage === 1}
                        >
                          Previous
                        </Button>
                        <div className="flex items-center gap-1">
                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              onClick={() => setCurrentPage(page)}
                              className="w-10"
                            >
                              {page}
                            </Button>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                          }
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-lg text-muted-foreground">
                      No products found matching your criteria.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setFilters({
                          carbonFootprint: [0, 5] as [number, number],
                          biodegradable: false,
                          materials: [],
                          priceRange: [0, 8300] as [number, number],
                        });
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

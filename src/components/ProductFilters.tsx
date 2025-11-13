import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterProps {
  filters: {
    carbonFootprint: [number, number];
    biodegradable: boolean;
    materials: string[];
    priceRange: [number, number];
  };
  onFilterChange: (filters: FilterProps["filters"]) => void;
}

const materials = [
  "Bamboo",
  "Organic Cotton",
  "Recycled Plastic",
  "Stainless Steel",
  "Plant-based Polymer",
  "Hemp",
  "Recycled Paper",
];

const ProductFilters = ({ filters, onFilterChange }: FilterProps) => {
  const handleCarbonFootprintChange = (value: number[]) => {
    onFilterChange({ ...filters, carbonFootprint: [value[0], value[1]] });
  };

  const handleBiodegradableChange = (checked: boolean) => {
    onFilterChange({ ...filters, biodegradable: checked });
  };

  const handleMaterialToggle = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter(m => m !== material)
      : [...filters.materials, material];
    onFilterChange({ ...filters, materials: newMaterials });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const clearAllFilters = () => {
    onFilterChange({
      carbonFootprint: [0, 5] as [number, number],
      biodegradable: false,
      materials: [],
      priceRange: [0, 100] as [number, number],
    });
  };

  const hasActiveFilters = 
    filters.carbonFootprint[0] !== 0 || 
    filters.carbonFootprint[1] !== 5 ||
    filters.biodegradable ||
    filters.materials.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 100;

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="h-8 text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Carbon Footprint */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Carbon Footprint (kg CO₂)
        </Label>
        <div className="px-1">
          <Slider
            value={filters.carbonFootprint}
            onValueChange={handleCarbonFootprintChange}
            min={0}
            max={5}
            step={0.1}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{filters.carbonFootprint[0].toFixed(1)}</span>
          <span>{filters.carbonFootprint[1].toFixed(1)}</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Price Range ($)
        </Label>
        <div className="px-1">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            min={0}
            max={100}
            step={5}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Biodegradable */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Eco Attributes</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="biodegradable"
            checked={filters.biodegradable}
            onCheckedChange={handleBiodegradableChange}
          />
          <label
            htmlFor="biodegradable"
            className="text-sm text-foreground cursor-pointer"
          >
            Biodegradable Only
          </label>
        </div>
      </div>

      {/* Materials */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Materials</Label>
        <div className="flex flex-wrap gap-2">
          {materials.map((material) => {
            const isSelected = filters.materials.includes(material);
            return (
              <Badge
                key={material}
                variant={isSelected ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() => handleMaterialToggle(material)}
              >
                {material}
                {isSelected && <X className="h-3 w-3 ml-1" />}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;

import { Link } from "react-router-dom";
import { User, Leaf, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartDrawer } from "./CartDrawer";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Leaf className="h-6 w-6" />
          <span>EcoConnect</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/vendors" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Vendors
          </Link>
          <Link to="/community" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Community
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 w-64">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search eco-products..." 
              className="h-9 bg-muted/50 border-0"
            />
          </div>
          
          <CartDrawer />
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

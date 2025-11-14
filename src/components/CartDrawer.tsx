import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, X, Plus, Minus, Package, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  carbonFootprint: number;
}

export function CartDrawer() {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Bamboo Fiber Water Bottle",
      price: 2490,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&h=100&fit=crop",
      carbonFootprint: 0.8,
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      price: 1245,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=100&h=100&fit=crop",
      carbonFootprint: 0.5,
    },
  ]);
  const [ecoPackaging, setEcoPackaging] = useState(true);
  const [carbonOffset, setCarbonOffset] = useState(false);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const carbonOffsetFee = carbonOffset ? 50 : 0;
  const total = subtotal + carbonOffsetFee;
  const totalCarbon = cartItems.reduce((sum, item) => sum + item.carbonFootprint * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {/* Cart Items */}
          <div className="flex-1 overflow-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Leaf className="h-3 w-3 text-eco-medium" />
                      {item.carbonFootprint * item.quantity} kg CO₂
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Eco Options */}
          {cartItems.length > 0 && (
            <div className="space-y-4 py-4 border-t">
              <div className="bg-eco-light/10 p-4 rounded-lg space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cart-eco-packaging"
                    checked={ecoPackaging}
                    onCheckedChange={(checked) => setEcoPackaging(checked as boolean)}
                  />
                  <label
                    htmlFor="cart-eco-packaging"
                    className="text-sm font-medium cursor-pointer flex items-center gap-2"
                  >
                    <Package className="h-4 w-4 text-eco-medium" />
                    100% biodegradable packaging (Free)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cart-carbon-offset"
                    checked={carbonOffset}
                    onCheckedChange={(checked) => setCarbonOffset(checked as boolean)}
                  />
                  <label
                    htmlFor="cart-carbon-offset"
                    className="text-sm font-medium cursor-pointer flex items-center gap-2"
                  >
                    <Leaf className="h-4 w-4 text-eco-medium" />
                    Carbon offset donation (+₹50)
                  </label>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                {carbonOffset && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Carbon Offset</span>
                    <span className="font-semibold">₹{carbonOffsetFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span className="text-muted-foreground">Total Carbon Impact</span>
                  <span className="font-semibold text-eco-medium">{totalCarbon.toFixed(1)} kg CO₂</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold">₹{total}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

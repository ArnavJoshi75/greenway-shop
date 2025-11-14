import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, Target, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">About EcoConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting conscious consumers with verified sustainable vendors to create a greener future, one purchase at a time.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-eco-light/10 border-eco-light">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-eco-medium mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize e-commerce by making sustainable shopping accessible, transparent, and rewarding. We connect verified eco-friendly vendors with conscious consumers who want to make a positive environmental impact through their purchasing decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-eco-light/10 border-eco-light">
            <CardContent className="p-8">
              <Globe className="h-12 w-12 text-eco-medium mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every purchase contributes to environmental restoration and sustainability is the norm, not the exception. We envision a marketplace where transparency, ethics, and ecological responsibility drive every transaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="h-16 w-16 text-eco-medium mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustainability First</h3>
                <p className="text-muted-foreground">
                  Every product and vendor on our platform meets strict environmental standards and contributes to a circular economy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-16 w-16 text-eco-medium mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verified Quality</h3>
                <p className="text-muted-foreground">
                  We rigorously verify all vendors and certifications to ensure authenticity and maintain the highest standards of trust.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-16 w-16 text-eco-medium mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-muted-foreground">
                  Building a community of eco-conscious consumers and rewarding sustainable choices through our gamification system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Stats */}
        <Card className="mb-16 bg-gradient-to-r from-eco-light/20 to-eco-medium/20 border-eco-medium">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-eco-medium mb-2">1,500+</div>
                <div className="text-muted-foreground">Verified Vendors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-medium mb-2">250,000+</div>
                <div className="text-muted-foreground">Eco Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-medium mb-2">5,000 tons</div>
                <div className="text-muted-foreground">CO₂ Offset</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-eco-medium mb-2">100,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How EcoConnect Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-eco-light text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Vendor Verification</h3>
              <p className="text-muted-foreground">
                We thoroughly verify each vendor's sustainability credentials, certifications, and supply chain transparency before approval.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-eco-medium text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Smart Shopping</h3>
              <p className="text-muted-foreground">
                Browse products filtered by carbon footprint, biodegradability, and eco-attributes. Make informed, sustainable choices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-eco-dark text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Earn & Impact</h3>
              <p className="text-muted-foreground">
                Earn rewards for sustainable purchases, track your environmental impact, and join a community committed to positive change.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <Users className="h-16 w-16 text-eco-medium mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            We're building a community of conscious consumers and sustainable vendors. Together, we can make a real difference in protecting our planet for future generations.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

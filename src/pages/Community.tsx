import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Heart, Share2, Award, TrendingUp, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const mockPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Green",
      avatar: "",
      badges: ["Eco Champion", "Early Adopter"],
    },
    content: "Just received my bamboo utensil set from Green Earth Co. and I'm blown away by the quality! Highly recommend for anyone trying to reduce single-use plastic in their kitchen. 🌱",
    likes: 24,
    comments: 8,
    timestamp: "2 hours ago",
    category: "Review",
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      avatar: "",
      badges: ["Sustainability Expert"],
    },
    content: "Pro tip: When shopping for eco-friendly products, always check for third-party certifications like B-Corp or Fair Trade. It makes a real difference! What certifications do you look for?",
    likes: 45,
    comments: 12,
    timestamp: "5 hours ago",
    category: "Tip",
  },
  {
    id: 3,
    user: {
      name: "Emma Wilson",
      avatar: "",
      badges: ["Green Warrior"],
    },
    content: "Question for the community: Has anyone tried composting their biodegradable packaging? I'm curious about the best practices.",
    likes: 18,
    comments: 15,
    timestamp: "1 day ago",
    category: "Question",
  },
];

const ecoTips = [
  {
    id: 1,
    title: "Start Small with Sustainable Swaps",
    content: "Replace one disposable item each month with a reusable alternative. Start with water bottles, then move to bags, straws, and utensils.",
    icon: "💡",
  },
  {
    id: 2,
    title: "Understanding Carbon Footprints",
    content: "Your carbon footprint is the total greenhouse gas emissions caused by your actions. Every sustainable purchase helps reduce it!",
    icon: "🌍",
  },
  {
    id: 3,
    title: "The Power of Biodegradable Materials",
    content: "Biodegradable products break down naturally, reducing landfill waste. Look for materials like bamboo, hemp, and organic cotton.",
    icon: "♻️",
  },
];

export default function Community() {
  const { toast } = useToast();
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      toast({
        title: "Post shared!",
        description: "Your post has been shared with the community",
      });
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Hub</h1>
          <p className="text-muted-foreground">
            Connect with fellow eco-warriors, share tips, and learn about sustainable living
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-2xl font-bold">2.5M kg</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved Together</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Share with the Community</h3>
                <Textarea
                  placeholder="Share your eco-friendly tips, reviews, or questions..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="mb-4"
                  rows={3}
                />
                <div className="flex gap-2">
                  <Button onClick={handlePostSubmit}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Share Post
                  </Button>
                  <Button variant="outline">Add Photo</Button>
                </div>
              </CardContent>
            </Card>

            {/* Feed Tabs */}
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                {mockPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={post.user.avatar} />
                          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{post.user.name}</span>
                            <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {post.user.badges.map((badge) => (
                              <Badge key={badge} variant="secondary" className="text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{post.content}</p>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <p className="text-center text-muted-foreground py-8">Product reviews and testimonials</p>
              </TabsContent>

              <TabsContent value="questions" className="mt-6">
                <p className="text-center text-muted-foreground py-8">Community Q&A</p>
              </TabsContent>

              <TabsContent value="tips" className="mt-6">
                <p className="text-center text-muted-foreground py-8">Sustainability tips and guides</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Eco Tips */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-eco-medium" />
                  Eco Tips
                </h3>
                <div className="space-y-4">
                  {ecoTips.map((tip) => (
                    <div key={tip.id} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{tip.icon}</span>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{tip.title}</h4>
                          <p className="text-xs text-muted-foreground">{tip.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-eco-medium" />
                  Trending Topics
                </h3>
                <div className="space-y-2">
                  {["#ZeroWaste", "#PlasticFree", "#SustainableLiving", "#EcoFriendly", "#CircularEconomy"].map((tag) => (
                    <Button key={tag} variant="ghost" className="w-full justify-start" size="sm">
                      {tag}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

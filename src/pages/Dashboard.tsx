import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Leaf, Award, ShoppingBag, Heart, TrendingUp, Target, Trophy, Share2 } from 'lucide-react';

const userStats = {
  totalPurchases: 24,
  carbonSaved: 18.5,
  plasticSaved: 5.2,
  rewardPoints: 850,
  level: "Eco Champion",
  nextLevel: "Green Guardian",
  levelProgress: 65,
};

const badges = [
  { id: 1, name: "Early Adopter", icon: "🌱", earned: true },
  { id: 2, name: "Eco Warrior", icon: "⚔️", earned: true },
  { id: 3, name: "Zero Waste Hero", icon: "♻️", earned: true },
  { id: 4, name: "Carbon Crusher", icon: "💨", earned: false },
  { id: 5, name: "Plastic-Free Pioneer", icon: "🚫", earned: false },
  { id: 6, name: "Green Guardian", icon: "🛡️", earned: false },
];

const milestones = [
  { id: 1, title: "First Purchase", description: "Made your first eco-friendly purchase", completed: true, reward: 50 },
  { id: 2, title: "10kg CO₂ Saved", description: "Saved 10kg of CO₂ through purchases", completed: true, reward: 100 },
  { id: 3, title: "Zero Waste Week", description: "Buy only zero-waste products for a week", completed: false, reward: 150 },
  { id: 4, title: "Share the Love", description: "Share 5 products on social media", completed: false, reward: 75 },
];

const recentActivity = [
  { id: 1, type: "purchase", item: "Bamboo Fiber Water Bottle", points: 50, date: "2 days ago" },
  { id: 2, type: "badge", item: "Earned 'Eco Warrior' badge", points: 100, date: "5 days ago" },
  { id: 3, type: "milestone", item: "Completed '10kg CO₂ Saved'", points: 100, date: "1 week ago" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Eco Dashboard</h1>
          <p className="text-muted-foreground">Track your sustainability journey and rewards</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <ShoppingBag className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-3xl font-bold">{userStats.totalPurchases}</div>
              <div className="text-sm text-muted-foreground">Eco Purchases</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <Leaf className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-3xl font-bold">{userStats.carbonSaved}kg</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-3xl font-bold">{userStats.rewardPoints}</div>
              <div className="text-sm text-muted-foreground">Reward Points</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-eco-light/20 to-eco-medium/20 border-eco-medium">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-eco-medium mx-auto mb-2" />
              <div className="text-lg font-bold">{userStats.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-eco-medium" />
                <span className="font-semibold">Level Progress</span>
              </div>
              <span className="text-sm text-muted-foreground">{userStats.levelProgress}% to {userStats.nextLevel}</span>
            </div>
            <Progress value={userStats.levelProgress} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">Earn 150 more points to reach the next level!</p>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-eco-medium" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Carbon Footprint Reduction</span>
                      <span className="text-sm font-semibold text-eco-medium">{userStats.carbonSaved}kg CO₂</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Equivalent to planting 8 trees</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Plastic Waste Prevented</span>
                      <span className="text-sm font-semibold text-eco-medium">{userStats.plasticSaved}kg</span>
                    </div>
                    <Progress value={52} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Equivalent to 173 plastic bottles</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Water Saved</span>
                      <span className="text-sm font-semibold text-eco-medium">120L</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Keep going to reach 200L!</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-eco-medium" />
                    Favorite Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Bamboo Fiber Water Bottle", purchases: 3 },
                      { name: "Organic Cotton Tote", purchases: 2 },
                      { name: "Hemp Yoga Mat", purchases: 1 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm font-medium">{item.name}</span>
                        <Badge variant="secondary">{item.purchases}x</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {badges.map((badge) => (
                <Card key={badge.id} className={`text-center ${badge.earned ? 'border-eco-medium' : 'opacity-50'}`}>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <div className="font-semibold text-sm">{badge.name}</div>
                    {badge.earned ? (
                      <Badge variant="default" className="mt-2">Earned</Badge>
                    ) : (
                      <Badge variant="outline" className="mt-2">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="mt-6">
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <Card key={milestone.id} className={milestone.completed ? 'border-eco-medium' : ''}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {milestone.completed ? (
                            <div className="h-8 w-8 rounded-full bg-eco-medium flex items-center justify-center">
                              <Trophy className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="h-8 w-8 rounded-full border-2 border-muted flex items-center justify-center">
                              <Target className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold">{milestone.title}</h3>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                      <Badge variant={milestone.completed ? "default" : "outline"}>
                        {milestone.reward} pts
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-eco-light/20 flex items-center justify-center">
                          {activity.type === 'purchase' && <ShoppingBag className="h-5 w-5 text-eco-medium" />}
                          {activity.type === 'badge' && <Award className="h-5 w-5 text-eco-medium" />}
                          {activity.type === 'milestone' && <Trophy className="h-5 w-5 text-eco-medium" />}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{activity.item}</div>
                          <div className="text-xs text-muted-foreground">{activity.date}</div>
                        </div>
                      </div>
                      <Badge variant="secondary">+{activity.points} pts</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Share Progress */}
        <Card className="mt-8 bg-gradient-to-r from-eco-light/20 to-eco-medium/20 border-eco-medium">
          <CardContent className="p-6 text-center">
            <Share2 className="h-12 w-12 text-eco-medium mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Share Your Impact</h3>
            <p className="text-muted-foreground mb-4">
              Inspire others by sharing your sustainability journey on social media!
            </p>
            <Button>
              <Share2 className="h-4 w-4 mr-2" />
              Share on Social Media
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

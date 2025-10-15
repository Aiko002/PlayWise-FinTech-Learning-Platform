import { ArrowRight, Users, BookOpen, Shield, TrendingUp, Zap, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import heroBg from "@/assets/hero-bg.jpg";
import { 
  TrendingUp as TrendingUpIcon, 
  Bitcoin, 
  Layers, 
  DollarSign, 
  Shield as ShieldIcon, 
  PieChart 
} from "lucide-react";

const iconMap: Record<string, any> = {
  TrendingUp: TrendingUpIcon,
  Bitcoin,
  Layers,
  DollarSign,
  Shield: ShieldIcon,
  PieChart,
};

const Index = () => {
  const featuredModules = modules.slice(0, 4);
  
  const achievements = [
    "Raj just earned 'Crypto Master' badge!",
    "Priya completed 30-day learning streak!",
    "Amit spotted a fake ICO scam!",
    "Sarah reached Level 50!",
    "Vikram completed all simulations!",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 glow-text">
              Master Finance. <br />
              <span className="gradient-text">Level Up Your Wealth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              India's First Gamified Platform for Stocks, Crypto, Forex & Options Awareness
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link to="/learn">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg gap-2 animate-glow-pulse">
                  Start Learning <Zap className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="text-lg gap-2 border-primary text-primary hover:bg-primary/10">
                  View Leaderboard <Award className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>12,847 Active Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>156 Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>89,234 XP Earned Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            label="Total Users"
            value="12,847"
            trend="234 today"
            trendUp={true}
          />
          <StatCard
            icon={BookOpen}
            label="Lessons Completed"
            value="45,892"
            trend="1,234 today"
            trendUp={true}
          />
          <StatCard
            icon={Shield}
            label="Scams Prevented"
            value="1,249"
            trend="18 this week"
            trendUp={true}
          />
          <StatCard
            icon={TrendingUp}
            label="Average Score"
            value="87.3%"
            trend="2.1% ↑"
            trendUp={true}
          />
        </div>
      </section>

      {/* Why FinXplore */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Why <span className="gradient-text">FinXplore?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">The Problem</h3>
            <p className="text-muted-foreground">
              75% of Indian crypto investors lost money due to lack of awareness
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">The Solution</h3>
            <p className="text-muted-foreground">
              Learn through real-world scenarios, not boring textbooks
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">The Impact</h3>
            <p className="text-muted-foreground">
              Join 12K+ Indians building wealth smartly
            </p>
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Featured <span className="gradient-text">Learning Paths</span>
          </h2>
          <Link to="/learn">
            <Button variant="outline" className="gap-2 border-primary text-primary">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModules.map((module) => (
            <ModuleCard
              key={module.id}
              id={module.id}
              title={module.title}
              description={module.description}
              icon={iconMap[module.icon]}
              lessonCount={module.lessons.length}
              learners={module.learners}
              rating={module.rating}
              duration={module.duration}
              difficulty={module.difficulty}
            />
          ))}
        </div>
      </section>

      {/* Recent Achievements Ticker */}
      <section className="bg-card/30 py-8 mb-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-4">
          <h3 className="text-lg font-heading font-bold text-center mb-6">
            🎉 Recent Achievements
          </h3>
        </div>
        <div className="relative">
          <div className="flex animate-slide gap-8 whitespace-nowrap">
            {[...achievements, ...achievements].map((achievement, index) => (
              <div
                key={index}
                className="glass-card px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="glass-card p-12 rounded-2xl text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Indians learning to navigate stocks, crypto, and forex safely
          </p>
          <Link to="/learn">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg gap-2">
              Start Learning Now <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

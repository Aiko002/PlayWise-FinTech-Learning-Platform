import { simulations } from "@/data/simulations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Simulations = () => {
  const categoryColors: Record<string, string> = {
    Crypto: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Stocks: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Forex: "bg-green-500/20 text-green-400 border-green-500/30",
    Scam: "bg-red-500/20 text-red-400 border-red-500/30",
    Options: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Real-World <span className="gradient-text">Simulations</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your skills in realistic financial scenarios. Make decisions, learn from outcomes.
        </p>
      </div>

      {/* Simulations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations.map((simulation) => (
          <div key={simulation.id} className="glass-card p-6 rounded-xl hover-lift group">
            <div className="flex items-start justify-between mb-4">
              <span className={`text-xs px-3 py-1 rounded-full border ${categoryColors[simulation.category]}`}>
                {simulation.category}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < simulation.difficulty
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
              {simulation.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {simulation.scenario}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {simulation.completedBy}
              </span>
              <Link to={`/simulations/${simulation.id}`}>
                <Button size="sm" className="bg-primary hover:bg-primary-glow">
                  Start Challenge
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-4xl font-heading font-bold gradient-text mb-2">
            {simulations.length}
          </div>
          <div className="text-muted-foreground">Total Simulations</div>
        </div>
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-4xl font-heading font-bold gradient-text mb-2">
            2,450
          </div>
          <div className="text-muted-foreground">Avg XP per Simulation</div>
        </div>
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-4xl font-heading font-bold gradient-text mb-2">
            89%
          </div>
          <div className="text-muted-foreground">Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Simulations;

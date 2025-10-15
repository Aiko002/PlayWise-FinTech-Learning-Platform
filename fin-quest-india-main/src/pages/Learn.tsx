import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import { useState } from "react";
import { 
  TrendingUp, 
  Bitcoin, 
  Layers, 
  DollarSign, 
  Shield, 
  PieChart 
} from "lucide-react";

const iconMap: Record<string, any> = {
  TrendingUp,
  Bitcoin,
  Layers,
  DollarSign,
  Shield,
  PieChart,
};

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredModules = modules.filter(module =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Learning <span className="gradient-text">Hub</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Master finance through interactive modules designed for Indian learners
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search modules..."
            className="pl-10 bg-card border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModules.map((module) => (
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

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No modules found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};

export default Learn;

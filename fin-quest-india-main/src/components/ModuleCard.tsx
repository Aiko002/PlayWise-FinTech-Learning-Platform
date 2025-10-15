import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Star, Users, Clock } from "lucide-react";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  lessonCount: number;
  learners: string;
  rating: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

const ModuleCard = ({
  id,
  title,
  description,
  icon: Icon,
  lessonCount,
  learners,
  rating,
  duration,
  difficulty,
}: ModuleCardProps) => {
  const difficultyColors = {
    Beginner: "bg-success/20 text-success",
    Intermediate: "bg-primary/20 text-primary",
    Advanced: "bg-destructive/20 text-destructive",
    Expert: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="glass-card p-6 rounded-xl hover-lift group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:animate-glow-pulse">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-heading font-bold mb-1">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{learners}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{lessonCount} Lessons</span>
        <Link to={`/learn/${id}`}>
          <Button size="sm" className="bg-primary hover:bg-primary-glow">
            Start Learning
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleCard;

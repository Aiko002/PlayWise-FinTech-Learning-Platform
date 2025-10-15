import { useParams, Link } from "react-router-dom";
import { modules } from "@/data/modules";
import { ArrowLeft, Clock, Zap, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Module not found</h1>
        <Link to="/learn">
          <Button>Back to Learning Hub</Button>
        </Link>
      </div>
    );
  }

  const completedLessons = Math.floor(module.lessons.length * 0.6);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link to="/learn">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Learning Hub
        </Button>
      </Link>

      {/* Module Header */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">{module.icon === "TrendingUp" ? "📈" : module.icon === "Bitcoin" ? "₿" : module.icon === "Shield" ? "🛡️" : module.icon === "Layers" ? "📊" : module.icon === "DollarSign" ? "💱" : "📊"}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">{module.title}</h1>
            <p className="text-muted-foreground text-lg mb-4">{module.description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{module.duration} total</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">⭐</span>
                <span>{module.rating} rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">👥</span>
                <span>{module.learners} learners</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Your Progress</div>
            <div className="text-3xl font-heading font-bold gradient-text mb-2">
              {Math.round((completedLessons / module.lessons.length) * 100)}%
            </div>
            <Progress value={(completedLessons / module.lessons.length) * 100} className="w-32" />
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-bold mb-6">
          Course Content ({module.lessons.length} Lessons)
        </h2>
        {module.lessons.map((lesson, index) => {
          const isCompleted = index < completedLessons;
          const isLocked = index > completedLessons;

          return (
            <div
              key={lesson.id}
              className={`glass-card p-6 rounded-xl hover-lift ${isLocked ? "opacity-60" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted ? "bg-success/20 text-success" : 
                    isLocked ? "bg-muted text-muted-foreground" : 
                    "bg-primary/20 text-primary"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : isLocked ? (
                      <Lock className="w-5 h-5" />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-1">{lesson.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className={`px-2 py-0.5 rounded ${
                        lesson.difficulty === "Beginner" ? "bg-success/20 text-success" :
                        lesson.difficulty === "Intermediate" ? "bg-primary/20 text-primary" :
                        lesson.difficulty === "Advanced" ? "bg-destructive/20 text-destructive" :
                        "bg-purple-500/20 text-purple-400"
                      }`}>
                        {lesson.difficulty}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-primary" />
                        <span>{lesson.xp} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={`/learn/${module.id}/lesson/${lesson.id}/play`}>
                  <Button 
                    size="sm" 
                    disabled={isLocked}
                    className={isCompleted ? "bg-success hover:bg-success/80" : ""}
                  >
                    {isCompleted ? "Review" : isLocked ? "Locked" : "Start"}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total XP */}
      <div className="mt-8 glass-card p-6 rounded-xl text-center">
        <p className="text-muted-foreground mb-2">Total XP Available</p>
        <p className="text-4xl font-heading font-bold gradient-text">
          {module.lessons.reduce((sum, lesson) => sum + lesson.xp, 0)} XP
        </p>
      </div>
    </div>
  );
};

export default ModuleDetail;

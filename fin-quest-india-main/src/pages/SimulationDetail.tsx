import { useParams, Link } from "react-router-dom";
import { simulations } from "@/data/simulations";
import { ArrowLeft, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const SimulationDetail = () => {
  const { simulationId } = useParams();
  const simulation = simulations.find(s => s.id === simulationId);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  if (!simulation) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Simulation not found</h1>
        <Link to="/simulations">
          <Button>Back to Simulations</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (selectedOption === null) {
      toast.error("Please select an option first!");
      return;
    }
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResults(false);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link to="/simulations">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Simulations
        </Button>
      </Link>

      {/* Simulation Header */}
      <div className="glass-card p-8 rounded-xl mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
            {simulation.category}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < simulation.difficulty
                    ? "fill-primary text-primary"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{simulation.title}</h1>
        
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-4">
          <p className="text-lg mb-2 font-semibold">Scenario:</p>
          <p className="text-muted-foreground">{simulation.scenario}</p>
        </div>

        <div className="bg-muted/20 border border-border rounded-lg p-6">
          <p className="text-lg mb-2 font-semibold">Context:</p>
          <p className="text-muted-foreground">{simulation.context}</p>
        </div>
      </div>

      {/* Options */}
      {!showResults ? (
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4">What would you do?</h2>
          {simulation.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full glass-card p-6 rounded-xl text-left transition-all hover-lift ${
                selectedOption === index
                  ? "border-2 border-primary bg-primary/10"
                  : "border border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selectedOption === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <p className="flex-1">{option.text}</p>
              </div>
            </button>
          ))}
          
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full bg-primary hover:bg-primary-glow mt-6"
            size="lg"
          >
            Submit Answer
          </Button>
        </div>
      ) : (
        <>
          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Results</h2>
            {simulation.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = option.isCorrect;
              
              return (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-xl mb-4 ${
                    isCorrect
                      ? "border-2 border-success bg-success/10"
                      : isSelected
                      ? "border-2 border-destructive bg-destructive/10"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCorrect
                        ? "bg-success text-success-foreground"
                        : isSelected
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {isCorrect ? "✓" : isSelected ? "✗" : String.fromCharCode(65 + index)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-2">{option.text}</p>
                      <p className="text-sm text-muted-foreground">{option.feedback}</p>
                      {isSelected && (
                        <div className="flex items-center gap-2 mt-3">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold">+{option.xp} XP</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning Point */}
          <div className="glass-card p-8 rounded-xl mb-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-heading font-bold mb-3 flex items-center gap-2">
              <span>💡</span> Key Learning
            </h3>
            <p className="text-muted-foreground text-lg">{simulation.learningPoint}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={handleReset} variant="outline" className="flex-1">
              Try Again
            </Button>
            <Link to="/simulations" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary-glow">
                Next Simulation
              </Button>
            </Link>
          </div>
        </>
      )}

      {/* Stats Footer */}
      <div className="mt-8 glass-card p-6 rounded-xl">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Completion rate: {simulation.completedBy}</span>
          <span>Max XP: {Math.max(...simulation.options.map(o => o.xp))} points</span>
        </div>
      </div>
    </div>
  );
};

export default SimulationDetail;

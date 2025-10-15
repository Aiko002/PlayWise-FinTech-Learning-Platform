import { Trophy, Clock } from "lucide-react";

const Challenges = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold text-center mb-12">
        <Trophy className="inline-block w-10 h-10 mr-3 text-primary" />
        <span className="gradient-text">Challenges</span>
      </h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {["Scam Hunter Week", "Financial Literacy Champion", "Budget 2025 Prediction"].map((title, i) => (
          <div key={title} className="glass-card p-6 rounded-xl hover-lift">
            <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{[5, 18, 12][i]} days left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;

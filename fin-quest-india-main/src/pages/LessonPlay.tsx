import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, Heart, Shield } from "lucide-react";
import { modules } from "@/data/modules";
import { getScamLessonSteps, GamifiedStep } from "@/data/gamified/scamPlay";
import { markLessonCompleted } from "@/lib/progress";

export default function LessonPlay() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  const module = useMemo(() => modules.find((m) => m.id === moduleId), [moduleId]);

  // Only implement for Scam Awareness module
  const isSupportedModule = moduleId === "scam-awareness";
  const steps: GamifiedStep[] = isSupportedModule && lessonId ? getScamLessonSteps(lessonId) : [];

  const [current, setCurrent] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedBool, setSelectedBool] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

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

  if (!isSupportedModule) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" /> Gamified Mode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Gamified lessons are currently available for <strong>Scam Awareness</strong> only. More modules coming soon!
            </p>
            <Button onClick={() => navigate(`/learn/${moduleId}`)}>Back to Module</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!steps.length) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>No content for this lesson yet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Please pick another lesson.</p>
            <Button onClick={() => navigate(`/learn/${moduleId}`)}>Back to Module</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const total = steps.length;
  const step = steps[current];

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
    } else {
      setLives((l) => Math.max(0, l - 1));
    }
  };

  const onOptionClick = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    const isCorrect = idx === step.correctIndex;
    handleAnswer(isCorrect);
  };

  const onBoolClick = (val: boolean) => {
    if (answered) return;
    setSelectedBool(val);
    const isCorrect = val === step.answerBool;
    handleAnswer(isCorrect);
  };

  const nextStep = () => {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelectedIdx(null);
      setSelectedBool(null);
      setAnswered(false);
    } else {
      // Finish lesson: simple XP award = correct * 10
      const xpAward = correctCount * 10;
      markLessonCompleted(moduleId!, lessonId!, xpAward);
      navigate(`/learn/${moduleId}`);
    }
  };

  const progressPct = ((current) / total) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-heading font-bold">{module.title} · Lesson {lessonId}</h1>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart key={i} className={`w-5 h-5 ${i < lives ? "text-destructive" : "text-muted-foreground"}`} />
          ))}
        </div>
      </div>

      <Progress value={progressPct} className="mb-6" />

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">{step.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          {step.type === "mcq" && step.options && (
            <div className="grid gap-3">
              {step.options.map((opt, idx) => {
                const isSelected = selectedIdx === idx;
                const isCorrect = idx === step.correctIndex;
                const variant = answered
                  ? isCorrect
                    ? "default"
                    : isSelected
                    ? "destructive"
                    : "outline"
                  : isSelected
                  ? "secondary"
                  : "outline";
                return (
                  <Button
                    key={idx}
                    variant={variant as any}
                    className="justify-start"
                    onClick={() => onOptionClick(idx)}
                  >
                    {opt}
                  </Button>
                );
              })}
            </div>
          )}

          {step.type === "truefalse" && (
            <div className="flex gap-3">
              <Button
                variant={answered ? (step.answerBool ? "default" : selectedBool === true ? "destructive" : "outline") : selectedBool === true ? "secondary" : "outline"}
                onClick={() => onBoolClick(true)}
              >
                True
              </Button>
              <Button
                variant={answered ? (!step.answerBool ? "default" : selectedBool === false ? "destructive" : "outline") : selectedBool === false ? "secondary" : "outline"}
                onClick={() => onBoolClick(false)}
              >
                False
              </Button>
            </div>
          )}

          {answered && (
            <div className="mt-4 flex items-start gap-2 text-sm">
              {((step.type === "mcq" && selectedIdx === step.correctIndex) || (step.type === "truefalse" && selectedBool === step.answerBool)) ? (
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
              )}
              <p className="text-muted-foreground">{step.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button variant="ghost" onClick={() => navigate(`/learn/${moduleId}`)}>Quit</Button>
            <Button onClick={nextStep} disabled={!answered}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

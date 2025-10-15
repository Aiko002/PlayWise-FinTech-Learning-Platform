export interface LessonProgress {
  completed: boolean;
  xpEarned: number;
  lastPlayedAt: string;
}

export interface ModuleProgress {
  lessons: Record<string, LessonProgress>;
  totalXp: number;
}

const STORAGE_KEY = "playwise_progress";

type AllProgress = Record<string, ModuleProgress>;

function readAllProgress(): AllProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as AllProgress;
  } catch {
    return {};
  }
}

function writeAllProgress(all: AllProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function getModuleProgress(moduleId: string): ModuleProgress {
  const all = readAllProgress();
  return (
    all[moduleId] || {
      lessons: {},
      totalXp: 0,
    }
  );
}

export function setModuleProgress(moduleId: string, progress: ModuleProgress) {
  const all = readAllProgress();
  all[moduleId] = progress;
  writeAllProgress(all);
}

export function markLessonCompleted(
  moduleId: string,
  lessonId: string,
  xpAward: number
): ModuleProgress {
  const progress = getModuleProgress(moduleId);
  const existing = progress.lessons[lessonId] || {
    completed: false,
    xpEarned: 0,
    lastPlayedAt: new Date(0).toISOString(),
  };

  const updated: LessonProgress = {
    completed: true,
    xpEarned: Math.max(existing.xpEarned, xpAward),
    lastPlayedAt: new Date().toISOString(),
  };

  progress.lessons[lessonId] = updated;
  // Recompute total XP
  progress.totalXp = Object.values(progress.lessons).reduce(
    (sum, lp) => sum + lp.xpEarned,
    0
  );

  setModuleProgress(moduleId, progress);
  return progress;
}

export function getCompletedLessonCount(moduleId: string): number {
  const progress = getModuleProgress(moduleId);
  return Object.values(progress.lessons).filter((l) => l.completed).length;
}

export interface Verb {
  verb: string;
  praesens: string;
  praeteritum: string;
  perfekt: string;
  meaning: string;
}

export interface MistakeRecord {
  [verb: string]: number;
}

export interface Stats {
  totalPracticed: number;
  correctCount: number;
  mistakes: MistakeRecord;
  practiced: Record<string, boolean>;
  lastPracticeDate: string | null;
}

export type ViewState = 'dashboard' | 'quiz' | 'study' | 'dictionary' | 'stats';

export type QuizMode = 'all' | '20' | '10' | 'mistakes';

export interface QuizState {
  isActive: boolean;
  mode: QuizMode;
  queue: Verb[];
  currentIndex: number;
  answers: {
    prat: string;
    perf: string;
  };
  feedback: {
    prat: boolean | null; // null = unchecked, true = correct, false = wrong
    perf: boolean | null;
    submitted: boolean;
  };
}
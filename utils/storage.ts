import { Stats } from '../types';

const STORAGE_KEY = 'german_verbs_pro_stats_v3';

const defaultStats: Stats = {
  totalPracticed: 0,
  correctCount: 0,
  mistakes: {},
  practiced: {},
  lastPracticeDate: null,
};

export const getInitialStats = (): Stats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with defaultStats to ensure new fields (like 'practiced') exist for old data
      return { ...defaultStats, ...parsed };
    }
  } catch (error) {
    console.error('Failed to load stats', error);
  }

  return defaultStats;
};

export const saveStats = (stats: Stats) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to save stats', error);
  }
};
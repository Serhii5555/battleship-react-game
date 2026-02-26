import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Difficulty } from "../constants/difficulties";
import { difficulties } from "../constants/difficulties";

export type GameSettings = {
  label: React.ReactNode;
  difficulty: Difficulty;
  boardSize: number;
  shipCount: number;
  maxShots: number;
};

export type GameResult = {
  shots: number;
  hits: number;
  shipCount: number;
  won: boolean;
  message?: string;
  timeElapsed?: number;
  timestamp?: number;
};

export type GameStats = {
  games: number;
  wins: number;
  totalShots: number;
  totalTime: number;
};

interface GameStoreState {
  // Settings
  settings: GameSettings;
  setSettings: (settings: GameSettings) => void;
  updateDifficulty: (difficulty: Difficulty) => void;

  // Game Results
  results: GameResult[];
  addResult: (result: GameResult) => void;
  clearResults: () => void;
  lastResult: GameResult | null;

  // Statistics
  stats: GameStats;
  updateStats: (result: GameResult) => void;
  resetStats: () => void;
}

const defaultSettings: GameSettings = {
  label: difficulties.easy.label,
  difficulty: "easy",
  boardSize: difficulties.easy.boardSize,
  shipCount: difficulties.easy.shipCount,
  maxShots: difficulties.easy.maxShots,
};

const defaultStats: GameStats = {
  games: 0,
  wins: 0,
  totalShots: 0,
  totalTime: 0,
};

export const useGameStore = create<GameStoreState>()(
  persist(
    (set) => ({
      // Settings
      settings: defaultSettings,

      setSettings: (settings: GameSettings) => {
        set({ settings });
      },

      updateDifficulty: (difficulty: Difficulty) => {
        const difficultyData = difficulties[difficulty];
        set({
          settings: {
            label: difficultyData.label,
            difficulty,
            boardSize: difficultyData.boardSize,
            shipCount: difficultyData.shipCount,
            maxShots: difficultyData.maxShots,
          },
        });
      },

      // Game Results
      results: [],
      lastResult: null,

      addResult: (result: GameResult) => {
        set((state) => {
          const newStats = {
            games: state.stats.games + 1,
            wins: state.stats.wins + (result.won ? 1 : 0),
            totalShots: state.stats.totalShots + result.shots,
            totalTime: state.stats.totalTime + (result.timeElapsed || 0),
          };
          return {
            results: [...state.results, { ...result, timestamp: Date.now() }],
            lastResult: result,
            stats: newStats,
          };
        });
      },

      clearResults: () => {
        set({ results: [], lastResult: null });
      },

      // Statistics
      stats: defaultStats,

      updateStats: (result: GameResult) => {
        set((state) => {
          const newStats = {
            games: state.stats.games + 1,
            wins: state.stats.wins + (result.won ? 1 : 0),
            totalShots: state.stats.totalShots + result.shots,
            totalTime: state.stats.totalTime + (result.timeElapsed || 0),
          };
          return { stats: newStats };
        });
      },

      resetStats: () => {
        set({ stats: defaultStats, results: [], lastResult: null });
      },
    }),
    {
      name: "battleship-storage",
      version: 1,
    }
  )
);

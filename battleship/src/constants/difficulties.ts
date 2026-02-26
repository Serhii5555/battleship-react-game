export const difficulties = {
  easy: { label: "🟢 Easy", boardSize: 5, shipCount: 3, maxShots: 20 },
  medium: { label: "🟡 Medium", boardSize: 7, shipCount: 5, maxShots: 25 },
  hard: { label: "🔴 Hard", boardSize: 10, shipCount: 8, maxShots: 30 },
  test: { label: "test1", boardSize: 2, shipCount: 2, maxShots: 2 },
} as const;

export type Difficulty = keyof typeof difficulties;

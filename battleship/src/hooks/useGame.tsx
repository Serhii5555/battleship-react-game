import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGameStore, type GameResult } from "../store/gameStore";
import type { Difficulty } from "../constants/difficulties";

type Cell = {
  x: number;
  y: number;
  hasShip: boolean;
  shot: boolean;
};

export type GameSettings = {
  difficulty: Difficulty;
  boardSize: number;
  shipCount: number;
  maxShots: number;
};

export type { GameResult };

export default function useGame(
  defaultSize = 5,
  onGameEnd?: (result: GameResult) => void
) {
  const location = useLocation();
  const { settings: storeSettings, addResult } = useGameStore();

  const settings = (location.state as GameSettings) ||
    storeSettings || {
      boardSize: defaultSize,
      shipCount: 3,
      maxShots: 20,
      difficulty: "easy" as const,
    };

  const { boardSize, shipCount, maxShots } = settings;

  const [board, setBoard] = useState<Cell[]>(() => createBoard(boardSize));
  const [isGameFinalized, setIsGameFinalized] = useState(false);

  const placeShipsRandomly = useCallback(() => {
    setBoard((prev) => {
      const copy = prev.map((c) => ({ ...c, hasShip: false, shot: false }));
      let placed = 0;
      while (placed < shipCount) {
        const idx = Math.floor(Math.random() * copy.length);
        if (!copy[idx].hasShip) {
          copy[idx].hasShip = true;
          placed++;
        }
      }
      return copy;
    });
  }, [shipCount]);

  useEffect(() => {
    placeShipsRandomly();
  }, [placeShipsRandomly]);

  const finalizeGame = useCallback(
    (won: boolean, shots: number, hits: number, timeElapsed?: number) => {
      if (isGameFinalized) return;

      setIsGameFinalized(true);

      const result: GameResult = {
        shots,
        hits,
        shipCount,
        won,
        message: won ? "You won!" : "You lost :(",
        timeElapsed,
      };

      // Save to Zustand store (includes stats update)
      addResult(result);

      if (onGameEnd) onGameEnd(result);
    },
    [shipCount, addResult, onGameEnd, isGameFinalized]
  );

  const shootAt = useCallback(
    (x: number, y: number, currentElapsed?: number) => {
      setBoard((prev) => {
        const copy = prev.map((c) => ({ ...c }));
        const idx = copy.findIndex((c) => c.x === x && c.y === y);
        if (idx === -1 || copy[idx].shot) return prev;

        copy[idx].shot = true;

        const shots = copy.filter((c) => c.shot).length;
        const hits = copy.filter((c) => c.shot && c.hasShip).length;

        if (hits === shipCount && shots <= maxShots) {
          setTimeout(() => finalizeGame(true, shots, hits, currentElapsed), 0);
        } else if (shots >= maxShots && hits < shipCount) {
          setTimeout(() => finalizeGame(false, shots, hits, currentElapsed), 0);
        }

        return copy;
      });
    },
    [finalizeGame, shipCount, maxShots]
  );

  const stats = {
    shots: board.filter((c) => c.shot).length,
    hits: board.filter((c) => c.shot && c.hasShip).length,
    shipCells: board.filter((c) => c.hasShip).length || shipCount,
    maxShots,
  };

  const endGame = useCallback(
    (timeElapsed?: number) => {
      const shots = stats.shots;
      const hits = stats.hits;
      const won = hits === shipCount && shots <= maxShots;
      finalizeGame(won, shots, hits, timeElapsed);
    },
    [finalizeGame, stats, shipCount, maxShots]
  );

  const reset = useCallback(() => {
    setIsGameFinalized(false);
    placeShipsRandomly();
  }, [placeShipsRandomly]);

  return {
    board,
    size: boardSize,
    shootAt,
    stats,
    endGame,
    reset,
  };
}

function createBoard(size: number) {
  const board: Cell[] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board.push({ x, y, hasShip: false, shot: false });
    }
  }
  return board;
}

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameButton from "./GameButton";
import HeaderText from "./HeaderText";
import type { GameResult } from "../hooks/useGame";

type GameResultModalProps = {
  result: GameResult | null;
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  onMainMenu: () => void;
};

export default function GameResultModal({
  result,
  isOpen,
  onClose,
  onRetry,
  onMainMenu,
}: GameResultModalProps) {
  useEffect(() => {
    if (!result) return;

    const raw = localStorage.getItem("battleship_stats");

    let stats = {
      games: 0,
      wins: 0,
      totalShots: 0,
      totalTime: 0,
    };

    if (raw) {
      try {
        stats = JSON.parse(raw);
      } catch {}
    }

    stats.games += 1;
    stats.totalShots += result.shots;
    stats.totalTime += result.timeElapsed || 0;

    if (result.won) stats.wins += 1;

    localStorage.setItem("battleship_stats", JSON.stringify(stats));
  }, [result]);

  if (!result) return null;

  let duration = "N/A";
  if (typeof result.timeElapsed === "number") {
    const mins = Math.floor(result.timeElapsed / 60);
    const secs = result.timeElapsed % 60;
    duration = `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: result.won
                ? "rgba(0, 255, 128, 0.3)"
                : "rgba(255, 0, 0, 0.15)",
            }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="bg-gray-100 rounded-xl p-6 text-center max-w-sm w-80 shadow-lg">
              <HeaderText>{result.message ?? "Game result"}</HeaderText>

              <div className="flex flex-col gap-2 mt-8 text-left">
                <div className="flex justify-between font-medium">
                  <span>Ships found:</span>
                  <span>
                    {result.hits} / {result.shipCount}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Shots:</span>
                  <span>{result.shots}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total time:</span>
                  <span>{duration}</span>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-12">
                <GameButton
                  onClick={() => {
                    onMainMenu();
                  }}
                >
                  Main menu
                </GameButton>
                <GameButton onClick={onRetry}>Try again</GameButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

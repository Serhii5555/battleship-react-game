import React, { useState } from "react";
import useGame from "../hooks/useGame";
import GameButton from "../components/GameButton";
import Container from "../components/Container";
import GameTimer from "../components/GameTimer";
import SubText from "../components/SubText";
import GameResultModal from "../components/GameResultModal"; // наша модалка
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { board, size, shootAt, stats, endGame, reset } = useGame(5, (res) => {
    setResult(res);
    setIsModalOpen(true);
    setIsRunning(false);
  });

  const [isRunning, setIsRunning] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleCellClick = (x: number, y: number) => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsRunning(true);
    }
    shootAt(x, y, elapsedTime);
  };

  const handleEndGame = () => {
    setIsRunning(false);
    endGame(elapsedTime);
  };

  const handleRestart = () => {
    setResetCounter((c) => c + 1);
    setIsRunning(false);
    setHasStarted(false);
    setElapsedTime(0);
    reset();
    setIsModalOpen(false);
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${size}, 48px)`,
    gap: 4,
    marginTop: 20,
  };

  return (
    <Container>
      <GameTimer
        isRunning={isRunning}
        resetTrigger={resetCounter}
        onTick={setElapsedTime}
      />

      <SubText>
        <div>
          Hits: {stats.hits} / {stats.shipCells}
        </div>
        <div>
          Shots: {stats.shots} / {stats.maxShots}
        </div>
      </SubText>

      <div style={gridStyle}>
        {board.map((cell) => {
          const key = `${cell.x}-${cell.y}`;
          const content = cell.shot ? (cell.hasShip ? "💥" : "•") : "";
          return (
            <button
              key={key}
              onClick={() => !cell.shot && handleCellClick(cell.x, cell.y)}
              disabled={cell.shot}
              style={{
                width: 48,
                height: 48,
                fontSize: 18,
                borderRadius: 4,
                border: "1px solid #777",
                background: cell.shot ? "#ddd" : "#88c",
                cursor: cell.shot ? "default" : "pointer",
              }}
            >
              {content}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <GameButton onClick={handleRestart}>Restart</GameButton>
        <GameButton onClick={handleEndGame}>Finish</GameButton>
      </div>

      <GameResultModal
        result={result}
        isOpen={isModalOpen}
        onRetry={handleRestart}
        onMainMenu={() => navigate("/")}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
}

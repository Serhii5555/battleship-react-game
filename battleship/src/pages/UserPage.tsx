import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import HeaderText from "../components/HeaderText";
import GameButton from "../components/GameButton";
import { useGameStore } from "../store/gameStore";

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { stats, results } = useGameStore();

  const avgTime =
    stats.games > 0 ? Math.round(stats.totalTime / stats.games) : 0;

  return (
    <Container>
      <HeaderText>👤 User #{id}</HeaderText>

      <div className="p-4 bg-white bg-opacity-20 shadow-md rounded-xl text-lg mt-4 space-y-2">
        <p>🎮 Games played: {stats.games}</p>
        <p>🏆 Wins: {stats.wins}</p>
        <p>📊 Total shots: {stats.totalShots}</p>
        <p>⏱️ Avg time: {avgTime}s</p>
      </div>

      {results.length > 0 && (
        <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-xl max-w-md">
          <h3 className="text-xl font-bold mb-3">📋 Recent Results</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {results
              .slice(-5)
              .reverse()
              .map((result, idx) => (
                <div
                  key={idx}
                  className="text-sm p-2 bg-purple-100 bg-opacity-20 rounded"
                >
                  <span
                    className={result.won ? "text-green-300" : "text-red-300"}
                  >
                    {result.won ? "✅" : "❌"}
                  </span>{" "}
                  Shots: {result.shots}, Hits: {result.hits}
                  {result.timeElapsed && `, Time: ${result.timeElapsed}s`}
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <GameButton onClick={() => navigate("/")}>Main menu</GameButton>
        <GameButton onClick={() => navigate("/game")}>Play</GameButton>
      </div>
    </Container>
  );
}

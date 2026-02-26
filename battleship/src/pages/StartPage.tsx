import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import GameButton from "../components/GameButton";
import HeaderText from "../components/HeaderText";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="flex justify-end w-full mt-6 mb-10">
          <button
            onClick={() => navigate("/user/1")}
            className="w-12 h-12 rounded-full bg-[#920081] text-white flex items-center justify-center text-xl hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            👤
          </button>
        </div>

        <HeaderText className="mb-10">Battleship 5x5 ⚓</HeaderText>
        <GameButton onClick={() => navigate("/game")} className="w-100">
          Start
        </GameButton>
        <GameButton onClick={() => navigate("/settings")} className="w-100">
          ⚙️ Settings
        </GameButton>
      </Container>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../components/Container";
import GameButton from "../components/GameButton";
import HeaderText from "../components/HeaderText";
import Dropdown from "../components/SelectDropdown";
import { difficulties, type Difficulty } from "../constants/difficulties";
import { useGameStore } from "../store/gameStore";

const difficultyKeys = Object.keys(difficulties) as Difficulty[];

const schema = yup.object({
  difficulty: yup
    .string()
    .oneOf(difficultyKeys)
    .required("Please select a difficulty"),
});

export default function SettingsPage() {
  const navigate = useNavigate();
  const { settings, updateDifficulty } = useGameStore();

  const { watch, setValue } = useForm<{ difficulty: Difficulty }>({
    resolver: yupResolver(schema),
    defaultValues: { difficulty: settings?.difficulty || "easy" },
  });

  const difficulty = (watch("difficulty") as Difficulty) || "easy";
  const current = difficulties[difficulty] || difficulties["easy"];

  const handleDifficultyChange = (val: string) => {
    const diff = val as Difficulty;
    setValue("difficulty", diff);
    updateDifficulty(diff);
  };

  return (
    <Container>
      <HeaderText>⚙️ Game Settings</HeaderText>

      <div className="flex flex-col w-full gap-2 max-w-xs">
        <Dropdown
          label="Select difficulty:"
          options={Object.entries(difficulties).map(([key, diff]) => ({
            label: diff.label,
            value: key,
          }))}
          value={difficulty}
          onChange={handleDifficultyChange}
        />

        <div className="bg-gray-100 rounded-xl p-4 text-center text-xl flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="font-bold">🔢 Board size:</span>
            <span>
              {current.boardSize}×{current.boardSize}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">🚢 Ships:</span>
            <span>{current.shipCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">💥 Max shots:</span>
            <span>{current.maxShots}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <GameButton onClick={() => navigate("/")}>Back</GameButton>
        </div>
      </div>
    </Container>
  );
}

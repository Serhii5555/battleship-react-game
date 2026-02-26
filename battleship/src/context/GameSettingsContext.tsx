import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Difficulty } from "../constants/difficulties";

type GameSettings = {
  label: ReactNode;
  difficulty: Difficulty;
  boardSize: number;
  shipCount: number;
  maxShots: number;
};

const defaultSettings: GameSettings = {
  label: "🟢 Easy",
  difficulty: "easy",
  boardSize: 5,
  shipCount: 3,
  maxShots: 20,
};

const GameSettingsContext = createContext<{
  settings: GameSettings;
  setSettings: (s: GameSettings) => void;
}>({
  settings: defaultSettings,
  setSettings: () => {},
});

export const useGameSettings = () => useContext(GameSettingsContext);

export function GameSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<GameSettings>(() => {
    const saved = localStorage.getItem("battleship_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("battleship_settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <GameSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </GameSettingsContext.Provider>
  );
}

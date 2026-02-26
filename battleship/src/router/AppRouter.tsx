import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import GamePage from "../pages/GamePage";
import SettingsPage from "../pages/SettingsPage";
import UserPage from "../pages/UserPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  );
}

export default AppRouter;

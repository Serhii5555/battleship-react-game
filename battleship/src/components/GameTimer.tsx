import { useEffect, useState } from "react";

type Props = {
  isRunning: boolean;
  resetTrigger?: number;
  onTick?: (seconds: number) => void;
};

export default function GameTimer({ isRunning, resetTrigger, onTick }: Props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((s) => {
        const next = s + 1;
        onTick?.(next);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTick]);

  useEffect(() => {
    setSeconds(0);
  }, [resetTrigger]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={{ fontSize: 20, marginBottom: 10 }}>{formatTime(seconds)}</div>
  );
}

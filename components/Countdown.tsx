"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  onFinish: () => void;
}

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  // ⚡ start at 10 seconds
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setUnlocked(true);
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  // 🔓 UNLOCK SCREEN
  if (unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold text-purple-400 animate-pulse tracking-widest">
          UNLOCKED
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">

      {/* anime glow background */}
      <div className="absolute inset-0 bg-purple-900/20 blur-3xl animate-pulse" />

      {/* header */}
      <p className="text-gray-400 tracking-[0.4em] text-sm z-10">
        SYSTEM TEST MODE
      </p>

      {/* countdown */}
      <div className="mt-10 z-10 text-center">
        <div className="text-8xl font-bold text-purple-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] animate-pulse">
          {timeLeft}
        </div>

        <p className="mt-4 text-purple-400 animate-pulse">
          initiating sequence...
        </p>
      </div>
    </main>
  );
}
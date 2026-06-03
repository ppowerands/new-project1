"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  onFinish: () => void;
}

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
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

  // 🔓 PORTAL UNLOCK SCENE
  if (unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

        {/* expanding portal ring */}
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/30 animate-ping" />
        <div className="absolute w-72 h-72 rounded-full bg-purple-500/20 animate-ping" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 animate-pulse" />

        {/* glow core */}
        <div className="absolute w-24 h-24 rounded-full bg-purple-400 blur-2xl animate-pulse" />

        {/* text reveal */}
        <div className="z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-purple-300 drop-shadow-[0_0_40px_rgba(168,85,247,1)] animate-pulse">
            UNLOCKED
          </h1>

          <p className="mt-6 text-gray-300 tracking-[0.4em] animate-pulse">
            PORTAL OPENED
          </p>
        </div>
      </main>
    );
  }

  // ⏳ COUNTDOWN SCENE
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">

      {/* background aura */}
      <div className="absolute inset-0 bg-purple-900/20 blur-3xl animate-pulse" />

      {/* system text */}
      <p className="text-gray-400 tracking-[0.4em] text-sm z-10">
        SYSTEM TEST MODE
      </p>

      {/* timer */}
      <div className="mt-10 z-10 text-center">
        <div className="text-8xl font-bold text-purple-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] transition-all duration-300">
          {timeLeft}
        </div>

        <p className="mt-4 text-purple-400 animate-pulse">
          sealing energy core...
        </p>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  onFinish: () => void;
}

const targetDate = new Date("2026-06-26T00:00:00").getTime();

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setUnlocked(true);
        onFinish();
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  // 🔓 UNLOCK SCREEN
  if (unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 scale-150 blur-2xl bg-gradient-to-br from-purple-900 via-black to-indigo-900 animate-pulse" />

        <div className="absolute w-96 h-96 rounded-full bg-purple-500/30 animate-ping" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 animate-pulse" />

        <div className="z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-purple-300 animate-pulse tracking-widest">
            UNLOCKED
          </h1>

          <p className="mt-6 text-gray-300 tracking-[0.4em]">
            DIMENSION SHIFT COMPLETE
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* background aura */}
      <div className="absolute inset-0 bg-purple-900/20 blur-3xl animate-pulse" />

      {/* SYSTEM TEXT */}
      <p className="text-gray-400 tracking-[0.4em] text-sm z-10">
        I love you💜
      </p>

      <p className="mt-3 text-purple-400 animate-pulse tracking-[0.3em]">
        a surprise is waiting for you...
      </p>

      {/* TIMER */}
      <div className="mt-10 z-10 text-center">
        <div className="text-5xl md:text-7xl font-bold text-purple-300 tracking-widest drop-shadow-[0_0_30px_rgba(168,85,247,1)]">
          {String(timeLeft.days).padStart(2, "0")}:
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </main>
  );
}
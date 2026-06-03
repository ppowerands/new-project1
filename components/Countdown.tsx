"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  onFinish: () => void;
}

const targetDate = new Date("2026-06-26T00:00:00").getTime();

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);

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

        // ⚡ warp trigger
        setShake(true);
        setTimeout(() => setShake(false), 600);

        setTimeout(() => {
          setUnlocked(true);
          onFinish();
        }, 500);

        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  // 🔓 UNLOCKED DIMENSION SHIFT
  if (unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

        {/* warp background */}
        <div className="absolute inset-0 scale-150 blur-2xl bg-gradient-to-br from-purple-900 via-black to-indigo-900 animate-pulse" />

        {/* portal rings */}
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/40 animate-ping" />
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 animate-ping" />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-purple-500/10 animate-pulse" />

        {/* core glow */}
        <div className="absolute w-32 h-32 rounded-full bg-purple-400 blur-3xl animate-pulse" />

        {/* glitch overlay */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-pulse" />

        {/* text */}
        <div className="z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-purple-300 drop-shadow-[0_0_60px_rgba(168,85,247,1)] animate-pulse">
            UNLOCKED
          </h1>

          <p className="mt-6 text-gray-300 tracking-[0.5em] animate-pulse">
            DIMENSION SHIFT COMPLETE
          </p>
        </div>
      </main>
    );
  }

  // ⏳ COUNTDOWN
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden transition-all duration-300 ${
        shake ? "animate-pulse scale-105" : ""
      }`}
    >
      {/* background aura */}
      <div className="absolute inset-0 bg-purple-900/20 blur-3xl animate-pulse" />

      {/* unstable field */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_60%)] animate-ping" />

      {/* system status */}
      <p className="text-gray-400 tracking-[0.4em] text-sm z-10">
        A suprise for the love of my life💜
      </p>

      <p className="mt-3 text-purple-400 animate-pulse tracking-[0.3em]">
        YES USMAN LOVES YOU SO MUCH!!!💜💜💜
      </p>

      {/* timer */}
      <div className="mt-10 z-10 text-center">
        <div className="text-5xl md:text-7xl font-bold text-purple-300 drop-shadow-[0_0_30px_rgba(168,85,247,1)] tracking-widest">
          {String(timeLeft.days).padStart(2, "0")}:
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>

      {/* warning */}
      <div className="absolute bottom-10 text-xs text-purple-500 opacity-50 tracking-[0.5em] animate-pulse">
        ▓ DIMENSION LOCK ACTIVE ▓
      </div>
    </main>
  );
}
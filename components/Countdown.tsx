"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  onFinish: () => void;
}

const targetDate = new Date("2026-06-26T00:00:00").getTime();

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);

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
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onFinish();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 250); // smoother updates than 1s

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  const format = (value: number) => String(value).padStart(2, "0");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <p className="text-gray-400 text-sm tracking-widest">
        unlocking on june 26, 2026
      </p>

      <p className="mt-4 text-lg text-purple-300">
        something is waiting for you 💜
      </p>

      {/* Smooth single-line counter */}
      <div
        className="mt-10 text-5xl md:text-7xl font-bold tracking-widest transition-all duration-200 ease-out"
      >
        {format(timeLeft.days)}:
        {format(timeLeft.hours)}:
        {format(timeLeft.minutes)}:
        {format(timeLeft.seconds)}
      </div>
    </main>
  );
}
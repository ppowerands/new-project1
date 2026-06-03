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
        onFinish();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <main>
      <p className="text-gray-400 mt-4">
        unlocking on june 26, 2026
      </p>

      <p>something is waiting for you 💜</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
        <div className="bg-[#111] border border-purple-900 rounded-2xl p-6">
          <div className="text-4xl md:text-6xl font-bold">{timeLeft.days}</div>
          <div className="text-gray-400 mt-2">days</div>
        </div>

        <div className="bg-[#111] border border-purple-900 rounded-2xl p-6">
          <div className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</div>
          <div className="text-gray-400 mt-2">hours</div>
        </div>

        <div className="bg-[#111] border border-purple-900 rounded-2xl p-6">
          <div className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</div>
          <div className="text-gray-400 mt-2">minutes</div>
        </div>

        <div className="bg-[#111] border border-purple-900 rounded-2xl p-6">
          <div className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</div>
          <div className="text-gray-400 mt-2">seconds</div>
        </div>
      </div>
    </main>
  );
}
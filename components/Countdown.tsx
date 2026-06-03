"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  onFinish: () => void;
};

export default function Countdown({ onFinish }: CountdownProps) {
  const [mounted, setMounted] = useState(false);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 10, // 🔐 short unlock timer for your project
  });

  useEffect(() => {
    setMounted(true);

    let totalSeconds = 10; // 🔐 change this if you want longer lock

    const interval = setInterval(() => {
      totalSeconds -= 1;

      if (totalSeconds <= 0) {
        clearInterval(interval);
        onFinish(); // 🔥 THIS UNLOCKS YOUR SITE
        return;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      
      <h1 className="text-purple-400 text-2xl mb-6">
        unlocking experience...
      </h1>

      <div className="flex gap-6 text-3xl font-bold">
        <div>{time.hours}h</div>
        <div>{time.minutes}m</div>
        <div>{time.seconds}s</div>
      </div>

      <p className="text-gray-500 mt-6">
        please wait...
      </p>

    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2026-12-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="flex gap-4 text-white">
      <div>{time.hours}h</div>
      <div>{time.minutes}m</div>
      <div>{time.seconds}s</div>
    </div>
  );
}
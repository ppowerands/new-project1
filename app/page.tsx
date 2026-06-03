"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";

export default function Page() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <Countdown onFinish={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white">
      <h1>UNLOCKED ✅</h1>
    </main>
  );
}
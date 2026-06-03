"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";
import BiscuitStory from "@/components/BiscuitStory";

export default function Page() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <Countdown onFinish={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen text-white">
      <h1 className="p-6 text-green-400">STEP 2 TESTING BISCUIT STORY</h1>

      <BiscuitStory />
    </main>
  );
}
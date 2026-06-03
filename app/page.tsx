"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";
import BiscuitStory from "@/components/BiscuitStory";
import NoticeSection from "@/components/NoticeSection";

export default function Page() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <Countdown onFinish={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen text-white">
      <h1 className="p-6 text-green-400">STEP 3 TESTING NOTICE SECTION</h1>

      <BiscuitStory />
      <NoticeSection />
    </main>
  );
}
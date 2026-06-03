"use client";

import { useState } from "react";

import Countdown from "@/components/Countdown";
import BiscuitStory from "@/components/BiscuitStory";
import NoticeSection from "@/components/NoticeSection";
import InvestigationSection from "@/components/InvestigationSection";
import StatsSection from "@/components/StatsSection";
import LoveList from "@/components/LoveList";
import FinalGift from "@/components/FinalGift";
import FinalLetter from "@/components/FinalLetter";

export default function Page() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  if (!isUnlocked) {
    return <Countdown onFinish={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen text-white">

      <BiscuitStory />
      <NoticeSection />
      <InvestigationSection />
      <StatsSection />
      <LoveList />

      {!showLetter ? (
        <FinalGift onOpen={() => setShowLetter(true)} />
      ) : (
        <FinalLetter />
      )}

    </main>
  );
}
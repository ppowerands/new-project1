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

// 🔐 DEV SWITCH (CHANGE BEFORE DEPLOY)
const DEV_MODE = false;

export default function Page() {
  // 🔐 LOCK STATE
  const [isUnlocked, setIsUnlocked] = useState(DEV_MODE);

  // 🎬 FINAL FLOW STATE
  const [stage, setStage] = useState<"gift" | "letter">("gift");

  // 🔒 LOCK SCREEN (COUNTDOWN GATE)
  if (!isUnlocked) {
    return (
      <Countdown onFinish={() => setIsUnlocked(true)} />
    );
  }

  // 🎬 MAIN EXPERIENCE AFTER UNLOCK
  return (
    <main className="relative">

      {/* STORY SECTIONS */}
      <BiscuitStory />
      <NoticeSection />
      <InvestigationSection />
      <StatsSection />
      <LoveList />

      {/* FINAL GIFT → LETTER TRANSITION */}
      {stage === "gift" && (
        <FinalGift onOpen={() => setStage("letter")} />
      )}

      {stage === "letter" && <FinalLetter />}

    </main>
  );
}
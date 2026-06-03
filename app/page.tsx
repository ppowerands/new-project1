"use client";

import { useState, useEffect } from "react";

import BiscuitStory from "@/components/BiscuitStory";
import NoticeSection from "@/components/NoticeSection";
import InvestigationSection from "@/components/InvestigationSection";
import StatsSection from "@/components/StatsSection";
import LoveList from "@/components/LoveList";
import FinalGift from "@/components/FinalGift";
import FinalLetter from "@/components/FinalLetter";

export default function Page() {
  const [stage, setStage] = useState<
    "story" | "gift" | "letter"
  >("story");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <BiscuitStory />
      <NoticeSection />
      <InvestigationSection />
      <StatsSection />
      <LoveList />

      {stage === "story" && (
        <FinalGift onOpen={() => setStage("letter")} />
      )}

      {stage === "letter" && <FinalLetter />}
    </main>
  );
}
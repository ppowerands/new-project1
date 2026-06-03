"use client";

import { useEffect, useState } from "react";

type FinalGiftProps = {
  onOpen: () => void;
};

const loves = [
  "the way you say 'kaii' 😂",
  "your unexpected kindness",
  "how deeply you care about small things",
  "your emotional heart",
  "your funny food combinations",
  "the way you get excited and can’t hide it",
  "how your typing changes when you're happy",
  "the way you make conversations feel easy",
  "your soft personality",
  "how you actually listen",
  "your random funny arguments 😭",
  "your honesty",
  "the way you stay real no matter what",
  "how you make simple moments feel special",
  "your reactions to everything",
  "your uniqueness",
  "the fact that you became important to me unexpectedly 💜"
];

export default function FinalGift({ onOpen }: FinalGiftProps) {
  const [revealed, setRevealed] = useState<number>(0);

  useEffect(() => {
    if (revealed >= loves.length) {
      const timer = setTimeout(() => {
        onOpen();
      }, 1500);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setRevealed((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [revealed, onOpen]);

  return (
    <div className="section min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* title */}
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        17 things i love about you 💜
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        unfolding something… one memory at a time
      </p>

      {/* boxes reveal */}
      <div className="mt-12 grid gap-3 w-full max-w-xl">

        {loves.slice(0, revealed).map((item, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] border border-purple-900/40 rounded-xl p-4 text-left animate-fadeIn"
          >
            <p className="text-purple-300 font-semibold">
              #{index + 1}
            </p>
            <p className="text-gray-300 mt-2">
              {item}
            </p>
          </div>
        ))}

      </div>

      {/* loading state */}
      {revealed < loves.length && (
        <p className="mt-8 text-purple-400 animate-fadeIn">
          unlocking love...
        </p>
      )}

    </div>
  );
}
"use client";

import { useState } from "react";

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

export default function LoveList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

      {/* title */}
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        17 things i love about you 💜
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        not everything needs to be said at once… some things deserve a moment
      </p>

      {/* list */}
      <div className="mt-12 grid gap-5 w-full max-w-2xl">

        {loves.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6 cursor-pointer text-left transition-all"
          >

            <h3 className="text-purple-300 font-semibold">
              reason #{index + 1}
            </h3>

            {open === index && (
              <p className="text-gray-300 mt-4 animate-fadeIn leading-relaxed">
                {item}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [kaiiCount, setKaiiCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  const [biscuitChance, setBiscuitChance] = useState(0);

  useEffect(() => {
    let i = 0;
    let j = 0;
    let k = 0;

    const interval = setInterval(() => {
      if (i < 42) {
        i++;
        setKaiiCount(i);
      }

      if (j < 5000) {
        j += 2;
        setLoveCount(j);
      }

      if (k < 99) {
        k++;
        setBiscuitChance(k);
      }

      if (i >= 42 && j >= 5000 && k >= 99) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

      {/* title */}
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        relationship stats 💜
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        completely accurate data (trust me) 😂
      </p>

      {/* stats */}
      <div className="grid gap-6 mt-12 w-full max-w-2xl">

        {/* KAII COUNT */}
        <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">

          <h3 className="text-purple-300 font-semibold">
            times “kaii” was detected
          </h3>

          <p className="text-3xl mt-3 text-white">
            {kaiiCount}
          </p>

        </div>

        {/* LOVE COUNT */}
        <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">

          <h3 className="text-purple-300 font-semibold">
            “i love you” occurrences
          </h3>

          <p className="text-3xl mt-3 text-white">
            {loveCount}
          </p>

        </div>

        {/* BISCUIT IMPACT */}
        <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">

          <h3 className="text-purple-300 font-semibold">
            biscuit impact probability
          </h3>

          <p className="text-3xl mt-3 text-white">
            {biscuitChance}%
          </p>

        </div>

      </div>

    </section>
  );
}
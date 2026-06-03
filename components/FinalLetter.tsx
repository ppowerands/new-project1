"use client";

import { useEffect, useState } from "react";

export default function FinalLetter() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 3200),
      setTimeout(() => setStep(3), 6000),
      setTimeout(() => setStep(4), 8800),
      setTimeout(() => setStep(5), 11600),
      setTimeout(() => setStep(6), 14500),
      setTimeout(() => setStep(7), 17500),
      setTimeout(() => setStep(8), 20500),
      setTimeout(() => setStep(9), 23500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black" />

      <div className="relative z-10 max-w-2xl">

        <h2 className="text-3xl md:text-4xl text-purple-400 font-bold">
          a final message for you 💜
        </h2>

        {step >= 1 && (
          <p className="mt-10 text-gray-300 animate-fadeIn">
            happy birthday, dije 💜
          </p>
        )}

        {step >= 2 && (
          <p className="mt-6 text-gray-300 animate-fadeIn leading-relaxed">
            today isn’t just a celebration of your birthday…
            it’s a reminder that you exist, and that matters.
          </p>
        )}

        {step >= 3 && (
          <p className="mt-6 text-gray-300 animate-fadeIn leading-relaxed">
            i didn’t expect anything when we first started talking…
            it was random, unplanned, and simple.
          </p>
        )}

        {step >= 4 && (
          <p className="mt-6 text-gray-300 animate-fadeIn leading-relaxed">
            but somehow, from a snap… from a biscuit… from small conversations…
            it became something meaningful to me.
          </p>
        )}

        {step >= 5 && (
          <p className="mt-6 text-gray-300 animate-fadeIn leading-relaxed">
            you are emotional, funny, soft-hearted, and real in a way people don’t always notice.
          </p>
        )}

        {step >= 6 && (
          <p className="mt-6 text-gray-300 animate-fadeIn leading-relaxed">
            and maybe you don’t see it yourself…
            but the way you care about things, even small things, is rare.
          </p>
        )}

        {step >= 7 && (
          <p className="mt-8 text-purple-300 font-semibold animate-fadeIn leading-relaxed">
            i’m glad our paths crossed, even if it was unexpected.
          </p>
        )}

        {step >= 8 && (
          <p className="mt-10 text-white text-lg font-semibold animate-fadeIn">
            and i want you to know something important…
          </p>
        )}

        {step >= 9 && (
          <div className="mt-14 animate-fadeIn flex flex-col items-center">

            <p className="text-purple-400 text-4xl md:text-6xl font-extrabold tracking-wide heartbeat
              drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
              i love you so much 💜
            </p>

            <p className="text-gray-500 text-sm mt-6 tracking-widest opacity-80">
              — end —
            </p>

          </div>
        )}

      </div>
    </section>
  );
}
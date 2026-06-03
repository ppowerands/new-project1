"use client";

import { useState } from "react";

export default function BiscuitStory() {
  const [reveal, setReveal] = useState(false);

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        it all started because of a biscuit 🍪
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        sometimes the smallest things change everything…
      </p>

      {!reveal && (
        <button
          onClick={() => setReveal(true)}
          className="mt-10 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700"
        >
          read story
        </button>
      )}

      {reveal && (
        <div className="mt-12 max-w-xl text-gray-300 space-y-5 animate-fadeIn leading-relaxed">

          <p>
            for two years, you were just someone on my snapchat.
          </p>

          <p>
            we never really talked… just existed on each other’s screen.
          </p>

          <p>
            then one random day, you posted a biscuit.
          </p>

          <p>
            and out of all things… that biscuit started everything.
          </p>

          <p className="text-purple-300 font-semibold mt-6">
            🏆 achievement unlocked: relationship started by biscuit
          </p>

        </div>
      )}

    </section>
  );
}
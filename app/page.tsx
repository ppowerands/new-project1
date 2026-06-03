"use client";

import { useState } from "react";

export default function BiscuitStory() {
  const [reveal, setReveal] = useState(false);

  return (
    <section className="p-10 text-center text-white">

      <h2 className="text-2xl text-purple-400">
        BISCUIT STORY TEST
      </h2>

      <button
        onClick={() => setReveal(true)}
        className="mt-6 px-4 py-2 bg-purple-600 rounded"
      >
        CLICK ME
      </button>

      {reveal && (
        <div className="mt-6 text-green-400">
          REVEALED CONTENT WORKING ✅
        </div>
      )}

    </section>
  );
}
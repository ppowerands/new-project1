"use client";

import { useState } from "react";

export default function InvestigationSection() {
  const [reveal, setReveal] = useState(false);

  return (
    <section className="section min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

      {/* title */}
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        case file #001
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        “all men are the same” allegation 😂
      </p>

      {!reveal && (
        <button
          onClick={() => setReveal(true)}
          className="mt-10 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all"
        >
          open investigation
        </button>
      )}

      {reveal && (
        <div className="mt-12 max-w-2xl w-full space-y-5 animate-fadeIn text-left">

          <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">
            <h3 className="text-purple-300 font-semibold">
              exhibit A
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              suspect listens too well to emotional stories and still replies every time 😭
            </p>
          </div>

          <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">
            <h3 className="text-purple-300 font-semibold">
              exhibit B
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              accused of “all men are the same” but still trusting enough to build a whole investigation folder 💀
            </p>
          </div>

          <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">
            <h3 className="text-purple-300 font-semibold">
              exhibit C
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              2am emotional disturbance incident: triggered by random online stories, leading to panic, fear, and a very serious conversation that night.
            </p>
          </div>

          <div className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6">
            <h3 className="text-purple-300 font-semibold">
              exhibit D
            </h3>
            <p className="text-gray-300 mt-3 leading-relaxed">
              emotional damage level: undefined but consistently updating 😂
            </p>
          </div>

          <div className="mt-6 text-purple-300 font-semibold text-center animate-fadeIn">
            verdict: still under emotional investigation 💜
          </div>

        </div>
      )}

    </section>
  );
}
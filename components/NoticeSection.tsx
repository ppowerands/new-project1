"use client";

import { useState } from "react";

const notices = [
  {
    title: "your kindness",
    text: "you don’t realize how naturally kind you are. you help people without even thinking about it."
  },
  {
    title: "when you're excited",
    text: "you try to act normal, but it never works 😂 your energy always changes and it’s obvious."
  },
  {
    title: "kaii",
    text: "somehow 'kaii' fits into every mood, every conversation, every moment."
  },
  {
    title: "your heart",
    text: "you get attached to things deeply… even small things others would ignore."
  },
  {
    title: "you and food 😂",
    text: "your food combinations still confuse me, but at this point it’s part of your personality."
  },
  {
    title: "you and your sallah ram (sorryyyyy) ",
    text: "you care so deeply that even something meant for celebration made you emotional. that says everything."
  }
];

export default function NoticeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section min-h-screen px-6 py-24 flex flex-col items-center justify-center text-center">

      {/* title */}
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold glow-soft">
        things you don’t know i notice
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        the little things that made me see you differently 💜
      </p>

      {/* cards */}
      <div className="mt-12 grid gap-5 w-full max-w-2xl">

        {notices.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="card-hover bg-[#0f0f0f] border border-purple-900/40 rounded-2xl p-6 cursor-pointer transition-all text-left"
          >

            <h3 className="text-purple-300 font-semibold text-lg">
              {item.title}
            </h3>

            {openIndex === index && (
              <p className="text-gray-300 mt-4 animate-fadeIn leading-relaxed">
                {item.text}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}
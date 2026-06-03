"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";

export default function Page() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <Countdown onFinish={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen text-white flex items-center justify-center">
      <h1>STEP 1 PASSED ✅</h1>
    </main>
  );
}
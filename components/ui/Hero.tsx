"use client";

import { useState } from "react";
import StartFlow from "./StartFlow";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="text-center py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <h1 className="text-5xl font-bold max-w-4xl mx-auto">
          Organic Social Media Growth
          <span className="text-indigo-500"> That Converts</span>
        </h1>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          We help brands grow organically using strategy, content and engagement systems.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-10 px-10 py-4 bg-indigo-600 rounded-lg font-semibold"
        >
          Start Growth Plan
        </button>
      </section>

      {open && <StartFlow close={() => setOpen(false)} />}
    </>
  );
}

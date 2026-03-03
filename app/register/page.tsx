"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">

        {step === 1 && (
          <>
            <h2 className="text-2xl mb-6">What type of business do you run?</h2>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-purple-600 py-3 rounded-xl mb-3"
            >
              E-commerce
            </button>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-zinc-800 py-3 rounded-xl"
            >
              Service Business
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl mb-6">What is your monthly goal?</h2>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-purple-600 py-3 rounded-xl mb-3"
            >
              Increase Sales
            </button>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-zinc-800 py-3 rounded-xl"
            >
              Automate Tasks
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl mb-6">Great! We’ll prepare your AI system.</h2>
            <button className="w-full bg-green-600 py-3 rounded-xl">
              Continue →
            </button>
          </>
        )}

      </div>
    </div>
  );
}

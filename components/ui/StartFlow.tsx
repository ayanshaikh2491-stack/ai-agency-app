"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StartFlow({ close }: { close: () => void }) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-10 rounded-xl w-[90%] max-w-lg text-center">

        {step === 0 && (
          <>
            <h2 className="text-xl mb-6">What is your business type?</h2>
            <input className="w-full p-3 rounded bg-slate-800 text-white mb-6" />
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-xl mb-6">Which platform do you want to grow?</h2>
            <select className="w-full p-3 rounded bg-slate-800 text-white mb-6">
              <option>Instagram</option>
              <option>YouTube</option>
              <option>LinkedIn</option>
            </select>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl mb-6">Main goal?</h2>
            <select className="w-full p-3 rounded bg-slate-800 text-white mb-6">
              <option>Followers</option>
              <option>Engagement</option>
              <option>Sales</option>
            </select>
          </>
        )}

        <div className="flex justify-between">
          <button onClick={close} className="text-slate-400">
            Cancel
          </button>

          <button
            onClick={() => step < 2 ? setStep(step + 1) : router.push("/contact")}
            className="bg-indigo-600 px-6 py-2 rounded"
          >
            {step === 2 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

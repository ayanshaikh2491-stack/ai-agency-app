"use client";

import { useState } from "react";
import { buildTeam } from "@/lib/teamBuilder";
import AgentCard from "./AgentCard";

export default function ManagerEngine() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [goal, setGoal] = useState("");
  const [team, setTeam] = useState<string[]>([]);

  const generateTeam = () => {
    const result = buildTeam(goal);
    setTeam(result);
    setStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto">

      {step === 1 && (
        <>
          <h2 className="text-2xl mb-4">What type of business?</h2>
          <input
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full bg-zinc-900 p-3 rounded-xl mb-4"
          />
          <button
            onClick={() => setStep(2)}
            className="bg-purple-600 px-6 py-2 rounded-xl"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl mb-4">What is your goal?</h2>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-zinc-900 p-3 rounded-xl mb-4"
          />
          <button
            onClick={generateTeam}
            className="bg-purple-600 px-6 py-2 rounded-xl"
          >
            Build Team
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-3xl mb-6">Your AI Execution Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((agent, i) => (
              <AgentCard key={i} name={agent} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

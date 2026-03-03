"use client";

import { useState } from "react";

type Message = {
  sender: string;
  text: string;
};

export default function AgentChatPage() {
  const [chat, setChat] = useState<Message[]>([
    {
      sender: "Manager",
      text: "Welcome. What is your main objective? (e.g. Website, Marketing, Automation)"
    }
  ]);

  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  const [clientData, setClientData] = useState<any>({});
  const [team, setTeam] = useState<string[]>([]);

  const buildTeam = (data: any) => {
    const selected: string[] = [];

    if (data.objective?.includes("website"))
      selected.push("Development Agent");

    if (data.objective?.includes("marketing") || data.objective?.includes("ads"))
      selected.push("Marketing Agent");

    if (data.objective?.includes("automation"))
      selected.push("Automation Agent");

    if (selected.length === 0)
      selected.push("Strategy Agent");

    return selected;
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage("");

    setChat(prev => [...prev, { sender: "Client", text: userMsg }]);

    // Step 0: Objective
    if (step === 0) {
      setClientData((prev: any) => ({ ...prev, objective: userMsg.toLowerCase() }));

      setTimeout(() => {
        setChat(prev => [
          ...prev,
          { sender: "Manager", text: "What is your budget range?" }
        ]);
      }, 800);

      setStep(1);
      return;
    }

    // Step 1: Budget
    if (step === 1) {
      setClientData((prev: any) => ({ ...prev, budget: userMsg }));

      setTimeout(() => {
        setChat(prev => [
          ...prev,
          { sender: "Manager", text: "What is your timeline?" }
        ]);
      }, 800);

      setStep(2);
      return;
    }

    // Step 2: Timeline
    if (step === 2) {
      const updatedData = { ...clientData, timeline: userMsg };
      setClientData(updatedData);

      const selectedTeam = buildTeam(updatedData);
      setTeam(selectedTeam);

      setTimeout(() => {
        setChat(prev => [
          ...prev,
          {
            sender: "Manager",
            text:
              "Thank you. Based on your answers, I am assembling your specialized AI team."
          }
        ]);
      }, 1000);

      // Introduce agents one by one
      selectedTeam.forEach((agent, index) => {
        setTimeout(() => {
          setChat(prev => [
            ...prev,
            {
              sender: agent,
              text:
                agent === "Development Agent"
                  ? "What platform do you prefer for your website?"
                  : agent === "Marketing Agent"
                  ? "Which audience are you targeting?"
                  : agent === "Automation Agent"
                  ? "Which tools are you currently using?"
                  : "Let’s define your overall strategy."
            }
          ]);
        }, 2000 + index * 1500);
      });

      setStep(3);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-lg font-semibold">
          AI Manager • Client Onboarding System
        </h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {chat.map((msg, i) => (
          <div
            key={i}
            className={`max-w-lg p-3 rounded-xl ${
              msg.sender === "Client"
                ? "bg-purple-600 ml-auto"
                : msg.sender === "Manager"
                ? "bg-zinc-900 border border-zinc-800"
                : "bg-blue-900/40 border border-blue-600"
            }`}
          >
            <span className="text-xs text-gray-400 block mb-1">
              {msg.sender}
            </span>
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input */}
      {step < 3 && (
        <div className="p-6 border-t border-zinc-800 flex gap-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your answer..."
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2"
          />

          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-xl"
          >
            Send
          </button>
        </div>
      )}

    </div>
  );
}

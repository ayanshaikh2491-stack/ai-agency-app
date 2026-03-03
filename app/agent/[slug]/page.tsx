"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function AgentChatPage() {
  const params = useParams();
  const slug = params.slug as string;

  const agentName = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([
    `${agentName}: Hello 👋 I am ready to assist you.`
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat(prev => [
      ...prev,
      `You: ${message}`,
      `${agentName}: Thank you. I will help you with that.`
    ]);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">{agentName}</h1>
        <p className="text-gray-400 text-sm">AI Specialist</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              msg.startsWith("You:")
                ? "bg-purple-600 text-white self-end"
                : "bg-zinc-900"
            }`}
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-zinc-800 flex gap-4">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2"
        />

        <button
          onClick={sendMessage}
          className="bg-purple-600 px-6 py-2 rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  );
}

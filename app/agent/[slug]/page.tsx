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
  const [chat, setChat] = useState<
    { sender: "user" | "agent"; text: string }[]
  >([{ sender: "agent", text: "Hello. How can I assist you today?" }]);

  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage("");

    setChat(prev => [...prev, { sender: "user", text: userMsg }]);

    setTyping(true);

    setTimeout(() => {
      setChat(prev => [
        ...prev,
        { sender: "agent", text: "Thank you. I am analyzing your request." }
      ]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-zinc-800 flex items-center gap-4">
        <img
          src={`https://ui-avatars.com/api/?name=${agentName}&background=111827&color=ffffff&size=128`}
          alt={agentName}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-lg font-semibold">{agentName}</h1>
          <p className="text-xs text-gray-400">AI Specialist</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {chat.map((msg, i) => (
          <div
            key={i}
            className={`max-w-md p-3 rounded-xl ${
              msg.sender === "user"
                ? "bg-purple-600 ml-auto"
                : "bg-zinc-900"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}

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
          className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  );
}

"use client";

import { useState } from "react";

export default function HeroChat() {

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message) return;
    alert("AI Team Request: " + message);
    setMessage("");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-8">

      <p className="text-sm text-gray-400 mb-3">
        Describe the team you need
      </p>

      <div className="flex gap-2">

        <input
          className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-2"
          placeholder="Example: I need a content marketing team"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-purple-600 px-5 py-2 rounded-lg"
        >
          Build
        </button>

      </div>

    </div>
  );
}

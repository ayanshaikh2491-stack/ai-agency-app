"use client";

import { useState } from "react";

export default function ChatFloating() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white w-14 h-14 rounded-full"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-black border border-zinc-700 p-4 rounded-xl">

          <div className="text-sm text-gray-400 mb-3">
            AI Manager
          </div>

          <input
            placeholder="Describe what you want to build..."
            className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded"
          />

        </div>
      )}
    </>
  );
}

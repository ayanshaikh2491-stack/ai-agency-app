"use client";

import { useState } from "react";

export default function ChatFloating() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 w-14 h-14 rounded-full shadow-lg"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <p className="text-sm text-gray-400 mb-3">AI Manager</p>
          <div className="bg-black p-3 rounded-xl text-sm text-gray-300">
            How can we assist your business?
          </div>
        </div>
      )}
    </>
  );
}

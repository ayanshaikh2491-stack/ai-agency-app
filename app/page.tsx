"use client";

import ChatFloating from "@/components/ChatFloating";

export default function Home() {

  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-28 text-center">

        <h1 className="text-6xl font-bold mb-6">
          AI Digital Execution Team
        </h1>

        <p className="text-gray-400 text-lg">
          Strategy. Execution. Automation. Growth.
        </p>

      </section>

      <ChatFloating />

    </main>
  );
}

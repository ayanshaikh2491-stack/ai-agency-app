"use client";

import { useRouter } from "next/navigation";
import ChatFloating from "../components/ChatFloating";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-6xl font-bold mb-6">
          AI Digital Execution Team
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Strategy. Execution. Automation. Growth.
        </p>

        <button
          onClick={() => router.push("/workspace")}
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Get Started
        </button>
      </section>

      <ChatFloating />
    </main>
  );
}

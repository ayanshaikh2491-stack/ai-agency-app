"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(true);
  const router = useRouter();

  const handleSubmit = () => {
    if (isRegister) {
      router.push("/onboarding"); // registration → questions
    } else {
      router.push("/workspace"); // login → no questions
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md border border-zinc-800">

        <h2 className="text-2xl mb-6">
          {isRegister ? "Create Account" : "Login"}
        </h2>

        <input placeholder="Email"
          className="w-full mb-4 bg-black border border-zinc-700 rounded-xl px-4 py-2" />

        <input placeholder="Password" type="password"
          className="w-full mb-6 bg-black border border-zinc-700 rounded-xl px-4 py-2" />

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 py-3 rounded-xl">
          {isRegister ? "Register" : "Login"}
        </button>

        <p
          onClick={() => setIsRegister(!isRegister)}
          className="mt-4 text-sm text-gray-400 cursor-pointer">
          {isRegister ? "Already have account? Login" : "New user? Register"}
        </p>

      </div>
    </div>
  );
}

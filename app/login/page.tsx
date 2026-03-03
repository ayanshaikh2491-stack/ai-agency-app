"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary demo logic
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login submitted (Backend not connected yet)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

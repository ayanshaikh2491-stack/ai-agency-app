"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-950 border-b border-slate-800">
      <h1 className="text-xl font-bold">
        Growth<span className="text-indigo-500">Agency</span>
      </h1>

      <div className="space-x-6 text-slate-400">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

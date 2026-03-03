"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          AI Agency
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

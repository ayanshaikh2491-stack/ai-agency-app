"use client";

import { useState } from "react";
import ManagerEngine from "@/components/ManagerEngine";

export default function Workspace() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <ManagerEngine />
    </div>
  );
}

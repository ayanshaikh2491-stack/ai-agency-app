"use client";

import { motion } from "framer-motion";

export default function AgentCard({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
    >
      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`}
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm mt-2">
        Ready to execute.
      </p>
    </motion.div>
  );
}

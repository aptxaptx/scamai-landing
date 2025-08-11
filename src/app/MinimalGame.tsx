"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Item = { id: number; label: "deepfake" | "real" };

export default function MinimalGame({ items, answers, setAnswers, email }: {
  items: Item[];
  answers: Record<number, "deepfake" | "real" | undefined>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, "deepfake" | "real" | undefined>>>;
  email: string;
}) {
  const [index, setIndex] = useState(0);

  const progress = Math.round(((index) / items.length) * 100);
  const answered = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);
  const correct = useMemo(() => items.reduce((acc, it) => (answers[it.id] === it.label ? acc + 1 : acc), 0), [answers, items]);
  const percent = Math.round((correct / items.length) * 100);

  const current = items[index];
  const isDone = index >= items.length;

  const onAnswer = (choice: "deepfake" | "real") => {
    if (isDone) return;
    setAnswers((a) => ({ ...a, [current.id]: choice }));
    setTimeout(() => setIndex((i) => i + 1), 180);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-xs text-white/60">
        <div>{answered}/{items.length} answered</div>
        <div className="w-48 h-1 bg-white/10"><div className="h-1 bg-white" style={{ width: `${progress}%` }} /></div>
        <div>{progress}%</div>
      </div>

      <div className="mt-6 border border-white/10 p-6">
        {!isDone ? (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div key={current.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              <div className="aspect-square bg-white/10 grid place-items-center text-sm text-white/60">image {current.id + 1} placeholder</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button onClick={() => onAnswer("deepfake")} className="border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">Deepfake</button>
                <button onClick={() => onAnswer("real")} className="border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">Real</button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="text-center">
            <h3 className="text-xl tracking-tight">Results</h3>
            <p className="mt-2 text-white/80">Score: {correct}/{items.length} ({percent}%).</p>
            {percent >= 65 ? (
              <p className="mt-1 text-green-300">Congrats! You’re eligible for a $100 gift card. We’ll contact {email}.</p>
            ) : (
              <p className="mt-1 text-white/60">Thanks for playing!</p>
            )}
            <div className="mt-5">
              <p className="text-sm text-white/80">Ready to stop deepfakes in production? Explore solutions for your industry.</p>
              <Link href="/business?s=usecase" className="mt-3 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 text-sm font-semibold">
                See business use cases →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
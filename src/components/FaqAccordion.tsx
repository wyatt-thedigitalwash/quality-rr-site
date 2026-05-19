"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border-t border-taupe/20 ${i === items.length - 1 ? "border-b" : ""}`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full py-6 flex justify-between items-center text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans font-bold text-lg md:text-xl tracking-[-0.02em] text-navy pr-8">
                {item.question}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="minus"
                    initial={reduced ? false : { opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <Minus className="w-6 h-6 text-taupe" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="plus"
                    initial={reduced ? false : { opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <Plus className="w-6 h-6 text-taupe" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-6">
                    <p className="font-sans text-base text-ink leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

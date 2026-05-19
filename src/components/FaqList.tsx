"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  label: string;
  items: FaqItem[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FaqList({ categories }: { categories: FaqCategory[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = useReducedMotion();

  function toggle(id: string) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div>
      {categories.map((category, catIdx) => (
        <div key={category.label} className={catIdx > 0 ? "mt-16" : ""}>
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6 border-b border-taupe/20 pb-4">
            {category.label}
          </p>
          <div>
            {category.items.map((item, itemIdx) => {
              const id = `${catIdx}-${itemIdx}`;
              const isOpen = openId === id;
              const isLast = itemIdx === category.items.length - 1;
              return (
                <div
                  key={id}
                  className={`border-t border-taupe/20 ${isLast ? "border-b" : ""}`}
                >
                  <button
                    onClick={() => toggle(id)}
                    className="w-full py-6 flex justify-between items-center text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                  >
                    <h3 className="font-sans font-bold text-lg md:text-xl tracking-[-0.02em] text-navy pr-8">
                      {item.question}
                    </h3>
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
                        id={`faq-answer-${id}`}
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
        </div>
      ))}
    </div>
  );
}

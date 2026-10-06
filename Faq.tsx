import { useState } from "react";
import { FAQS } from "../data/faq";
import { PlusMinusIcon } from "./icons";
import { cn } from "../utils/cn";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-[#171321]/10 rounded-[1.5rem] border border-[#171321]/10 bg-white">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-display font-semibold text-[#171321]">{item.question}</span>
                <PlusMinusIcon
                  open={isOpen}
                  className={cn(
                    "h-5 w-5 shrink-0 text-[#171321] transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">
                <p className="px-6 pb-5 text-[#55515E] leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

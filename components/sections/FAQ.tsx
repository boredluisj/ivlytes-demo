"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const faqs = [
  {
    q: "How long does an IV drip take?",
    a: "Most IV drips take 30–60 minutes. You'll relax in a comfortable chair in our clinic while the drip runs. Basic Hydration can be as quick as 20 minutes, while NAD+ infusions take 2–4 hours.",
  },
  {
    q: "Is IV therapy safe?",
    a: "Yes. IV therapy at IV-LYTES is physician-supervised by Dr. Arif Shahzad MD. We review your health history before every session, use sterile protocols, and monitor you throughout. Side effects are rare and typically minor.",
  },
  {
    q: "Do you accept insurance?",
    a: "No. IV-LYTES is a cash-pay wellness clinic. We do not accept insurance for any service. This keeps our pricing transparent and lets us focus entirely on your care rather than billing departments.",
  },
  {
    q: "Can I book same-day?",
    a: "Yes! Same-day appointments are available most days. Book online via Vagaro — you can see real-time availability and select the exact service and time that works for you.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="flex items-center justify-between w-full py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="text-base font-medium text-[#F0EDE8] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#2DD4BF] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#9BA8BB] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-[#0B1120]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
            subtitle="Quick answers to what everyone asks before their first visit."
            centered
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mt-10 text-center">
          <Link
            href="/contact"
            className="text-sm text-[#2DD4BF] hover:text-[#2DD4BF]/80 font-medium transition-colors"
          >
            Still have questions? Contact us →
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

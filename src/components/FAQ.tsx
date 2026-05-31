/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Heart } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 md:py-20 px-4 md:px-8 bg-white border-b border-purple-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#673DE6] bg-purple-150 px-3.5 py-1.5 rounded-full font-mono">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#2F1C6A]/75 text-sm md:text-base">
            Everything you need to know about our local Chennai SSD storage nodes, WordPress transfers, and round-the-clock Tamil customer operations.
          </p>
        </div>

        {/* Dynamic Accordion items block */}
        <div className="space-y-4 mb-10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-white rounded-3xl border border-purple-100 transition-all duration-300 shadow-[0px_4px_16px_rgba(103,61,230,0.06)] overflow-hidden hover:shadow-[0px_8px_24px_rgba(103,61,230,0.1)]"
              >
                {/* Accordion header trigger button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-[#2F1C6A] hover:text-[#673DE6] transition-colors select-none cursor-pointer"
                >
                  <span className="text-sm md:text-base leading-snug">{item.question}</span>
                  <div className="shrink-0 p-1.5 rounded-full bg-purple-100 text-[#673DE6]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion content expansion panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-72 border-t border-purple-50" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs md:text-sm text-gray-550 leading-relaxed bg-[#F5F3FF]/30">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional support helper link card */}
        <div className="bg-gradient-to-r from-[#2F1C6A] to-[#1F124A] text-white rounded-3xl p-6.5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0px_4px_16px_rgba(103,61,230,0.12)] border border-[#2F1C6A] relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(103,61,230,0.15)_0%,transparent_100%)] pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-lg font-extrabold">Have a special custom stack requirement?</h4>
            <p className="text-xs text-indigo-200">Our native Tamil supporting architects can set up custom Node, Python, or Magento parameters instantly.</p>
          </div>

          <a
            href="https://wa.me/916361977049"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow-sm transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-500" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

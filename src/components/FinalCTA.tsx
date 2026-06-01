/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { CheckCircle2, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onYesHostMySiteNow: () => void;
}

export default function FinalCTA({ onYesHostMySiteNow }: FinalCTAProps) {
  return (
    <section id="cta-section" className="py-16 md:py-20 px-4 md:px-8 bg-[#F5F3FF]/40 relative overflow-hidden">
      {/* Absolute design accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] max-w-4xl mx-auto relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px]">
        {/* Absolute glow Inside Card */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-50 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10 max-w-2xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-1.5 bg-purple-100 border border-purple-200 text-[#673DE6] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider font-mono">
            <span className="w-2 h-2 rounded-full bg-[#673DE6] animate-pulse" />
            <span>Launch Your Brand Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A] tracking-tight leading-tight">
            Ready to Make Your Website Faster?
          </h2>

          <p className="text-[#2F1C6A]/75 text-sm md:text-base leading-relaxed">
            Start small and scale dynamically whenever traffic rises. Our system administrators handle all site movements and setups entirely for free.
          </p>

          {/* Dynamic primary order connection button */}
          <div className="pt-4">
            <button
              id="cta-yes-host-now-btn"
              onClick={onYesHostMySiteNow}
              className="bg-[#673DE6] hover:bg-[#5025D1] text-white font-extrabold text-base md:text-lg px-10 py-4.5 rounded-xl shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all select-none cursor-pointer inline-flex items-center gap-2.5 group"
            >
              <span>Yes, Host My Site Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Visual trust pillars */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-[#2F1C6A] text-xs font-sans font-semibold">
            <div className="flex items-center gap-2 bg-[#F5F3FF] border border-[#673DE6]/10 rounded-full px-4 py-2 shadow-xs transition-colors hover:bg-[#EEF2FF] hover:border-[#673DE6]/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Fast Setup in 10 Mins</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F5F3FF] border border-[#673DE6]/10 rounded-full px-4 py-2 shadow-xs transition-colors hover:bg-[#EEF2FF] hover:border-[#673DE6]/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Tamil Support 24/7/365</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F5F3FF] border border-[#673DE6]/10 rounded-full px-4 py-2 shadow-xs transition-colors hover:bg-[#EEF2FF] hover:border-[#673DE6]/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Free Zero-Downtime Migration</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

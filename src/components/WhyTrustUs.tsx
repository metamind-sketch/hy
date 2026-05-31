/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, ShieldAlert, MessageCircle, HelpCircle, CheckCircle } from "lucide-react";

export default function WhyTrustUs() {
  return (
    <section id="why-trust-us-section" className="py-20 px-4 md:px-8 bg-white border-y border-purple-100 relative overflow-hidden">
      {/* Decorative accent grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-indigo-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-violet-100/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#673DE6] bg-purple-150 px-3.5 py-1.5 rounded-full font-mono">
            Our Core Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A]">
            Why People Trust Us
          </h2>
          <p className="text-[#2F1C6A]/75 text-base">
            We don't just sell server space; we handle all technical operations so you can focus entirely on growing your business.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1: Rocket Speed */}
          <div
            id="trust-pillar-speed"
            className="elementor-hover-card bg-white rounded-3xl border border-purple-100 p-8 flex flex-col justify-between shadow-[0px_4px_16px_rgba(103,61,230,0.08)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0px_12px_24px_rgba(103,61,230,0.12)]"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 shadow-inner">
                <Rocket className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-extrabold text-[#2F1C6A] tracking-tight">
                🚀 Rocket Speed
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Our ultra-fast NVMe storage, tailored caching configurations, and local Chennai servers load pages in just <strong className="font-semibold text-indigo-950">1.2 seconds</strong>. 
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-50 flex items-center gap-2">
              <span className="p-1 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#2F1C6A]">Google loves fast websites</span>
            </div>
          </div>

          {/* Pillar 2: Real Human Support */}
          <div
            id="trust-pillar-support"
            className="elementor-hover-card bg-white rounded-3xl border border-purple-100 p-8 flex flex-col justify-between shadow-[0px_4px_16px_rgba(103,61,230,0.08)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0px_12px_24px_rgba(103,61,230,0.12)]"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 shadow-inner">
                <MessageCircle className="w-7 h-7 fill-emerald-50" />
              </div>

              <h3 className="text-xl font-extrabold text-[#2F1C6A] tracking-tight">
                💬 Real Human Support
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Connect directly with certified engineers on WhatsApp. Chat, send voice notes, or share screenshots in <strong className="font-semibold text-indigo-950">Tamil & English</strong>. No annoying ticket escalations.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-50 flex items-center gap-2">
              <span className="p-1 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#2F1C6A]">Average WhatsApp reply: 2 minutes</span>
            </div>
          </div>

          {/* Pillar 3: Zero Risk Start */}
          <div
            id="trust-pillar-risk"
            className="elementor-hover-card bg-white rounded-3xl border border-purple-100 p-8 flex flex-col justify-between shadow-[0px_4px_16px_rgba(103,61,230,0.08)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0px_12px_24px_rgba(103,61,230,0.12)]"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#673DE6] shadow-inner">
                <ShieldAlert className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-extrabold text-[#2F1C6A] tracking-tight">
                🛡️ Zero Risk Start
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Our migrations team moves your website entirely free of charge with zero data loss. If you are not fully satisfied within <strong className="font-semibold text-indigo-950">30 days</strong>, get a full refund immediately.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-50 flex items-center gap-2">
              <span className="p-1 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#2F1C6A]">Painless migrations + Full refunds</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

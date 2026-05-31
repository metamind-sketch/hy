/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Quote, MessageSquare, Star, Heart, MapPin, CheckCircle, Smartphone } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<string>(TESTIMONIALS[0].id);

  // Colors mapping for stylized user avatar initial rings based on names
  const avatarColors: Record<string, string> = {
    Anitha: "bg-emerald-100 text-emerald-700 border-emerald-300",
    Rajesh: "bg-orange-100 text-orange-700 border-orange-300",
    Karthik: "bg-indigo-100 text-[#673DE6] border-indigo-300"
  };

  return (
    <section id="proof-section" className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#673DE6] bg-purple-150 px-3.5 py-1.5 rounded-full font-mono">
            Customer Success Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A]">
            Real Users. Real Results.
          </h2>
          <p className="text-[#2F1C6A]/75 text-sm md:text-base">
            Read stories directly from bloggers, developers, and agency builders across Tamil Nadu who scaled their workloads on our SSD nodes.
          </p>
        </div>

        {/* Testimonials Grid & Tamil Map Locator widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Testimonial Cards */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 gap-6">
              {TESTIMONIALS.map((t) => {
                const isActive = activeTestimonial === t.id;
                const userColor = avatarColors[t.author] || "bg-indigo-100 text-[#673DE6]";

                return (
                  <div
                    key={t.id}
                    id={`testimonial-bubble-${t.id}`}
                    onClick={() => setActiveTestimonial(t.id)}
                    className={`p-6 bg-white rounded-3xl border transition-all duration-300 cursor-pointer text-left relative ${
                      isActive
                        ? "border-[#673DE6] shadow-[0px_8px_24px_rgba(103,61,230,0.12)] bg-gradient-to-r from-purple-50/45 to-transparent scale-[1.01]"
                        : "border-purple-100/80 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] hover:-translate-y-0.5 hover:shadow-[0px_12px_24px_rgba(103,61,230,0.12)]"
                    }`}
                  >
                    {/* Speech bubble accent quote indicator */}
                    <Quote className={`absolute right-6 top-6 w-10 h-10 ${isActive ? 'text-[#673DE6]/20' : 'text-purple-100'}`} />

                    <div className="flex items-center gap-1 text-amber-450 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-[#2F1C6A] text-base font-bold leading-relaxed mb-5 italic">
                      “{t.quote}”
                    </p>

                    <div className="flex items-center gap-4">
                      {/* Stylized Initial Avatar */}
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center font-black text-base shadow-xs shrink-0 ${userColor}`}>
                        {t.author.charAt(0)}
                      </div>

                      <div>
                        <div className="font-extrabold text-[#2F1C6A] text-sm md:text-base flex items-center gap-1.5">
                          <span>{t.author}</span>
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Verified User</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {t.role} &bull; <strong className="text-[#673DE6] font-mono">{t.location}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Tamil Nadu Local Coverage map preview */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#2F1C6A] to-[#1F124A] text-white rounded-3xl p-6.5 md:p-8 flex flex-col justify-between shadow-[0px_4px_16px_rgba(103,61,230,0.12)] border border-[#2F1C6A] relative min-h-[420px] overflow-hidden">
            {/* Soft decorative light path */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,61,230,0.15)_0%,transparent_100%)] pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <span className="text-[10px] tracking-widest font-black uppercase text-indigo-300 font-mono">
                Regional Grid Network
              </span>
              <h3 className="text-xl font-extrabold">Active Tamil Nadu Server Grid</h3>
              <p className="text-xs text-indigo-200/90 leading-relaxed">
                Our local networks link nodes in Chennai, Bangalore, and Mumbai, delivering ultra-low 14ms routing delays across Tamil Nadu.
              </p>
            </div>

            {/* Simulated Geographic Location Pins Map */}
            <div className="relative h-48 my-6 bg-indigo-950/60 rounded-2xl border border-indigo-900 overflow-hidden flex items-center justify-center">
              {/* Symbolic local area mapping lines */}
              <svg className="absolute inset-0 w-full h-full text-indigo-500/10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <line x1="20" y1="30" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="20" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="80" y1="40" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="85" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              {/* Pin 1: Chennai */}
              <div
                className={`absolute top-[20%] right-[30%] flex items-center gap-1.5 transition-all p-1 rounded-md ${
                  activeTestimonial === "testimonial-2" ? "bg-indigo-500/25 border border-indigo-400" : ""
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-300">Chennai</span>
              </div>

              {/* Pin 2: Trichy */}
              <div
                className={`absolute top-[50%] left-[45%] flex items-center gap-1.5 transition-all p-1 rounded-md ${
                  activeTestimonial === "testimonial-1" ? "bg-indigo-500/25 border border-indigo-400" : ""
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-orange-300">Trichy</span>
              </div>

              {/* Pin 3: Coimbatore */}
              <div
                className={`absolute bottom-[25%] left-[25%] flex items-center gap-1.5 transition-all p-1 rounded-md ${
                  activeTestimonial === "testimonial-3" ? "bg-indigo-500/25 border border-indigo-400" : ""
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-indigo-300">Coimbatore</span>
              </div>
            </div>

            {/* Satisfaction micro feedback details */}
            <div className="flex items-center gap-3 bg-indigo-900/35 border border-indigo-800/80 rounded-xl p-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#673DE6]/40 flex items-center justify-center shrink-0">
                <Heart className="w-4.5 h-4.5 text-rose-400 fill-rose-400" />
              </div>
              <p className="text-[11px] text-indigo-200 leading-tight">
                Proud host of <strong>2,50,000+ local Tamil websites</strong>. Designed to ensure fast response and zero operations headaches.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

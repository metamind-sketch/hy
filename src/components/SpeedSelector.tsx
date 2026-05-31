/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Zap, Sparkles, Check, ArrowRight, Server, Gauge, ShieldCheck, Award } from "lucide-react";

interface SpeedSelectorProps {
  onSelectHosting: () => void;
  onSelectVps: () => void;
}

export default function SpeedSelector({ onSelectHosting, onSelectVps }: SpeedSelectorProps) {
  const [simulatedTraffic, setSimulatedTraffic] = useState(15); // Traffic in thousands/mo

  // Speed simulator calculations
  const hostingLoadSpeed = simulatedTraffic <= 25 ? 1.2 : (1.2 + (simulatedTraffic - 25) * 0.12).toFixed(1);
  const vpsLoadSpeed = 0.8;
  const recommendedTier = simulatedTraffic > 30 ? "VPS" : "Hosting";

  return (
    <section id="choose-speed-section" className="py-16 md:py-20 px-4 md:px-8 bg-[#F5F3FF]/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-[#673DE6] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider font-mono">
            <Zap className="w-3.5 h-3.5 text-[#673DE6] fill-[#673DE6]" />
            <span>Optimal Architecture Selector</span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-black text-[#2F1C6A]">
            Choose Your Hosting Speed
          </h2>
          <p className="text-[#2F1C6A]/75 text-base font-normal">
            From your first blog to 1 lakh visitors/day, we’ve got you covered
          </p>
        </div>

        {/* Dynamic Speed Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto mb-12">
          
          {/* Card 1 - Shared Hosting - White bg, Border 1px #E5E7EB, Radius 12px, Padding 32px */}
          <div
            id="speed-card-hosting"
            className="elementor-hover-card bg-white rounded-xl border border-[#E5E7EB] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-all duration-300 hover:translate-y-[-4px]"
          >
            {/* Soft decorative purple accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="text-xs font-bold tracking-widest text-[#2F1C6A] bg-[#EDE9FE] uppercase px-3 py-1 rounded-full font-mono">
                  SHARED HOSTING
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#2F1C6A] mb-2 group-hover:text-indigo-900 transition-colors">
                For blogs & new websites
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Our optimized standard server configuration for small websites and blogs.
              </p>

              {/* Exact Features requested */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#1F2937]">Free .IN Domain</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#1F2937]">Free SSL Certificate</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#1F2937]">100GB SSD Storage</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#1F2937]">24/7 Tamil Support</span>
                </div>
              </div>
            </div>

            <div>
              <div className="border-t border-purple-50 pt-6 mb-6">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-black">STARTING PRICE</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-extrabold text-[#2F1C6A]">₹59</span>
                  <span className="text-sm text-gray-500 font-medium">/mo</span>
                </div>
              </div>

              <button
                id="select-speed-hosting-btn"
                onClick={onSelectHosting}
                className="w-full bg-[#673DE6] hover:bg-[#5025D1] text-white font-extrabold text-center py-4 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 group/btn shadow-xs hover:shadow-lg hover:shadow-indigo-600/10"
              >
                <span>Start Small →</span>
              </button>
            </div>
          </div>

          {/* Card 2 - Cloud VPS - Dark bg #1E1B4B, White text, Radius 12px, Padding 32px */}
          <div
            id="speed-card-vps"
            className="elementor-hover-card bg-[#1E1B4B] text-white rounded-xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group transition-all duration-300 border border-purple-900/40 hover:translate-y-[-4px]"
          >
            {/* Ribbon top MOST POPULAR */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FBBF24] text-[#1E1B4B] text-[10px] font-black tracking-widest px-6 py-2 rounded-b-xl uppercase shadow-sm z-10 font-mono">
              MOST POPULAR
            </div>

            {/* Top right decorative glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4 justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☁️</span>
                  <span className="text-xs font-bold tracking-widest text-white bg-[#312E81] uppercase px-3 py-1 rounded-full inline-block font-mono">
                    CLOUD VPS SERVERS
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2 font-sans">
                For business & 1 Lakh+ traffic
              </h3>

              <p className="text-indigo-200 text-sm mb-6 leading-relaxed">
                Dedicated virtual cores mapped directly to high speed enterprise node.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-indigo-50">Dedicated RAM & CPU</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-indigo-50">Handle Traffic Spikes Easily</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-indigo-50">Full Root Access</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#10B981] font-bold">✓</span>
                  <span className="text-sm font-semibold text-indigo-50">Server Isolation</span>
                </div>
              </div>
            </div>

            <div>
              <div className="border-t border-purple-900/80 pt-6 mb-6">
                <div className="text-[10px] text-indigo-300 uppercase tracking-widest font-black">STARTING PRICE</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-extrabold text-white">₹199</span>
                  <span className="text-sm text-indigo-200 font-medium font-sans">/mo</span>
                </div>
              </div>

              <button
                id="select-speed-vps-btn"
                onClick={onSelectVps}
                className="w-full bg-[#673DE6] hover:bg-[#5025D1] text-white font-extrabold text-center py-4 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 group/btn shadow-xs hover:shadow-lg hover:shadow-indigo-600/10"
              >
                <span>Go Pro →</span>
              </button>
            </div>
          </div>

        </div>

        {/* -------------------- INTERACTIVE TRAFFIC SPEED SIMULATOR (As Bento Box) -------------------- */}
        <div className="bg-white rounded-3xl p-6 md:p-10 max-w-4xl mx-auto border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] transition-all duration-300 hover:translate-y-[-2px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side explanatory controls */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1 bg-indigo-100/70 border border-indigo-200 text-[#2F1C6A] py-1 px-3 rounded-md text-xs font-bold font-mono uppercase">
                <Gauge className="w-3.5 h-3.5" />
                <span>Hosting Performance Estimator</span>
              </div>
              <h4 className="text-xl font-bold text-[#2F1C6A]">
                Estimate load speeds before you migrate
              </h4>
              <p className="text-sm text-gray-500">
                Adjust the slider estimate based on your anticipated monthly traffic spikes. Observe how our SSD architectures maintain load speeds.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-black text-[#2F1C6A] uppercase font-mono">
                  <span>Simulated Spikes / Month</span>
                  <span className="text-indigo-600 bg-indigo-100/60 px-2 py-0.5 rounded-sm">
                    {simulatedTraffic * 1000} Users
                  </span>
                </div>
                
                <input
                  id="traffic-simulator-slider"
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={simulatedTraffic}
                  onChange={(e) => setSimulatedTraffic(Number(e.target.value))}
                  className="w-full h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-[#673DE6]"
                />
                
                <div className="flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>5K /mo (Early Blogs)</span>
                  <span>50K (Busy Shop)</span>
                  <span>100K+ (Agency)</span>
                </div>
              </div>
            </div>

            {/* Right side interactive dashboard visualization representation */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-xs border border-indigo-150 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold font-mono">Page Load Results</span>
                
                <div className="grid grid-cols-2 gap-4 mt-3">
                  {/* WP Hosting Loading speedometer */}
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-gray-400">Wordpress Site</div>
                    <div className="flex items-baseline gap-0.5">
                      <span className={`text-2xl font-black ${Number(hostingLoadSpeed) > 2 ? 'text-amber-500' : 'text-indigo-600'}`}>
                        {hostingLoadSpeed}s
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-350 ${Number(hostingLoadSpeed) > 2 ? 'bg-amber-500' : 'bg-indigo-600'}`}
                        style={{ width: `${Math.min(100, (1.2 / Number(hostingLoadSpeed)) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Cloud VPS Loading speed */}
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-gray-400">VPS Server</div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-black text-emerald-500">
                        {vpsLoadSpeed}s
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full transition-all duration-350"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation message block */}
              <div className="bg-indigo-50/50 p-3 rounded-xl flex items-center gap-2.5 border border-indigo-100">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#673DE6]" />
                </div>
                <p className="text-xs text-[#2F1C6A] leading-tight">
                  Recommendation: Your traffic needs fit our <strong>{recommendedTier === "VPS" ? "Dedicated Cloud VPS" : "WordPress Business Hosting"}</strong> best.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

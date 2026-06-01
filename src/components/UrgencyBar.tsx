/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles, Clock } from "lucide-react";

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Attempt to store in local storage to make the countdown realistic
    const stored = localStorage.getItem("tamilhost_countdown_target");
    if (stored) {
      const targetTime = parseInt(stored, 10);
      const remaining = targetTime - Date.now();
      if (remaining > 0) return Math.floor(remaining / 1000);
    }
    
    // Default 12 hours in seconds
    const twelveHoursInSecs = 12 * 60 * 60;
    const target = Date.now() + twelveHoursInSecs * 1000;
    localStorage.setItem("tamilhost_countdown_target", target.toString());
    return twelveHoursInSecs;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to a new 12 hours when it hits 0 so there is continuous urgency simulation
          const newTarget = Date.now() + 12 * 60 * 60 * 1000;
          localStorage.setItem("tamilhost_countdown_target", newTarget.toString());
          return 12 * 60 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      id="urgency-bar-container"
      className="bg-gradient-to-r from-[#1E1145] via-[#2F1C6A] to-[#1E1145] text-white py-2 px-4 md:px-8 border-b border-[#673DE6]/20 sticky top-0 z-50 shadow-[0_1px_3px_rgba(47,28,106,0.1)] text-[13px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2.5 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="bg-amber-400 text-[#1E1145] text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md shadow-xs select-none">
            LIMITED TIME
          </span>
          <p className="font-medium text-purple-100 font-sans tracking-wide text-xs sm:text-[13px]">
            Get a <span className="text-white font-extrabold underline decoration-amber-300 decoration-2 underline-offset-2">Free .IN Domain & Free Unlimited SSL</span> with Any Annual Hosting Plan
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold whitespace-nowrap transition-colors duration-150 shadow-inner select-none">
          <Clock className="w-3 h-3 text-amber-300 animate-pulse" />
          <span className="text-purple-200">ENDS IN:</span>
          <span className="text-amber-300 tracking-wider font-extrabold">{formatTime(timeLeft)}</span>
        </div>
      </div>
    </div>
  );
}

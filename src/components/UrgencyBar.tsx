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
      className="bg-[#2F1C6A] text-white py-3 px-6 shadow-md sticky top-0 z-50 overflow-hidden text-[14px]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center z-50 flex-row gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none animate-wave inline-block">🎁</span>
          <span className="font-bold text-sm sm:text-base tracking-tight text-white font-sans">
            Today Only: <span className="underline decoration-2 decoration-amber-300">Free .IN Domain + SSL on All Plans</span> - Ends Tonight
          </span>
        </div>
        <div className="bg-white/20 border border-white/10 px-3 py-1 rounded text-xs font-mono font-bold whitespace-nowrap">
          Ends in: {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ShieldCheck, ArrowRight, Sparkles, HelpCircle, CheckCircle2, Languages, PhoneCall, RefreshCw, MessageSquareCode } from "lucide-react";
import { QUIZ_QUESTIONS, HOSTING_PLANS } from "../data";
import { HostingPlan } from "../types";

interface HeroProps {
  onPlanSelect: (plan: HostingPlan) => void;
  onScrollToPlans: () => void;
}

export default function Hero({ onPlanSelect, onScrollToPlans }: HeroProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizScores, setQuizScores] = useState({ hosting: 0, vps: 0 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [recommendedPlan, setRecommendedPlan] = useState<HostingPlan | null>(null);

  // Dedicated SVG illustration placeholder as requested by the user
  const heroImageSrc = "/src/assets/images/tamilhost_hero_server_dashboard_1780271052465.png";

  const resetQuiz = () => {
    setCurrentQuizStep(0);
    setQuizScores({ hosting: 0, vps: 0 });
    setQuizFinished(false);
    setRecommendedPlan(null);
  };

  const handleQuizAnswer = (points: { hosting: number; vps: number }) => {
    const nextScores = {
      hosting: quizScores.hosting + points.hosting,
      vps: quizScores.vps + points.vps
    };
    setQuizScores(nextScores);

    if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizStep((prev) => prev + 1);
    } else {
      // Finished quiz! Calculate recommendation
      const isVpsHeavy = nextScores.vps > nextScores.hosting;
      let recPlan: HostingPlan;

      if (isVpsHeavy) {
        // Recommend Business Hosting (best middle pathway) or Starter VPS
        recPlan = HOSTING_PLANS.find(p => p.id === "starter-vps") || HOSTING_PLANS[2];
      } else {
        // Recommend Business Hosting or Student
        recPlan = HOSTING_PLANS.find(p => p.id === "business") || HOSTING_PLANS[1];
      }
      
      setRecommendedPlan(recPlan);
      setQuizFinished(true);
    }
  };

  return (
    <section id="hero-section" className="bg-[#F5F3FF] py-10 lg:py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Text Card (Bento Card) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6.5 sm:p-10 md:p-12 border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] flex flex-col justify-center text-left space-y-6 md:space-y-8 z-10 transition-transform duration-300 hover:translate-y-[-2px]">
            <div className="inline-flex items-center gap-2 bg-[#EDE9FE] border border-[#C4B5FD] px-3.5 py-1.5 rounded-full w-fit">
              <span className="text-[11px] font-bold text-[#2F1C6A] tracking-wider uppercase font-mono">
                ⚡ PREMIUM HOSTING
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-black text-[#2F1C6A] tracking-tight leading-[1.1] font-sans">
                From Your First Blog to <span className="text-[#673DE6]">1 Lakh Visitors/Day</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-[#673DE6] tracking-tight leading-[1.1] font-sans">
                Hosting That Grows With You
              </h2>
            </div>

            <p className="text-[#4B5563] text-lg lg:text-[18px] max-w-xl font-semibold leading-relaxed">
              Start at ₹59/mo. Upgrade anytime. Free Migration + 24/7 WhatsApp Support in Tamil.
            </p>

            {/* Quick interactive search/helper */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-find-plan-btn"
                onClick={() => {
                  resetQuiz();
                  setIsQuizOpen(true);
                }}
                className="bg-[#673DE6] hover:bg-[#5025D1] text-white font-bold text-[16px] px-8 py-4 rounded-[8px] shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all select-none text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Find My Perfect Plan →</span>
              </button>

              <button
                id="hero-quick-plans-btn"
                onClick={onScrollToPlans}
                className="bg-transparent hover:bg-purple-50 text-[#673DE6] font-bold text-[16px] px-8 py-4 rounded-[8px] border-2 border-[#673DE6] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center cursor-pointer flex items-center justify-center gap-1"
              >
                <span>View Pricing Plans</span>
              </button>
            </div>

            {/* Trust check bar representing requested "30-Day Money Back" 🛡️ | "Free SSL" 🔒 | "2.5 Lakh+ Sites" ✅ */}
            <div className="flex items-center gap-3 pt-3 select-none overflow-x-auto flex-nowrap max-w-full pb-3 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-purple-50">
              <div className="flex items-center gap-2 bg-[#EDE9FE] border border-[#C4B5FD] px-4 py-2 rounded-full shadow-xs shrink-0 transition-colors hover:bg-[#E5E0FF]">
                <span className="text-sm">🛡️</span>
                <span className="text-xs font-black text-[#2F1C6A] uppercase tracking-wide">30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EDE9FE] border border-[#C4B5FD] px-4 py-2 rounded-full shadow-xs shrink-0 transition-colors hover:bg-[#E5E0FF]">
                <span className="text-sm">🔒</span>
                <span className="text-xs font-black text-[#2F1C6A] uppercase tracking-wide">Free SSL</span>
              </div>
              <div className="flex items-center gap-2 bg-[#EDE9FE] border border-[#C4B5FD] px-4 py-2 rounded-full shadow-xs shrink-0 transition-colors hover:bg-[#E5E0FF]">
                <span className="text-sm">✅</span>
                <span className="text-xs font-black text-[#2F1C6A] uppercase tracking-wide">2.5 Lakh+ Sites</span>
              </div>
            </div>
          </div>

          {/* Right Image Container (Bento Card) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] flex flex-col justify-center items-center relative overflow-hidden transition-transform duration-300 hover:translate-y-[-2px]">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-transparent pointer-events-none" />

            <div className="relative w-full max-w-sm flex flex-col justify-between items-center h-full z-10 pt-2">
              {/* Badge for 1.2s local speed */}
              <div className="absolute -top-1 -left-1 bg-orange-600 text-white rounded-xl py-2 px-3 shadow-md z-10 flex flex-col items-center">
                <span className="text-[9px] uppercase font-black tracking-widest opacity-90">Speed</span>
                <span className="font-mono font-bold text-sm">1.2s Load ⚡</span>
              </div>

              {/* Dynamic support interaction indicator */}
              <div className="absolute -top-1 -right-1 bg-white/95 border border-purple-150 rounded-full py-1 px-3 shadow-xs z-10 flex items-center gap-1.5 text-[10px] font-bold text-[#673DE6]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Support Native Tamil</span>
              </div>

              <div className="w-full mt-10 mb-4 overflow-hidden rounded-2xl border border-purple-100">
                <img
                  src={heroImageSrc}
                  alt="Tamil Host customer support and speed system dashboard"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl w-full object-cover shadow-inner bg-indigo-50"
                />
              </div>

              {/* Bottom tag block */}
              <a
                href="https://wa.me/916361977049"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center w-full bg-purple-50/50 hover:bg-purple-100 rounded-xl p-3 border border-purple-200 mt-2 block transition-all active:scale-[0.98] select-none cursor-pointer group"
              >
                <p className="text-xs font-mono font-extrabold text-[#673DE6] group-hover:text-[#5025D1] flex items-center justify-center gap-1">
                  💬 Chat on WhatsApp in Tamil
                </p>
                <p className="text-[10px] text-[#2F1C6A]/70 mt-0.5 font-bold">
                  +91 63619 77049 &bull; Avg Reply 2m
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* -------------------- TRUST BAR (Below Hero as Bento Card) -------------------- */}
        <div id="trust-bar" className="mt-6 bg-[#673DE6] text-white rounded-3xl p-6.5 sm:p-8 shadow-[0px_4px_16px_rgba(103,61,230,0.12)] border border-[#5025D1]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Guarantee item */}
            <div className="flex flex-col items-center justify-center p-2 space-y-1.5 md:first:pl-0">
              <span className="text-3xl leading-none">🛡️</span>
              <h3 className="text-white text-base font-extrabold uppercase tracking-wider">30-Day Guarantee</h3>
              <p className="text-xs text-indigo-100 max-w-xs leading-relaxed opacity-90">
                Not fully happy? Get a 100% full refund within 30 days. No questions asked.
              </p>
            </div>

            {/* Migration item */}
            <div className="flex flex-col items-center justify-center p-2 space-y-1.5 pt-6 md:pt-2">
              <span className="text-3xl leading-none">🔄</span>
              <h3 className="text-white text-base font-extrabold uppercase tracking-wider">Free Migration</h3>
              <p className="text-xs text-indigo-100 max-w-xs leading-relaxed opacity-90">
                Our support experts migrate your domain name, websites and configs with zero downtime.
              </p>
            </div>

            {/* Tamil support item */}
            <div className="flex flex-col items-center justify-center p-2 space-y-1.5 pt-6 md:pt-2">
              <span className="text-3xl leading-none">💬</span>
              <h3 className="text-white text-base font-extrabold uppercase tracking-wider">Tamil Support</h3>
              <p className="text-xs text-indigo-100 max-w-xs leading-relaxed opacity-90">
                Talk or WhatsApp native Tamil system engineers directly anytime of day or night.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* -------------------- INTERACTIVE QUIZ DIALOG -------------------- */}
      {isQuizOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border border-indigo-100 overflow-hidden">
            {/* Top design accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#673DE6] to-indigo-500" />

            <button
              onClick={() => setIsQuizOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              &times;
            </button>

            {!quizFinished ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-6 h-6 text-[#673DE6]" />
                  <span className="text-xs uppercase tracking-wider text-indigo-600 font-extrabold font-mono">
                    Step {currentQuizStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                </div>

                <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                  <div
                    className="bg-[#673DE6] h-full transition-all duration-300"
                    style={{ width: `${((currentQuizStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#2F1C6A] mb-5">
                  {QUIZ_QUESTIONS[currentQuizStep].text}
                </h3>

                <div className="space-y-4">
                  {QUIZ_QUESTIONS[currentQuizStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(option.points)}
                      className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all cursor-pointer group"
                    >
                      <div className="font-bold text-[#2F1C6A] group-hover:text-indigo-900 leading-tight">
                        {option.text}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {option.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center pt-2">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-[#2F1C6A] mb-1">
                  We Found Your Plan!
                </h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">Based on your dynamic workload answers, we recommend:</p>

                {recommendedPlan && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-6 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#673DE6] bg-indigo-100 px-2 py-0.5 rounded">
                        Recommended Package
                      </span>
                      <span className="text-xl font-black text-[#2F1C6A]">
                        ₹{recommendedPlan.price}/{recommendedPlan.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-[#2F1C6A]">
                      {recommendedPlan.name}
                    </h4>

                    <div className="mt-3.5 space-y-1.5">
                      {recommendedPlan.features.slice(0, 3).map((feat, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (recommendedPlan) {
                        onPlanSelect(recommendedPlan);
                        setIsQuizOpen(false);
                      }
                    }}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg shadow-md cursor-pointer text-center"
                  >
                    Select Plan & Continue
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#2F1C6A] font-bold py-3 px-4 rounded-lg border border-gray-200 cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

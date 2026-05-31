/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, ArrowRight, Wallet, HelpCircle } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-purple-100 sticky top-[48px] sm:top-[44px] z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer select-none group" 
            onClick={() => scrollToSection("app-root")}
          >
            <div className="w-10 h-10 rounded-xl bg-[#673DE6] flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-600/10 group-hover:scale-105 transition-transform">
              <span className="text-xl">🚀</span>
            </div>
            <span className="text-2xl font-black text-[#2F1C6A] tracking-tight">
              Tamil<span className="text-[#673DE6]">Host</span>
            </span>
          </div>

          {/* Nav List */}
          <nav className="hidden md:flex items-center gap-8 text-[#1F2937] font-semibold text-[15px]">
            <button 
              onClick={() => scrollToSection("hero-section")} 
              className="hover:text-[#673DE6] transition-colors cursor-pointer py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("choose-speed-section")} 
              className="hover:text-[#673DE6] transition-colors cursor-pointer py-2"
            >
              Hosting
            </button>
            <button 
              onClick={() => scrollToSection("pricing-section")} 
              className="hover:text-[#673DE6] transition-colors cursor-pointer py-2"
            >
              VPS
            </button>
            <button 
              onClick={() => scrollToSection("why-trust-section")} 
              className="hover:text-[#673DE6] transition-colors cursor-pointer py-2"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection("faq-section")} 
              className="hover:text-[#673DE6] text-[#673DE6] font-bold px-3 py-1.5 rounded-lg bg-[#F5F3FF] border border-[#C4B5FD]/40 transition-all cursor-pointer flex items-center gap-1 hover:bg-violet-100/70"
            >
              Login
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("pricing-section")}
              className="bg-[#673DE6] hover:bg-[#5025D1] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2F1C6A] hover:text-[#673DE6] p-2 rounded-lg hover:bg-[#F5F3FF] transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-purple-50 px-4 py-4 space-y-2.5 shadow-lg select-none">
          <button 
            onClick={() => scrollToSection("hero-section")} 
            className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#F5F3FF] text-[#1F2937] font-semibold text-sm transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("choose-speed-section")} 
            className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#F5F3FF] text-[#1F2937] font-semibold text-sm transition-colors cursor-pointer"
          >
            Hosting
          </button>
          <button 
            onClick={() => scrollToSection("pricing-section")} 
            className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#F5F3FF] text-[#1F2937] font-semibold text-sm transition-colors cursor-pointer"
          >
            VPS
          </button>
          <button 
            onClick={() => scrollToSection("why-trust-section")} 
            className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#F5F3FF] text-[#1F2937] font-semibold text-sm transition-colors cursor-pointer"
          >
            Support
          </button>
          <button 
            onClick={() => scrollToSection("faq-section")} 
            className="block w-full text-left py-2.5 px-3 rounded-lg bg-[#F5F3FF] text-[#673DE6] font-bold text-sm transition-colors cursor-pointer"
          >
            Login
          </button>
          
          <div className="pt-2">
            <button
              onClick={() => {
                scrollToSection("pricing-section");
                setIsOpen(false);
              }}
              className="w-full bg-[#673DE6] hover:bg-[#5025D1] text-white font-bold text-center py-3 px-4 rounded-lg shadow-sm transition-all block cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

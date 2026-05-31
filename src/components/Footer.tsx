/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Heart, Sparkles, MessageCircle, Laptop, Settings, HelpCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#2F1C6A] text-white border-t border-[#673DE6]/20 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main footer contents */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl bg-[#673DE6] p-2 rounded-xl font-black text-emerald-400 font-mono tracking-tight shadow-md flex items-center justify-center">
                TH
              </span>
              <span className="text-lg font-black tracking-tight text-white uppercase font-sans">
                Tamil<span className="text-emerald-400">Host</span>
              </span>
            </div>
            
            <p className="text-indigo-200 text-xs md:text-sm max-w-sm leading-relaxed">
              Premium high-speed local NVMe architectures fully managed by certified system operations experts. Proudly serving Indian developers, agencies, and small businesses.
            </p>

            <p className="text-xs italic text-indigo-300 pt-1">
              “Our site looks like Hostinger but our support is 10x better.”
            </p>
          </div>

          {/* Quick links & contact details block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-emerald-400">Services</h4>
            <ul className="space-y-2 text-xs md:text-sm text-indigo-150">
              <li><a href="#choose-speed-section" className="hover:text-white transition-colors">WordPress Hosting</a></li>
              <li><a href="#choose-speed-section" className="hover:text-white transition-colors">Cloud VPS Servers</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Student Hosting Starter</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">Enterprise Multi-Site Nodes</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-emerald-400">Operations Support</h4>
            <p className="text-xs md:text-sm text-indigo-150 leading-relaxed">
              Our regional technical operations team supports you directly on WhatsApp, live chat, or email callouts at any hour.
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/916361977049"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#673DE6] hover:bg-[#5025D1] border border-transparent hover:border-purple-400 text-white text-xs font-mono font-bold py-2 px-3.5 rounded-lg transition-all"
              >
                <span>💬 WhatsApp Web: +91 63619 77049</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-indigo-200 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Average response cycle: <strong>2 minutes</strong></span>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-indigo-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-indigo-300">
          <div>
            &copy; {currentYear} TamilHost Web Services. All rights reserved. Registered Indian Infrastructure Agent.
          </div>
          
          <div className="flex items-center gap-1.5 font-bold">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for businesses in Tamil Nadu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

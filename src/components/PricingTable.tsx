/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Check, Star, ShieldCheck, HelpCircle, HardDrive, Globe, Server, User, List, Settings, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { HOSTING_PLANS } from "../data";
import { HostingPlan } from "../types";

interface PricingTableProps {
  selectedPlanFromHero: HostingPlan | null;
  clearPlanFromHero: () => void;
}

export default function PricingTable({ selectedPlanFromHero, clearPlanFromHero }: PricingTableProps) {
  const [activeTab, setActiveTab] = useState<"all" | "hosting" | "vps">("all");
  const [checkoutPlan, setCheckoutPlan] = useState<HostingPlan | null>(null);
  
  // Checkout simulator state
  const [domainName, setDomainName] = useState("");
  const [domainStatus, setDomainStatus] = useState<"idle" | "checking" | "available" | "error">("idle");
  const [checkoutStep, setCheckoutStep] = useState<"domain" | "installing" | "success">("domain");
  const [installProgress, setInstallProgress] = useState(0);
  const [installLog, setInstallLog] = useState("");

  useEffect(() => {
    if (selectedPlanFromHero) {
      setCheckoutPlan(selectedPlanFromHero);
      setCheckoutStep("domain");
      setDomainStatus("idle");
      setDomainName("");
    }
  }, [selectedPlanFromHero]);

  const filteredPlans = HOSTING_PLANS.filter((plan) => {
    if (activeTab === "all") return true;
    return plan.type === activeTab;
  });

  // Dynamic domain search
  const checkDomainAvailability = () => {
    if (!domainName || domainName.trim().length < 3) {
      setDomainStatus("error");
      return;
    }
    setDomainStatus("checking");

    setTimeout(() => {
      setDomainStatus("available");
    }, 1200);
  };

  // Live progressive operations install log simulation
  const startServerAllocationWorkflow = () => {
    setCheckoutStep("installing");
    setInstallProgress(0);
    setInstallLog("Initializing secure cloud handshake database...");

    const logs = [
      { progress: 15, log: "Connecting with INRegistry to allocate domain namespace..." },
      { progress: 30, log: "Binding IP address and configuring DNS Zone files..." },
      { progress: 50, log: "Provisioning high-speed isolated NVMe SSD volumes..." },
      { progress: 70, log: "Generating and authorizing Let's Encrypt SSL certificates..." },
      { progress: 85, log: "Installing WordPress core files and SQL databases in Tamil..." },
      { progress: 100, log: "Finalizing firewall policies & launching admin dashboard..." }
    ];

    let currentLogIndex = 0;
    
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setInstallProgress(logs[currentLogIndex].progress);
        setInstallLog(logs[currentLogIndex].log);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setCheckoutStep("success");
        if (selectedPlanFromHero) {
          clearPlanFromHero();
        }
      }
    }, 1100);
  };

  return (
    <section id="pricing-section" className="py-16 md:py-20 px-4 md:px-8 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#673DE6] bg-purple-150 px-3.5 py-1.5 rounded-full font-mono">
            Transparent Rates
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A]">
            Simple Pricing
          </h2>
          <p className="text-[#2F1C6A]/75 text-sm md:text-base">
            No hidden setup fees, surprise renewals, or pushy upgrade calls. Choose a tier that matches your current scale and expand smoothly as you grow.
          </p>
        </div>

        {/* Pricing Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-purple-50 p-1.5 rounded-2xl border border-purple-100">
            <button
              id="pricing-tab-all"
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "all" ? "bg-[#673DE6] text-white shadow-md font-mono" : "text-[#2F1C6A]/70 hover:text-[#2F1C6A]"
              }`}
            >
              All Packages
            </button>
            <button
              id="pricing-tab-hosting"
              onClick={() => setActiveTab("hosting")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "hosting" ? "bg-[#673DE6] text-white shadow-md font-mono" : "text-[#2F1C6A]/70 hover:text-[#2F1C6A]"
              }`}
            >
              🌱 WordPress (₹59/mo)
            </button>
            <button
              id="pricing-tab-vps"
              onClick={() => setActiveTab("vps")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === "vps" ? "bg-[#673DE6] text-white shadow-md font-mono" : "text-[#2F1C6A]/70 hover:text-[#2F1C6A]"
              }`}
            >
              ⚡ Cloud VPS (₹499/mo)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {filteredPlans.map((plan) => {
            const isBusiness = plan.id === "business";
            
            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`flex flex-col justify-between rounded-3xl p-6.5 relative overflow-hidden transition-all duration-300 bg-white border ${
                  isBusiness
                    ? "border-2 border-[#673DE6] shadow-[0px_8px_24px_rgba(103,61,230,0.15)] scale-[1.02] lg:-translate-y-2 z-10"
                    : "border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] hover:-translate-y-1 hover:shadow-[0px_12px_24px_rgba(103,61,230,0.12)]"
                }`}
              >
                {/* Popular Ribbon overlay */}
                {isBusiness && (
                  <div className="absolute top-0 right-0 bg-[#673DE6] text-white font-mono text-[9px] font-black tracking-widest uppercase py-1 px-4 rounded-bl-xl flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="space-y-1 mb-4">
                    <div className="text-[10px] uppercase font-mono font-extrabold tracking-wider text-purple-400">
                      {plan.type === "vps" ? "⚡ Dedicated Server" : "🌱 Shared Cloud"}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#2F1C6A] flex items-center gap-1">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-0.5 mb-6">
                    <span className="text-sm font-semibold text-gray-400">₹</span>
                    <span className="text-3xl font-black text-[#2F1C6A]">{plan.price}</span>
                    <span className="text-xs text-gray-400 font-medium tracking-tight">/{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-neutral-600 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-tight">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`purchase-btn-${plan.id}`}
                  onClick={() => {
                    setCheckoutPlan(plan);
                    setCheckoutStep("domain");
                    setDomainStatus("idle");
                    setDomainName("");
                  }}
                  className={`w-full font-bold text-center py-3 px-4 rounded-xl cursor-pointer transition-colors ${
                    isBusiness
                      ? "bg-[#673DE6] hover:bg-[#5025D1] text-white shadow-md"
                      : "bg-[#F5F3FF] hover:bg-indigo-150 text-[#673DE6]"
                  }`}
                >
                  Order {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Badge */}
        <div className="bg-[#F5F3FF]/60 border border-purple-100 rounded-3xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-black text-[#2F1C6A]">All plans include Free Migration + Weekly Backups</p>
              <p className="text-xs text-gray-400">Moving from Hostinger or GoDaddy? We migrate complete websites securely within 4 hours.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-full inline-block shrink-0">
            &bull; Verified Risk Free
          </span>
        </div>

        {/* Comparative Spec Table block */}
        <div className="mt-12 max-w-4xl mx-auto overflow-hidden bg-white rounded-3xl border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] hidden md:block text-slate-800">
          <div className="bg-[#2F1C6A] p-4 text-white text-sm font-bold flex items-center gap-2">
            <List className="w-4.5 h-4.5 text-indigo-300" />
            <span>Hosting Tiers Comparison Specification Checklist</span>
          </div>

          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-purple-50/50 border-b border-purple-100 font-bold text-[#2F1C6A]">
                <th className="p-4">Package</th>
                <th className="p-4 text-right">Refund Guard</th>
                <th className="p-4">Storage Allotment</th>
                <th className="p-4">Included Domain</th>
                <th className="p-4 text-right">Monthly rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-gray-600">
              {HOSTING_PLANS.map((plan) => (
                <tr key={plan.id} className="hover:bg-purple-50/30 transition-colors">
                  <td className="p-4 font-bold text-[#2F1C6A]">{plan.name}</td>
                  <td className="p-4 text-right">
                    <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">30 Days</span>
                  </td>
                  <td className="p-4 font-mono text-xs">{plan.storage}</td>
                  <td className="p-4">{plan.domain}</td>
                  <td className="p-4 text-right font-bold text-[#2F1C6A]">₹{plan.price}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* -------------------- DYNAMIC CHECKOUT SIMULATOR DIALOG -------------------- */}
      {checkoutPlan && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border border-indigo-100 overflow-hidden">
            {/* Top design accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#673DE6]" />

            <button
              onClick={() => {
                setCheckoutPlan(null);
                if (selectedPlanFromHero) {
                  clearPlanFromHero();
                }
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              &times;
            </button>

            {/* Title / Header of checkout */}
            <div className="mb-6">
              <span className="text-[10px] tracking-widest font-extrabold text-indigo-500 uppercase font-mono">
                Secured Purchase Sandbox
              </span>
              <h3 className="text-xl font-bold text-[#2F1C6A]">
                Deploying: {checkoutPlan.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Pricing tier setup: <strong className="text-indigo-600">₹{checkoutPlan.price}/mo</strong> (Renewals locked in at identical rates).
              </p>
            </div>

            {/* Step 1: DOMAIN SELECTOR */}
            {checkoutStep === "domain" && (
              <div className="space-y-5">
                <div className="bg-indigo-50/75 border border-indigo-100 rounded-xl p-4 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-indigo-600 shrink-0" />
                  <p className="text-xs text-[#2F1C6A] leading-relaxed">
                    <strong>Exclusive Tamil Promo:</strong> Enter a custom .IN domain name below. {checkoutPlan.id === "business" ? <strong className="text-indigo-600">Free of charge!</strong> : "Available for just ₹399 as database addon."}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-[#2F1C6A] tracking-wider">
                    Enter Desired Domain Name
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        id="checkout-domain-input"
                        type="text"
                        placeholder="yourname"
                        value={domainName}
                        onChange={(e) => {
                          setDomainName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""));
                          setDomainStatus("idle");
                        }}
                        className="w-full bg-[#F5F3FF] border border-indigo-150 rounded-lg py-3 px-3.5 text-sm font-semibold text-[#2F1C6A]"
                      />
                      <span className="absolute right-3.5 top-3.5 text-xs text-gray-400 font-bold font-mono">
                        .in
                      </span>
                    </div>
                    <button
                      id="domain-search-btn"
                      onClick={checkDomainAvailability}
                      disabled={!domainName}
                      className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 text-white font-bold py-3 px-4 rounded-lg text-xs cursor-pointer"
                    >
                      Check DNS
                    </button>
                  </div>

                  {domainStatus === "checking" && (
                    <div className="flex items-center gap-1.5 text-xs text-indigo-500 font-semibold pt-1">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Polling Registry database query...</span>
                    </div>
                  )}

                  {domainStatus === "available" && (
                    <div className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 rounded-lg p-3 flex items-center gap-1.5 pt-1 mt-1">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Excellent! <strong>{domainName}.in</strong> is available for allocation.</span>
                    </div>
                  )}

                  {domainStatus === "error" && (
                    <div className="text-xs text-rose-500 font-semibold pt-1">
                      Invalid domain name query structure. Minimum 3 characters.
                    </div>
                  )}
                </div>

                <button
                  id="checkout-proceed-btn"
                  onClick={startServerAllocationWorkflow}
                  disabled={domainStatus !== "available" && domainName !== ""}
                  className="w-full bg-[#673DE6] hover:bg-[#5025D1] disabled:bg-gray-200 text-white font-black py-4 rounded-lg shadow-md cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <span>Build Hosting Container & Domain</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: OPERATIONAL SETUP PROGRESS */}
            {checkoutStep === "installing" && (
              <div className="space-y-6 py-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
                  <div
                    className="absolute inset-0 rounded-full border-4 border-[#673DE6] transition-transform duration-300"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                      transform: `rotate(${(installProgress / 100) * 360}deg)`
                    }}
                  />
                  <span className="text-lg font-black text-[#2F1C6A] font-mono">
                    {installProgress}%
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#2F1C6A]">Deploying local cloud container...</h4>
                  <div className="bg-gray-950 p-4 rounded-lg font-mono text-[11px] text-emerald-400 text-left h-24 overflow-y-auto shadow-inner border border-gray-800">
                    <div className="text-gray-500">&gt; systems_init: loading...</div>
                    <div className="mt-1 text-indigo-300 font-bold">&gt; progress: {installProgress}%</div>
                    <div className="mt-1">&gt; shell_status: {installLog}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: SUCCESS BLOCK */}
            {checkoutStep === "success" && (
              <div className="space-y-6 py-4 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#2F1C6A]">Server Provisioned Successfully!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Your customized storage container has been instantiated with administrative access. SSL secure tokens binded.
                  </p>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Custom Domain:</span>
                    <strong className="text-emerald-700">{domainName ? `${domainName}.in` : "local_test.tamilhost.in"}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Database Engine:</span>
                    <strong className="text-[#2F1C6A]">MySQL in Tamil UTF8</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Security Certificate:</span>
                    <strong className="text-emerald-700">Let's Encrypt (Active)</strong>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-emerald-100">
                    <span className="text-gray-450 font-bold">Admin Portal:</span>
                    <a href="#admin" className="text-indigo-600 hover:underline font-bold">admin_dashboard_lnk</a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCheckoutPlan(null);
                    if (selectedPlanFromHero) {
                      clearPlanFromHero();
                    }
                  }}
                  className="w-full bg-[#2F1C6A] hover:bg-neutral-900 text-white font-bold py-3 rounded-lg cursor-pointer"
                >
                  Return to Main Page
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import UrgencyBar from "./components/UrgencyBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SpeedSelector from "./components/SpeedSelector";
import WhyTrustUs from "./components/WhyTrustUs";
import Infrastructure from "./components/Infrastructure";
import PricingTable from "./components/PricingTable";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { HostingPlan } from "./types";
import { HOSTING_PLANS } from "./data";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<HostingPlan | null>(null);

  // Smooth scroll handler
  const scrollToPricing = () => {
    const section = document.getElementById("pricing-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectHostingSpeed = () => {
    // Scroll to pricing and open WP or general hosting
    scrollToPricing();
  };

  const handleSelectVpsSpeed = () => {
    // Scroll to pricing and pre-select a VPS plan
    scrollToPricing();
  };

  const handleFinalCTAPress = () => {
    // Automatically select the most popular Business Hosting plan for instant checkout simulation
    const popularBusinessPlan = HOSTING_PLANS.find(p => p.id === "business") || HOSTING_PLANS[1];
    setSelectedPlan(popularBusinessPlan);
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-[#2F1C6A]">
      {/* 1. Sticky Urgency Bar */}
      <UrgencyBar />

      {/* 2. Top Header Navigation */}
      <Header />

      {/* Main content flow */}
      <main className="flex-1">
        {/* 2. Section 1: Hero Banner */}
        <Hero
          onPlanSelect={(plan) => {
            setSelectedPlan(plan);
            scrollToPricing();
          }}
          onScrollToPlans={scrollToPricing}
        />

        {/* 3. Section 2: Choose Your Speed cards */}
        <SpeedSelector
          onSelectHosting={handleSelectHostingSpeed}
          onSelectVps={handleSelectVpsSpeed}
        />

        {/* 4. Section 3: Why People Trust Us columns */}
        <WhyTrustUs />

        {/* 4b. Datacenter Server Infrastructure Specs Fleet Section */}
        <Infrastructure />

        {/* 5. Section 4: Simple Pricing tables with comparison spec matrix & Sandbox checkout simulator */}
        <PricingTable
          selectedPlanFromHero={selectedPlan}
          clearPlanFromHero={() => setSelectedPlan(null)}
        />

        {/* 6. Section 5: Real Customer Proof localized reviews with interactive TN map geolocation selector */}
        <Testimonials />

        {/* 7. Section 6: Final CTA ready to host button */}
        <FinalCTA onYesHostMySiteNow={handleFinalCTAPress} />

        {/* 8. Section 7: FAQ interactive accordions */}
        <FAQ />
      </main>

      {/* 9. Elementor styling & customized footer */}
      <Footer />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Server, Cpu, HardDrive, Cpu as Memory, ShieldCheck, Zap, Layers, MessageSquare } from "lucide-react";

interface ServerSpec {
  id: string;
  name: string;
  brand: string;
  imageAlt: string;
  imageSrc: string;
  cores: string;
  processors: string;
  ramType: string;
  storageTech: string;
  networkSpeed: string;
  powerSupply: string;
  idealFor: string;
  status: "Active" | "High Load" | "Optimal";
  accentColor: string;
}

const SERVER_DATA: ServerSpec[] = [
  {
    id: "dell-r650xs",
    name: "PowerEdge R650xs",
    brand: "Dell EMC",
    imageAlt: "Dell PowerEdge R650xs Server Chassis",
    imageSrc: "/src/assets/images/dell_poweredge_1780267925761.png",
    cores: "Up to 64 Physical Cores",
    processors: "Dual 3rd Gen Intel® Xeon® Scalable Processors",
    ramType: "3200MT/s DDR4 ECC Registered RAM",
    storageTech: "Hot-plug NVMe SSD Cooled Array",
    networkSpeed: "10 GbE Low-Latency Broadcom Dual Ports",
    powerSupply: "Dual Redundant Hot-swap 800W Platinum PSU",
    idealFor: "E-commerce databases, massive MySQL/Postgres transactions, and high-load WordPress PHP execution.",
    status: "Active",
    accentColor: "border-blue-500 text-blue-500 bg-blue-50/10"
  },
  {
    id: "hpe-dl360",
    name: "ProLiant DL360 Gen10 Plus",
    brand: "HPE",
    imageAlt: "HPE ProLiant DL360 Gen10 Plus 1U Rack Server",
    imageSrc: "/src/assets/images/hpe_proliant_360_1780267948431.png",
    cores: "Up to 80 Threads",
    processors: "Intel® Xeon® Gold Scalable Family with Turbo Boost",
    ramType: "HPE SmartMemory DDR4 Regional Nodes",
    storageTech: "Direct-Attached SAS/SATA/NVMe SSD controllers",
    networkSpeed: "Dual Port 10/25GbE SFP+ Cloud Adapter",
    powerSupply: "Flex Slot Platinum Hot Plug Power Supply 500W/800W",
    idealFor: "Agile cloud applications, Node.js API servers, high-frequency Trading applications, and secure SSL proxy termination.",
    status: "Optimal",
    accentColor: "border-emerald-500 text-emerald-500 bg-emerald-50/10"
  },
  {
    id: "hpe-dl385",
    name: "ProLiant DL385 Gen11 Plus",
    brand: "HPE",
    imageAlt: "HPE ProLiant DL385 Gen11 Plus High Density 2U Storage",
    imageSrc: "/src/assets/images/hpe_proliant_385_1780267967470.png",
    cores: "Up to 128 Cores / 256 Threads",
    processors: "Dual AMD EPYC™ 9004 Series High-Frequency processors",
    ramType: "Hyper-Dense DDR5 Register Memory (4800 MT/s)",
    storageTech: "Ultra-redundant SAS4 12G Controller & PCIe Gen5 storage lanes",
    networkSpeed: "OCP 3.0 Network adapter with 25GbE low jitter",
    powerSupply: "Dual 1600W Titanium high-efficiency energy grid",
    idealFor: "Multi-tenant hypervisor VPS allocations, memory-heavy enterprise Java software, and massive traffic spikes above 1 Lakh visitors/day.",
    status: "Active",
    accentColor: "border-indigo-500 text-indigo-500 bg-indigo-50/10"
  },
  {
    id: "cisco-ucs",
    name: "UCS C240 M6 Rack Server",
    brand: "Cisco",
    imageAlt: "Cisco Unified Computing System (UCS) C240 series rack",
    imageSrc: "/src/assets/images/cisco_ucs_1780267988361.png",
    cores: "Up to 80 Hyper-threaded Core Units",
    processors: "3rd Gen Intel® Xeon® Scalable Processor Grid",
    ramType: "Intel® Optane™ Persistent Memory Support + ECC RAM",
    storageTech: "Cisco 12G SAS RAID Controller with 4GB Flash-Backed Write Cache",
    networkSpeed: "Cisco VIC 1440 unified network adapter fabric",
    powerSupply: "Dual Hot-Plug Redundant 1050W AC power converters",
    idealFor: "Virtual private backup nodes, hyper-converged virtualization environments, and critical cloud security layers.",
    status: "Optimal",
    accentColor: "border-teal-500 text-teal-500 bg-teal-50/10"
  }
];

export default function Infrastructure() {
  const [selectedServer, setSelectedServer] = useState<ServerSpec>(SERVER_DATA[0]);

  // Image source generated for this fleet
  const fleetImageSrc = "/src/assets/images/enterprise_servers_fleet_1780266765775.png";

  return (
    <section id="infrastructure-section" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#F5F3FF]/30 border-b border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-[#673DE6] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider font-mono">
            <Zap className="w-3.5 h-3.5 text-[#673DE6] fill-[#673DE6]" />
            <span>Enterprise Bare Metal Fleet</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#2F1C6A]">
            True High-IOPS Indian Datacenter Hardware
          </h2>
          <p className="text-[#2F1C6A]/75 text-base max-w-2xl mx-auto">
            We don't rent cheap simulated virtual cloud storage. Your website runs on authentic enterprise blade hosts housed inside Class-IV secure local data grids.
          </p>
        </div>

        {/* Fleet Image Showcase & Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Block: Image banner showcasing full rack */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px]">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-4 h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#673DE6] bg-purple-50 px-2.5 py-1 rounded-full uppercase">
                  ⚡ Active Server Node: {selectedServer.brand}
                </span>
                <h3 className="text-xl font-extrabold text-[#2F1C6A] mt-3">
                  {selectedServer.name}
                </h3>
                <p className="text-xs text-[#2F1C6A]/70 mt-1 leading-relaxed">
                  Direct physical inside look of our active {selectedServer.brand} server configuration. Every single account hosted gets isolated processor resources mapped directly to this high-IOPS blade hardware.
                </p>
              </div>

              {/* Active Server Image with Transition */}
              <div className="my-4 rounded-2xl overflow-hidden border border-purple-100 shadow-sm bg-indigo-50/20 max-h-[220px] flex items-center justify-center">
                <img
                  key={selectedServer.id}
                  src={selectedServer.imageSrc}
                  alt={selectedServer.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain aspect-video hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tech Spec Badges */}
              <div className="grid grid-cols-2 gap-3 bg-purple-50/40 p-3 rounded-xl border border-purple-100/50">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-extrabold font-mono">Uptime SLA</p>
                  <p className="text-sm font-black text-[#673DE6]">99.99% Guaranteed</p>
                </div>
                <div className="text-center border-l border-purple-100">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-extrabold font-mono">Disks Array</p>
                  <p className="text-sm font-black text-[#673DE6]">RAID 10 Protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Spec Cards of requested servers */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Top: Servers Selection Tab Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SERVER_DATA.map((server) => {
                const isSelected = selectedServer.id === server.id;
                return (
                  <button
                    key={server.id}
                    onClick={() => setSelectedServer(server)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between items-center select-none ${
                      isSelected
                        ? "bg-[#673DE6] text-white border-[#673DE6] shadow-md scale-[1.02]"
                        : "bg-white text-[#2F1C6A] border-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <Server className="w-5 h-5 mb-1.5 opacity-90" />
                    <span className="text-[10px] uppercase tracking-widest font-black font-mono block opacity-75">{server.brand}</span>
                    <span className="text-xs font-bold font-sans mt-0.5 tracking-tight truncate max-w-full">{server.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Middle: Active Server Technical Detailed Spec Card */}
            <div className="bg-white rounded-3xl p-6.5 sm:p-8 border border-purple-100 shadow-[0px_4px_16px_rgba(103,61,230,0.08)] space-y-6 flex-1 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px]">
              
              <div className="space-y-4">
                {/* Brand & Badge block */}
                <div className="flex items-center justify-between gap-2 border-b border-purple-50 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-extrabold tracking-wider text-purple-400 uppercase">{selectedServer.brand} Enterprise Edition</span>
                    <h4 className="text-2xl font-black text-[#2F1C6A] tracking-tight">{selectedServer.name}</h4>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${selectedServer.accentColor}`}>
                    &bull; {selectedServer.status} Monitor
                  </span>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  
                  {/* Cpu */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#673DE6] flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-extrabold font-mono">Processor Units</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{selectedServer.processors}</p>
                      <p className="text-xs font-bold text-[#2F1C6A]">{selectedServer.cores}</p>
                    </div>
                  </div>

                  {/* Memory */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#673DE6] flex items-center justify-center shrink-0 mt-0.5">
                      <Memory className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-extrabold font-mono">Durable RAM</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{selectedServer.ramType}</p>
                      <p className="text-xs font-bold text-[#2F1C6A]">High throughput ECC</p>
                    </div>
                  </div>

                  {/* Storage */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#673DE6] flex items-center justify-center shrink-0 mt-0.5">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-extrabold font-mono">Storage Architecture</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{selectedServer.storageTech}</p>
                      <p className="text-xs font-bold text-[#2F1C6A]">NVMe Ultra IOPS Arrays</p>
                    </div>
                  </div>

                  {/* Bandwidth / Network */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#673DE6] flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-extrabold font-mono">Network Port Gateway</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{selectedServer.networkSpeed}</p>
                      <p className="text-xs font-bold text-[#2F1C6A]">{selectedServer.powerSupply}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Workload suitability badge */}
              <div className="bg-[#F5F3FF] border border-purple-100 rounded-2xl p-4 text-left mt-4">
                <p className="text-xs font-mono font-bold text-[#673DE6] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Workload Suitability Indicator
                </p>
                <p className="text-xs text-[#2F1C6A]/80 mt-1 leading-relaxed">
                  {selectedServer.idealFor}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 24/7 WhatsApp Operator Bar featuring Direct Phone Number */}
        <div className="bg-[#673DE6] text-white rounded-3xl p-6.5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0px_4px_16px_rgba(103,61,230,0.12)] border border-[#5025D1] transition-all duration-300 hover:translate-y-[-2px]">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <span className="text-4xl leading-none">💬</span>
            <div>
              <h4 className="text-lg font-black tracking-tight text-white uppercase font-sans">
                Direct WhatsApp Hotline (+91 63619 77049)
              </h4>
              <p className="text-indigo-100/90 text-xs mt-0.5 max-w-xl">
                Have specific hardware questions about Dell PowerEdge, custom HDD mounts, or ProLiant RAM allocations? Message an online systems engineer directly in Tamil, English, or Telugu.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/916361977049"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all active:scale-95 text-white font-extrabold text-sm py-3.5 px-7 rounded-xl shadow-md inline-flex items-center gap-2 shrink-0 cursor-pointer select-none"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-500" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}

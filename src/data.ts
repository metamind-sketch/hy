/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HostingPlan, Testimonial, FAQItem, QuickQuizQuestion } from "./types";

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: "student",
    name: "Student Hosting",
    price: 59,
    period: "mo",
    features: [
      "1 Website",
      "10GB High-Speed SSD Storage",
      "Free Let's Encrypt SSL Certificate",
      "100GB Monthly Bandwidth",
      "Unmatched 24/7 Tamil Support",
      "Free Seamless Website Migration"
    ],
    type: "hosting",
    storage: "10GB SSD",
    domain: "Not Included",
    ssl: "Free SSL",
    support: "24/7 Tamil Chat"
  },
  {
    id: "business",
    name: "Business Hosting",
    price: 199,
    period: "mo",
    isPopular: true,
    features: [
      "10 Websites Support",
      "50GB NVMe Ultra-Fast Storage",
      "Free .IN Domain Name (1 Year)",
      "Free SSL for All Websites",
      "Unlimited Monthly Bandwidth",
      "Priority WhatsApp Tamil Support (2 Min Avg Reply)",
      "Weekly Automated Backups",
      "1-Click WordPress & App Installer"
    ],
    type: "hosting",
    storage: "50GB NVMe",
    domain: "Free .IN Domain",
    ssl: "Free SSL (All Sites)",
    support: "Priority Tamil Support"
  },
  {
    id: "starter-vps",
    name: "Starter VPS",
    price: 499,
    period: "mo",
    features: [
      "1GB Dedicated RAM",
      "1 CPU Intel Xeon Core",
      "25GB Ultra-Speed SSD Storage",
      "1TB Monthly Bandwidth",
      "Full Root SSH Access",
      "Dedicated IPv4 Address",
      "Free Migration Assistant",
      "24/7 Dedicated Server Support"
    ],
    type: "vps",
    storage: "25GB SSD",
    domain: "Add-on Available",
    ssl: "Self-configured / Free",
    support: "24/7 Server Ops"
  },
  {
    id: "pro-vps",
    name: "Pro VPS",
    price: 1499,
    period: "mo",
    features: [
      "4GB Dedicated RAM",
      "2 CPU Intel Xeon Cores",
      "80GB Ultra-Speed SSD Storage",
      "4TB Dedicated Bandwidth",
      "Full Root SSH Access",
      "Dedicated IPv4 Address",
      "Dedicated Tamil System Administrator Support",
      "Free Automated Backups (Weekly)"
    ],
    type: "vps",
    storage: "80GB SSD",
    domain: "Add-on Available",
    ssl: "Self-configured / Free",
    support: "24/7 Dedicated Ops"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Blog start panna bayandhen. Ivara support la 10 mins la live aayiduchu.",
    author: "Anitha",
    role: "Student",
    location: "Trichy",
    avatarSeed: "anitha"
  },
  {
    id: "testimonial-2",
    quote: "Diwali sale la site down aagadhu. 50k visitors smooth ah handle pannuchu.",
    author: "Rajesh",
    role: "E-commerce Owner",
    location: "Chennai",
    avatarSeed: "rajesh"
  },
  {
    id: "testimonial-3",
    quote: "Hosting la start pannom. Traffic increase aanadhuku VPS ku easy ah move pannitom. Website now super fast.",
    author: "Karthik",
    role: "Agency Owner",
    location: "Coimbatore",
    avatarSeed: "karthik"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Difference between Hosting vs VPS?",
    answer: "Hosting is perfect for beginners, bloggers, and small business sites who want an easy, fully-managed experience. VPS (Virtual Private Server) gives dedicated RAM and power with full root control, perfect for busy business websites, high-traffic e-commerce stores, and active developers."
  },
  {
    id: "faq-2",
    question: "Can I upgrade from Hosting to VPS later?",
    answer: "Yes, absolutely! You can upgrade anytime with just one click in your dashboard. Our technical team handles the migration automatically behind the scenes with zero downtime and no data loss."
  },
  {
    id: "faq-3",
    question: "Do you really give Tamil support at 3AM?",
    answer: "Yes, 100%! We know hosting problems can happen at any hour. Our friendly expert engineers are online 24/7 to resolve operations and answer questions on WhatsApp and live chat in Tamil and English."
  },
  {
    id: "faq-4",
    question: "What if I don't know how to move my site from other hosting?",
    answer: "No problem at all! After ordering your plan, just share your old host login with our support team. We move your files, databases, and emails entirely for free within 4 hours, ensuring zero website downtime."
  }
];

export const QUIZ_QUESTIONS: QuickQuizQuestion[] = [
  {
    id: 1,
    text: "What are you building today?",
    options: [
      {
        text: "Personal Blog, Portfolio, or Small Business Site",
        points: { hosting: 5, vps: 1 },
        description: "Low-moderate static traffic"
      },
      {
        text: "E-commerce Store, Active Custom Tech, or Agency Hub",
        points: { hosting: 1, vps: 5 },
        description: "Requires dedicated processors and dynamic power"
      }
    ]
  },
  {
    id: 2,
    text: "How comfortable are you with server management (SSH/Linux)?",
    options: [
      {
        text: "No technical background — I want a direct 1-click dashboard",
        points: { hosting: 5, vps: 1 },
        description: "Fully managed, painless and automated"
      },
      {
        text: "I want full command control and dedicated root options",
        points: { hosting: 1, vps: 5 },
        description: "Suited for custom stack configurations"
      }
    ]
  },
  {
    id: 3,
    text: "What are your initial daily traffic expectations?",
    options: [
      {
        text: "Up to 10,000 visitors per day",
        points: { hosting: 5, vps: 2 },
        description: "Shared and Business platforms are optimal"
      },
      {
        text: "More than 10,000 visitors / sudden major promotional spikes",
        points: { hosting: 1, vps: 5 },
        description: "Guaranteed RAM avoids slowdowns during sales"
      }
    ]
  }
];

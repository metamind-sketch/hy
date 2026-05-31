/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: string[];
  type: "hosting" | "vps";
  storage: string;
  domain: string;
  ssl: string;
  support: string;
  additionalInfo?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuickQuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    points: { hosting: number; vps: number };
    description: string;
  }[];
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SolutionsSection } from './components/SolutionsSection';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQAssistant } from './components/FAQAssistant';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { COMPANY_INFO } from './data/companyData';
import { ServicePillar } from './types';

export default function App() {
  const [simulatorPillar, setSimulatorPillar] = useState<ServicePillar>('textil');

  // Centralized WhatsApp redirect handler
  const handleOpenWhatsApp = (
    message?: string,
    targetNumber: string = COMPANY_INFO.phone1Raw
  ) => {
    const defaultText =
      'Hola MASTER DESIGN S.A.C., deseo solicitar información y una cotización técnica para mi proyecto.';
    const encoded = encodeURIComponent(message || defaultText);
    const cleanNumber = targetNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToFAQ = () => {
    const el = document.getElementById('faq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Header / Navigation (3-Zone Contract) */}
      <Navbar onOpenWhatsAppDirect={() => handleOpenWhatsApp()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Dual CTA */}
        <Hero
          onSelectSimulatorTab={(tab) => setSimulatorPillar(tab)}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* 3. Authority and Metrics Trust Bar */}
        <TrustBar />

        {/* 4. Core Solutions Deep-Dive */}
        <SolutionsSection
          onSelectServiceForSimulator={(pillar) => setSimulatorPillar(pillar)}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* 5. Interactive Pricing & Specification Simulator (CRO Killer Feature) */}
        <InteractiveSimulator
          initialPillar={simulatorPillar}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* 6. Case Studies & Behind the Scenes Showcase */}
        <PortfolioShowcase onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

        {/* 7. Corporate & Institutional Testimonials */}
        <Testimonials />

        {/* 8. Interactive FAQ Concierge Assistant */}
        <FAQAssistant onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

        {/* 9. Smart Contact Form with Instant WhatsApp Routing */}
        <ContactForm onOpenWhatsApp={(msg, num) => handleOpenWhatsApp(msg, num)} />
      </main>

      {/* 10. Corporate Footer with Legal & Libro de Reclamaciones */}
      <Footer />

      {/* 11. Multi-number Floating WhatsApp Concierge */}
      <FloatingWhatsApp
        onOpenWhatsApp={(msg, num) => handleOpenWhatsApp(msg, num)}
        onOpenFAQ={handleScrollToFAQ}
      />
    </div>
  );
}

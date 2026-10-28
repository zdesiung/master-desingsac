import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, SlidersHorizontal, Cpu, Shirt, Hammer } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onSelectSimulatorTab: (tab: 'web' | 'textil' | 'carpinteria') => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSimulatorTab, onOpenWhatsApp }) => {
  const scrollToSimulator = (tab: 'web' | 'textil' | 'carpinteria') => {
    onSelectSimulatorTab(tab);
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 border-b border-slate-800/80">
      {/* Subtle background ambient lights (disciplined dark palette) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] bg-slate-800/30 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>{COMPANY_INFO.legalName}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RUC {COMPANY_INFO.ruc}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Lima, Perú</span>
            </div>

            {/* Impact Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Ingeniería Digital, Estampado Textil de Alta Gama y Carpintería Fina
            </h1>

            {/* Subtitle with real value proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Centralizamos en una sola firma industrial tres disciplinas maestras: desarrollo de
              aplicaciones web y tiendas e-commerce de ultra velocidad, serigrafía de exportación
              (3D Puff, discharge y foiling sobre Algodón Pima) y fabricación arquitectónica de
              mobiliario a medida con tolerancia milimétrica.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scrollToSimulator('web')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-slate-950" />
                <span>Cotizar Proyecto Web</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSimulator('textil')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white hover:border-amber-400/50 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>Diseñar Merchandising / Muebles</span>
              </button>
            </div>

            {/* Trust and Corporate Assurance Strip */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Facturación oficial con IGV</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantía técnica por contrato</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Envíos a todo el Perú</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset & Real-Craft Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
              <img
                src="/src/assets/images/hero_master_design_1793149974171.jpg"
                alt="Atelier y taller de MASTER DESIGN S.A.C.: desarrollo web, serigrafía textil y carpintería fina"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* In-Frame Craft Cards (3 pillars interactive jump) */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 mb-2">
                  Taller y Laboratorio de Producción Integrada
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToSimulator('web')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 transition-all text-center cursor-pointer group"
                  >
                    <Cpu className="w-4 h-4 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium text-slate-200">Software</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSimulator('textil')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 transition-all text-center cursor-pointer group"
                  >
                    <Shirt className="w-4 h-4 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium text-slate-200">Textil Pima</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSimulator('carpinteria')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 transition-all text-center cursor-pointer group"
                  >
                    <Hammer className="w-4 h-4 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-medium text-slate-200">Muebles</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

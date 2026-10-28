import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { ServicePillar } from '../types';
import { Check, ArrowRight, Layers, Cpu, Shirt, Hammer } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectServiceForSimulator: (pillar: ServicePillar) => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectServiceForSimulator,
  onOpenWhatsApp,
}) => {
  const [activePillar, setActivePillar] = useState<ServicePillar>('web');

  const currentService = SERVICES_DATA.find((s) => s.id === activePillar) || SERVICES_DATA[0];

  const getIcon = (pillar: ServicePillar) => {
    switch (pillar) {
      case 'web':
        return Cpu;
      case 'textil':
        return Shirt;
      case 'carpinteria':
        return Hammer;
    }
  };

  const handleSimulateClick = (pillar: ServicePillar) => {
    onSelectServiceForSimulator(pillar);
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="soluciones" className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Soluciones Corporativas Especializadas</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Estándar Industrial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Tres capacidades de alta precisión integradas en una sola firma
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Eliminamos intermediarios y desalineación de marca coordinando su identidad en el mundo digital, su vestimenta corporativa y sus espacios físicos de atención.
          </p>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 max-w-3xl">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.id);
            const isActive = activePillar === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActivePillar(service.id)}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span className="truncate">{service.number}. {service.id === 'web' ? 'Web & E-commerce' : service.id === 'textil' ? 'Serigrafía Textil' : 'Carpintería Fina'}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pilar Especializado {currentService.number}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1">
                {currentService.title}
              </h3>
              <p className="text-sm font-medium text-amber-300/90 mt-1">
                {currentService.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentService.description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Ventajas Competitivas Clave:
              </div>
              <ul className="space-y-2">
                {currentService.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {currentService.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">{spec.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleSimulateClick(currentService.id)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <span>Calcular Presupuesto en Simulador</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    `Hola MASTER DESIGN S.A.C., deseo solicitar información sobre el servicio de ${currentService.title}.`
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
              >
                <span>Consultar con Especialista WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 group">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-xs">
                <div className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Control de Calidad MASTER DESIGN</span>
                </div>
                <div className="text-slate-300 text-[11px] mt-0.5">
                  Inspección técnica pieza por pieza antes del despacho final.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

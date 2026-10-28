import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Award, Clock, Target, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const metrics = [
    {
      value: `+${COMPANY_INFO.experienceYears} Años`,
      label: 'Experiencia Técnica',
      sub: 'En ingeniería digital, textil y madera',
      icon: Clock,
    },
    {
      value: COMPANY_INFO.completedProjects,
      label: 'Proyectos Concluidos',
      sub: 'Entregas a tiempo sin retrasos',
      icon: Award,
    },
    {
      value: `±${COMPANY_INFO.precisionMetric}`,
      label: 'Tolerancia y Precisión',
      sub: 'Registro de calce y encastres CNC',
      icon: Target,
    },
    {
      value: COMPANY_INFO.satisfactionRate,
      label: 'Satisfacción de Clientes',
      sub: 'Índice de recomendación corporativa',
      icon: ThumbsUp,
    },
  ];

  const clientSegments = [
    'Startups & Fintechs',
    'Marcas de Moda Streetwear',
    'Cadenas de Café & Restaurantes',
    'Empresas de Logística & Retail',
    'Estudios de Arquitectura & Diseño',
  ];

  return (
    <section className="bg-slate-900/40 border-b border-slate-800/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                    {item.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
            Soluciones preferidas por líderes de industria:
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            {clientSegments.map((segment, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-amber-400">■</span>
                <span>{segment}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

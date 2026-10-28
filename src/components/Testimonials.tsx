import React from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Quote, Building2, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Testimonios Verificados</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clientes Corporativos e Institucionales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Empresas peruanas que escalan con MASTER DESIGN S.A.C.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Relaciones comerciales a largo plazo basadas en cumplimiento exacto de fechas, fichas técnicas transparentes y acabados sin reprocesos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {t.service}
                  </div>
                  <Quote className="w-5 h-5 text-slate-600" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-start gap-2 text-xs text-amber-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.results}</span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{t.role} · {t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

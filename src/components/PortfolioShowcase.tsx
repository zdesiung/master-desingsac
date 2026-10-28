import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/companyData';
import { PortfolioItem, ServicePillar } from '../types';
import { ExternalLink, X, CheckCircle, TrendingUp, Layers } from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenWhatsApp }) => {
  const [filter, setFilter] = useState<ServicePillar | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    filter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.pillar === filter);

  return (
    <section id="portafolio" className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Casos de Éxito & Detrás de Cámaras</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Evidencia Real</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Obras concluidas con rigor técnico y acabado artesanal
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Explore muestras de nuestras aplicaciones web en producción, prendas estampadas con técnicas avanzadas y piezas de carpintería instaladas.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            {[
              { id: 'all', label: 'Todos los Proyectos' },
              { id: 'web', label: 'Web & E-com' },
              { id: 'textil', label: 'Serigrafía Textil' },
              { id: 'carpinteria', label: 'Carpintería Fina' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-amber-400/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category unboxed tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-semibold text-amber-400">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="text-xs text-slate-400 font-medium">{item.client}</div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom metric highlight */}
              <div className="px-5 py-3.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold truncate pr-2">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.metrics}</span>
                </div>
                <span className="text-[11px] text-slate-400 group-hover:text-white flex items-center gap-1 shrink-0 font-medium">
                  Ver Ficha <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 bg-slate-950 shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {selectedItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Cliente / Industria:</span>
                <p className="text-slate-200 font-medium mt-0.5">{selectedItem.client}</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Descripción del Desafío:</span>
                <p className="text-slate-300 leading-relaxed mt-1">{selectedItem.description}</p>
              </div>

              {/* Metrics */}
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-amber-400">Resultado Clave Obtenido</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{selectedItem.metrics}</div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Entregables Fabricados:</span>
                <ul className="mt-2 space-y-1.5">
                  {selectedItem.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech or Materials */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Especificaciones & Materiales:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedItem.techOrMaterials.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedItem(null);
                  onOpenWhatsApp(
                    `Hola MASTER DESIGN S.A.C., vi su caso de éxito "${selectedItem.title}" y deseo cotizar un proyecto similar.`
                  );
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
              >
                Cotizar Proyecto Similar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

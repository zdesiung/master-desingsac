import React, { useState, useMemo } from 'react';
import { FAQ_DATA, COMPANY_INFO } from '../data/companyData';
import { FAQItem, ServicePillar } from '../types';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';

interface FAQAssistantProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const FAQAssistant: React.FC<FAQAssistantProps> = ({ onOpenWhatsApp }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServicePillar | 'general' | 'all'>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.pillar === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Centro de Atención & Asistente FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Respuestas directas a las dudas más frecuentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Resuelva de forma inmediata inquietudes sobre pedidos mínimos, calidad del algodón Pima, tiempos web y visitas para carpintería.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por palabra clave (ej. mínimo, algodón pima, facturación, 3D puff, pasarelas)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Todas las Preguntas' },
            { id: 'general', label: 'Institucional & Envíos' },
            { id: 'textil', label: 'Serigrafía & Telas' },
            { id: 'web', label: 'Desarrollo Web' },
            { id: 'carpinteria', label: 'Carpintería & Muebles' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-800/90 bg-slate-950/70 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
              <p>No se encontraron resultados para &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-amber-400 underline font-semibold"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>

        {/* Live Support Box */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">¿Tienes un requerimiento a medida o duda técnica?</div>
              <div className="text-xs text-slate-400 mt-0.5">
                Nuestros ingenieros y maestros de taller atienden de forma directa vía WhatsApp.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              onOpenWhatsApp(
                'Hola MASTER DESIGN S.A.C., tengo una consulta específica que no encontré en el sitio web.'
              )
            }
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 shadow-md cursor-pointer whitespace-nowrap"
          >
            Consultar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

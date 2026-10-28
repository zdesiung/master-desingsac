import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenWhatsAppDirect?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppDirect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    if (onOpenWhatsAppDirect) {
      onOpenWhatsAppDirect();
    } else {
      const msg = encodeURIComponent(
        'Hola MASTER DESIGN S.A.C., deseo solicitar información y una cotización técnica para mi proyecto.'
      );
      window.open(`https://wa.me/${COMPANY_INFO.phone1Raw}?text=${msg}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xs shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-200">
            MD
          </span>
          <span className="tracking-wide">MASTER DESIGN S.A.C.</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#soluciones"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Soluciones
          </a>
          <a
            href="#simulador"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Simulador de Precios
          </a>
          <a
            href="#portafolio"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Casos de Éxito
          </a>
          <a
            href="#faq"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="#contacto"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contacto & Ubicación
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={handleWhatsAppClick}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Cotizar por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950/70" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="p-2 text-slate-950 bg-amber-400 rounded-lg text-xs font-bold"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-5 py-4 space-y-3">
          <a
            href="#soluciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Soluciones Principales
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Simulador Rápido Interactivo
          </a>
          <a
            href="#portafolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Casos de Éxito & Detrás de Cámaras
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Asistente de Preguntas Frecuentes
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Contacto Directo & Cotizaciones
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              type="button"
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-lg shadow-sm"
            >
              Atención WhatsApp (+51 968 108 836)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

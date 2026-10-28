import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, X, Send, Instagram, Facebook, Linkedin, HelpCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenWhatsApp: (message?: string, number?: string) => void;
  onOpenFAQ: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenWhatsApp,
  onOpenFAQ,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<string>(COMPANY_INFO.phone1Raw);
  const [customMsg, setCustomMsg] = useState('');

  const quickOptions = [
    {
      label: 'Cotizar Polos Pima & 3D Puff',
      text: 'Hola MASTER DESIGN S.A.C., deseo cotizar producción de polos en Algodón Pima con técnica 3D Puff.',
    },
    {
      label: 'Cotizar Tienda Web / E-commerce',
      text: 'Hola MASTER DESIGN S.A.C., deseo cotizar el desarrollo de una tienda web de alta velocidad.',
    },
    {
      label: 'Cotizar Carpintería / Mobiliario',
      text: 'Hola MASTER DESIGN S.A.C., deseo cotizar la fabricación de mobiliario a medida.',
    },
    {
      label: 'Hablar con un Asesor Técnico',
      text: 'Hola MASTER DESIGN S.A.C., deseo asesoría técnica para un proyecto empresarial.',
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    onOpenWhatsApp(customMsg, selectedNumber);
    setCustomMsg('');
    setIsOpen(false);
  };

  const handleQuickClick = (text: string) => {
    onOpenWhatsApp(text, selectedNumber);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Concierge Modal */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-96 rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-slate-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-amber-400 font-extrabold text-sm shadow">
                MD
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-tight">MASTER DESIGN S.A.C.</div>
                <div className="text-[11px] font-medium text-slate-900/80">
                  Canal Oficial de WhatsApp · En línea
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-950/70 hover:text-slate-950 hover:bg-black/10 transition-colors cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto text-xs">
            {/* Number Selector */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Selecciona la línea de atención:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedNumber(COMPANY_INFO.phone1Raw)}
                  className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                    selectedNumber === COMPANY_INFO.phone1Raw
                      ? 'bg-slate-900 border-amber-400 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-amber-400 uppercase">Ventas & Cotizaciones</div>
                  <div className="text-xs truncate">{COMPANY_INFO.phone1}</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedNumber(COMPANY_INFO.phone2Raw)}
                  className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                    selectedNumber === COMPANY_INFO.phone2Raw
                      ? 'bg-slate-900 border-amber-400 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-amber-400 uppercase">Atención & Obra</div>
                  <div className="text-xs truncate">{COMPANY_INFO.phone2}</div>
                </button>
              </div>
            </div>

            {/* Quick Consultation Chips */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                ¿Qué deseas consultar hoy?
              </span>
              <div className="space-y-1.5">
                {quickOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleQuickClick(opt.text)}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 hover:border-amber-400/50 text-slate-200 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <Send className="w-3.5 h-3.5 text-amber-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                O escribe tu mensaje directo:
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Escribe aquí tu consulta..."
                  className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Social & FAQ Links */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-slate-400">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenFAQ();
                }}
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Ver Preguntas Frecuentes</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        aria-label="Abrir WhatsApp oficial de MASTER DESIGN S.A.C."
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-slate-950" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
          WhatsApp Oficial
        </span>
      </button>
    </div>
  );
};

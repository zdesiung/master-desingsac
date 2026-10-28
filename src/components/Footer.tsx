import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ShieldCheck,
  Instagram,
  Facebook,
  Linkedin,
  FileText,
  X,
  Send,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [showLibroModal, setShowLibroModal] = useState(false);
  const [reclamoData, setReclamoData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    correo: '',
    tipo: 'reclamo',
    detalle: '',
  });
  const [reclamoSubmitted, setReclamoSubmitted] = useState(false);

  const handleReclamoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReclamoSubmitted(true);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Data (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-base">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-md">
                MD
              </span>
              <span className="tracking-wide">{COMPANY_INFO.legalName}</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empresa peruana líder en soluciones de ingeniería digital y manufactura fina: aplicaciones web de ultra alta velocidad, serigrafía textil industrial de exportación y mobiliario a medida de alta gama.
            </p>

            <div className="space-y-1.5 text-slate-400 text-[11px]">
              <div>
                <strong className="text-slate-300">RUC:</strong> {COMPANY_INFO.ruc}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Soluciones</div>
            <ul className="space-y-2">
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  Desarrollo Web Next.js & React
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  E-commerce con Pasarelas Peruanas
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  Serigrafía 3D Puff & Cuatricromía
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  Algodón Pima Peruano de Exportación
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  Counters & Mobiliario Comercial
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-amber-400 transition-colors">
                  Carpintería Residencial a Medida
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Navegación</div>
            <ul className="space-y-2">
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Presupuestos
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-amber-400 transition-colors">
                  Galería & Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-400 transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Assurance */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Legal & Confianza</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Facturación Electrónica con IGV</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Contratos con Hitos Técnicos</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantía de Satisfacción 100%</span>
              </li>
            </ul>

            {/* Libro de Reclamaciones Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setReclamoSubmitted(false);
                  setShowLibroModal(true);
                }}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-200 transition-colors cursor-pointer text-[11px] font-semibold"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Libro de Reclamaciones Virtual</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos los derechos reservados. RUC {COMPANY_INFO.ruc}.
          </div>
          <div className="flex items-center gap-4">
            <span>Lima, Perú</span>
            <span aria-hidden="true">·</span>
            <span>Estándar Internacional ISO 9001 de Calidad Técnica</span>
          </div>
        </div>
      </div>

      {/* Modal Libro de Reclamaciones */}
      {showLibroModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl text-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Libro de Reclamaciones Virtual
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLibroModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {reclamoSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Registro Recibido</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Su hoja de reclamación/queja ha sido archivada con número de expediente #{Math.floor(100000 + Math.random() * 900000)}. Conforme a ley, MASTER DESIGN S.A.C. emitirá respuesta formal en un plazo no mayor a 15 días hábiles.
                </p>
                <button
                  type="button"
                  onClick={() => setShowLibroModal(false)}
                  className="mt-4 px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form onSubmit={handleReclamoSubmit} className="mt-4 space-y-3 text-xs">
                <div className="text-[11px] text-slate-400">
                  Razón Social: <strong className="text-white">{COMPANY_INFO.legalName}</strong> | RUC: {COMPANY_INFO.ruc}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1">Nombre y Apellidos</label>
                    <input
                      type="text"
                      required
                      value={reclamoData.nombre}
                      onChange={(e) => setReclamoData({ ...reclamoData, nombre: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">DNI / CE</label>
                    <input
                      type="text"
                      required
                      value={reclamoData.dni}
                      onChange={(e) => setReclamoData({ ...reclamoData, dni: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                      placeholder="12345678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      required
                      value={reclamoData.telefono}
                      onChange={(e) => setReclamoData({ ...reclamoData, telefono: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                      placeholder="999 999 999"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      value={reclamoData.correo}
                      onChange={(e) => setReclamoData({ ...reclamoData, correo: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Tipo de Registro</label>
                  <select
                    value={reclamoData.tipo}
                    onChange={(e) => setReclamoData({ ...reclamoData, tipo: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                  >
                    <option value="reclamo">Reclamo (Disconformidad con el producto o servicio)</option>
                    <option value="queja">Queja (Malestar respecto a la atención recibida)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Detalle del Reclamo o Queja</label>
                  <textarea
                    required
                    rows={3}
                    value={reclamoData.detalle}
                    onChange={(e) => setReclamoData({ ...reclamoData, detalle: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    placeholder="Describa los hechos ocurridos..."
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowLibroModal(false)}
                    className="px-4 py-2 text-slate-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg hover:bg-amber-300"
                  >
                    Registrar Reclamo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

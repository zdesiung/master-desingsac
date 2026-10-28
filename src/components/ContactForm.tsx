import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ServicePillar } from '../types';
import { Send, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface ContactFormProps {
  onOpenWhatsApp: (message?: string, number?: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenWhatsApp }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<ServicePillar | 'multiple'>('textil');
  const [targetAdvisor, setTargetAdvisor] = useState<'ventas' | 'atencion'>('ventas');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor ingrese su nombre o persona de contacto.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Por favor ingrese un número de teléfono o WhatsApp válido.');
      return;
    }

    setErrorMsg('');

    const serviceNames: Record<string, string> = {
      web: 'Desarrollo Web & E-commerce',
      textil: 'Serigrafía Textil & Merchandising',
      carpinteria: 'Carpintería Fina & Mobiliario',
      multiple: 'Proyecto Integral / Múltiples Servicios',
    };

    const targetNumber = targetAdvisor === 'ventas' ? COMPANY_INFO.phone1Raw : COMPANY_INFO.phone2Raw;

    const message =
      `*NUEVA SOLICITUD DE PROFORMA - MASTER DESIGN S.A.C.*\n\n` +
      `• *Contacto:* ${name.trim()}\n` +
      `• *Empresa / Marca:* ${company.trim() || 'No especificada'}\n` +
      `• *Teléfono:* ${phone.trim()}\n` +
      `• *Email:* ${email.trim() || 'No especificado'}\n` +
      `• *Servicio:* ${serviceNames[service]}\n` +
      `• *Requerimiento:* ${details.trim() || 'Deseo proforma técnica y asesoría.'}\n\n` +
      `Solicitado a través de masterdesignsac.pe`;

    setSubmitted(true);
    onOpenWhatsApp(message, targetNumber);
  };

  return (
    <section id="contacto" className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <span>Atención Corporativa Inmediata</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Lima y Provincias</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                Hablemos de su próximo proyecto con rigor técnico
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Complete el formulario y nuestro equipo de producción le responderá en menos de 15 minutos en horario comercial con una propuesta clara, tiempos de entrega y proforma formal.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Líneas Directas de WhatsApp</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}
                  </div>
                  <div className="text-xs text-slate-400">Atención rápida por ingenieros y asesores técnicos</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Correo Electrónico Oficial</div>
                  <div className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.email}</div>
                  <div className="text-xs text-slate-400">Para licitaciones, órdenes de compra y facturación</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Taller & Oficina Comercial</div>
                  <div className="text-sm font-bold text-white mt-0.5">{COMPANY_INFO.address}</div>
                  <div className="text-xs text-slate-400">Visitas técnicas con previa cita coordinada</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Horario de Operaciones</div>
                  <div className="text-xs text-slate-200 mt-0.5">{COMPANY_INFO.schedule}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-white">¡Solicitud Generada con Éxito!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Se ha generado el mensaje estructurado para WhatsApp. Si la ventana no se abrió automáticamente, haga clic en el botón de abajo para iniciar la conversación.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-white">Solicitar Cotización Inmediata</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Enrutamiento automático al asesor comercial especializado en WhatsApp.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Nombre o Contacto <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Empresa, Marca o Negocio
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ej. Marca Textil o Empresa S.A."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Teléfono / WhatsApp <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 968 108 836"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Correo Electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contacto@empresa.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Servicio Principal Requerido
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="textil">Serigrafía Textil & Merchandising (3D Puff, Pima)</option>
                      <option value="web">Desarrollo Web & E-commerce (Next.js)</option>
                      <option value="carpinteria">Carpintería Fina & Mobiliario Especializado</option>
                      <option value="multiple">Proyecto Integral (Múltiples Áreas)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Asesor de Destino en WhatsApp
                    </label>
                    <select
                      value={targetAdvisor}
                      onChange={(e) => setTargetAdvisor(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="ventas">Ventas & Cotizaciones ({COMPANY_INFO.phone1})</option>
                      <option value="atencion">Atención al Cliente & Obra ({COMPANY_INFO.phone2})</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Detalles del requerimiento, cantidades o especificaciones
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Ej. Requiero 100 polos Pima con estampado 3D Puff en pecho y espalda para el 15 del próximo mes..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Enviar y Abrir Conversación en WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sus datos están protegidos bajo estricta confidencialidad comercial</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

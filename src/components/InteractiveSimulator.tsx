import React, { useState, useMemo } from 'react';
import { ServicePillar } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Shirt,
  Cpu,
  Hammer,
  Send,
  Sparkles,
  Calculator,
  Check,
  Info,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface InteractiveSimulatorProps {
  initialPillar?: ServicePillar;
  onOpenWhatsApp: (message?: string) => void;
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({
  initialPillar = 'textil',
  onOpenWhatsApp,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<ServicePillar>(initialPillar);

  // --- TEXTILE STATE ---
  const [garmentType, setGarmentType] = useState<'polo_pima' | 'hoodie_heavy' | 'tote_bag' | 'camisa_oxford'>('polo_pima');
  const [technique, setTechnique] = useState<'puff_3d' | 'cuatricromia' | 'discharge' | 'foil_oro' | 'plastisol_hd'>('puff_3d');
  const [quantity, setQuantity] = useState<number>(50);
  const [positions, setPositions] = useState<number>(1);
  const [cottonGrade, setCottonGrade] = useState<'pima_30_1' | 'pima_20_1' | 'french_terry_400g'>('pima_30_1');

  // --- WEB STATE ---
  const [webType, setWebType] = useState<'landing_cro' | 'ecommerce_pro' | 'saas_plataforma'>('ecommerce_pro');
  const [webTurnaround, setWebTurnaround] = useState<'express_7d' | 'standard_15d' | 'enterprise_30d'>('standard_15d');
  const [webModules, setWebModules] = useState<string[]>([
    'Pasarela Yape, Plin y Tarjetas',
    'Cotizador directo en WhatsApp',
    'SEO Técnico estructurado',
  ]);

  // --- CARPENTRY STATE ---
  const [furnitureType, setFurnitureType] = useState<'counter_retail' | 'mesa_directorio' | 'estanteria_boutique' | 'mobiliario_residencial'>('counter_retail');
  const [material, setMaterial] = useState<'nogal_cedro' | 'mdf_hidrofugo' | 'mixto_madera_acero'>('mdf_hidrofugo');
  const [linearMeters, setLinearMeters] = useState<number>(3);
  const [finish, setFinish] = useState<'poliuretano_mate' | 'poliuretano_satinado' | 'aceite_teka_natural'>('poliuretano_satinado');

  // --- TEXTILE CALCULATOR ---
  const textileEstimate = useMemo(() => {
    let basePricePerUnit = 28; // Soles for polo pima 30/1 standard
    if (garmentType === 'hoodie_heavy') basePricePerUnit = 65;
    if (garmentType === 'tote_bag') basePricePerUnit = 16;
    if (garmentType === 'camisa_oxford') basePricePerUnit = 48;

    // Cotton upgrade
    if (cottonGrade === 'pima_20_1') basePricePerUnit += 4;
    if (cottonGrade === 'french_terry_400g') basePricePerUnit += 12;

    // Technique premium
    let techCost = 4;
    if (technique === 'puff_3d') techCost = 7;
    if (technique === 'foil_oro') techCost = 8;
    if (technique === 'cuatricromia') techCost = 6;
    if (technique === 'discharge') techCost = 5;

    // Additional print positions
    const posMultiplier = 1 + (positions - 1) * 0.45;

    // Volume discount
    let volumeDiscount = 1;
    if (quantity >= 500) volumeDiscount = 0.72;
    else if (quantity >= 250) volumeDiscount = 0.78;
    else if (quantity >= 100) volumeDiscount = 0.85;
    else if (quantity >= 50) volumeDiscount = 0.92;

    const unitPrice = Math.round((basePricePerUnit + techCost * posMultiplier) * volumeDiscount);
    const totalSoles = unitPrice * quantity;
    const totalUsd = Math.round(totalSoles / 3.75);

    let days = '5 a 7 días hábiles';
    if (quantity > 300) days = '8 a 12 días hábiles';

    return {
      unitPrice,
      totalSoles,
      totalUsd,
      days,
    };
  }, [garmentType, technique, quantity, positions, cottonGrade]);

  // --- WEB CALCULATOR ---
  const webEstimate = useMemo(() => {
    let baseSoles = 1400; // Landing CRO
    if (webType === 'ecommerce_pro') baseSoles = 2800;
    if (webType === 'saas_plataforma') baseSoles = 4800;

    let moduleAddon = webModules.length * 280;

    let turnaroundMultiplier = 1;
    if (webTurnaround === 'express_7d') turnaroundMultiplier = 1.25;
    if (webTurnaround === 'enterprise_30d') turnaroundMultiplier = 1.1;

    const totalSoles = Math.round((baseSoles + moduleAddon) * turnaroundMultiplier);
    const totalUsd = Math.round(totalSoles / 3.75);

    let days = '12 a 15 días hábiles';
    if (webTurnaround === 'express_7d') days = '5 a 7 días hábiles (Prioridad)';
    if (webTurnaround === 'enterprise_30d') days = '25 a 30 días hábiles';

    return {
      totalSoles,
      totalUsd,
      days,
    };
  }, [webType, webTurnaround, webModules]);

  // --- CARPENTRY CALCULATOR ---
  const carpEstimate = useMemo(() => {
    let costPerMeter = 750; // Soles for MDF Hidrófugo
    if (material === 'nogal_cedro') costPerMeter = 1450;
    if (material === 'mixto_madera_acero') costPerMeter = 1100;

    let typeMultiplier = 1.1; // Counter
    if (furnitureType === 'mesa_directorio') typeMultiplier = 1.25;
    if (furnitureType === 'estanteria_boutique') typeMultiplier = 1.0;
    if (furnitureType === 'mobiliario_residencial') typeMultiplier = 1.15;

    const totalSoles = Math.round(linearMeters * costPerMeter * typeMultiplier);
    const totalUsd = Math.round(totalSoles / 3.75);

    let days = '10 a 14 días calendario (incluye render 3D e instalación)';
    if (linearMeters > 5) days = '15 a 20 días calendario';

    return {
      totalSoles,
      totalUsd,
      days,
    };
  }, [furnitureType, material, linearMeters, finish]);

  // Generate WhatsApp message and dispatch
  const handleSendToWhatsApp = () => {
    let text = '';
    if (selectedPillar === 'textil') {
      const gMap: Record<string, string> = {
        polo_pima: 'Polo Algodón Pima Cuello Redondo',
        hoodie_heavy: 'Hoodie Oversize French Terry 400g',
        tote_bag: 'Tote Bag Tocuyo Pesado',
        camisa_oxford: 'Camisa Corporativa Oxford',
      };
      const tMap: Record<string, string> = {
        puff_3d: '3D Puff Alto Relieve',
        cuatricromia: 'Cuatricromía / Indexado',
        discharge: 'Discharge / Tacto Cero al Agua',
        foil_oro: 'Foil Metálico Oro / Plata',
        plastisol_hd: 'Plastisol Alta Definición',
      };
      text =
        `*SOLICITUD DE COTIZACIÓN TEXTIL - MASTER DESIGN S.A.C.*\n\n` +
        `• *Prenda:* ${gMap[garmentType]}\n` +
        `• *Técnica:* ${tMap[technique]}\n` +
        `• *Cantidad requerida:* ${quantity} unidades\n` +
        `• *Posiciones de estampado:* ${positions} (pecho/espalda/manga)\n` +
        `• *Estimado preliminar:* S/ ${textileEstimate.totalSoles.toLocaleString()} (Aprox. $${textileEstimate.totalUsd} USD)\n` +
        `• *Precio unitario estimado:* S/ ${textileEstimate.unitPrice} c/u\n` +
        `• *Plazo estimado:* ${textileEstimate.days}\n\n` +
        `Deseo coordinar el envío de mi logotipo en vector para la muestra virtual y proforma final.`;
    } else if (selectedPillar === 'web') {
      const wMap: Record<string, string> = {
        landing_cro: 'Landing Page de Alta Conversión',
        ecommerce_pro: 'Tienda Virtual E-commerce Pro',
        saas_plataforma: 'Plataforma Web SaaS / App a Medida',
      };
      text =
        `*SOLICITUD DE DESARROLLO WEB - MASTER DESIGN S.A.C.*\n\n` +
        `• *Tipo de Proyecto:* ${wMap[webType]}\n` +
        `• *Módulos seleccionados:* ${webModules.join(', ')}\n` +
        `• *Plazo:* ${webEstimate.days}\n` +
        `• *Presupuesto estimado:* S/ ${webEstimate.totalSoles.toLocaleString()} ($${webEstimate.totalUsd} USD)\n\n` +
        `Deseo agendar una breve llamada técnica o coordinar detalles para mi empresa.`;
    } else {
      const fMap: Record<string, string> = {
        counter_retail: 'Counter de Recepción Retail / Comercial',
        mesa_directorio: 'Mesa de Directorio Ejecutiva',
        estanteria_boutique: 'Estantería & Módulos Boutique',
        mobiliario_residencial: 'Mueble Arquitectónico Residencial',
      };
      const mMap: Record<string, string> = {
        mdf_hidrofugo: 'MDF Hidrófugo Pelíkano (Resistente a humedad)',
        nogal_cedro: 'Madera Noble (Nogal / Cedro estacionado)',
        mixto_madera_acero: 'Estructura Mixta (Madera y Acero Electropintado)',
      };
      text =
        `*SOLICITUD DE CARPINTERÍA & MUEBLES - MASTER DESIGN S.A.C.*\n\n` +
        `• *Tipo de Mueble:* ${fMap[furnitureType]}\n` +
        `• *Material:* ${mMap[material]}\n` +
        `• *Dimensión aprox.:* ${linearMeters} metros lineales\n` +
        `• *Acabado:* ${finish}\n` +
        `• *Presupuesto estimado:* S/ ${carpEstimate.totalSoles.toLocaleString()} ($${carpEstimate.totalUsd} USD)\n` +
        `• *Plazo estimado:* ${carpEstimate.days}\n\n` +
        `Deseo coordinar visita técnica para levantamiento de medidas y render 3D.`;
    }

    onOpenWhatsApp(text);
  };

  const toggleWebModule = (moduleName: string) => {
    if (webModules.includes(moduleName)) {
      setWebModules(webModules.filter((m) => m !== moduleName));
    } else {
      setWebModules([...webModules, moduleName]);
    }
  };

  return (
    <section id="simulador" className="py-20 lg:py-24 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Configurador Técnico en Tiempo Real</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Simula tu presupuesto preliminar en segundos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Ajusta los parámetros de tu requerimiento y envía la configuración exacta al equipo de producción vía WhatsApp sin compromiso.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-950 border border-slate-800 rounded-xl max-w-md w-full">
            <button
              type="button"
              onClick={() => setSelectedPillar('textil')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPillar === 'textil'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shirt className="w-3.5 h-3.5" />
              <span>Serigrafía Textil</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPillar('web')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPillar === 'web'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Web & E-com</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPillar('carpinteria')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPillar === 'carpinteria'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Hammer className="w-3.5 h-3.5" />
              <span>Carpintería Fina</span>
            </button>
          </div>
        </div>

        {/* Main Simulator Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. TEXTIL CONTROLS */}
            {selectedPillar === 'textil' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    1. Tipo de Prenda o Soporte Textil
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'polo_pima', label: 'Polo Pima Cuello Redondo' },
                      { id: 'hoodie_heavy', label: 'Hoodie French Terry 400g' },
                      { id: 'tote_bag', label: 'Tote Bag Tocuyo Pesado' },
                      { id: 'camisa_oxford', label: 'Camisa Corporativa Oxford' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGarmentType(item.id as any)}
                        className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          garmentType === item.id
                            ? 'bg-slate-900 border-amber-400 text-white shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    2. Técnica de Estampado Especial
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'puff_3d', label: '3D Puff Alto Relieve' },
                      { id: 'cuatricromia', label: 'Cuatricromía / Indexado' },
                      { id: 'discharge', label: 'Discharge (Tacto Cero)' },
                      { id: 'foil_oro', label: 'Foil Oro / Plata Líquido' },
                      { id: 'plastisol_hd', label: 'Plastisol Ultra Definición' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTechnique(item.id as any)}
                        className={`p-2.5 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          technique === item.id
                            ? 'bg-slate-900 border-amber-400 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      3. Cantidad de Unidades ({quantity} prendas)
                    </label>
                    <span className="text-xs font-semibold text-amber-400">
                      {quantity >= 250 ? 'Escala Mayorista Aplicada' : 'Lote Estándar'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="1000"
                    step="25"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 tabular-nums">
                    <span>25 unids (mínimo)</span>
                    <span>100 unids</span>
                    <span>250 unids</span>
                    <span>500 unids</span>
                    <span>1,000+ unids</span>
                  </div>
                </div>

                {/* Print positions */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    4. Posiciones de Estampado
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 1, label: '1 Posición (Pecho)' },
                      { val: 2, label: '2 Posiciones (Pecho + Espalda)' },
                      { val: 3, label: '3 Posiciones (+ Mangas)' },
                    ].map((p) => (
                      <button
                        key={p.val}
                        type="button"
                        onClick={() => setPositions(p.val)}
                        className={`p-2.5 text-center rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          positions === p.val
                            ? 'bg-slate-900 border-amber-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. WEB CONTROLS */}
            {selectedPillar === 'web' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    1. Formato de Proyecto Digital
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        id: 'landing_cro',
                        title: 'Landing Page CRO',
                        sub: 'Para captación de leads y ventas express',
                      },
                      {
                        id: 'ecommerce_pro',
                        title: 'E-commerce Pro Next.js',
                        sub: 'Tienda virtual con pagos y stock',
                      },
                      {
                        id: 'saas_plataforma',
                        title: 'Plataforma B2B / SaaS',
                        sub: 'Web app con autenticación y panel',
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setWebType(item.id as any)}
                        className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          webType === item.id
                            ? 'bg-slate-900 border-amber-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    2. Módulos y Funcionalidades Incluidas
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Pasarela Yape, Plin y Tarjetas',
                      'Cotizador directo en WhatsApp',
                      'SEO Técnico estructurado',
                      'Panel Administrativo Autogestionable',
                      'Integración CRM / Hubspot / Mailchimp',
                      'Multi-idioma (Español / Inglés)',
                    ].map((mod) => {
                      const isSelected = webModules.includes(mod);
                      return (
                        <button
                          key={mod}
                          type="button"
                          onClick={() => toggleWebModule(mod)}
                          className={`flex items-center gap-2 p-2.5 text-left rounded-lg text-xs border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900 border-amber-400 text-slate-200'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-xs ${
                              isSelected ? 'bg-amber-400 text-slate-950' : 'border border-slate-700'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span>{mod}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    3. Plazo de Entrega y Prioridad de Desarrollo
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'express_7d', label: 'Exprés (7 Días)' },
                      { id: 'standard_15d', label: 'Estándar (15 Días)' },
                      { id: 'enterprise_30d', label: 'Completo (30 Días)' },
                    ].map((turn) => (
                      <button
                        key={turn.id}
                        type="button"
                        onClick={() => setWebTurnaround(turn.id as any)}
                        className={`p-2.5 text-center rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          webTurnaround === turn.id
                            ? 'bg-slate-900 border-amber-400 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {turn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. CARPENTRY CONTROLS */}
            {selectedPillar === 'carpinteria' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    1. Tipo de Mobiliario o Estructura
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'counter_retail', label: 'Counter Recepción Retail' },
                      { id: 'mesa_directorio', label: 'Mesa de Directorio' },
                      { id: 'estanteria_boutique', label: 'Estantería Boutique' },
                      { id: 'mobiliario_residencial', label: 'Mueble Residencial a Medida' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFurnitureType(item.id as any)}
                        className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          furnitureType === item.id
                            ? 'bg-slate-900 border-amber-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    2. Material Base y Resistencia
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'mdf_hidrofugo', label: 'MDF RH Hidrófugo Pelíkano', sub: 'Alta durabilidad' },
                      { id: 'nogal_cedro', label: 'Madera Noble (Nogal/Cedro)', sub: 'Lujo y veta natural' },
                      { id: 'mixto_madera_acero', label: 'Madera + Acero Negro', sub: 'Estilo industrial' },
                    ].map((mat) => (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setMaterial(mat.id as any)}
                        className={`p-2.5 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          material === mat.id
                            ? 'bg-slate-900 border-amber-400 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-bold">{mat.label}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{mat.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      3. Dimensión Lineal Estimada ({linearMeters} metros)
                    </label>
                    <span className="text-xs text-amber-400">Incluye modelado 3D previo</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={linearMeters}
                    onChange={(e) => setLinearMeters(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 tabular-nums">
                    <span>1 metro</span>
                    <span>3 metros</span>
                    <span>5 metros</span>
                    <span>8 metros</span>
                    <span>10 metros</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quotation Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-6 sm:p-7 rounded-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Resumen de Proforma Técnica
                </span>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {selectedPillar === 'textil'
                    ? 'Serigrafía Textil & Merchandising'
                    : selectedPillar === 'web'
                    ? 'Desarrollo Digital & E-commerce'
                    : 'Carpintería & Mobiliario a Medida'}
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs">
              {selectedPillar === 'textil' && (
                <>
                  <div className="flex justify-between text-slate-400">
                    <span>Prenda & Confección:</span>
                    <span className="font-semibold text-slate-200">100% Algodón Pima</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Técnica serigráfica:</span>
                    <span className="font-semibold text-amber-300">
                      {technique === 'puff_3d' ? '3D Puff Relieve' : technique.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Volumen configurado:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">{quantity} unidades</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Precio unitario estimado:</span>
                    <span className="font-bold text-white tabular-nums">S/ {textileEstimate.unitPrice}.00 c/u</span>
                  </div>
                </>
              )}

              {selectedPillar === 'web' && (
                <>
                  <div className="flex justify-between text-slate-400">
                    <span>Arquitectura base:</span>
                    <span className="font-semibold text-slate-200">Next.js + React 19 + Tailwind</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Módulos integrados:</span>
                    <span className="font-semibold text-amber-300 tabular-nums">
                      {webModules.length} módulos seleccionados
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Optimización CRO & SEO:</span>
                    <span className="font-semibold text-slate-200">100% Incluida</span>
                  </div>
                </>
              )}

              {selectedPillar === 'carpinteria' && (
                <>
                  <div className="flex justify-between text-slate-400">
                    <span>Tipo de estructura:</span>
                    <span className="font-semibold text-slate-200">{furnitureType}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Metraje lineal:</span>
                    <span className="font-semibold text-slate-200 tabular-nums">{linearMeters} metros</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Plano y render 3D:</span>
                    <span className="font-semibold text-amber-300">Incluido sin costo</span>
                  </div>
                </>
              )}

              <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  Tiempo de producción:{' '}
                  <strong className="text-slate-200">
                    {selectedPillar === 'textil'
                      ? textileEstimate.days
                      : selectedPillar === 'web'
                      ? webEstimate.days
                      : carpEstimate.days}
                  </strong>
                </span>
              </div>
            </div>

            {/* Total Display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">
                Inversión Estimada Referencial
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-amber-400 tabular-nums">
                  S/{' '}
                  {selectedPillar === 'textil'
                    ? textileEstimate.totalSoles.toLocaleString()
                    : selectedPillar === 'web'
                    ? webEstimate.totalSoles.toLocaleString()
                    : carpEstimate.totalSoles.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 tabular-nums">
                  (~ $
                  {selectedPillar === 'textil'
                    ? textileEstimate.totalUsd
                    : selectedPillar === 'web'
                    ? webEstimate.totalUsd
                    : carpEstimate.totalUsd}{' '}
                  USD)
                </span>
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                *Precios sin IGV. Sujeto a confirmación de arte, ficha técnica o planos finales.
              </div>
            </div>

            {/* Primary Action Button (Direct to WhatsApp) */}
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Enviar esta Cotización a WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Atención inmediata por WhatsApp ({COMPANY_INFO.phone1})</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

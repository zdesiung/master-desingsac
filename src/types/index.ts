export type ServicePillar = 'web' | 'textil' | 'carpinteria';

export interface ServiceDetail {
  id: ServicePillar;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  ctaLabel: string;
}

export interface PortfolioItem {
  id: string;
  pillar: ServicePillar;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  deliverables: string[];
  techOrMaterials: string[];
}

export interface FAQItem {
  id: string;
  pillar: ServicePillar | 'general';
  question: string;
  answer: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  city: string;
  service: string;
  quote: string;
  results: string;
}

export interface TextileConfig {
  garmentType: 'polo_pima' | 'hoodie_heavy' | 'tote_bag' | 'camisa_oxford';
  technique: 'puff_3d' | 'cuatricromia' | 'discharge' | 'foil_oro' | 'plastisol_hd';
  quantity: number;
  printPositions: number; // 1, 2, 3
  cottonGrade: 'pima_30_1' | 'pima_20_1' | 'french_terry_400g';
}

export interface WebConfig {
  projectType: 'landing_cro' | 'ecommerce_pro' | 'saas_plataforma';
  turnaround: 'express_7d' | 'standard_15d' | 'enterprise_30d';
  features: string[];
}

export interface CarpentryConfig {
  furnitureType: 'counter_retail' | 'mesa_directorio' | 'estanteria_boutique' | 'mobiliario_residencial';
  material: 'nogal_cedro' | 'mdf_hidrofugo' | 'mixto_madera_acero';
  linearMeters: number;
  finish: 'poliuretano_mate' | 'poliuretano_satinado' | 'aceite_teka_natural';
}

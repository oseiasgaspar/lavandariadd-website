export type ServiceCategory = 'Todos' | 'Uso Diário' | 'Casa e Têxteis' | 'Empresarial';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroHighlightItem {
  id: 'delivery' | 'whatsapp' | 'location';
  title: string;
  description: string;
  actionLabel?: string;
}

export interface LaundryService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ServiceCategory, 'Todos'>;
  simulatorValue: string;
  iconName: 'washing' | 'drying' | 'ironing' | 'bedding' | 'uniforms' | 'delivery';
  imageUrl: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface QualityPillar {
  title: string;
  description: string;
  iconName: 'shield' | 'leaf' | 'clock' | 'check';
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Contactos', href: '#contactos' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Todos',
  'Uso Diário',
  'Casa e Têxteis',
  'Empresarial',
];

export const BRAND_INFO = {
  name: 'Lavandaria D&D',
  shortName: 'D&D',
  logoLightPath: '/logo-dd.png',
  logoDarkPath: '/logo-dd-dark.png',
  heroImageUrl: '/images/hero-laundry.jpg',
  heroImageAlt: 'Instalações modernas e roupa cuidadosamente dobrada da Lavandaria D&D',
  whyChooseImageUrl: '/images/why-choose.jpg',
  whyChooseImageAlt: 'Equipa especializada da Lavandaria D&D a cuidar de cada peça com dedicação',
  sloganPrimary: 'O cuidado que se nota',
  sloganSecondary: 'Roupa limpa, vida leve!',
  heroHeadline: 'A sua roupa merece o melhor cuidado.',
  heroSubheadline:
    'Na Lavandaria D&D, tratamos cada peça com dedicação e profissionalismo. Lavamos, secamos e passamos as suas roupas para que estejam sempre limpas, perfumadas e prontas a usar.',
  heroPromise: 'Cuidamos da sua roupa como se fosse nossa.',
  promoBadge: '30% DE DESCONTO PARA NOVOS CLIENTES',
  values: ['Qualidade', 'Confiança', 'Dedicação'],
  whatsappDigits: '244927257289',
  phonePrimary: '927 257 289',
  phoneSecondary: '954 020 338',
  email: 'lavandariadd39@gmail.com',
  socialHandle: '@lavandaria_dd',
  socialLabel: 'Instagram e Facebook',
  address: 'Camama - Terra Prometida, defronte à antena da Unitel',
  city: 'Luanda, Angola',
  openingHours: 'Segunda a Sábado, das 07h às 20h',
  openingHoursNote: 'Atendimento ao balcão e agendamento de recolhas.',
  ctaPickupLabel: 'Pedir Recolha',
  ctaWhatsAppScheduleLabel: 'Agendar Recolha via WhatsApp',
  ctaSimulateLabel: 'Simular Pedido',
  defaultWhatsAppGreeting:
    'Olá, Lavandaria D&D! Gostaria de agendar uma recolha de roupa.',
  infoWhatsAppGreeting:
    'Olá, Lavandaria D&D! Gostaria de obter mais informações sobre os vossos serviços.',
  promoWhatsAppGreeting:
    'Olá, Lavandaria D&D! Gostaria de aproveitar os 30% de desconto para novos clientes e agendar a minha primeira lavagem.',
  b2bWhatsAppGreeting:
    'Olá, Lavandaria D&D! Gostaria de solicitar uma proposta de Contrato Empresarial para lavagem de fardamentos e enxovais.',
} as const;

export const SECTION_COPY = {
  services: {
    eyebrow: 'Os Nossos Serviços',
    title: 'Tratamento especializado para cada peça e tecido',
    description:
      'Lavamos, secamos e passamos com rigor profissional. Selecione o serviço pretendido para preencher automaticamente o seu pedido.',
    cardActionLabel: 'Solicitar Serviço',
  },
  whyChoose: {
    eyebrow: 'Por Que Escolher a Lavandaria D&D',
    title: 'Rigor, confiança e dedicação em cada etapa da lavagem',
    description:
      'Combinamos equipamentos modernos, produtos ecológicos de alta qualidade e atendimento próximo para devolver as suas roupas sempre limpas, perfumadas e impecáveis.',
  },
  process: {
    eyebrow: 'Como Funciona',
    title: 'Do agendamento à entrega em 4 passos simples',
    description:
      'Um processo organizado para poupar o seu tempo e garantir que as suas peças regressem limpas, engomadas e prontas a usar.',
  },
  ctaBanner: {
    title: 'Primeira lavagem com 30% de desconto ou plano mensal para a sua empresa',
    description:
      'Experimente o cuidado da Lavandaria D&D na sua primeira recolha ao domicílio em Luanda ou solicite condições corporativas para fardamentos e enxovais.',
    primaryAction: 'Simular Pedido Agora',
    whatsappAction: 'WhatsApp',
    b2bAction: 'Planos B2B',
  },
  simulator: {
    eyebrow: 'Simulador Rápido de Pedido',
    title: 'Peça a sua recolha ou orçamento em segundos',
    description:
      'Selecione o serviço, a modalidade e a sua zona em Luanda. A nossa equipa prepara automaticamente o seu pedido para envio direto pelo WhatsApp.',
    modalEyebrow: 'Lavandaria D&D · Atendimento Rápido',
    modalTitle: 'Pedir Recolha ou Orçamento',
  },
  business: {
    eyebrow: 'Soluções para Empresas · B2B',
    title: 'Uniformes, fardamentos e enxovais com rigor empresarial',
    description:
      'Apoiamos empresas, clínicas, restaurantes, hotéis e escritórios em Luanda com planos recorrentes de higienização, secagem e engomadoria profissional.',
    ctaLabel: 'Solicitar Proposta Empresarial',
  },
  contacts: {
    eyebrow: 'Localização e Contactos',
    title: 'Visite o nosso balcão ou fale connosco diretamente',
  },
} as const;

export const HERO_HIGHLIGHTS: HeroHighlightItem[] = [
  {
    id: 'delivery',
    title: 'Recolha e Entrega ao Domicílio',
    description: 'Camama, Kilamba, Talatona, Patriota e arredores no conforto da sua casa.',
  },
  {
    id: 'whatsapp',
    title: 'Atendimento Rápido via WhatsApp',
    description: `${BRAND_INFO.phonePrimary} / ${BRAND_INFO.phoneSecondary}`,
    actionLabel: 'Falar agora →',
  },
  {
    id: 'location',
    title: 'Localização Física',
    description: BRAND_INFO.address,
  },
];

export const SERVICES: LaundryService[] = [
  {
    id: 'lavagem',
    number: '01',
    title: 'Lavagem de Roupas',
    subtitle: 'Todos os tipos de roupas',
    description:
      'Remoção eficaz de manchas e tratamento cuidadoso para peças do dia a dia, tecidos delicados e roupa branca ou de cor.',
    category: 'Uso Diário',
    simulatorValue: 'Lavagem simples',
    iconName: 'washing',
    imageUrl: '/images/service-washing.jpg',
    imageAlt: 'Máquinas de lavar profissionais em aço inox da Lavandaria D&D',
  },
  {
    id: 'secagem',
    number: '02',
    title: 'Secagem Controlada',
    subtitle: 'Rápida e segura',
    description:
      'Equipamentos modernos com controlo térmico para uma secagem uniforme, protegendo as fibras contra encolhimento e desgaste.',
    category: 'Uso Diário',
    simulatorValue: 'Lavagem simples',
    iconName: 'drying',
    imageUrl: '/images/service-drying.jpg',
    imageAlt: 'Toalhas macias e roupas dobradas após secagem controlada',
  },
  {
    id: 'passagem',
    number: '03',
    title: 'Engomadoria Profissional',
    subtitle: 'Roupas impecáveis e bem passadas',
    description:
      'Passagem rigorosa a vapor para camisas, calças, fatos e vestidos, entregues em cabide ou dobrados e prontos a vestir.',
    category: 'Uso Diário',
    simulatorValue: 'Lavagem + Engomadoria',
    iconName: 'ironing',
    imageUrl: '/images/service-ironing.jpg',
    imageAlt: 'Engomadoria profissional a vapor de camisa social branca',
  },
  {
    id: 'cama-banho',
    number: '04',
    title: 'Roupa de Cama, Banho e Peças Especiais',
    subtitle: 'Limpeza profunda e delicada',
    description:
      'Higienização completa de lençóis, toalhas, edredões, cobertores, cortinados e tapetes com eliminação de ácaros e odores.',
    category: 'Casa e Têxteis',
    simulatorValue: 'Peças Especiais / Edredões',
    iconName: 'bedding',
    imageUrl: '/images/service-bedding.jpg',
    imageAlt: 'Edredões, lençóis e toalhas de banho lavados e dobrados',
  },
  {
    id: 'fardamentos',
    number: '05',
    title: 'Uniformes e Fardamentos',
    subtitle: 'Cuidado profissional garantido',
    description:
      'Tratamento técnico e desinfeção para fardamentos de empresas, clínicas, restaurantes, hotéis, escolas e equipas operacionais.',
    category: 'Empresarial',
    simulatorValue: 'Contrato Empresarial',
    iconName: 'uniforms',
    imageUrl: '/images/service-uniforms.jpg',
    imageAlt: 'Fardamentos empresariais, fatos e batas clínicas passados em cabides',
  },
  {
    id: 'recolha-entrega',
    number: '06',
    title: 'Recolha e Entrega ao Domicílio',
    subtitle: 'No conforto da sua casa',
    description:
      'Recolhemos e entregamos as suas roupas na sua residência ou local de trabalho em Camama e zonas próximas, dentro do prazo acordado.',
    category: 'Uso Diário',
    simulatorValue: 'Lavagem + Engomadoria',
    iconName: 'delivery',
    imageUrl: '/images/service-delivery.jpg',
    imageAlt: 'Peças protegidas em capas e cesto pronto para recolha e entrega ao domicílio',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Agendamento',
    description:
      'Solicite pelo WhatsApp em menos de 1 minuto ou entregue diretamente no nosso balcão na Camama.',
    detail: 'WhatsApp ou Balcão',
  },
  {
    number: '02',
    title: 'Triagem e Tratamento Especializado',
    description:
      'Separamos cada peça por cor, tecido e necessidade de pré-tratamento de manchas antes da lavagem.',
    detail: 'Análise de Tecidos',
  },
  {
    number: '03',
    title: 'Secagem, Engomadoria e Embalagem',
    description:
      'Secagem segura, passagem impecável e dobragem ou colocação em cabide com proteção higiénica.',
    detail: 'Acabamento Rigoroso',
  },
  {
    number: '04',
    title: 'Entrega ou Levantamento',
    description:
      'Levamos até à sua porta no horário combinado ou avisamos assim que estiver pronto para levantamento.',
    detail: 'Pontualidade Garantida',
  },
];

export const QUALITY_PILLARS: QualityPillar[] = [
  {
    title: 'Produtos de Qualidade',
    description: 'Mais cuidado, suavidade e proteção para as fibras e cores das suas roupas.',
    iconName: 'shield',
  },
  {
    title: 'Amigo do Ambiente',
    description: 'Utilizamos detergentes e processos equilibrados que respeitam o meio ambiente.',
    iconName: 'leaf',
  },
  {
    title: 'Rapidez e Pontualidade',
    description: 'Prazos claros e entregas pontuais para facilitar a sua rotina pessoal ou empresarial.',
    iconName: 'clock',
  },
  {
    title: 'Profissionalismo e Confiança',
    description: 'Equipa treinada e dedicada a cuidar de cada peça com o máximo rigor.',
    iconName: 'check',
  },
];

export const B2B_BENEFITS = [
  {
    id: 'schedule',
    title: 'Recolha e Entrega Programada',
    description: 'Calendário semanal ou quinzenal adaptado ao fluxo da sua operação.',
  },
  {
    id: 'billing',
    title: 'Faturação Empresarial e Controlo de Lotes',
    description: 'Registo rigoroso de peças entregues e condições especiais para contratos mensais.',
  },
] as const;

export const B2B_SEGMENTS = [
  {
    title: 'Empresas e Escritórios',
    items: 'Fardamentos executivos, camisas sociais, batas e toalhas de copa.',
  },
  {
    title: 'Clínicas e Consultórios',
    items: 'Higienização rigorosa de batas médicas, uniformes clínicos e lençóis de marquesa.',
  },
  {
    title: 'Restaurantes e Hotelaria',
    items: 'Toalhas de mesa, guardanapos, aventais, roupa de cama e enxovais de quarto.',
  },
  {
    title: 'Escolas e Equipas Técnicas',
    items: 'Recolha programada semanal, identificação por lote e faturação mensal organizada.',
  },
];

export const SERVICE_OPTIONS = [
  'Lavagem simples',
  'Lavagem + Engomadoria',
  'Só Engomadoria',
  'Peças Especiais / Edredões',
  'Contrato Empresarial',
] as const;

export const VOLUME_OPTIONS = [
  'Até 5 kg (Uso individual)',
  '5 a 10 kg (Saco familiar)',
  'Mais de 10 kg (Grande volume)',
  'Peças avulsas (Edredões / Tapetes / Cortinados)',
  'Lote empresarial recorrente',
] as const;

export const ZONE_PRESETS = [
  'Camama',
  'Terra Prometida',
  'Talatona',
  'Kilamba',
  'Patriota',
  'Morro Bento',
];

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${BRAND_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

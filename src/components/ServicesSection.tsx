import { useState } from 'react';
import {
  ArrowRight,
  BedDouble,
  Briefcase,
  Shirt,
  Sparkles,
  Truck,
  WashingMachine,
  Wind,
} from 'lucide-react';
import {
  LaundryService,
  SECTION_COPY,
  SERVICES,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from '../data/lavandaria';
import { IconBox } from './ui/IconBox';
import { SectionHeader } from './ui/SectionHeader';

interface ServicesSectionProps {
  onSelectService: (serviceType: string) => void;
}

function ServiceIcon({ iconName }: { iconName: LaundryService['iconName'] }) {
  const iconClass = 'w-6 h-6 text-white';
  switch (iconName) {
    case 'washing':
      return <WashingMachine className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    case 'drying':
      return <Wind className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    case 'ironing':
      return <Sparkles className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    case 'bedding':
      return <BedDouble className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    case 'uniforms':
      return <Briefcase className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    case 'delivery':
      return <Truck className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
    default:
      return <Shirt className={iconClass} strokeWidth={1.9} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Todos');

  const filteredServices =
    activeCategory === 'Todos'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  const filterTabs = (
    <div
      className="inline-flex flex-wrap items-center bg-white border border-[#D4E1EC] p-1"
      role="tablist"
      aria-label="Filtrar serviços por categoria"
    >
      {SERVICE_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveCategory(category)}
            className={`px-3.5 py-2 font-display text-xs font-bold tracking-wide rounded-none transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
              isActive
                ? 'bg-[#031A38] text-white'
                : 'text-[#354E6B] hover:text-[#031A38] hover:bg-[#F3F8FC]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-[#F3F8FC] border-y border-[#D4E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={SECTION_COPY.services.eyebrow}
          title={SECTION_COPY.services.title}
          description={SECTION_COPY.services.description}
          action={filterTabs}
          className="pb-10 border-b border-[#D4E1EC]"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white border border-[#D4E1EC] rounded-none flex flex-col justify-between transition-colors duration-150 hover:border-[#00B4CC]"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-[#031A38]">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#031A38]/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="px-7">
                  <IconBox variant="cyan" size="lg" className="-mt-6 relative z-10 shadow-sm">
                    <ServiceIcon iconName={service.iconName} />
                  </IconBox>
                </div>

                <div className="px-7 pt-5 pb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#008296] tabular-nums">
                    <span>{service.number}.</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.category}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[#031A38]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#06398A]">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#354E6B]">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-7 py-4 border-t border-[#E6EEF5] bg-[#FAFCFE]">
                <button
                  type="button"
                  onClick={() => onSelectService(service.simulatorValue)}
                  className="inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wider text-[#031A38] hover:text-[#008296] transition-colors cursor-pointer"
                >
                  {SECTION_COPY.services.cardActionLabel}
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

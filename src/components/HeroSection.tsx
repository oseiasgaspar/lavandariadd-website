import { ArrowRight, MapPin, MessageCircle, Phone, Truck } from 'lucide-react';
import {
  BRAND_INFO,
  HERO_HIGHLIGHTS,
  HeroHighlightItem,
  buildWhatsAppLink,
} from '../data/lavandaria';
import { Button } from './ui/Button';
import { IconBox } from './ui/IconBox';
import { PromoBadge } from './ui/PromoBadge';

interface HeroSectionProps {
  onOpenPickupModal: () => void;
}

function HighlightIcon({ id }: { id: HeroHighlightItem['id'] }) {
  switch (id) {
    case 'delivery':
      return <Truck className="w-5 h-5" aria-hidden="true" />;
    case 'whatsapp':
      return <Phone className="w-5 h-5" aria-hidden="true" />;
    case 'location':
      return <MapPin className="w-5 h-5" aria-hidden="true" />;
  }
}

export function HeroSection({ onOpenPickupModal }: HeroSectionProps) {
  const directWhatsAppUrl = buildWhatsAppLink(BRAND_INFO.defaultWhatsAppGreeting);

  return (
    <section id="inicio" className="relative bg-white">
      {/* Full-Width Photographic Hero Banner */}
      <div className="relative min-h-[600px] lg:min-h-[660px] pt-24 pb-20 lg:pb-28 flex items-center bg-[#031A38] overflow-hidden">
        <img
          src={BRAND_INFO.heroImageUrl}
          alt={BRAND_INFO.heroImageAlt}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-[#031A38]/95 via-[#031A38]/80 to-[#031A38]/40"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <PromoBadge text={BRAND_INFO.promoBadge} />

            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-[#6FE3F2] tracking-wider uppercase">
              <span>{BRAND_INFO.sloganPrimary}</span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="text-slate-200">{BRAND_INFO.sloganSecondary}</span>
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white text-balance">
              {BRAND_INFO.heroHeadline}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-200 max-w-xl">
              {BRAND_INFO.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary-cyan"
                size="lg"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                {BRAND_INFO.ctaWhatsAppScheduleLabel}
              </Button>

              <Button variant="outline-light" size="lg" onClick={onOpenPickupModal}>
                {BRAND_INFO.ctaSimulateLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Quick Highlights Bar Overlapping Bottom Edge */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-xl">
          {HERO_HIGHLIGHTS.map((item) => {
            const bgClass =
              item.id === 'delivery'
                ? 'bg-[#06398A] text-white'
                : item.id === 'whatsapp'
                  ? 'bg-[#00B4CC] text-[#031A38]'
                  : 'bg-[#031A38] text-white';

            const iconVariant =
              item.id === 'delivery'
                ? 'bordered-light'
                : item.id === 'whatsapp'
                  ? 'bordered-dark'
                  : 'bordered-navy';

            return (
              <div key={item.id} className={`${bgClass} p-6 sm:p-7 flex items-start gap-4 rounded-none`}>
                <IconBox variant={iconVariant} size="md">
                  <HighlightIcon id={item.id} />
                </IconBox>
                <div>
                  <h2 className="font-display text-sm font-extrabold uppercase tracking-wider">
                    {item.title}
                  </h2>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      item.id === 'whatsapp' ? 'font-bold tabular-nums' : 'text-slate-200'
                    }`}
                  >
                    {item.description}
                  </p>
                  {item.actionLabel && (
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs font-extrabold uppercase tracking-wider underline underline-offset-4 text-[#031A38] hover:opacity-80"
                    >
                      {item.actionLabel}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

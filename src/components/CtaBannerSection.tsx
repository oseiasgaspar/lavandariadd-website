import { ArrowRight, Building2, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SECTION_COPY, buildWhatsAppLink } from '../data/lavandaria';
import { Button } from './ui/Button';
import { PromoBadge } from './ui/PromoBadge';

export function CtaBannerSection() {
  const promoWhatsAppUrl = buildWhatsAppLink(BRAND_INFO.promoWhatsAppGreeting);

  return (
    <section className="py-14 lg:py-16 bg-[#031A38] text-white border-b border-[#092954] bg-architectural-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <PromoBadge text={BRAND_INFO.promoBadge} />

            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
              {SECTION_COPY.ctaBanner.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {SECTION_COPY.ctaBanner.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-stretch">
            <Button href="#simulador" variant="primary-cyan" size="lg" fullWidth>
              {SECTION_COPY.ctaBanner.primaryAction}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                href={promoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00B4CC]" aria-hidden="true" />
                {SECTION_COPY.ctaBanner.whatsappAction}
              </Button>

              <Button href="#empresas" variant="outline-light" size="sm">
                <Building2 className="w-4 h-4 text-[#00B4CC]" aria-hidden="true" />
                {SECTION_COPY.ctaBanner.b2bAction}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

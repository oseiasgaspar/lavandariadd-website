import { Clock, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';
import { BRAND_INFO, SECTION_COPY, buildWhatsAppLink } from '../data/lavandaria';
import { BrandLogo } from './BrandLogo';
import { SectionHeader } from './ui/SectionHeader';

export function ContactFooter() {
  const quickWhatsAppUrl = buildWhatsAppLink(BRAND_INFO.infoWhatsAppGreeting);

  return (
    <>
      <section id="contactos" className="py-16 lg:py-20 bg-[#F3F8FC] border-b border-[#D4E1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={SECTION_COPY.contacts.eyebrow}
            title={SECTION_COPY.contacts.title}
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#D4E1EC] bg-white">
            {/* Morada */}
            <div className="p-7 border-r border-b border-[#D4E1EC]">
              <div className="flex items-center gap-2.5 text-[#008296]">
                <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#031A38]">
                  Morada Oficial
                </h3>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#031A38] leading-relaxed">
                {BRAND_INFO.address}
              </p>
              <p className="mt-1 text-xs text-[#546E8A]">{BRAND_INFO.city}</p>
            </div>

            {/* Horário */}
            <div className="p-7 border-r border-b border-[#D4E1EC]">
              <div className="flex items-center gap-2.5 text-[#008296]">
                <Clock className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#031A38]">
                  Horário de Atendimento
                </h3>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#031A38] leading-relaxed">
                {BRAND_INFO.openingHours}
              </p>
              <p className="mt-2 text-xs text-[#546E8A]">{BRAND_INFO.openingHoursNote}</p>
            </div>

            {/* Telefones / WhatsApp */}
            <div className="p-7 border-r border-b border-[#D4E1EC]">
              <div className="flex items-center gap-2.5 text-[#008296]">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#031A38]">
                  Telefones &amp; WhatsApp
                </h3>
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-display text-base font-extrabold text-[#031A38] hover:text-[#008296] transition-colors tabular-nums"
                >
                  {BRAND_INFO.phonePrimary}{' '}
                  <span className="text-xs font-medium text-[#008296]">(WhatsApp)</span>
                </a>
                <a
                  href={`tel:+244${BRAND_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block font-display text-base font-extrabold text-[#031A38] hover:text-[#008296] transition-colors tabular-nums"
                >
                  {BRAND_INFO.phoneSecondary}
                </a>
              </div>
            </div>

            {/* E-mail & Redes Sociais */}
            <div className="p-7 border-r border-b border-[#D4E1EC]">
              <div className="flex items-center gap-2.5 text-[#008296]">
                <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#031A38]">
                  E-mail &amp; Redes Sociais
                </h3>
              </div>
              <div className="mt-4 space-y-2.5">
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="block text-sm font-semibold text-[#031A38] hover:text-[#008296] transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
                <p className="inline-flex items-center gap-1.5 text-sm font-medium text-[#354E6B]">
                  <Share2 className="w-4 h-4 text-[#008296]" aria-hidden="true" />
                  {BRAND_INFO.socialLabel}:{' '}
                  <strong className="text-[#031A38]">{BRAND_INFO.socialHandle}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Institutional Footer */}
      <footer className="bg-[#031A38] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="shrink-0">
            <BrandLogo variant="light-text" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-xs text-slate-300">
            <span>
              {BRAND_INFO.name} · {BRAND_INFO.sloganPrimary}
            </span>
            <span className="hidden md:inline text-slate-600" aria-hidden="true">
              |
            </span>
            <span>{BRAND_INFO.address}</span>
            <span className="hidden md:inline text-slate-600" aria-hidden="true">
              |
            </span>
            <span>
              © {new Date().getFullYear()} {BRAND_INFO.name}. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>

      {/* Discreet Floating WhatsApp Action */}
      <a
        href={quickWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a ${BRAND_INFO.name} no WhatsApp`}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2.5 px-4 py-3 bg-[#031A38] text-white border border-[#00B4CC] shadow-lg rounded-none hover:bg-[#06398A] transition-colors duration-150"
      >
        <MessageCircle className="w-5 h-5 text-[#00B4CC] shrink-0" aria-hidden="true" />
        <span className="font-display text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </>
  );
}

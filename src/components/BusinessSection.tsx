import { Building2, CalendarCheck2, FileText, MessageCircle } from 'lucide-react';
import {
  B2B_BENEFITS,
  B2B_SEGMENTS,
  BRAND_INFO,
  SECTION_COPY,
  buildWhatsAppLink,
} from '../data/lavandaria';
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';

export function BusinessSection() {
  const b2bWhatsAppUrl = buildWhatsAppLink(BRAND_INFO.b2bWhatsAppGreeting);

  return (
    <section
      id="empresas"
      className="py-16 lg:py-24 bg-[#031A38] text-white border-b border-[#092954] bg-architectural-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={SECTION_COPY.business.eyebrow}
              title={SECTION_COPY.business.title}
              description={SECTION_COPY.business.description}
              variant="dark"
            />

            <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
              {B2B_BENEFITS.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-3">
                  {benefit.id === 'schedule' ? (
                    <CalendarCheck2
                      className="w-5 h-5 text-[#00B4CC] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <FileText
                      className="w-5 h-5 text-[#00B4CC] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">{benefit.title}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={b2bWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary-cyan"
                size="md"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                {SECTION_COPY.business.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/15 bg-[#042147]/80">
            {B2B_SEGMENTS.map((segment, idx) => (
              <div
                key={segment.title}
                className="p-7 border-r border-b border-white/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Building2 className="w-5 h-5 text-[#00B4CC]" aria-hidden="true" />
                    <span className="font-display text-xs font-bold text-[#6FE3F2] tabular-nums">
                      0{idx + 1}.
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {segment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{segment.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

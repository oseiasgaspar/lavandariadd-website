import { CheckCircle2, Clock, Leaf, ShieldCheck } from 'lucide-react';
import {
  BRAND_INFO,
  QUALITY_PILLARS,
  QualityPillar,
  SECTION_COPY,
} from '../data/lavandaria';
import { IconBox } from './ui/IconBox';
import { SectionHeader } from './ui/SectionHeader';

function PillarIcon({ iconName }: { iconName: QualityPillar['iconName'] }) {
  const cls = 'w-5 h-5 text-white shrink-0';
  switch (iconName) {
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
    case 'leaf':
      return <Leaf className={cls} aria-hidden="true" />;
    case 'clock':
      return <Clock className={cls} aria-hidden="true" />;
    case 'check':
      return <CheckCircle2 className={cls} aria-hidden="true" />;
  }
}

export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#D4E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full min-h-[380px] sm:min-h-[440px] border border-[#D4E1EC] bg-[#031A38] overflow-hidden">
              <img
                src={BRAND_INFO.whyChooseImageUrl}
                alt={BRAND_INFO.whyChooseImageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#031A38]/85 via-[#031A38]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-[#031A38]/95 border-t border-[#00B4CC]">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#6FE3F2]">
                  {BRAND_INFO.sloganPrimary}
                </p>
                <p className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {BRAND_INFO.values.join(' · ')}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {BRAND_INFO.heroPromise}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              eyebrow={SECTION_COPY.whyChoose.eyebrow}
              title={SECTION_COPY.whyChoose.title}
              description={SECTION_COPY.whyChoose.description}
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {QUALITY_PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="p-6 border border-[#D4E1EC] bg-[#F8FBFE] rounded-none flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5">
                      <IconBox
                        variant={index % 2 === 1 ? 'cyan' : 'navy'}
                        size="md"
                        className={index % 2 === 1 ? 'border-0' : ''}
                      >
                        <PillarIcon iconName={pillar.iconName} />
                      </IconBox>
                      <h3 className="font-display text-base font-bold text-[#031A38]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-sm leading-relaxed text-[#354E6B]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { PROCESS_STEPS, SECTION_COPY } from '../data/lavandaria';
import { SectionHeader } from './ui/SectionHeader';

export function ProcessSection() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-[#F3F8FC] border-b border-[#D4E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={SECTION_COPY.process.eyebrow}
          title={SECTION_COPY.process.title}
          description={SECTION_COPY.process.description}
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#D4E1EC] bg-white">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 border-r border-b border-[#D4E1EC] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E6EEF5]">
                  <span className="font-display text-2xl font-extrabold text-[#031A38] tabular-nums">
                    {step.number}.
                  </span>
                  <span className="text-xs font-semibold text-[#008296]">{step.detail}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[#031A38]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#354E6B]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

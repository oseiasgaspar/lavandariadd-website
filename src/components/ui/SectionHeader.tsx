import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: 'light' | 'dark';
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  variant = 'light',
  action,
  className = '',
}: SectionHeaderProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 ${className}`}
    >
      <div className="max-w-2xl">
        <p
          className={`font-display text-xs font-bold uppercase tracking-[0.18em] ${
            isDark ? 'text-[#6FE3F2]' : 'text-[#008296]'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance ${
            isDark ? 'text-white' : 'text-[#031A38]'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-[#354E6B]'
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="self-start lg:self-auto shrink-0">{action}</div>}
    </div>
  );
}

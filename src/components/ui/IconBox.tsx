import type { ReactNode } from 'react';

type IconBoxVariant = 'cyan' | 'navy' | 'bordered-light' | 'bordered-dark' | 'bordered-navy';

interface IconBoxProps {
  variant?: IconBoxVariant;
  size?: 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

const VARIANT_CLASSES: Record<IconBoxVariant, string> = {
  cyan: 'bg-[#00B4CC] text-white border-2 border-white',
  navy: 'bg-[#031A38] text-white',
  'bordered-light': 'border border-white/30 text-[#6FE3F2]',
  'bordered-dark': 'border border-[#031A38]/25 bg-white/25 text-[#031A38]',
  'bordered-navy': 'border border-[#00B4CC]/40 text-[#00B4CC]',
};

const SIZE_CLASSES: Record<'md' | 'lg', string> = {
  md: 'w-11 h-11',
  lg: 'w-12 h-12',
};

export function IconBox({
  variant = 'cyan',
  size = 'md',
  children,
  className = '',
}: IconBoxProps) {
  return (
    <div
      className={`rounded-none flex items-center justify-center shrink-0 ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

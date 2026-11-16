import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary-navy' | 'primary-cyan' | 'outline-navy' | 'outline-light';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonElementProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorElementProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ActionButtonProps = ButtonElementProps | AnchorElementProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  'primary-navy': 'bg-[#031A38] text-white hover:bg-[#06398A]',
  'primary-cyan': 'bg-[#00B4CC] text-[#031A38] hover:bg-[#6FE3F2]',
  'outline-navy': 'bg-white text-[#031A38] border border-[#031A38] hover:bg-[#F3F8FC]',
  'outline-light':
    'bg-white/10 backdrop-blur-xs text-white border border-white/50 hover:bg-white hover:text-[#031A38]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-xs',
  md: 'px-6 py-3.5 text-xs sm:text-sm',
  lg: 'px-7 py-4 text-sm',
};

export function Button({
  variant = 'primary-navy',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...rest
}: ActionButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2.5 font-display font-extrabold uppercase tracking-wider rounded-none transition-colors duration-150 whitespace-nowrap shrink-0',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={`${classes} cursor-pointer`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

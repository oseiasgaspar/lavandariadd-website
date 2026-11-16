interface PromoBadgeProps {
  text: string;
  className?: string;
}

export function PromoBadge({ text, className = '' }: PromoBadgeProps) {
  return (
    <div
      className={`inline-flex items-center bg-[#00B4CC] text-[#031A38] px-4 py-2 rounded-none font-display text-xs font-extrabold uppercase tracking-[0.14em] ${className}`}
    >
      <span>{text}</span>
    </div>
  );
}

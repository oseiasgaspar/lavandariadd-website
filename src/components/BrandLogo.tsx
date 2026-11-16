import { useState } from 'react';
import { BRAND_INFO } from '../data/lavandaria';

interface BrandLogoProps {
  variant?: 'dark-text' | 'light-text';
  compact?: boolean;
}

export function BrandLogo({ variant = 'dark-text', compact = false }: BrandLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const primarySrc =
    variant === 'light-text' ? BRAND_INFO.logoDarkPath : BRAND_INFO.logoLightPath;
  const textColor = variant === 'light-text' ? 'text-white' : 'text-[#031A38]';

  if (compact) {
    return (
      <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
        {!imgFailed && (
          <img
            src={primarySrc}
            alt={`Logotipo ${BRAND_INFO.name}`}
            onError={() => setImgFailed(true)}
            referrerPolicy="no-referrer"
            className="h-10 w-auto object-contain shrink-0"
          />
        )}
        <span
          className={`font-display text-base sm:text-lg font-extrabold tracking-tight uppercase ${textColor}`}
        >
          LAVANDARIA <span className="text-[#00B4CC]">{BRAND_INFO.shortName}</span>
        </span>
      </span>
    );
  }

  return (
    <div className="inline-flex flex-col items-start select-none">
      {!imgFailed ? (
        <img
          src={primarySrc}
          alt={`Logotipo oficial ${BRAND_INFO.name} — ${BRAND_INFO.sloganPrimary}`}
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
          className="h-28 sm:h-32 w-auto object-contain"
        />
      ) : (
        <div className="py-2">
          <p className={`font-display text-2xl font-extrabold tracking-wider uppercase ${textColor}`}>
            LAVANDARIA <span className="text-[#00B4CC]">{BRAND_INFO.shortName}</span>
          </p>
          <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#00B4CC]">
            {BRAND_INFO.sloganPrimary}
          </p>
        </div>
      )}
    </div>
  );
}

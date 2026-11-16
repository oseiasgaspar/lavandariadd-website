import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../data/lavandaria';
import { BrandLogo } from './BrandLogo';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenPickupModal: () => void;
}

export function Navbar({ onOpenPickupModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#D4E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <a
          href="#inicio"
          className="whitespace-nowrap shrink-0 focus-visible:outline-none"
          aria-label={`${BRAND_INFO.name} — Página Inicial`}
        >
          <BrandLogo variant="dark-text" compact />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2A415E]"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#031A38] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00B4CC] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="primary-navy"
            size="sm"
            onClick={onOpenPickupModal}
            className="hidden sm:inline-flex"
          >
            {BRAND_INFO.ctaPickupLabel}
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#D4E1EC] text-[#031A38] rounded-none hover:bg-[#F3F8FC] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#D4E1EC]">
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col divide-y divide-[#E7EFF6]"
            aria-label="Menu móvel"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 text-sm font-semibold text-[#031A38] hover:text-[#008296] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button
                variant="primary-navy"
                size="md"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPickupModal();
                }}
              >
                {BRAND_INFO.ctaPickupLabel}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

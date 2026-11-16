import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SECTION_COPY } from '../data/lavandaria';
import { OrderSimulatorForm } from './OrderSimulatorSection';

interface PickupModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export function PickupModal({ isOpen, onClose, selectedService }: PickupModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031A38]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pickup-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white border border-[#031A38] shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#031A38] text-white flex items-center justify-between gap-4 border-b border-white/15">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#6FE3F2]">
              {SECTION_COPY.simulator.modalEyebrow}
            </p>
            <h2 id="pickup-modal-title" className="font-display text-lg font-extrabold text-white">
              {SECTION_COPY.simulator.modalTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de pedido"
            className="w-10 h-10 inline-flex items-center justify-center border border-white/25 text-white hover:bg-white hover:text-[#031A38] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 bg-white">
          <OrderSimulatorForm
            selectedService={selectedService}
            onSuccessSubmit={onClose}
            compact
          />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Check, Copy, MapPin, MessageCircle, Store, Truck } from 'lucide-react';
import {
  BRAND_INFO,
  SECTION_COPY,
  SERVICE_OPTIONS,
  VOLUME_OPTIONS,
  ZONE_PRESETS,
  buildWhatsAppLink,
} from '../data/lavandaria';
import { Button } from './ui/Button';
import { SectionHeader } from './ui/SectionHeader';

export interface OrderSimulatorFormProps {
  selectedService?: string;
  onSuccessSubmit?: () => void;
  compact?: boolean;
}

export function OrderSimulatorForm({
  selectedService,
  onSuccessSubmit,
  compact = false,
}: OrderSimulatorFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [serviceType, setServiceType] = useState<string>(
    selectedService || 'Lavagem + Engomadoria'
  );
  const [modality, setModality] = useState<'Entrega ao domicílio' | 'Levantamento na loja'>(
    'Entrega ao domicílio'
  );
  const [neighborhood, setNeighborhood] = useState('Camama');
  const [volume, setVolume] = useState<string>(VOLUME_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService);
    }
  }, [selectedService]);

  const formattedMessage = [
    `Olá, ${BRAND_INFO.name}! Gostaria de solicitar um pedido / orçamento:`,
    customerName.trim() ? `• Nome: ${customerName.trim()}` : null,
    `• Serviço: ${serviceType}`,
    `• Modalidade: ${modality}`,
    `• Volume estimado: ${volume}`,
    modality === 'Entrega ao domicílio'
      ? `• Bairro / Zona: ${neighborhood.trim() || '[A indicar]'}`
      : `• Entrega no balcão: ${BRAND_INFO.address}`,
    notes.trim() ? `• Observações: ${notes.trim()}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppLink(formattedMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#D4E1EC] bg-white">
      <div
        className={`${
          compact ? 'lg:col-span-7 p-6' : 'lg:col-span-7 p-6 sm:p-10'
        } border-b lg:border-b-0 lg:border-r border-[#D4E1EC]`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor={compact ? 'modal-customer-name' : 'sim-customer-name'}
              className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]"
            >
              O seu nome (opcional)
            </label>
            <input
              id={compact ? 'modal-customer-name' : 'sim-customer-name'}
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ex.: Ana Paula"
              className="mt-2 w-full px-3.5 py-2.5 bg-white border border-[#B9CCDF] text-sm text-[#031A38] placeholder:text-[#7E95AE] rounded-none focus:border-[#00B4CC] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor={compact ? 'modal-service-type' : 'sim-service-type'}
              className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]"
            >
              Tipo de Serviço
            </label>
            <select
              id={compact ? 'modal-service-type' : 'sim-service-type'}
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="mt-2 w-full px-3.5 py-2.5 bg-white border border-[#B9CCDF] text-sm text-[#031A38] rounded-none focus:border-[#00B4CC] focus:outline-none"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <span className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]">
            Modalidade de Atendimento
          </span>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#B9CCDF]">
            <button
              type="button"
              onClick={() => setModality('Entrega ao domicílio')}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-none transition-colors cursor-pointer ${
                modality === 'Entrega ao domicílio'
                  ? 'bg-[#031A38] text-white'
                  : 'bg-white text-[#354E6B] hover:bg-[#F3F8FC]'
              }`}
            >
              <Truck className="w-4 h-4 text-[#00B4CC]" aria-hidden="true" />
              Recolha e Entrega ao Domicílio
            </button>
            <button
              type="button"
              onClick={() => setModality('Levantamento na loja')}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-none border-t sm:border-t-0 sm:border-l border-[#B9CCDF] transition-colors cursor-pointer ${
                modality === 'Levantamento na loja'
                  ? 'bg-[#031A38] text-white'
                  : 'bg-white text-[#354E6B] hover:bg-[#F3F8FC]'
              }`}
            >
              <Store className="w-4 h-4 text-[#00B4CC]" aria-hidden="true" />
              Levantamento na Loja (Camama)
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor={compact ? 'modal-volume' : 'sim-volume'}
              className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]"
            >
              Volume / Quantidade
            </label>
            <select
              id={compact ? 'modal-volume' : 'sim-volume'}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="mt-2 w-full px-3.5 py-2.5 bg-white border border-[#B9CCDF] text-sm text-[#031A38] rounded-none focus:border-[#00B4CC] focus:outline-none"
            >
              {VOLUME_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor={compact ? 'modal-zone' : 'sim-zone'}
              className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]"
            >
              {modality === 'Entrega ao domicílio' ? 'Bairro / Zona' : 'Ponto de Entrega'}
            </label>
            {modality === 'Entrega ao domicílio' ? (
              <input
                id={compact ? 'modal-zone' : 'sim-zone'}
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Ex.: Camama, Terra Prometida, Talatona..."
                className="mt-2 w-full px-3.5 py-2.5 bg-white border border-[#B9CCDF] text-sm text-[#031A38] placeholder:text-[#7E95AE] rounded-none focus:border-[#00B4CC] focus:outline-none"
              />
            ) : (
              <div className="mt-2 px-3.5 py-2.5 bg-[#F3F8FC] border border-[#D4E1EC] text-sm text-[#2A415E] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#008296] shrink-0" aria-hidden="true" />
                <span className="truncate">Camama - Terra Prometida</span>
              </div>
            )}
          </div>
        </div>

        {modality === 'Entrega ao domicílio' && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-[#546E8A] mr-1">Zonas frequentes:</span>
            {ZONE_PRESETS.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => setNeighborhood(zone)}
                className={`px-2.5 py-1 text-xs font-medium border rounded-none transition-colors cursor-pointer ${
                  neighborhood === zone
                    ? 'bg-[#031A38] text-white border-[#031A38]'
                    : 'bg-[#F3F8FC] text-[#2A415E] border-[#D4E1EC] hover:border-[#00B4CC]'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        )}

        <div className="mt-5">
          <label
            htmlFor={compact ? 'modal-notes' : 'sim-notes'}
            className="block font-display text-xs font-bold uppercase tracking-wider text-[#031A38]"
          >
            Observações (peças delicadas, manchas, horário preferido)
          </label>
          <textarea
            id={compact ? 'modal-notes' : 'sim-notes'}
            rows={compact ? 2 : 3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ex.: 2 edredões de casal e 5 camisas sociais. Preferência de recolha no período da manhã."
            className="mt-2 w-full px-3.5 py-2.5 bg-white border border-[#B9CCDF] text-sm text-[#031A38] placeholder:text-[#7E95AE] rounded-none focus:border-[#00B4CC] focus:outline-none resize-none"
          />
        </div>
      </div>

      <div
        className={`${
          compact ? 'lg:col-span-5 p-6' : 'lg:col-span-5 p-6 sm:p-10'
        } bg-[#F3F8FC] flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#D4E1EC]">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#031A38]">
              Resumo da Mensagem
            </h3>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008296] hover:text-[#031A38] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  Copiar texto
                </>
              )}
            </button>
          </div>

          <pre className="mt-4 p-4 bg-white border border-[#D4E1EC] text-xs sm:text-sm leading-relaxed text-[#1E3552] whitespace-pre-wrap font-sans">
            {formattedMessage}
          </pre>

          <p className="mt-4 text-xs text-[#354E6B] leading-relaxed">
            Ao enviar, será direcionado para o WhatsApp oficial da{' '}
            <strong className="text-[#031A38]">
              {BRAND_INFO.name} ({BRAND_INFO.phonePrimary})
            </strong>{' '}
            para confirmação imediata de horário e orçamento.
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-[#D4E1EC]">
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSuccessSubmit?.()}
            variant="primary-navy"
            size="lg"
            fullWidth
          >
            <MessageCircle className="w-4 h-4 text-[#00B4CC]" aria-hidden="true" />
            Enviar Pedido pelo WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

interface OrderSimulatorSectionProps {
  selectedService: string;
}

export function OrderSimulatorSection({ selectedService }: OrderSimulatorSectionProps) {
  return (
    <section id="simulador" className="py-16 lg:py-24 bg-white border-b border-[#D4E1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={SECTION_COPY.simulator.eyebrow}
          title={SECTION_COPY.simulator.title}
          description={SECTION_COPY.simulator.description}
          className="mb-10"
        />

        <OrderSimulatorForm selectedService={selectedService} />
      </div>
    </section>
  );
}

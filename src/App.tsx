import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { OrderSimulatorSection } from './components/OrderSimulatorSection';
import { BusinessSection } from './components/BusinessSection';
import { ContactFooter } from './components/ContactFooter';
import { PickupModal } from './components/PickupModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Lavagem + Engomadoria');
  const [isPickupModalOpen, setIsPickupModalOpen] = useState(false);

  const handleSelectService = (serviceType: string) => {
    setSelectedService(serviceType);
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#031A38]">
      <Navbar onOpenPickupModal={() => setIsPickupModalOpen(true)} />

      <main className="flex-1">
        <HeroSection onOpenPickupModal={() => setIsPickupModalOpen(true)} />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseSection />
        <ProcessSection />
        <CtaBannerSection />
        <OrderSimulatorSection selectedService={selectedService} />
        <BusinessSection />
      </main>

      <ContactFooter />

      <PickupModal
        isOpen={isPickupModalOpen}
        onClose={() => setIsPickupModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}

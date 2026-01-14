import { Hero } from '../components/Hero';
import { ImpactSection } from '../components/ImpactSection';
import { DonationWidget } from '../components/DonationWidget';
import { HowFundsAreUsed } from '../components/HowFundsAreUsed';
import { ContactSection } from '../components/ContactSection';
import { SocialProof } from '../components/SocialProof';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <DonationWidget />
      <HowFundsAreUsed />
      <ContactSection />
      <SocialProof />
      <Footer />
    </>
  );
}

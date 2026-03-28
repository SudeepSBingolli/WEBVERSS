import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImpactProofBar from '@/components/ImpactProofBar';
import SectionDivider from '@/components/SectionDivider';
import About from '@/components/About';
import InnovationShowcase from '@/components/InnovationShowcase';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import ProgramMatchQuiz from '@/components/ProgramMatchQuiz';
import ProgramsSection from '@/components/ProgramsSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import MobileActionBar from '@/components/MobileActionBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactProofBar />
      <SectionDivider />
      <About />
      <SectionDivider />
      <InnovationShowcase />
      <Testimonials />
      <SectionDivider />
      <ProgramMatchQuiz />
      <SectionDivider />
      <CTABanner />
      <ProgramsSection />
      <FloatingContactButton />
      <MobileActionBar />
      <Footer />
    </main>
  );
}
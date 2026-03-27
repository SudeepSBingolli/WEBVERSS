import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <ProgramsSection/>
      <Footer/>
    </main>

  );
}
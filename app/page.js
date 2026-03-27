import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <ProgramsSection/>

      {/* Placeholder section so you can test scroll behavior on the navbar */}
      <section className="bg-white py-32 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          More sections coming soon…
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Scroll up and down to see the navbar change between transparent and
          solid white.
        </p>
      </section>
    </main>

  );
}
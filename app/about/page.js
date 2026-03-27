import Navbar from '@/components/Navbar';
import About from '@/components/About';

export const metadata = {
  title: 'About | SJBIT',
  description: 'Learn more about SJB Institute of Technology.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
    </main>
  );
}

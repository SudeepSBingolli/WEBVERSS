import Navbar from '@/components/Navbar';
import ProgramsSection from '@/components/ProgramsSection';

export const metadata = {
  title: 'Programs | SJBIT',
  description: 'Explore academic programs offered at SJB Institute of Technology.',
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <ProgramsSection />
      </div>
    </main>
  );
}

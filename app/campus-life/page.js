import Navbar from '@/components/Navbar';
import Infrastructure from '@/components/Infrastructure';

export const metadata = {
  title: 'Campus Life | SJBIT',
  description: 'Explore the vibrant campus life and world-class infrastructure at SJB Institute of Technology.',
};

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Infrastructure />
      </div>
    </main>
  );
}

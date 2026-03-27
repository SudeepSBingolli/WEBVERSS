import Alumni from '@/components/Alumni';

export const metadata = {
  title: 'Alumni - SJB Institute of Technology',
  description: 'Connect with 11,000+ SJBIT alumni across the globe. Join our alumni network for mentorship, guidance, and collaboration.',
};

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      <Alumni />
    </main>
  );
}

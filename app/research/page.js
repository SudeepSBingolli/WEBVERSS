export const metadata = {
  title: 'Research - SJB Institute of Technology',
  description: 'SJBIT Research initiatives, labs, and innovations.',
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Research</span> & Innovation
        </h1>
        <p className="text-xl text-gray-600 mb-12">Advancing technology through cutting-edge research and development.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔬 Research Labs</h2>
            <p className="text-gray-600">State-of-the-art laboratories for various engineering disciplines.</p>
          </div>
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Publications</h2>
            <p className="text-gray-600">Faculty and student research publications in international journals.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

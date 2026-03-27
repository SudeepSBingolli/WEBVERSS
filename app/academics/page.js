export const metadata = {
  title: 'Academics - SJB Institute of Technology',
  description: 'SJBIT Academic structure, curriculum, calendar, and policies.',
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Academic</span> Excellence
        </h1>
        <p className="text-xl text-gray-600 mb-12">Learn about our academic structure and programs.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Undergraduate Programs</h2>
            <p className="text-gray-600">4-year engineering programs across 8 departments.</p>
          </div>
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Postgraduate Programs</h2>
            <p className="text-gray-600">Master's programs in specialized engineering disciplines.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Placements - SJB Institute of Technology',
  description: 'SJBIT Placements. Our students are placed in top companies with excellent packages.',
};

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Placements</span> Excellence
        </h1>
        <p className="text-xl text-gray-600 mb-12">Our students are successfully placed in leading companies globally.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white border-2 border-orange-100 rounded-2xl p-8">
            <div className="text-4xl mb-3">📊</div>
            <p className="text-3xl font-black text-[#E36A0A] mb-2">100%</p>
            <p className="text-gray-600">Placement Rate</p>
          </div>
          <div className="text-center bg-white border-2 border-orange-100 rounded-2xl p-8">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-3xl font-black text-[#E36A0A] mb-2">12+ LPA</p>
            <p className="text-gray-600">Average Package</p>
          </div>
          <div className="text-center bg-white border-2 border-orange-100 rounded-2xl p-8">
            <div className="text-4xl mb-3">🏢</div>
            <p className="text-3xl font-black text-[#E36A0A] mb-2">500+</p>
            <p className="text-gray-600">Recruiting Companies</p>
          </div>
        </div>
      </div>
    </main>
  );
}

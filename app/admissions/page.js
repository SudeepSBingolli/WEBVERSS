export const metadata = {
  title: 'Admissions - SJB Institute of Technology',
  description: 'SJBIT Admissions 2025-26. Apply now for undergraduate and postgraduate programs.',
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Admissions</span> Open
        </h1>
        <p className="text-xl text-gray-600 mb-12">Apply for 2025-26 admission. Contact our admissions team for more details.</p>

        <div className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join SJBIT?</h2>
          <p className="mb-6">For admissions inquiries, contact: +91-9606485137</p>
          <a href="/contact" className="bg-white text-[#E36A0A] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition inline-block">
            Contact Admissions →
          </a>
        </div>
      </div>
    </main>
  );
}

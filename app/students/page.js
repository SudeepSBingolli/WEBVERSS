export const metadata = {
  title: 'Students - SJB Institute of Technology',
  description: 'Resources and portal for SJBIT current students.',
};

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Student</span> Portal
        </h1>
        <p className="text-xl text-gray-600 mb-12">Resources, guidelines, and support for current SJBIT students.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 Academic Resources</h2>
            <p className="text-gray-600">Access lecture notes, course materials, and library resources.</p>
          </div>
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎓 Student Clubs</h2>
            <p className="text-gray-600">Join various student clubs and participate in events.</p>
          </div>
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏥 Student Support</h2>
            <p className="text-gray-600">Counseling, health services, and grievance redressal.</p>
          </div>
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 Activities</h2>
            <p className="text-gray-600">Participate in sports, cultural, and technical events.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

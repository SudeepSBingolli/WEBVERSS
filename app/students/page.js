export const metadata = {
  title: 'Students - SJB Institute of Technology',
  description: 'Resources and portal for SJBIT current students.',
};

import Footer from "@/components/Footer";
import Image from "next/image";

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-28 sm:pt-32 pb-20 sm:pb-24">

      {/* ===== HERO ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
            Student
          </span>{" "}
          Life at SJBIT
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
          Empowering students through academic excellence, innovation, and holistic development.
        </p>
      </section>

      {/* ===== IMAGE GALLERY ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

          {[
            "/students/playground.jpeg",
            "/students/studentlife.jpeg",
            "/students/learning.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative h-52 sm:h-56 md:h-64 rounded-2xl overflow-hidden group">
              <Image
                src={src}
                alt="Student Life"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          <Stat value="5000+" label="Students" />
          <Stat value="95%" label="Placement Rate" />
          <Stat value="50+" label="Clubs & Chapters" />
          <Stat value="100+" label="Events / Year" />

        </div>
      </section>

      {/* ===== MAIN CARDS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          <Card title="📖 Academic Resources">
            Access lecture notes, course materials, digital library, and LMS systems.
          </Card>

          <Card title="🎓 Student Clubs">
            Explore technical clubs, cultural groups, and innovation communities.
          </Card>

          <Card title="🏥 Student Support">
            Counseling services, health care, mentorship, and grievance systems.
          </Card>

          <Card title="🏆 Activities">
            Participate in sports, hackathons, cultural fests, and competitions.
          </Card>

        </div>
      </section>

      {/* ===== PERFORMANCE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Student Performance & Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

            <Impact title="Academic Excellence" value="Top 10%" desc="Students achieving distinction across programs" />
            <Impact title="Placements" value="₹12 LPA" desc="Highest package secured by students" />
            <Impact title="Innovation" value="200+" desc="Projects & startups incubated" />

          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== COMPONENTS ===== */

function Stat({ value, label }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md sm:shadow-lg border border-orange-100">
      <p className="text-2xl sm:text-3xl font-extrabold text-[#E36A0A]">{value}</p>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white border border-orange-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition">
      <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
      <p className="text-sm sm:text-base text-gray-600">{children}</p>
    </div>
  );
}

function Impact({ title, value, desc }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6">
      <p className="text-xl sm:text-2xl font-bold">{value}</p>
      <p className="font-semibold mt-1">{title}</p>
      <p className="text-xs sm:text-sm text-white/80 mt-2">{desc}</p>
    </div>
  );
}
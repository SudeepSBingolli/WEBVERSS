import Image from "next/image";

export const metadata = {
  title: 'Admissions - SJB Institute of Technology',
  description: 'SJBIT admission process, programs, eligibility, and guidance.',
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-28 sm:pt-32 pb-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
            Academic
          </span>{" "}
          Excellence
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl">
          SJBIT offers a structured and industry-relevant academic ecosystem
          focused on innovation, research, and holistic development.
        </p>

        {/* 🔢 Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {[
            { label: "Departments", value: "8+" },
            { label: "Faculty Members", value: "150+" },
            { label: "Students Enrolled", value: "4000+" },
            { label: "Placement Rate", value: "85%" },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-4 sm:p-6 text-center border border-orange-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#E36A0A]">{item.value}</h3>
              <p className="text-sm sm:text-base text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🎓 Programs Section */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-14 sm:mb-20">

          {/* UG */}
          <div className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-8 shadow-sm">
            <Image
              src="/ug.jpeg"
              alt="Undergraduate Programs"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl mb-4 sm:mb-6 object-cover"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Undergraduate Programs
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              4-year engineering programs designed with outcome-based education (OBE).
            </p>
            <ul className="text-sm sm:text-base text-gray-600 list-disc ml-5 space-y-2">
              <li>Industry-aligned curriculum</li>
              <li>Internship opportunities from 2nd year</li>
              <li>Project-based learning</li>
            </ul>
          </div>

          {/* PG */}
          <div className="bg-white border border-orange-100 rounded-2xl p-5 sm:p-8 shadow-sm">
            <Image
              src="/pg.jpeg"
              alt="Postgraduate Programs"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl mb-4 sm:mb-6 object-cover"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Postgraduate Programs
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Specialized master's programs with research and innovation focus.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 list-disc ml-5 space-y-2">
              <li>Advanced research labs</li>
              <li>Industry collaboration projects</li>
              <li>Publication & innovation support</li>
            </ul>
          </div>
        </div>

        {/* 📊 Academic Structure (Analytical Section) */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-orange-100 mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Academic Structure & Methodology
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Curriculum Design</h3>
              <p>
                Designed based on outcome-based education (OBE) with continuous
                updates aligned to industry needs and emerging technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Evaluation System</h3>
              <p>
                Combination of internal assessments, semester exams, and project
                evaluations ensuring holistic student performance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Research Focus</h3>
              <p>
                Encourages innovation through funded projects, research labs,
                and technical publications.
              </p>
            </div>
          </div>
        </div>

        {/* 🧠 Learning Approach */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center mb-14 sm:mb-20">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Modern Learning Approach
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              SJBIT integrates modern teaching methodologies including
              experiential learning, digital classrooms, and industry exposure.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 list-disc ml-5 space-y-2">
              <li>Smart classrooms & LMS</li>
              <li>Industry guest lectures</li>
              <li>Hackathons & innovation labs</li>
              <li>Skill-based certifications</li>
            </ul>
          </div>

          <Image
            src="/mba.jpeg"
            alt="Smart Classroom"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        

      </div>
    </main>
  );
}

"use client"

import Link from "next/link";

const programs = [
  {
    name: 'Computer Science & Engineering',
    description:
      'Build strong foundations in software systems, cloud technologies, and modern application development.',
    duration: '4 Years',
    intake: '180 Students',
    url:'cse',
    placement: '96%',
    tags: ['AI', 'ML', 'Web Dev', 'Cybersecurity'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M3 12h18" />
        <rect x="5" y="5" width="14" height="14" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Information Science & Engineering',
    description:
      'Master data structures, enterprise systems, and intelligent digital platforms for real-world impact.',
    duration: '4 Years',
    intake: '120 Students',
    url:'ise',
    placement: '95%',
    tags: ['Data Systems', 'Analytics', 'Cloud', 'DevOps'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
  },
  {
    name: 'Electronics & Communication Engineering',
    description:
      'Explore circuits, embedded systems, and communication technologies powering connected industries.',
    duration: '4 Years',
    intake: '120 Students',
    url:'ece',
    placement: '94%',
    tags: ['VLSI', 'IoT', 'Embedded', 'Signal Processing'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12h4l2-4 4 8 2-4h6" />
        <circle cx="3" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="21" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Mechanical Engineering',
    description:
      'Design and manufacture robust systems through thermodynamics, automation, and production sciences.',
    duration: '4 Years',
    intake: '120 Students',
    url:'mechanical',
    placement: '92%',
    tags: ['CAD', 'Automation', 'Manufacturing', 'Thermal'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    ),
  },
  {
    name: 'Civil Engineering',
    description:
      'Create sustainable infrastructure with expertise in structures, transport, and environmental engineering.',
    duration: '4 Years',
    intake: '60 Students',
    url:'civil',
    placement: '90%',
    tags: ['Structures', 'Surveying', 'Transport', 'Sustainability'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-5h6v5" />
      </svg>
    ),
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    description:
      'Develop intelligent solutions with deep learning, computer vision, and responsible AI practices.',
    duration: '4 Years',
    intake: '120 Students',
    url:'ai-ml',
    placement: '97%',
    tags: ['AI', 'ML', 'NLP', 'Robotics'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

const highlights = [
  { label: 'Departments', value: '20+' },
  { label: 'Students', value: '6000+' },
  { label: 'Placement Rate', value: '95%' },
  { label: 'Recruiters', value: '100+' },
];

function ProgramCard({ program, index }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-[#FFF7ED] p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-[#E36A0A] hover:shadow-2xl hover:shadow-orange-300/60 animate-fade-in-up"
      style={{ animationDelay: `${index * 110}ms` }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#E36A0A]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-900 leading-snug">{program.name}</h3>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E36A0A]/10 text-[#E36A0A] group-hover:bg-[#E36A0A] group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {program.icon}
        </span>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed tracking-wide text-gray-600 min-h-[72px]">{program.description}</p>

      <div className="relative mt-5 grid grid-cols-3 gap-2 rounded-xl bg-white/90 p-3 ring-1 ring-orange-100">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500">Duration</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">{program.duration}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500">Intake</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">{program.intake}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500">Placement</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">{program.placement}</p>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {program.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
            {tag}
          </span>
        ))}
      </div>

      <button className="relative mt-6 inline-flex items-center gap-2 rounded-xl border border-[#E36A0A]/30 bg-white px-4 py-2 text-sm font-semibold text-[#E36A0A] transition-all duration-300 hover:border-[#E36A0A] hover:bg-[#E36A0A] hover:text-white hover:shadow-lg hover:shadow-orange-200/60 hover:scale-105">
        <Link href={`/departments/${program.url}`}>Explore Program <span aria-hidden="true">→</span></Link>
      </button>
    </article>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E36A0A 1px, transparent 1px), linear-gradient(to bottom, #E36A0A 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E36A0A]">Programs</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl">
            Academic Programs at SJBIT
          </h2>
          <p className="mt-4 text-base leading-relaxed tracking-wide text-gray-600 sm:text-lg">
            Explore diverse disciplines designed to shape future innovators and leaders
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.name} program={program} index={index} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-orange-100 bg-gradient-to-r from-[#FFF7ED] via-white to-[#FFF7ED] p-4 sm:p-6 shadow-md shadow-orange-100/60 animate-fade-in-up" style={{ animationDelay: '180ms' }}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-orange-100">
                <p className="text-2xl font-extrabold text-[#E36A0A] sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
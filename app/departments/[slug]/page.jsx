import { notFound } from 'next/navigation';
import Link from 'next/link';
import { departments } from '../data';
import Image from 'next/image';

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return notFound();

  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative h-[560px] overflow-hidden">
        <Image
          src={dept.banner}
          alt={dept.name}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark + orange gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E36A0A]/25 to-transparent mix-blend-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-28">
          <Link
            href="/departments"
            className="inline-flex w-fit items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white/20 hover:text-white transition text-sm"
          >
            ← Back to Departments
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {dept.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">
            {dept.tagline}
          </p>
        </div>
      </section>

      {/* ===== FLOATING STATS ===== */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100 p-6">
          <Stat label="Intake" value={dept.stats.intake} />
          <Stat label="Placement" value={dept.stats.placement} />
          <Stat label="Labs" value={dept.stats.labs} />
          <Stat label="Years" value={`${dept.stats.years}+`} />
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-16">
        <Block title="Overview"><p className="text-gray-700 leading-relaxed">{dept.overview}</p></Block>

        <Block title="Key Areas">
          <div className="flex flex-wrap gap-3">
            {dept.keyAreas.map((k) => (
              <span key={k} className="px-4 py-2 bg-[#FFF7ED] text-[#E36A0A] rounded-full text-sm font-medium border border-[#F59E0B]/30">
                {k}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Facilities">
          <ul className="grid md:grid-cols-2 gap-4">
            {dept.facilities.map((f) => (
              <li key={f} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#E36A0A]/30 hover:shadow-md transition">
                {f}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Faculty Highlights"><p className="text-gray-700">{dept.faculty}</p></Block>

        <Block title="Placement Highlights">
          <p className="text-lg mb-4">
            <span className="text-3xl font-bold text-[#E36A0A]">{dept.placements.percent}</span> placement record
          </p>
          <div className="flex flex-wrap gap-3">
            {dept.placements.recruiters.map((r) => (
              <span key={r} className="px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-sm hover:shadow-md transition">
                {r}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Career Opportunities">
          <ul className="grid md:grid-cols-2 gap-3">
            {dept.careers.map((c) => (
              <li key={c} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-[#E36A0A] rounded-full"></span>{c}
              </li>
            ))}
          </ul>
        </Block>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:-translate-y-1 transition">
      <p className="text-3xl font-extrabold text-[#E36A0A]">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{title}</h2>
      {children}
    </div>
  );
}
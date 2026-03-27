import { notFound } from 'next/navigation';
import Link from 'next/link';
import { departments } from '../data';

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;

  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return notFound();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/departments" className="text-white/80 hover:text-white mb-6 inline-block transition">
            ← Back to Departments
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold">{dept.name}</h1>
          <p className="mt-3 text-xl text-white/90">{dept.tagline}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Intake" value={dept.stats.intake} />
          <Stat label="Placement" value={dept.stats.placement} />
          <Stat label="Labs" value={dept.stats.labs} />
          <Stat label="Years" value={`${dept.stats.years}+`} />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">
        <Block title="Overview"><p className="text-gray-700 leading-relaxed">{dept.overview}</p></Block>

        <Block title="Key Areas">
          <div className="flex flex-wrap gap-3">
            {dept.keyAreas.map((k) => (
              <span key={k} className="px-4 py-2 bg-[#FFF7ED] text-[#E36A0A] rounded-full text-sm font-medium">{k}</span>
            ))}
          </div>
        </Block>

        <Block title="Facilities">
          <ul className="grid md:grid-cols-2 gap-4">
            {dept.facilities.map((f) => (
              <li key={f} className="p-4 bg-gray-50 rounded-xl border border-gray-100">{f}</li>
            ))}
          </ul>
        </Block>

        <Block title="Faculty Highlights"><p className="text-gray-700">{dept.faculty}</p></Block>

        <Block title="Placement Highlights">
          <p className="text-lg mb-4"><span className="text-3xl font-bold text-[#E36A0A]">{dept.placements.percent}</span> placement record</p>
          <div className="flex flex-wrap gap-3">
            {dept.placements.recruiters.map((r) => (
              <span key={r} className="px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-sm">{r}</span>
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
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
      <p className="text-3xl font-bold text-[#E36A0A]">{value}</p>
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
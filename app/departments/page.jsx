import Image from "next/image";
import Link from "next/link";
import { departments } from "./data";

export default function DepartmentsPage() {
  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Departments
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore academic excellence across diverse engineering disciplines
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <div
              key={d.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#E36A0A]/40"
            >

              {/* 🔥 IMAGE */}
              <div className="relative w-full h-48">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {d.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {d.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {d.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs font-medium bg-[#FFF7ED] text-[#E36A0A] rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/departments/${d.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-[#E36A0A] group-hover:gap-3 transition-all"
                >
                  Explore →
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
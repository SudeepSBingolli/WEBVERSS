"use client";

import Image from "next/image";

export default function Infrastructure() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF7ED] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            World-Class{" "}
            <span className="text-[#E36A0A]">Infrastructure</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Designed for inspiration. Every corner of SJBIT is crafted to provide students
            with the resources they need to excel.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Library */}
          <div className="md:col-span-8 relative group h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/library.jpg"
              alt="Library"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl text-white font-bold">
                Central Library
              </h3>
              <p className="text-gray-300 text-sm mt-2 max-w-md">
                A sanctuary for knowledge with digital access to global journals.
              </p>
            </div>
          </div>

          {/* Hostel */}
          <div className="md:col-span-4 relative group h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/hostel.jpg"
              alt="Hostel"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
              <h3 className="text-white font-bold text-xl">
                Residential Life
              </h3>
            </div>
          </div>

          {/* Sports */}
          <div className="md:col-span-4 relative group h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/sports.jpg"
              alt="Sports"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
              <h3 className="text-white font-bold text-xl">
                Sports Complex
              </h3>
            </div>
          </div>

          {/* Cafeteria */}
          <div className="md:col-span-8 relative group h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/cafeteria.jpg"
              alt="Cafeteria"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl text-white font-bold">
                Cafeteria
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                The social heartbeat of the campus.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

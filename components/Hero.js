'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [heroImageSrc, setHeroImageSrc] = useState('/campus.jpeg');

  const coreValues = [
    'Humanity', 'Honesty', 'Integrity', 'Teamwork', 'Continuous Learning', 'Innovation'
  ];

  const leaders = [
    { title: 'Founder', name: 'His Divine Soul Padmabhushana Sri Sri Sri Dr. Balagangadharanath MahaSwamiji' },
    { title: 'President', name: 'Parama Pujya Sri Sri Sri Dr. Nirmalanandanatha MahaSwamiji' },
    { title: 'Managing Director', name: 'Revered Sri Sri Dr. Prakashanatha Swamiji' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] to-white">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(#E36A0A 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="font-serif italic text-lg md:text-xl text-[#E36A0A]">
              Jai Shri Gurudev
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Empowering Minds.<br />
              Shaping the Future.
            </h1>

            <p className="text-xl font-semibold text-[#E36A0A]">
              SJB Institute of Technology, Bengaluru
            </p>

            <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
              To provide learning opportunities that foster ethical values, intellectual growth in science
              and technology, and social responsibility, shaping students into responsible contributors to society.
            </p>

            <div className="pl-4 border-l-4 border-[#F59E0B]">
              <p className="text-gray-800 font-medium italic">
                Vision: To become a recognized technical education center with a global perspective.
              </p>
            </div>

            {/* Core Values */}
            <div className="flex flex-wrap gap-2 pt-2">
              {coreValues.map(v => (
                <span key={v} className="px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#F59E0B]/30 text-sm font-medium text-gray-700">
                  {v}
                </span>
              ))}
            </div>

            {/* Leadership */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              {leaders.map(l => (
                <div key={l.title}>
                  <p className="text-xs uppercase tracking-widest text-[#E36A0A] font-semibold">{l.title}</p>
                  <p className="text-sm text-gray-700 leading-snug">{l.name}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white font-semibold shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Explore Programs
              </button>
              <button className="px-7 py-3.5 rounded-2xl border-2 border-[#E36A0A] text-[#E36A0A] font-semibold hover:bg-[#FFF7ED] transition-all">
                Visit Campus
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative animate-fade-in-right">
            <div className="relative mx-auto w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/10 border border-[#F59E0B]/20">
              <Image
                src={heroImageSrc}
                alt="SJBIT Campus"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
                priority
                onError={() => setHeroImageSrc('/logo.jpeg')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E36A0A]/20 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Cards */}
            <div className="hidden md:block absolute -top-6 -left-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl px-5 py-4 shadow-xl animate-float">
              <p className="text-2xl font-bold text-gray-900">20+</p>
              <p className="text-xs text-gray-600">Departments</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-8 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl px-5 py-4 shadow-xl animate-float-delayed">
              <p className="text-2xl font-bold text-gray-900">5000+</p>
              <p className="text-xs text-gray-600">Students</p>
            </div>
            <div className="hidden md:block absolute -bottom-6 left-10 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl px-5 py-4 shadow-xl animate-float-delayed-2">
              <p className="text-sm font-semibold text-[#E36A0A]">NBA Accredited</p>
              <p className="text-xs text-gray-600">Top Ranked Institution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
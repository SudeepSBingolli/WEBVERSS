"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ───────────────────── Data ───────────────────── */

const heroFacilities = [
  {
    src: "/library.jpg",
    alt: "Central Library",
    title: "Central Library",
    description:
      "A sanctuary for knowledge housing 80,000+ volumes, digital access to global journals, e-library terminals, and dedicated research wings for focused academic pursuit.",
    stats: [
      { value: "80K+", label: "Books" },
      { value: "500+", label: "Journals" },
      { value: "24/7", label: "Digital Access" },
    ],
    span: "md:col-span-8",
    height: "h-[360px] sm:h-[420px]",
    delay: 0,
  },
  {
    src: "/hostel.jpg",
    alt: "Hostel & Residential Life",
    title: "Residential Life",
    description:
      "Safe, modern hostels for men & women with Wi-Fi, recreation rooms, and a nurturing home-away-from-home environment.",
    stats: [
      { value: "1200+", label: "Beds" },
      { value: "24/7", label: "Security" },
    ],
    span: "md:col-span-4",
    height: "h-[360px] sm:h-[420px]",
    delay: 1,
  },
  {
    src: "/sports.jpg",
    alt: "Sports Complex",
    title: "Sports Complex",
    description:
      "Multi-sport arena with cricket, football, basketball courts, gym, and indoor badminton — fueling fitness and team spirit.",
    stats: [
      { value: "10+", label: "Sports" },
      { value: "5 Acre", label: "Grounds" },
    ],
    span: "md:col-span-4",
    height: "h-[300px] sm:h-[350px]",
    delay: 2,
  },
  {
    src: "/cafeteria.jpg",
    alt: "Cafeteria",
    title: "Cafeteria & Food Court",
    description:
      "The social heartbeat of the campus — multi-cuisine food court, hygienic kitchens, and open-air seating for 500+ students.",
    stats: [
      { value: "500+", label: "Seating" },
      { value: "Multi", label: "Cuisine" },
    ],
    span: "md:col-span-8",
    height: "h-[300px] sm:h-[350px]",
    delay: 3,
  },
];

const additionalFacilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Classrooms",
    description: "70+ ICT-enabled classrooms with projectors, smart boards, and AV systems for interactive learning.",
    stat: "70+",
    statLabel: "Rooms",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Research Labs",
    description: "Dedicated labs for AI, IoT, VLSI, Robotics, and interdisciplinary research projects funded by AICTE & DST.",
    stat: "25+",
    statLabel: "Labs",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Wi-Fi Campus",
    description: "High-speed internet across the entire 50-acre campus with seamless connectivity for 5000+ users.",
    stat: "50",
    statLabel: "Acres Covered",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Auditorium & Seminar Halls",
    description: "State-of-the-art auditorium seating 1500+ and multiple seminar halls for conferences, workshops, and cultural events.",
    stat: "1500+",
    statLabel: "Seats",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Green & Sustainable",
    description: "Solar panels, rainwater harvesting, botanical garden, and energy-efficient buildings across the eco-friendly campus.",
    stat: "100kW",
    statLabel: "Solar",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Health & Safety",
    description: "On-campus medical center, CCTV surveillance, fire safety systems, and 24/7 security for a safe learning environment.",
    stat: "24/7",
    statLabel: "Medical",
  },
];

const campusStats = [
  { value: "50+", label: "Acre Campus", icon: "🏛️" },
  { value: "70+", label: "Classrooms", icon: "📚" },
  { value: "25+", label: "Advanced Labs", icon: "🔬" },
  { value: "5000+", label: "Students", icon: "🎓" },
];

/* ───────────────────── Scroll Hook ───────────────────── */

function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/* ───────────────────── Component ───────────────────── */

export default function Infrastructure() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [facilitiesRef, facilitiesVisible] = useScrollReveal();

  return (
    <section id="campus" className="relative py-20 sm:py-28 font-inter overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 35%, #FFF7ED 70%, #FFFFFF 100%)" }}
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #E36A0A, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E36A0A]/10 px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-[#E36A0A] animate-pulse" />
                <span className="text-[#E36A0A] text-xs font-bold uppercase tracking-widest">
                  Campus & Infrastructure
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4 leading-tight">
                World-Class{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #E36A0A, #F59E0B)" }}
                >
                  Infrastructure
                </span>
              </h2>

              <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                Designed for inspiration. Every corner of SJBIT is crafted to provide students
                with the resources they need to excel — across academics, research, sports, and life.
              </p>
            </div>

            {/* Quick stat pills (desktop) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {[
                { v: "50+", l: "Acres" },
                { v: "25+", l: "Labs" },
                { v: "5K+", l: "Students" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex items-center gap-2 bg-white border border-orange-100 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="text-[#E36A0A] font-extrabold text-sm">{s.v}</span>
                  <span className="text-gray-400 text-xs font-medium">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Image Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 mb-20">
          {heroFacilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>

        {/* ── Campus Stats Bar ── */}
        <div
          ref={statsRef}
          className={`mb-20 transition-all duration-1000 delay-200 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="rounded-3xl p-1"
            style={{ background: "linear-gradient(135deg, #E36A0A, #F59E0B, #E36A0A)" }}
          >
            <div className="bg-white rounded-[22px] py-8 sm:py-10 px-6 sm:px-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {campusStats.map((stat, idx) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <p className="font-extrabold text-2xl sm:text-3xl text-[#1a1a2e] group-hover:text-[#E36A0A] transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm font-medium mt-1">{stat.label}</p>
                    {idx < campusStats.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Additional Facilities Grid ── */}
        <div
          ref={facilitiesRef}
          className={`transition-all duration-1000 delay-300 ${
            facilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-3">
              Everything You Need,{" "}
              <span className="text-[#E36A0A]">All in One Place</span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
              From cutting-edge labs to green spaces — our campus is built to support holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {additionalFacilities.map((facility, idx) => (
              <AdditionalFacilityCard key={facility.title} facility={facility} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Facility Image Card ───────────────────── */

function FacilityCard({ facility }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const slideDirections = [
    "translate-x-[-80px]",    // slide from left
    "translate-x-[80px]",    // slide from right
    "translate-y-[80px]",    // slide from bottom
    "translate-x-[-80px]",   // slide from left
  ];

  const slideClass = slideDirections[facility.delay % slideDirections.length];

  return (
    <div
      ref={ref}
      className={`${facility.span} ${facility.height} relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-[900ms] ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${slideClass} scale-95`
      }`}
      style={{ transitionDelay: `${facility.delay * 150}ms` }}
    >
      {/* Image */}
      <Image
        src={facility.src}
        alt={facility.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        priority={facility.delay < 2}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Orange accent line at top */}
      <div
        className="absolute top-0 left-0 h-1 rounded-b-full transition-all duration-500 ease-out group-hover:w-full"
        style={{
          width: isVisible ? "30%" : "0%",
          background: "linear-gradient(90deg, #E36A0A, #F59E0B)",
          transitionDelay: `${facility.delay * 150 + 600}ms`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {facility.title}
        </h3>

        {/* Description — visible on hover */}
        <p className="text-gray-300 text-sm leading-relaxed max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out mb-3">
          {facility.description}
        </p>

        {/* Stats row — visible on hover */}
        {facility.stats && (
          <div className="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {facility.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <p className="text-white font-extrabold text-base leading-none">{stat.value}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{stat.label}</p>
                </div>
                {i < facility.stats.length - 1 && <div className="w-px h-6 bg-white/20" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Corner badge */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Explore</span>
      </div>
    </div>
  );
}

/* ───────────────────── Additional Facility Card ───────────────────── */

function AdditionalFacilityCard({ facility, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 hover:shadow-2xl hover:shadow-orange-500/8 hover:border-transparent hover:-translate-y-2 transition-all duration-500 cursor-default ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon + Stat */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
          style={{ background: "linear-gradient(135deg, #E36A0A, #F59E0B)" }}
        >
          {facility.icon}
        </div>

        <div className="text-right">
          <p className="text-[#E36A0A] font-extrabold text-lg leading-none">{facility.stat}</p>
          <p className="text-gray-400 text-[10px] font-medium mt-0.5">{facility.statLabel}</p>
        </div>
      </div>

      {/* Title */}
      <h4 className="font-bold text-[#1a1a2e] text-base mb-2 group-hover:text-[#E36A0A] transition-colors duration-300">
        {facility.title}
      </h4>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>

      {/* Bottom accent line */}
      <div className="mt-5 pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2 text-[#E36A0A] opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
          <span className="text-xs font-semibold">Learn more</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
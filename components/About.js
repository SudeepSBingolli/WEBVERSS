"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Award, Globe, Trophy, Medal, BookOpen, Handshake, Lightbulb, TrendingUp, Target, Briefcase } from "lucide-react";

// ── Stats data ─────────────────────────────────────────────────────────────────
const stats = [
  { value: 24,    suffix: "+",  label: "Years of Excellence",      icon: <Building2 className="w-6 h-6" /> },
  { value: 350,   suffix: "+",  label: "Faculties & Staff",         icon: <Users className="w-6 h-6" /> },
  { value: 6000,  suffix: "+",  label: "Students on Campus",        icon: <Award className="w-6 h-6" /> },
  { value: 11000, suffix: "+",  label: "Alumni Network",            icon: <Globe className="w-6 h-6" /> },
  { value: 91,    suffix: "",   label: "University Ranks",          icon: <Trophy className="w-6 h-6" /> },
  { value: 15,    suffix: "",   label: "Gold Medals",               icon: <Medal className="w-6 h-6" /> },
  { value: 1600,  suffix: "+",  label: "Papers Published",          icon: <BookOpen className="w-6 h-6" /> },
  { value: 80,    suffix: "+",  label: "Industry Collaborations",   icon: <Handshake className="w-6 h-6" /> },
  { value: 75,    suffix: "+",  label: "Patents",                   icon: <Lightbulb className="w-6 h-6" /> },
  { value: 90,    suffix: "+",  label: "Funded Projects",           icon: <TrendingUp className="w-6 h-6" /> },
  { value: 95,    suffix: "%",  label: "Placement Rate",            icon: <Target className="w-6 h-6" /> },
  { value: 100,   suffix: "+",  label: "Recruiters",                icon: <Briefcase className="w-6 h-6" /> },
];

// ── Highlights shown in the intro strip ───────────────────────────────────────
const highlights = [
  { label: "NAAC A++ Accredited",          color: "bg-orange-50 text-[#C05A08] border-orange-200" },
  { label: "Autonomous under VTU",         color: "bg-amber-50  text-[#92400E] border-amber-200"  },
  { label: "ISO 9001:2015 Certified",      color: "bg-orange-50 text-[#C05A08] border-orange-200" },
  { label: "NBA Accredited Programs",      color: "bg-amber-50  text-[#92400E] border-amber-200"  },
];

// ── Eased counter (ease-out cubic) ─────────────────────────────────────────────
function Counter({ end, suffix, startAnimate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimate) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [end, startAnimate]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function About() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] via-white to-white py-28 lg:py-36 px-6"
    >
      {/* ── Background glows ────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[130px]" />
        {/* Centre subtle pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-6">

          {/* Eyebrow pill */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase text-[#C05A08] bg-orange-100 border border-orange-200 rounded-full transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E36A0A] animate-pulse" />
            About SJBIT
          </div>

          {/* Headline */}
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                SJBIT
              </span>
              {/* Underline squiggle */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] rounded-full opacity-40 block" />
            </span>
          </h2>

          {/* Description */}
          <p
            className={`max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed tracking-wide mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            SJB Institute of Technology is a premier hub for innovation and
            learning — empowering future engineers through{" "}
            <span className="text-gray-800 font-semibold">
              ethics, research, and world-class placements.
            </span>
          </p>

          {/* Highlight pills row */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {highlights.map((h) => (
              <span
                key={h.label}
                className={`text-[11px] font-semibold tracking-wide border px-4 py-1.5 rounded-full ${h.color}`}
              >
                {h.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div
          className={`flex items-center gap-4 mb-14 transition-all duration-700 delay-[350ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange-400">
            By the Numbers
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
        </div>

        {/* ── Stats grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${400 + i * 70}ms` }}
              className={`group relative bg-white border border-orange-100/80 rounded-2xl p-6 md:p-7
                overflow-hidden cursor-default
                hover:border-orange-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/60
                transition-all duration-500
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
            >
              {/* Hover gradient fill */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                bg-gradient-to-br from-orange-50/80 to-amber-50/40 rounded-2xl" />

              {/* Top-right accent dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-orange-200 group-hover:bg-[#E36A0A] transition-colors duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-3 text-[#E36A0A] group-hover:text-orange-600 transition-colors duration-300">
                  {stat.icon}
                </div>

                {/* Animated number */}
                <p className="text-3xl md:text-4xl font-extrabold text-[#E36A0A] mb-1 leading-none tabular-nums">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    startAnimate={isVisible}
                  />
                </p>

                {/* Label */}
                <p className="text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-wider leading-tight group-hover:text-[#C05A08] transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

              {/* Bottom left corner accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ────────────────────────────────────────────── */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-[1200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm text-gray-400 mb-4 font-medium">
            Trusted by students, faculty, and industry partners since 2001.
          </p>
          
        </div>

      </div>
    </section>
  );
}
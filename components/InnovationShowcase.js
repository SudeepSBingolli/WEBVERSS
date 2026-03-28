'use client';

import { useState, useEffect, useRef } from 'react';
import { Zap, Code, Cpu, Database, Rocket, Shield } from 'lucide-react';

export default function InnovationShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const showcaseItems = [
    {
      title: "AI-Powered Research",
      description: "Machine learning models solving real-world problems",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      stats: "200+ Papers"
    },
    {
      title: "Industry Patents",
      description: "Innovations recognized and patented internationally",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      stats: "30+ Patents"
    },
    {
      title: "Tech Solutions",
      description: "End-to-end software development for enterprise clients",
      icon: Code,
      color: "from-orange-500 to-red-500",
      stats: "80+ Projects"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable systems deployed on global platforms",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      stats: "100+ Deployments"
    },
    {
      title: "Startup Incubation",
      description: "Student-led ventures funded and scaled successfully",
      icon: Rocket,
      color: "from-indigo-500 to-blue-500",
      stats: "15+ Startups"
    },
    {
      title: "Cybersecurity Labs",
      description: "Advanced research in threat detection and prevention",
      icon: Shield,
      color: "from-amber-500 to-orange-500",
      stats: "50+ Certifications"
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-28 lg:py-40 px-6"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase text-[#C05A08] bg-orange-100 border border-orange-200 rounded-full transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E36A0A] animate-pulse" />
            Innovation in Action
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            See Innovation in Action
          </h2>

          <p
            className={`max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed tracking-wide transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From groundbreaking research to industry-leading solutions, SJBIT transforms ideas into real-world impact. 
            Explore the innovations reshaping technology and society.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 transform
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                `}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card content */}
                <div className="relative p-8 bg-white group-hover:bg-opacity-95 transition-all duration-500 h-full flex flex-col justify-between border border-gray-100 group-hover:border-transparent rounded-2xl">
                  {/* Icon with animated background */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 
                    group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-900 transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 mb-6 leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Stat badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <span className="text-xs font-semibold text-[#E36A0A] uppercase tracking-wide">
                      {item.stats}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFF7ED] group-hover:bg-[#E36A0A]/10 flex items-center justify-center transition-colors duration-300">
                      <Zap className="w-4 h-4 text-[#E36A0A]" />
                    </div>
                  </div>
                </div>

                {/* Border gradient on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                  bg-gradient-to-br ${item.color} p-[2px]`}
                  style={{
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="/research">
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white font-semibold rounded-2xl shadow-lg shadow-orange-300/60 hover:shadow-2xl hover:shadow-orange-400/80 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <span>Explore All Innovations</span>
              <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

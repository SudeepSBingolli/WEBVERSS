'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] py-20 px-6">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div
          className={`flex justify-center mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>

        {/* Headline */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to Transform Your Future?
        </h2>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Join 6000+ students shaping the future through innovation, research, and world-class education at SJBIT.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="/admissions">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E36A0A] font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <a href="/contact">
            <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>

        {/* Bottom badge */}
        <div
          className={`mt-10 flex justify-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-white text-sm">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Admissions Open for 2025-26
          </div>
        </div>
      </div>
    </section>
  );
}

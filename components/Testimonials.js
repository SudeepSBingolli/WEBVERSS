'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Software Engineer at Google',
      batch: '2022 Batch - CSE',
      text: 'SJBIT gave me the foundation and confidence to crack Google interviews. The projects and mentorship here were invaluable.',
      rating: 5,
      image: '/avatar-1.jpg'
    },
    {
      name: 'Priya Desai',
      role: 'AI/ML Researcher, IISc',
      batch: '2021 Batch - AI-ML',
      text: 'The research opportunities at SJBIT helped me publish papers and secure admission at IISc. A truly transformative experience.',
      rating: 5,
      image: '/avatar-2.jpg'
    },
    {
      name: 'Rohan Patel',
      role: 'Co-founder, TechStartup',
      batch: '2020 Batch - ISE',
      text: 'Incubation support and entrepreneurship guidance at SJBIT helped me launch my startup. Grateful for every bit of support.',
      rating: 5,
      image: '/avatar-3.jpg'
    },
    {
      name: 'Neha Reddy',
      role: 'Investment Analyst at Goldman Sachs',
      batch: '2021 Batch - ECE',
      text: 'Great faculty, amazing infrastructure, and industry collaborations made SJBIT stand out. Best decision ever!',
      rating: 5,
      image: '/avatar-4.jpg'
    }
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/30 py-28 lg:py-40 px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
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
            Success Stories
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Hear from Our <span className="text-[#E36A0A]">Alumni</span>
          </h2>

          <p
            className={`max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed tracking-wide transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Thousands of SJBIT graduates are shaping industries and driving innovation globally. 
            Here's what they have to say about their journey with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
              `}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative p-8 bg-white group-hover:bg-opacity-95 transition-all duration-500 h-full flex flex-col justify-between border border-gray-100 group-hover:border-orange-200 rounded-2xl">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#E36A0A]/30 mb-4 group-hover:text-[#E36A0A] transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 group-hover:border-orange-100 pt-4" />

                {/* Author info */}
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#E36A0A] font-medium mt-1">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.batch}</p>
                </div>
              </div>

              {/* Border accent on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-orange-200"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-gray-600 mb-6">Join thousands of successful SJBIT alumni worldwide</p>
          <a href="/alumni">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white font-semibold rounded-2xl shadow-lg shadow-orange-300/60 hover:shadow-2xl hover:shadow-orange-400/80 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              Read More Alumni Stories
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

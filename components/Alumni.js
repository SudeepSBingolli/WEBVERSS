'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Alumni() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: '11,000+', description: 'Alumni', icon: '👥' },
    { label: '50+', description: 'Countries', icon: '🌍' },
    { label: '100+', description: 'Alumni Meets', icon: '🤝' },
    { label: '1000+', description: 'Industry Experts', icon: '💼' }
  ];

  const interactions = [
    {
      id: 1,
      title: 'Alumni Interaction Event',
      description: 'Departments invite alumni as guest speakers to guide students and share industry knowledge.',
      image: '/alumni1.jpg',
      link: 'https://sjbit.edu.in/alumni-interactions/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 2,
      title: 'Alumni Talks & Seminars',
      description: 'Alumni conduct sessions to help students understand career paths and industry expectations.',
      image: '/alumni2.jpg',
      link: 'https://sjbit.edu.in/alumni-interaction-4/',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 3,
      title: 'Career Guidance Sessions',
      description: 'Alumni guide students about placements, higher studies, and real-world challenges.',
      image: '/alumni3.jpg',
      link: 'https://sjbit.edu.in/alumni-interaction-2/',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 4,
      title: 'Alumni Meets',
      description: 'Regular alumni meets are organized to maintain strong connections with the institute.',
      image: 'https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2024/01/alumnimeet2.jpg?resize=1536%2C864&ssl=1',
      link: 'https://sjbit.edu.in/alumni/',
      color: 'from-pink-600 to-pink-400'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: HEADER */}
        <div className={`text-center mb-20 transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
            Our Alumni <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">Network</span>
          </h1>
          <p className="text-2xl font-semibold text-[#E36A0A] mb-4">Connecting 11,000+ alumni across the globe</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SJBIT alumni are working in various industries across the world and actively contribute through mentorship, guidance, and innovation.
          </p>
        </div>

        {/* SECTION 2: STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl p-8 text-center border-2 border-orange-100 hover:border-[#E36A0A] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: mounted ? `${idx * 100}ms` : '0ms' }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <p className="text-4xl font-black bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600 font-semibold">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* SECTION 3: ALUMNI INTERACTIONS */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
            Alumni <span className="text-[#E36A0A]">Interactions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interactions.map((item, idx) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: mounted ? `${idx * 100}ms` : '0ms' }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay - Dark */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 transform group-hover:translate-y-0 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-white/90 font-medium line-clamp-2 transform group-hover:translate-y-0 transition-transform">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-0">
                    Learn More →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 4: ALUMNI ASSOCIATION */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                SJBIT Alumni Association
              </h2>
              <p className="text-xl text-white/95 mb-10 leading-relaxed">
                The SJBIT Alumni Association fosters lifelong relationships between the institute and its alumni, creating opportunities for networking, mentorship, and collaboration.
              </p>
              <a
                href="https://sjbit.edu.in/alumni-association/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#E36A0A] font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Visit Alumni Association →
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 5: CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-[#E36A0A] rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Stay Connected with SJBIT
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Join our growing network of alumni and help shape the future of SJBIT.
            </p>
            <button className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white font-bold py-4 px-12 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
              Join Alumni Network →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

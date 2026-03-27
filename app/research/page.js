"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ---------- Fade Animation ---------- */
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

/* ---------- Data ---------- */
const areas = [
  { title: "Artificial Intelligence & ML", desc: "Deep learning, NLP, computer vision.", icon: "🧠" },
  { title: "Robotics & Automation", desc: "Autonomous systems and robotics.", icon: "🤖" },
  { title: "Data Science & Analytics", desc: "Big data and AI insights.", icon: "📊" },
  { title: "IoT & Smart Systems", desc: "Smart connected systems.", icon: "🌐" },
  { title: "Sustainable Engineering", desc: "Green and renewable tech.", icon: "🌱" },
  { title: "Cybersecurity", desc: "Security and ethical hacking.", icon: "🔐" },
];

export default function ResearchPage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

        {/* ✅ BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* ✅ OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* ✅ CONTENT */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <FadeIn>
            <p className="italic text-lg mb-4">Jai Shri Gurudev</p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Research & Innovation at SJBIT
            </h1>

            <p className="text-lg text-gray-200">
              Driving technological advancements and impactful solutions for society
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <Link
                href="#areas"
                className="px-6 py-3 bg-white text-black rounded-xl"
              >
                Explore
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl">{a.icon}</div>
                <h3 className="font-bold mt-3">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}

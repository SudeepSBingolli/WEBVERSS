"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ---------- Reusable Animations ---------- */
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
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Counter = ({ end, suffix = "" }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1500, 1);
          setVal(Math.floor(p * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-[#E36A0A]">
      {val}
      {suffix}
    </span>
  );
};

/* ---------- Data ---------- */
const areas = [
  { title: "Artificial Intelligence & ML", desc: "Deep learning, NLP, computer vision and predictive analytics.", icon: "🧠" },
  { title: "Robotics & Automation", desc: "Autonomous systems, industrial robotics and human-machine interaction.", icon: "🤖" },
  { title: "Data Science & Analytics", desc: "Big data processing, visualization and decision intelligence.", icon: "📊" },
  { title: "IoT & Smart Systems", desc: "Connected devices, smart cities and edge computing.", icon: "🌐" },
  { title: "Sustainable Engineering", desc: "Green tech, renewable energy and eco-friendly materials.", icon: "🌱" },
  { title: "Cybersecurity", desc: "Network security, cryptography and ethical hacking.", icon: "🔐" },
];

export default function ResearchPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden text-white">

        {/* ONLY IMAGE (no overlays) */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://imgs.search.brave.com/ZVA_g4hOYna0PZgo6HQKRacOqbMeqhfQgNGfODbpIxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZG1pc3Npb25rYXJvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAyMy8wMi9NYW5hZ2Vt/ZW50LXF1b3RhLWFk/bWlzc2lvbi1pbi1T/SkItSW5zdGl0dXRl/LW9mLVRlY2hub2xv/Z3ktQmFuZ2Fsb3JlLmpwZw')",
          }}
        />

        {/* OPTIONAL LIGHT PATTERN */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="font-serif italic text-xl mb-4">Jai Shri Gurudev</p>

            {/* ⚠️ IMPORTANT: text shadow for visibility */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Research & Innovation at SJBIT
            </h1>

            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow">
              Driving technological advancements and impactful solutions for society
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#areas" className="px-8 py-3.5 bg-white text-black font-semibold rounded-2xl shadow-lg hover:-translate-y-0.5 transition">
                Explore Research Areas
              </Link>
              <Link href="#publications" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition">
                View Publications
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REST SAME */}
      <section className="py-20 text-center">
        <FadeIn>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            SJBIT fosters a vibrant research ecosystem where faculty and students collaborate on cutting-edge innovations.
          </p>
        </FadeIn>
      </section>

      <section id="areas" className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((a, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-xl">{a.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}

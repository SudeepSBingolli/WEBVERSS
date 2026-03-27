"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

const labs = [
  { name: "AI & ML Lab", desc: "GPU cluster, deep learning workstations & research datasets.", tags: ["NVIDIA GPUs", "TensorFlow", "Research"] },
  { name: "Robotics Lab", desc: "Industrial robotic arms, ROS platforms & 3D printing.", tags: ["ROS", "Automation", "Prototyping"] },
  { name: "Embedded Systems Lab", desc: "VLSI, IoT boards, sensors & real-time testing.", tags: ["VLSI", "IoT", "Embedded"] },
  { name: "Innovation & Incubation Center", desc: "Startup mentorship, seed funding & patent support.", tags: ["Startups", "Patents", "Mentors"] },
];

const projects = [
  { title: "Smart Traffic Management", domain: "IoT", desc: "AI-driven traffic control reducing congestion by 30%." },
  { title: "Agriculture Drone", domain: "Robotics", desc: "Autonomous drone for precision farming & crop monitoring." },
  { title: "Cyber Threat Detector", domain: "Cybersecurity", desc: "ML model detecting anomalies in real-time network traffic." },
];

const steps = [
  { t: "Idea & Innovation", d: "Brainstorming real-world problems with faculty mentors." },
  { t: "Research & Experimentation", d: "Literature review, simulations and lab testing." },
  { t: "Development", d: "Prototype building using advanced labs and tools." },
  { t: "Real-world Application", d: "Industry deployment, patents and publications." },
];

export default function ResearchPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E36A0A] via-[#F59E0B] to-[#E36A0A] text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="font-serif italic text-xl mb-4">Jai Shri Gurudev</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Research & Innovation at SJBIT</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Driving technological advancements and impactful solutions for society
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#areas" className="px-8 py-3.5 bg-white text-[#E36A0A] font-semibold rounded-2xl shadow-lg hover:-translate-y-0.5 transition">Explore Research Areas</Link>
              <Link href="#publications" className="px-8 py-3.5 border-2 border-white/70 text-white font-semibold rounded-2xl hover:bg-white/10 transition">View Publications</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed">
              SJBIT fosters a vibrant research ecosystem where faculty and students collaborate on cutting-edge innovations,
              industry partnerships, and socially impactful solutions — nurturing curiosity into real-world excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section id="areas" className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">Research Areas</h2>
            <p className="text-center text-gray-600 mb-14">Multidisciplinary excellence across emerging technologies</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((a, i) => (
              <FadeIn key={a.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-[#E36A0A]/40 transition">
                  <div className="text-4xl mb-4">{a.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LABS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">Research Labs & Centers</h2></FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {labs.map((l, i) => (
              <FadeIn key={l.name} delay={i * 120}>
                <div className="rounded-2xl p-8 bg-gradient-to-br from-[#FFF7ED] to-white shadow-lg border border-orange-100 hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold text-[#E36A0A] mb-3">{l.name}</h3>
                  <p className="text-gray-700 mb-4">{l.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {l.tags.map(t => <span key={t} className="px-3 py-1 text-xs bg-white border border-[#F59E0B]/30 text-[#E36A0A] rounded-full">{t}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn><h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-14">Publications & Achievements</h2></FadeIn>
          <div className="grid sm:grid-cols-3 gap-8">
            <FadeIn><div className="bg-white rounded-2xl p-10 shadow-lg"><Counter end={200} suffix="+" /><p className="mt-2 text-gray-600">Research Papers</p></div></FadeIn>
            <FadeIn delay={100}><div className="bg-white rounded-2xl p-10 shadow-lg"><Counter end={50} suffix="+" /><p className="mt-2 text-gray-600">Conferences</p></div></FadeIn>
            <FadeIn delay={200}><div className="bg-white rounded-2xl p-10 shadow-lg"><Counter end={30} suffix="+" /><p className="mt-2 text-gray-600">Patents Filed</p></div></FadeIn>
          </div>
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Industry Collaborations</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Partnering with leading tech companies, research organizations and startups for impactful innovation.</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-10 opacity-80">
            {["infosys","tcs","wipro","bosch","siemens"].map(p => (
              <div key={p} className="w-32 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-semibold">{p.toUpperCase()}</div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT PROJECTS */}
      <section className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-14">Student Research & Projects</h2></FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p,i)=>(
              <FadeIn key={p.title} delay={i*120}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition">
                  <span className="text-xs px-3 py-1 bg-[#E36A0A]/10 text-[#E36A0A] rounded-full">{p.domain}</span>
                  <h3 className="text-xl font-bold mt-4 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">Our Research Approach</h2></FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s,i)=>(
              <FadeIn key={s.t} delay={i*150}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#E36A0A] to-[#F59E0B] text-white flex items-center justify-center font-bold text-xl mb-4">{i+1}</div>
                  <h4 className="font-bold text-lg mb-2">{s.t}</h4>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Be a Part of Innovation at SJBIT</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3.5 bg-white text-[#E36A0A] font-semibold rounded-2xl shadow-lg hover:-translate-y-0.5 transition">Join Research Programs</Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition">Contact Research Cell</Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
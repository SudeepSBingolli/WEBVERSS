'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  { src: '/campus.jpeg', alt: 'SJBIT Campus Aerial View' },
  { src: '/campus2.jpeg', alt: 'SJBIT Main Building' },
  { src: '/campus3.jpeg', alt: 'SJBIT Library & Resources' },
  { src: '/campus4.jpeg', alt: 'SJBIT State-of-the-Art Labs' },
  { src: '/campus5.jpeg', alt: 'SJBIT Auditorium' },
];

const GALLERY = [
  { src: '/gallery1.jpeg', alt: '' },
  { src: '/gallery2.jpeg', alt: '' },
  { src: '/gallery4.jpeg', alt: '' },
  { src: '/gallery3.jpeg', alt: '' },
];

const CORE_VALUES = [
  'Humanity',
  'Honesty',
  'Integrity',
  'Teamwork',
  'Continuous Learning',
  'Innovation',
];

const LEADERS = [
  {
    title: 'Founder',
    name: 'His Divine Soul Padmabhushana Sri Sri Sri Dr. Balagangadharanath MahaSwamiji',
  },
  {
    title: 'President',
    name: 'Parama Pujya Sri Sri Sri Dr. Nirmalanandanatha MahaSwamiji',
  },
  {
    title: 'Managing Director',
    name: 'Revered Sri Sri Dr. Prakashanatha Swamiji',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [failedSlides, setFailedSlides] = useState(new Set());
  const [failedGallery, setFailedGallery] = useState(new Set());

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const id = setInterval(nextSlide, 4500);
    return () => clearInterval(id);
  }, [nextSlide, current]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED] to-white"
    >
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-12px); }
        }
        @keyframes floatAlt {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#E36A0A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ════════════════ LEFT CONTENT (2nd on mobile, 1st on desktop) ════════════════ */}
          <div
            className="order-2 space-y-6 lg:order-1"
            style={{ animation: 'slideInLeft .8s ease-out both' }}
          >
            <p className="font-serif text-lg italic text-[#E36A0A] md:text-xl">
              Jai Shri Gurudev
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-[3.25rem]">
              Empowering Minds.
              <br />
              Shaping the Future.
            </h1>

            <p className="text-xl font-semibold text-[#E36A0A]">
              SJB Institute of Technology, Bengaluru
            </p>

            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              To provide learning opportunities that foster ethical values,
              intellectual growth in science and technology, and social
              responsibility, shaping students into responsible contributors to
              society.
            </p>

            <div className="border-l-4 border-[#F59E0B] pl-4">
              <p className="font-medium italic text-gray-800">
                Vision: To become a recognized technical education center with a
                global perspective.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {CORE_VALUES.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-[#F59E0B]/30 bg-[#FFF7ED] px-4 py-1.5 text-sm font-medium text-gray-700"
                >
                  {v}
                </span>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              {LEADERS.map((l) => (
                <div key={l.title}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#E36A0A]">
                    {l.title}
                  </p>
                  <p className="text-sm leading-snug text-gray-700">
                    {l.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/departments">
                <button className="rounded-2xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  Explore Programs
                </button>
              </Link>
              <Link href="/campus-life">
                <button className="rounded-2xl border-2 border-[#E36A0A] px-7 py-3.5 font-semibold text-[#E36A0A] transition-all hover:bg-[#FFF7ED]">
                  Visit Campus
                </button>
              </Link>
            </div>
          </div>

          {/* ════════════════ RIGHT VISUAL (1st on mobile, 2nd on desktop) ════════════════ */}
          <div
            className="relative order-1 lg:order-2"
            style={{ animation: 'slideInRight .8s ease-out .2s both' }}
          >
            {/* ── Main Sliding Carousel ── */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-[#F59E0B]/20 shadow-2xl shadow-orange-900/10">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {SLIDES.map((slide, i) => (
                  <div
                    key={i}
                    className="relative h-full min-w-full flex-shrink-0"
                  >
                    <Image
                      src={failedSlides.has(i) ? '/logo.jpeg' : slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width:1024px) 100vw, 520px"
                      className="object-cover"
                      priority={i === 0}
                      onError={() =>
                        setFailedSlides((s) => new Set(s).add(i))
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-lg text-white backdrop-blur-md transition hover:bg-white/40 sm:h-10 sm:w-10"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrent((p) => (p + 1) % SLIDES.length)}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-lg text-white backdrop-blur-md transition hover:bg-white/40 sm:h-10 sm:w-10"
              >
                ›
              </button>

              <div className="absolute left-4 top-4 z-10 rounded-full bg-black/30 px-3 py-1 backdrop-blur-md">
                <p className="text-xs font-medium text-white">
                  {current + 1} / {SLIDES.length}
                </p>
              </div>

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-white shadow-lg'
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── Gallery Thumbnail Row ── */}
            <div className="mx-auto mt-4 grid max-w-[520px] grid-cols-4 gap-2 sm:gap-3">
              {GALLERY.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border-2 border-[#F59E0B]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#E36A0A]/50 hover:shadow-lg"
                  style={{
                    animation: `slideInUp .5s ease-out ${0.8 + i * 0.1}s both`,
                  }}
                >
                  <Image
                    src={failedGallery.has(i) ? '/logo.jpeg' : img.src}
                    alt={img.alt}
                    fill
                    sizes="130px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() =>
                      setFailedGallery((s) => new Set(s).add(i))
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Floating Glass Cards ── */}
            <div
              className="absolute -left-6 -top-6 z-20 hidden rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl md:block"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <p className="text-2xl font-bold text-gray-900">20+</p>
              <p className="text-xs text-gray-600">Departments</p>
            </div>

            <div
              className="absolute -right-8 top-1/3 z-20 hidden rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl md:block"
              style={{ animation: 'floatAlt 5s ease-in-out 1s infinite' }}
            >
              <p className="text-2xl font-bold text-gray-900">5000+</p>
              <p className="text-xs text-gray-600">Students</p>
            </div>

            <div
              className="absolute -left-4 bottom-20 z-20 hidden rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl md:block"
              style={{ animation: 'float 4.5s ease-in-out 2s infinite' }}
            >
              <p className="text-sm font-semibold text-[#E36A0A]">
                NBA Accredited
              </p>
              <p className="text-xs text-gray-600">Top Ranked Institution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
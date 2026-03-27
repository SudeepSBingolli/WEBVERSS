'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function EnrollPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-32 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="animate-fade-in-up mb-8 text-5xl font-bold md:text-7xl">
              Engineering Program
              <span className="mt-4 block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                2025-26
              </span>
            </h1>
            <p className="mb-12 text-xl leading-relaxed opacity-90 md:text-2xl">
              Transform your future with our world-class engineering education.
              Limited seats available. Apply now!
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="transform rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-12 py-4 text-xl font-bold text-black shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:from-yellow-600 hover:to-orange-600 hover:shadow-yellow-500/25"
              >
                Enroll Now
              </button>
              <Link
                href="#program-details"
                className="rounded-full border-2 border-white/30 px-12 py-4 text-xl font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="program-details" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose Our Engineering Program?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Industry-leading curriculum, expert faculty, and 100% placement assistance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="transform rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100">
                <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">100% Placement</h3>
              <p className="text-gray-600">Guaranteed job placement with top MNCs</p>
            </div>

            <div className="transform rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
                <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Expert Faculty</h3>
              <p className="text-gray-600">IIT/NIT alumni with 15+ years experience</p>
            </div>

            <div className="transform rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100">
                <svg className="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Modern Labs</h3>
              <p className="text-gray-600">State-of-the-art infrastructure & equipment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
            Only 150 seats available. Secure your spot today!
          </p>
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-block transform rounded-full bg-white px-16 py-5 text-xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-white/50"
          >
            Enroll Now - Limited Seats!
          </button>
        </div>
      </section>

      {isEnrollOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-12">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Enroll Now</h2>
              <button
                onClick={() => setIsEnrollOpen(false)}
                className="text-2xl transition-colors hover:text-red-500"
              >
                x
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Course</label>
                  <select className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500">
                    <option>B.Tech Computer Science</option>
                    <option>B.Tech Mechanical</option>
                    <option>B.Tech Civil</option>
                    <option>B.Tech Electrical</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">10th Percentage *</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="85.5"
                />
              </div>

              <button
                type="submit"
                className="w-full transform rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl"
              >
                Submit Application
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-gray-500">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

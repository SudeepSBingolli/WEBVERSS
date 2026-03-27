"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF7ED] to-white flex items-center justify-center px-6">

      {/* 🔥 Background pattern (same as Hero) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#E36A0A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 🔥 Glow effects */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl text-center">

        {/* 404 */}
        <h1 className="text-[100px] sm:text-[140px] font-extrabold text-[#E36A0A] leading-none mb-4 drop-shadow-sm">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          The page you are looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary Button */}
          <Link
            href="/"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white font-semibold shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Go to Home
          </Link>

          {/* Secondary Button */}
          <Link
            href="/about"
            className="px-8 py-3.5 rounded-2xl border-2 border-[#E36A0A] text-[#E36A0A] font-semibold hover:bg-[#FFF7ED] transition-all"
          >
            Visit About
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm text-gray-400">
          SJB Institute of Technology, Bengaluru
        </p>
      </div>
    </main>
  );
}
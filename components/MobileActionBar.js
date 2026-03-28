'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-orange-100 bg-white/95 p-3 backdrop-blur-lg md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
        <Link
          href="/admissions"
          className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-3 py-2.5 text-xs font-bold text-white"
        >
          Apply <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-[#E36A0A]/30 px-3 py-2.5 text-xs font-bold text-[#E36A0A]"
        >
          <PhoneCall className="h-3.5 w-3.5" /> Counselor
        </Link>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('open-sjbit-chat'))}
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-bold text-gray-700"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Chat
        </button>
      </div>
    </div>
  );
}

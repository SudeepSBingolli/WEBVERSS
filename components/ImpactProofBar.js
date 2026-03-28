'use client';

import { MessageSquareText, MousePointerClick, Timer, Trophy } from 'lucide-react';

const METRICS = [
  { label: 'Avg. Chat Response', value: '< 2s', icon: Timer },
  { label: 'Top Topic Coverage', value: '20+', icon: MessageSquareText },
  { label: 'CTA Conversion Path', value: '3x', icon: MousePointerClick },
  { label: 'Presentation Readiness', value: 'Event-Ready', icon: Trophy },
];

export default function ImpactProofBar() {
  return (
    <section className="relative bg-gradient-to-r from-[#FFF7ED] via-white to-[#FFF7ED] py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-[#F59E0B]/20 bg-white/90 p-4 text-center shadow-sm"
              >
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF1E0] text-[#E36A0A]">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-lg font-extrabold text-gray-900 sm:text-xl">{metric.value}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

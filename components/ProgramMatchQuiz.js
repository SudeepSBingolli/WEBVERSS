'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

const INTERESTS = ['AI & Data', 'Software Development', 'Electronics', 'Core Engineering', 'Research'];
const STRENGTHS = ['Math & Logic', 'Coding', 'Design Thinking', 'Problem Solving', 'Communication'];
const GOALS = ['Top Placements', 'Startup', 'Higher Studies', 'Public Sector', 'Research Career'];

const MATCH_RULES = [
  { department: 'Computer Science & Engineering', href: '/departments/cse', check: (i, s, g) => i === 'AI & Data' || s === 'Coding' || g === 'Top Placements' },
  { department: 'Information Science & Engineering', href: '/departments/ise', check: (i, s, g) => i === 'Software Development' || s === 'Problem Solving' || g === 'Startup' },
  { department: 'Electronics & Communication Engineering', href: '/departments/ece', check: (i, s, g) => i === 'Electronics' || g === 'Public Sector' },
  { department: 'Mechanical Engineering', href: '/departments/mechanical', check: (i, s, g) => i === 'Core Engineering' || s === 'Design Thinking' },
  { department: 'Civil Engineering', href: '/departments/civil', check: (i, s, g) => g === 'Higher Studies' || s === 'Communication' },
  { department: 'AI & Machine Learning', href: '/departments/ai-ml', check: (i, s, g) => i === 'Research' || g === 'Research Career' },
];

export default function ProgramMatchQuiz() {
  const [interest, setInterest] = useState('');
  const [strength, setStrength] = useState('');
  const [goal, setGoal] = useState('');

  const recommendation = useMemo(() => {
    if (!interest || !strength || !goal) return null;
    return MATCH_RULES.find((rule) => rule.check(interest, strength, goal)) || MATCH_RULES[0];
  }, [interest, strength, goal]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#FFF7ED] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#C44F07]">
            <Sparkles className="h-3.5 w-3.5" /> Quick AI Match
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Find Your Best-Fit Program in 30 Seconds</h2>
          <p className="mt-3 text-gray-600">Choose your preferences and get an instant recommendation based on your goals.</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-[#F59E0B]/20 bg-white p-6 shadow-lg sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <SelectField label="Interest" value={interest} onChange={setInterest} options={INTERESTS} />
            <SelectField label="Strength" value={strength} onChange={setStrength} options={STRENGTHS} />
            <SelectField label="Goal" value={goal} onChange={setGoal} options={GOALS} />
          </div>

          {recommendation && (
            <div className="mt-6 rounded-2xl border border-[#F59E0B]/25 bg-[#FFF7ED] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C44F07]">Recommended Department</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xl font-extrabold text-gray-900">{recommendation.department}</p>
                <Link
                  href={recommendation.href || '/departments'}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                >
                  <Compass className="h-4 w-4" /> Explore Departments
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-[#E36A0A]"
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

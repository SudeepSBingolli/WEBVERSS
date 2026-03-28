"use client";

import React from 'react';
import { Phone, Mail, MapPin, GraduationCap, Building2, Briefcase, Home, ShieldAlert, ArrowRight } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=SJB+Institute+of+Technology+Kengeri+Bengaluru';

export default function ContactDetails() {
  return (
    <section className="min-h-screen bg-[#fafafa] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E36A0A] font-bold tracking-widest uppercase text-sm mb-3 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Let’s <span className="text-[#E36A0A]">Connect.</span>
            </h1>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Whether you're a prospective student, a parent, or a recruiter, our dedicated teams are ready to assist you at every step.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /></div>
                <p className="text-sm font-medium text-slate-600">Admissions Open 2025-26</p>
             </div>
          </div>
        </div>

        {/* --- Hero Contact Card --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">SJB Institute of Technology</h2>
                <div className="space-y-6">
                  <ContactInfo icon={<MapPin className="text-[#E36A0A]" />} label="Location" value="#67, BGS Health & Education City, Dr. Vishnuvardhan Road, Kengeri, Bengaluru - 560060" href={GOOGLE_MAPS_URL} external />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ContactInfo icon={<Phone className="text-[#E36A0A]" />} label="General Inquiry" value="+91-80-28612445" href="tel:+918028612445" />
                    <ContactInfo icon={<Mail className="text-[#E36A0A]" />} label="Official Email" value="principal@sjbit.edu.in" href="mailto:principal@sjbit.edu.in" />
                  </div>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 bg-[#E36A0A] hover:bg-white hover:text-black transition-all duration-300 w-fit px-8 py-4 rounded-full font-bold flex items-center gap-2 group"
              >
                Find on Google Maps <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E36A0A] rounded-full blur-[120px] opacity-20" />
          </div>

          {/* Emergency / Quick Help Sidebar */}
          <div className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-100 text-red-600 rounded-2xl"><ShieldAlert /></div>
              <h3 className="text-xl font-black text-red-900 uppercase tracking-tight">Support</h3>
            </div>
            <div className="space-y-8">
              <EmergencyItem label="Women Safety Cell" value="+91-7204081185" />
              <EmergencyItem label="Student Welfare" value="+91-9902310181" />
              <div className="pt-4 border-t border-red-200">
                <p className="text-xs text-red-700/60 uppercase font-bold">24/7 Response Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Department Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DeptCard title="Administration" icon={<Building2 />}>
             <SubItem label="Principal Office" val="+91-6366041109" />
             <SubItem label="Accounts" val="+91-9449213292" />
          </DeptCard>

          <DeptCard title="Admissions" icon={<GraduationCap />} highlight>
             <SubItem label="Head of Admissions" val="+91-9606485137" />
             <SubItem label="Email" val="admission@bgsgroup.org" />
          </DeptCard>

          <DeptCard title="Placements" icon={<Briefcase />}>
             <SubItem label="Sr. Placement Officer" val="+91-9902808424" />
             <SubItem label="Manager HRD" val="+91-9900638899" />
          </DeptCard>

          <DeptCard title="Residential" icon={<Home />}>
             <SubItem label="Warden (Boys)" val="+91-9448571119" />
             <SubItem label="Warden (Girls)" val="+91-9620513818" />
          </DeptCard>
        </div>

      </div>
    </section>
  );
}

/* --- Reusable UI Sub-components --- */

const ContactInfo = React.memo(({ icon, label, value, href, external }) => (
  <div className="flex gap-4 group">
    <div className="mt-1">{icon}</div>
    <div>
      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">{label}</p>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-lg font-medium hover:text-[#E36A0A] transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg font-medium text-slate-200 leading-snug">{value}</p>
      )}
    </div>
  </div>
));

const DeptCard = React.memo(({ title, icon, children, highlight }) => (
  <div className={`p-8 rounded-[2rem] transition-all duration-300 border ${highlight ? 'bg-orange-50 border-orange-200 shadow-lg scale-105' : 'bg-white border-slate-100 hover:shadow-xl hover:-translate-y-1'}`}>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-[#E36A0A] text-white' : 'bg-slate-100 text-slate-600'}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
));

const SubItem = React.memo(({ label, val }) => (
  <div>
    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{label}</p>
    <p className="text-sm font-semibold text-slate-700">{val}</p>
  </div>
));

const EmergencyItem = React.memo(({ label, value }) => (
  <div className="group cursor-pointer">
    <p className="text-xs font-bold text-red-800/50 uppercase mb-1">{label}</p>
    <p className="text-xl font-black text-red-600 group-hover:underline">{value}</p>
  </div>
));
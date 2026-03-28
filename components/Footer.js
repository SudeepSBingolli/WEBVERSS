// app/components/Footer.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Mail, Share2, MessageCircle, ExternalLink, MapPin, Phone, ArrowUpRight, GraduationCap } from 'lucide-react'

const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Campus Life', href: '/campus-life' },
    { label: 'Contact', href: '/contact' }
]

const RESOURCE_LINKS = [
    { label: 'Departments', href: '/departments' },
    { label: 'Academics', href: '/academics' },
    { label: 'Research', href: '/research' },
    { label: 'Placements', href: '/placements' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Students', href: '/students' }
]

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )

        const footer = document.getElementById('footer')
        if (footer) observer.observe(footer)

        return () => observer.disconnect()
    }, [])

    return (
        <footer id="footer" className="relative mt-2">
            <div className="absolute -top-1 left-0 right-0 overflow-hidden">
                <svg className="w-full h-12" viewBox="0 0 1200 40" preserveAspectRatio="none">
                    <path d="M0,20 C300,40 900,0 1200,20 L1200,40 L0,40 Z" fill="#0F0F0F" />
                </svg>
            </div>

            <div className="bg-[#0F0F0F] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #E36A0A 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-950/10" />

                <div className={`relative z-10 container mx-auto px-4 pt-14 pb-8 transition-all duration-700 ${
                    mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: 'Students', value: '5000+' },
                            { label: 'Departments', value: '6+' },
                            { label: 'Recruiters', value: '120+' },
                            { label: 'Alumni', value: '11000+' }
                        ].map((item) => (
                            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                <p className="text-lg font-bold text-white">{item.value}</p>
                                <p className="text-[11px] uppercase tracking-widest text-gray-400">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        <div className="text-center lg:text-left">
                            <Image src="/logo.jpeg" alt="SJBIT Logo" width={82} height={82} className="mx-auto lg:mx-0 mb-4 rounded-xl" />
                            <h3 className="text-white font-bold text-xl mb-3">SJB Institute of Technology</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Empowering future-ready engineers with ethics, innovation, and strong industry relevance.
                            </p>
                            <p className="text-orange-400 font-semibold mb-6 italic">Jai Shri Gurudev</p>

                            <div className="flex gap-3 justify-center lg:justify-start">
                                {[
                                    { name: 'mail', icon: Mail, label: 'Email', url: 'mailto:admission@bgsgroup.org' },
                                    { name: 'message', icon: MessageCircle, label: 'Contact', url: '/contact' },
                                    { name: 'share', icon: Share2, label: 'Share', url: '/' },
                                    { name: 'link', icon: ExternalLink, label: 'Website', url: '/' }
                                ].map((social) => {
                                    const Icon = social.icon
                                    const isExternal = social.url.startsWith('mailto:')
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            title={social.label}
                                            target={isExternal ? '_self' : undefined}
                                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500/20 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group text-[#E36A0A]"
                                        >
                                            <Icon className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {QUICK_LINKS.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-gray-400 hover:text-orange-300 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 text-sm">
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Academic & Career</h4>
                            <ul className="space-y-3">
                                {RESOURCE_LINKS.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-gray-400 hover:text-orange-300 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 text-sm">
                                            <GraduationCap className="h-3.5 w-3.5" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 group">
                                    <MapPin className="mt-0.5 h-4 w-4 text-orange-400" />
                                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        <p>#67, BGS Health & Education City</p>
                                        <p>Dr. Vishnuvardhan Road, Kengeri</p>
                                        <p>Bengaluru - 560060, Karnataka</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <Phone className="mt-0.5 h-4 w-4 text-orange-400" />
                                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        <p>+91-80-28612445 / 46</p>
                                        <p>+91-6366041109</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <Mail className="mt-0.5 h-4 w-4 text-orange-400" />
                                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        <p>principal@sjbit.edu.in</p>
                                        <p>admission@bgsgroup.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800/60 bg-black/40">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm text-center md:text-left">
                                Copyright 2026 SJB Institute of Technology. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-sm italic">Built with excellence, integrity, and innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
// app/components/Footer.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
        <footer id="footer" className="relative">
            {/* Wave Divider */}
            <div className="absolute -top-1 left-0 right-0 overflow-hidden">
                <svg className="w-full h-12" viewBox="0 0 1200 40" preserveAspectRatio="none">
                    <path
                        d="M0,20 C300,40 900,0 1200,20 L1200,40 L0,40 Z"
                        fill="#0F0F0F"
                    />
                </svg>
            </div>

            {/* Main Footer */}
            <div className="bg-[#0F0F0F] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #E36A0A 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }} />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-950/10" />

                <div className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-700 ${mounted && isVisible? 'opacity-100 translate-y-0': 'opacity-0 translate-y-10'
                    }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        {/* College Identity */}
                        <div className="text-center lg:text-left">
                            <Image
                                src="/logo.jpeg"
                                alt="SJBIT Logo"
                                width={80}
                                height={80}
                                className="mx-auto lg:mx-0 mb-4"
                            />
                            <h3 className="text-white font-bold text-xl mb-3">
                                SJB Institute of Technology
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Empowering students with knowledge, ethics, and innovation to build a better society.
                            </p>
                            <p className="text-orange-500 font-semibold mb-6 italic">
                                Jai Shri Gurudev
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-3 justify-center lg:justify-start">
                                {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                                    <a
                                        key={social}
                                        href={`#${social}`}
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500/20 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
                                    >
                                        <span className="text-gray-400 group-hover:text-orange-400 transition-colors">
                                            {social[0].toUpperCase()}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {['Home', 'About', 'Programs', 'Admissions', 'Campus Life', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <Link
                                            href={`/${link.toLowerCase()}`}
                                            className="text-gray-400 hover:text-orange-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Academic & Resources */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Academic & Resources</h4>
                            <ul className="space-y-3">
                                {['Departments', 'Academics', 'Research', 'Placements', 'Alumni', 'Student Portal'].map((link) => (
                                    <li key={link}>
                                        <Link
                                            href={`/${link.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-400 hover:text-orange-400 hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 group">
                                    <span className="text-orange-500 mt-1">📍</span>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        Bengaluru, Karnataka, India
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <span className="text-orange-500">📞</span>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <span className="text-orange-500">✉</span>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        info@sjbit.edu.in
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 bg-black/40">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm text-center md:text-left">
                                © 2026 SJB Institute of Technology. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-sm italic">
                                Designed with Excellence & Integrity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
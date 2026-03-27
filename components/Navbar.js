'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus', href: '#campus' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-md border-b border-[#F59E0B]/20'
            : 'bg-transparent'
            }`}>
            <nav className="w-full px-2 sm:px-4 lg:px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4">
                    <div className="bg-[#FFF7ED] p-2 relative rounded-2xl shadow-md flex items-center justify-center w-[90px] h-[90px]">
                        <Image
                            src="/logo.jpeg"
                            alt="SJBIT Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="hidden sm:block leading-tight">
                        <span className="font-bold text-2xl text-gray-900 tracking-wide">
                            SJBIT
                        </span>
                        <p className="text-xs text-gray-500">
                            SJB Institute of Technology
                        </p>
                    </div>
                </Link>

                {/* Links */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setActive(link.name)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${active === link.name
                                    ? 'text-white bg-[#E36A0A]'
                                    : 'text-gray-700 hover:text-[#E36A0A] hover:bg-[#FFF7ED]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden lg:block">
                    <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white text-sm font-semibold shadow-md shadow-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#F59E0B]/20">
                    <ul className="px-4 py-4 space-y-1">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => { setActive(link.name); setOpen(false); }}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium ${active === link.name ? 'bg-[#E36A0A] text-white' : 'text-gray-700 hover:bg-[#FFF7ED]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white text-sm font-semibold">
                                Enroll Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
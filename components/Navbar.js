'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Placements', href: '/placements' },
];

const moreLinks = [
    'Departments',
    'Academics',
    'Research',
    'Campus Life',
    'Students',
    'Alumni',
    'Contact',
];

const moreLinksRouteMap = {
    'Departments': '/departments',
    'Campus Life': '/campus-life',
    'Contact': '/contact', 
    'Admissions': '/admissions',
    'Alumni': '/alumni',
    'Research':'/research',
    'Academics':'/academics',
    'Students': '/students',
    'Placements': '/placements'
};

function getMoreLinkHref(item) {
    return moreLinksRouteMap[item] ?? `#${item.toLowerCase().replace(/\s/g, '')}`;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const saved = window.localStorage.getItem('sjbit_high_contrast') === '1';
        setHighContrast(saved);
        document.documentElement.classList.toggle('high-contrast', saved);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const toggleContrast = () => {
        const next = !highContrast;
        setHighContrast(next);
        document.documentElement.classList.toggle('high-contrast', next);
        window.localStorage.setItem('sjbit_high_contrast', next ? '1' : '0');
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-white/85 backdrop-blur-xl shadow-lg border-b border-[#F59E0B]/20'
                : 'bg-white/55 backdrop-blur-md'
        }`}>
            <div className="hidden md:flex justify-center border-b border-[#F59E0B]/15 bg-gradient-to-r from-[#FFF7ED] via-white to-[#FFF7ED] px-4 py-1.5 text-xs font-medium text-gray-700">
                Admissions 2026 Open • Scholarships Available • Visit Campus by Appointment
            </div>

            <nav className="w-full px-3 sm:px-5 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-[#FFF7ED] p-2 relative rounded-xl shadow-md flex items-center justify-center w-[62px] h-[62px]">
                        <Image
                            src="/logo.jpeg"
                            alt="SJBIT Logo"
                            fill
                            sizes="62px"
                            className="object-contain"
                        />
                    </div>

                    <div className="hidden sm:block leading-tight">
                        <span className="font-bold text-xl text-gray-900 tracking-wide">
                            SJBIT
                        </span>
                        <p className="text-[11px] text-gray-500">
                            SJB Institute of Technology, Bengaluru
                        </p>
                    </div>
                </Link>

                <ul className="hidden lg:flex items-center gap-2 relative">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${pathname === link.href
                                        ? 'text-white bg-[#E36A0A]'
                                        : 'text-gray-700 hover:text-[#E36A0A] hover:bg-[#FFF7ED]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    <li className="relative group">
                        <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-[#E36A0A] hover:bg-[#FFF7ED] transition flex items-center gap-1">
                            More
                            <span className="text-xs transition group-hover:rotate-180">▾</span>
                        </button>

                        <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <ul className="py-2">
                                {moreLinks.map((item, index) => {
                                    const href = getMoreLinkHref(item);

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={href}
                                                className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#FFF7ED] hover:text-[#E36A0A] transition"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                </ul>

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleContrast}
                        className="inline-flex items-center rounded-full border border-gray-200 px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:border-[#E36A0A]/40 hover:text-[#E36A0A] transition"
                    >
                        {highContrast ? 'Normal' : 'Contrast'}
                    </button>
                    <Link href="/contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#E36A0A] transition">
                        Talk to Counselor
                    </Link>
                    <Link href="/enroll" className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white text-sm font-semibold shadow-md shadow-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Apply 2026
                    </Link>
                </div>

                <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {open && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#F59E0B]/20 max-h-[80vh] overflow-y-auto">
                    <ul className="px-4 py-4 space-y-1">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium ${pathname === link.href ? 'bg-[#E36A0A] text-white' : 'text-gray-700 hover:bg-[#FFF7ED]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        {moreLinks.map((item) => {
                            const href = getMoreLinkHref(item);
                            return (
                                <li key={item}>
                                    <Link
                                        href={href}
                                        className={`block px-4 py-3 rounded-xl text-sm font-medium ${pathname === href ? 'bg-[#E36A0A] text-white' : 'text-gray-700 hover:bg-[#FFF7ED]'}`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-2 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={toggleContrast}
                                className="block w-full py-3 rounded-full border border-[#E36A0A]/30 text-[#E36A0A] text-sm font-semibold text-center"
                            >
                                {highContrast ? 'Normal' : 'Contrast'}
                            </button>
                            <Link href="/contact" className="block w-full py-3 rounded-full border border-[#E36A0A]/30 text-[#E36A0A] text-sm font-semibold text-center">
                                Counselor
                            </Link>
                            <Link href="/enroll" className="col-span-2 block w-full py-3 rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] text-white text-sm font-semibold text-center">
                                Apply 2026
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
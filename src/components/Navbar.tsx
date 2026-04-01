import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('overflow-hidden');
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <>
            <div className="fixed w-full z-50 top-4 px-4 pointer-events-none">
                <nav className="max-w-5xl mx-auto glass-card border border-gray-200 dark:border-white/10 rounded-full px-4 py-3 flex items-center justify-between pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
                    <a href="#home" className="flex items-center gap-3 group ml-2">
                        <img src="/logo.png" alt="Takeinteki Logo" width="160" height="40" className="h-8 w-auto transform group-hover:scale-105 transition-transform duration-300" fetchPriority="high" decoding="async" />
                        <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white hidden sm:block">Takeinteki</span>
                    </a>
                    
                    <div className="hidden md:flex items-center space-x-1 text-sm font-medium">
                        <a href="#about" className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">About</a>
                        <a href="#hiring-profile" className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">Expertise</a>
                        <a href="#methodology" className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">Methodology</a>
                        <a href="#why-us" className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">Why Us</a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button onClick={toggleTheme} aria-label="Toggle theme" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer">
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} pointer-events-none`}></i>
                        </button>
                        <a href="#contact" className="hidden sm:flex px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-105 hover:!text-white hover:bg-gradient-to-r hover:from-[#40c9ff] hover:to-[#e81cff] transition-all duration-300 items-center gap-2">
                            Partner With Us <i className="fas fa-arrow-right text-xs"></i>
                        </a>
                        <button onClick={toggleMobileMenu} aria-label="Open Mobile Menu" className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </div>

            <div className={`fixed inset-0 z-[9999] bg-white/60 dark:bg-black/60 backdrop-blur-[20px] border border-black/[0.08] dark:border-white/10 transition-all duration-500 flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <button onClick={closeMobileMenu} aria-label="Close Mobile Menu" className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer">
                    <i className="fas fa-times text-2xl"></i>
                </button>
                <div className="flex flex-col items-center space-y-8 text-2xl font-bold tracking-tight">
                    <a href="#about" onClick={closeMobileMenu} className="mobile-link text-gray-900 dark:text-white hover:text-brand-500 hover:scale-105 hover:opacity-80 transition-all duration-300">About</a>
                    <a href="#hiring-profile" onClick={closeMobileMenu} className="mobile-link text-gray-900 dark:text-white hover:text-brand-500 hover:scale-105 hover:opacity-80 transition-all duration-300">Expertise</a>
                    <a href="#methodology" onClick={closeMobileMenu} className="mobile-link text-gray-900 dark:text-white hover:text-brand-500 hover:scale-105 hover:opacity-80 transition-all duration-300">Methodology</a>
                    <a href="#why-us" onClick={closeMobileMenu} className="mobile-link text-gray-900 dark:text-white hover:text-brand-500 hover:scale-105 hover:opacity-80 transition-all duration-300">Why Us</a>
                    <a href="#contact" onClick={closeMobileMenu} className="mobile-link text-brand-500 mt-4 px-8 py-3 rounded-full border border-brand-500/30 bg-brand-500/10 hover:bg-brand-500 hover:text-white hover:scale-105 transition-all duration-300 text-xl">Partner With Us</a>
                </div>
            </div>
        </>
    );
}

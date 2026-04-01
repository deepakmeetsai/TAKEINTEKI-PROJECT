import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Methodology from './components/Methodology';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

export default function App() {
    // Scroll Reveal
    useEffect(() => {
        const reveal = () => {
            const reveals = document.querySelectorAll(".reveal");
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        };
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger once on load
        return () => window.removeEventListener("scroll", reveal);
    }, []);

    // Cinematic Scroll
    useEffect(() => {
        const cinematicSections = document.querySelectorAll('section');
        let isCinematicScrolling = false;
        
        const calculateCinematicFocus = () => {
            const viewportCenter = window.innerHeight / 2;
            let closestSection: Element | null = null;
            let minDistance = Infinity;
            
            cinematicSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionCenter = rect.top + (rect.height / 2);
                const distance = Math.abs(viewportCenter - sectionCenter);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section;
                }
            });
            
            if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                closestSection = cinematicSections[cinematicSections.length - 1];
            }
            
            cinematicSections.forEach(section => {
                if (section === closestSection) {
                    if (!section.classList.contains('section-active')) {
                        section.classList.add('section-active');
                        section.classList.remove('section-inactive');
                    }
                } else {
                    if (!section.classList.contains('section-inactive')) {
                        section.classList.add('section-inactive');
                        section.classList.remove('section-active');
                    }
                }
            });
            
            isCinematicScrolling = false;
        };
        
        const handleScroll = () => {
            if (!isCinematicScrolling) {
                window.requestAnimationFrame(calculateCinematicFocus);
                isCinematicScrolling = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        calculateCinematicFocus();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-300 font-sans antialiased overflow-x-hidden selection:bg-brand-500/30 selection:text-current">
            {/* Fluid Mouse Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 opacity-0 transition-opacity duration-500 hidden md:block"></div>

            {/* Ambient Background Effects */}
            <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-10 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
                <source src="/bg-video.mp4" type="video/mp4" />
            </video>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Expertise />
                <Methodology />
                <WhyUs />
                <Contact />
            </main>
        </div>
    );
}

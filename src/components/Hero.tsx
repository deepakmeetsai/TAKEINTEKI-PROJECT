import React, { useEffect } from 'react';

export default function Hero() {
    useEffect(() => {
        const cursorGlow = document.getElementById('cursor-glow');
        const heroWrapper = document.getElementById('hero-3d-wrapper');
        const parallaxLayers = document.querySelectorAll('.parallax-layer');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = window.innerWidth / 2;
        let cursorY = window.innerHeight / 2;
        
        let heroTargetX = 0;
        let heroTargetY = 0;
        let heroCurrentX = 0;
        let heroCurrentY = 0;
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (cursorGlow && window.innerWidth > 768) {
                cursorGlow.style.opacity = '1';
            }

            if (heroWrapper && window.innerWidth > 768) {
                const rect = heroWrapper.getBoundingClientRect();
                if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
                    heroTargetX = (mouseX / window.innerWidth - 0.5) * 2;
                    heroTargetY = (mouseY / window.innerHeight - 0.5) * 2;
                } else {
                    heroTargetX = 0;
                    heroTargetY = 0;
                }
            }
        };

        const handleMouseLeave = () => {
            if (cursorGlow) cursorGlow.style.opacity = '0';
            heroTargetX = 0;
            heroTargetY = 0;
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        const animateInteractions = () => {
            if (window.innerWidth > 768) {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                
                if (cursorGlow) {
                    cursorGlow.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
                }

                heroCurrentX += (heroTargetX - heroCurrentX) * 0.1;
                heroCurrentY += (heroTargetY - heroCurrentY) * 0.1;

                if (heroWrapper && parallaxLayers.length > 0) {
                    parallaxLayers.forEach(layer => {
                        const htmlLayer = layer as HTMLElement;
                        const speed = parseFloat(htmlLayer.getAttribute('data-speed') || '1');
                        const rotateSpeed = parseFloat(htmlLayer.getAttribute('data-rotate') || '1');
                        
                        const x = heroCurrentX * 15 * speed;
                        const y = heroCurrentY * 15 * speed;
                        const rotX = -heroCurrentY * rotateSpeed;
                        const rotY = heroCurrentX * rotateSpeed;

                        htmlLayer.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
                    });
                }
            } else {
                if (heroWrapper && parallaxLayers.length > 0) {
                    parallaxLayers.forEach(layer => {
                        (layer as HTMLElement).style.transform = 'none';
                    });
                }
            }

            animationFrameId = requestAnimationFrame(animateInteractions);
        };
        
        animateInteractions();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-40 flex flex-col items-center justify-center z-10 min-h-screen">
            <div id="hero-3d-wrapper" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal w-full" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                <div className="parallax-layer" data-speed="0.5" data-rotate="2">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-500 text-xs font-semibold uppercase tracking-widest mb-8 animate-float">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        Business Proposal
                    </div>
                </div>
                
                <div className="parallax-layer" data-speed="1.2" data-rotate="4">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1]">
                        <span className="font-funky font-normal text-5xl sm:text-7xl md:text-9xl mb-2">Innovative</span> <br />
                        <span className="text-glow">Redefined.</span>
                    </h1>
                </div>
                
                <div className="parallax-layer" data-speed="0.8" data-rotate="3">
                    <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        We bring your vision to life. Connecting People. Powering Technology. Building the Future.
                    </p>
                </div>
                
                <div className="parallax-layer z-20 relative" data-speed="1.5" data-rotate="2">
                    <div className="mt-8 sm:mt-10 mb-12 sm:mb-16 flex flex-col sm:flex-row justify-center gap-4 items-center">
                        <div className="relative group w-full sm:w-auto">
                            <a href="#hiring-profile" className="block w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                Explore Expertise
                            </a>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-gray-900 dark:bg-zinc-800 text-white text-xs font-semibold rounded shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                                Discover our targeted roles
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-900 dark:border-t-zinc-800"></div>
                            </div>
                        </div>
                        <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                            Get in Touch <i className="fas fa-chevron-right text-xs opacity-50"></i>
                        </a>
                    </div>
                </div>

                <div className="parallax-layer" data-speed="2" data-rotate="5">
                    <div className="w-full h-[35vh] sm:h-[40vh] md:h-[55vh] rounded-3xl md:rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-gray-200 dark:border-white/10 group transform-gpu [transform:translateZ(0)]">
                        <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/30 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&fm=webp&q=50&w=1200" alt="Modern Corporate Office" className="w-full h-full object-cover object-center transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 will-change-transform [backface-visibility:hidden]" fetchPriority="high" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-black to-transparent z-20 pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full border-y border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md py-4 overflow-hidden z-30 flex">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    <div className="flex shrink-0 items-center gap-8 sm:gap-16 px-4 sm:px-8 text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Revenue Cycle Management</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Medical Coding</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> AR Calling</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Billing Executives</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Operations Management</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-8 sm:gap-16 px-4 sm:px-8 text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 whitespace-nowrap" aria-hidden="true">
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Revenue Cycle Management</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Medical Coding</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> AR Calling</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Billing Executives</span>
                        <span className="flex items-center gap-2 sm:gap-4"><i className="fas fa-sparkles text-brand-500 text-xs opacity-50"></i> Operations Management</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

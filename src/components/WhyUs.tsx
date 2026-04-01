import React from 'react';

export default function WhyUs() {
    return (
        <section id="why-us" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 reveal">
                    <div>
                        <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-500 uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-brand-500"></span> Differentiators
                        </h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">Why Us "?"</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
                    
                    <div className="md:col-span-2 md:row-span-1 border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between relative overflow-hidden reveal hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group transform-gpu [transform:translateZ(0)]">
                        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" alt="Sustainable Talent" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 z-0 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/50 dark:group-hover:bg-black/70"></div>
                        
                        <div className="flex justify-between items-start z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><i className="fas fa-users"></i></div>
                            <div className="text-2xl font-black text-white/40 transition-colors">01</div>
                        </div>
                        <div className="z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">100% Talented & Sustainable candidates.</h4>
                            <p className="text-sm text-gray-100">Ensuring long-term retention and cultural fit.</p>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-2 border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between relative overflow-hidden reveal shadow-sm hover:shadow-xl dark:hover:border-gray-600 transition-all duration-300 group transform-gpu [transform:translateZ(0)]">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="Fast Reliable" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 z-0 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/50 dark:group-hover:bg-black/70"></div>
                        
                        <div className="text-5xl font-black text-white/40 self-end transition-colors z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">02</div>
                        <div className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-black drop-shadow-none">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h4 className="text-3xl font-bold text-white leading-tight tracking-tight">Fast, Reliable & Qualitative Hiring.</h4>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between relative overflow-hidden reveal hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group transform-gpu [transform:translateZ(0)]">
                        <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="Networking" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 z-0 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/50 dark:group-hover:bg-black/70"></div>
                        
                        <div className="flex justify-between items-start z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><i className="fas fa-network-wired"></i></div>
                            <div className="text-2xl font-black text-white/40 transition-colors">03</div>
                        </div>
                        <div className="z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <h4 className="text-xl font-bold text-white tracking-tight">Strong Candidate networking.</h4>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between relative overflow-hidden reveal hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group transform-gpu [transform:translateZ(0)]">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Dedicated Support" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 z-0 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/50 dark:group-hover:bg-black/70"></div>
                        
                        <div className="flex justify-between items-start z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><i className="fas fa-headset"></i></div>
                            <div className="text-2xl font-black text-white/40 transition-colors">04</div>
                        </div>
                        <div className="z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <h4 className="text-xl font-bold text-white tracking-tight">Dedicated support from team.</h4>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:row-span-1 border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between relative overflow-hidden reveal hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group transform-gpu [transform:translateZ(0)]">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Screening Process" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-1000 z-0 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/50 dark:group-hover:bg-black/70"></div>
                        
                        <div className="flex justify-between items-start z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm"><i className="fas fa-filter"></i></div>
                            <div className="text-2xl font-black text-white/40 transition-colors">05</div>
                        </div>
                        <div className="z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Best in customized screening.</h4>
                            <p className="text-sm text-gray-100">Based on client requirement (CMS 1500, UB04) with assessment results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

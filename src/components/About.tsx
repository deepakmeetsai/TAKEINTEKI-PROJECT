import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 glass-card border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl reveal group hover:border-brand-500/50 transition-colors duration-500 flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 sm:mb-8 text-xl">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-500 uppercase mb-4">Executive Summary</h2>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                            For Success Business <br /><span className="text-gray-500 dark:text-gray-400">In The Future.</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                            Hello Everyone! This proposal highlights a recruitment firm with deep expertise in Revenue Cycle Management talent acquisition for IT & Non IT organizations.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Through a competency-based approach and tailored screening, the firm delivers reliable, skilled candidates suited for key RCM roles. Their services help healthcare companies build efficient and compliant teams.
                        </p>
                    </div>

                    <div className="lg:col-span-4 rounded-2xl md:rounded-3xl overflow-hidden reveal relative group border border-gray-200 dark:border-white/10 h-[300px] sm:h-[400px] lg:h-auto transform-gpu [transform:translateZ(0)]">
                        <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600" alt="Corporate Professionals" className="w-full h-full object-cover object-center transform-gpu scale-[1.02] group-hover:scale-110 transition-transform duration-1000 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                    </div>

                    <div className="lg:col-span-4 glass-card border border-gray-200 dark:border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl reveal group hover:border-brand-purple/50 transition-colors duration-500 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-brand-purple/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-purple/20 transition-colors duration-700"></div>
                        
                        <h2 className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-4 relative z-10">Introduction</h2>
                        <div className="space-y-4 relative z-10">
                            <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug">
                                We are a dedicated recruitment firm specializing in Revenue Cycle Management (RCM) talent acquisition.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Our expertise lies in sourcing and placing skilled professionals across all levels—from fresh graduates to senior-level experts. With a strong network and deep industry knowledge, we support healthcare KPOs and RCM service providers in building high-performing teams.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Whether you're looking for experienced specialists or energetic fresher's ready to be trained, we connect the right people to the right roles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

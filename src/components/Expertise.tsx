import React from 'react';

export default function Expertise() {
    return (
        <section id="hiring-profile" className="py-16 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 reveal">
                    <div className="max-w-2xl">
                        <h2 className="text-xs font-bold tracking-widest text-brand-600 dark:text-brand-500 uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-brand-500"></span> Targeted Roles
                        </h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">Hiring Profile.</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 md:mt-0 max-w-xs md:text-right">Placing top-tier talent across critical RCM functions.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: 'AR Callers', num: '01', desc: 'Skilled communicators managing accounts receivable follow-ups and resolving claim denials efficiently.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', delay: '0ms' },
                        { title: 'AR Analyst', num: '02', desc: 'Analytical experts focused on identifying denial trends, root causes, and optimizing revenue flow.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', delay: '50ms' },
                        { title: 'Medical Coders', num: '03', desc: 'Certified professionals specialized in IPDRG, E&M, HCC, Radiology, Pathology, ED, and more.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', delay: '100ms' },
                        { title: 'Billing Execs', num: '04', desc: 'Detail-oriented staff handling accurate claim generation and seamless submission processes.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800', delay: '150ms' },
                        { title: 'Payment Posting', num: '05', desc: 'Accurate allocators ensuring all payments and adjustments are reflected in the system properly.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', delay: '200ms' },
                        { title: 'Leadership', num: '06', desc: 'Experienced Team Leads & Operations Management to guide teams and drive key performance indicators.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', delay: '250ms' },
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card border border-gray-200 dark:border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 reveal group flex flex-col" style={{ transitionDelay: item.delay }}>
                            <div className="h-48 w-full relative overflow-hidden transform-gpu [transform:translateZ(0)]">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-all duration-700 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                            <div className="p-6 md:p-8 pt-2 relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{item.title}</h3>
                                    <span className="text-3xl font-black text-black/5 dark:text-white/5">{item.num}</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="pt-20 sm:pt-28 md:pt-32 pb-8 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 md:mb-20">
                <div className="border border-gray-200 dark:border-white/10 rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 reveal relative overflow-hidden group transform-gpu [transform:translateZ(0)]">
                    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&fm=webp&q=50&w=1200" alt="Contact Us Banner" className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.02] group-hover:scale-105 transition-transform duration-[20s] z-0 opacity-40 dark:opacity-20 will-change-transform [backface-visibility:hidden]" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gray-50/80 dark:bg-black/90 backdrop-blur-sm z-0"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">Let's Build <br /><span className="text-glow">The Future.</span></h2>
                            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-md">Reach out to discuss your staffing needs, and let Takeinteki find the perfect fit for your organization.</p>
                            
                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-14 h-14 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/50 flex items-center justify-center text-gray-900 dark:text-white backdrop-blur-md">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Proposal By</p>
                                        <p className="text-gray-900 dark:text-white text-lg font-bold">Sreemathi D</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-14 h-14 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/50 flex items-center justify-center text-gray-900 dark:text-white backdrop-blur-md">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Email</p>
                                        <a href="mailto:sriruha06@gmail.com" className="text-gray-900 dark:text-white text-lg font-bold hover:text-brand-500 transition-colors">sriruha06@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-14 h-14 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/50 flex items-center justify-center text-gray-900 dark:text-white backdrop-blur-md">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Phone</p>
                                        <a href="tel:+916385850887" className="text-gray-900 dark:text-white text-lg font-bold hover:text-brand-500 transition-colors">+91 6385850887</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl">
                            <form className="space-y-5 sm:space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted! We will contact you soon.'); }}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase block mb-2">Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-brand-500 transition-all text-base" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase block mb-2">Company</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-brand-500 transition-all text-base" placeholder="Acme Corp" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase block mb-2 mt-2 sm:mt-4">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-brand-500 transition-all text-base" placeholder="john@example.com" required />
                                </div>
                                <div>
                                    <label className="text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase block mb-2 mt-2 sm:mt-4">Message</label>
                                    <textarea rows={3} className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-brand-500 transition-all resize-none text-base" placeholder="How can we help?" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gray-900 text-white dark:bg-white dark:text-black font-bold py-3 sm:py-4 rounded-xl hover:!text-white hover:bg-gradient-to-r hover:from-[#40c9ff] hover:to-[#e81cff] transition-all duration-300 mt-4 tracking-wide shadow-md hover:shadow-xl text-base sm:text-lg">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 border-t border-gray-200 dark:border-white/10 pt-8">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Takeinteki Logo" width="160" height="40" className="h-8 w-auto" />
                    <span className="font-bold text-gray-900 dark:text-white tracking-tight text-lg">Takeinteki</span>
                </div>
                
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    &copy; 2026 Takeinteki. All rights reserved.
                </div>
                
                <div className="mt-4 md:mt-0">
                    <a href="https://www.takeinteki.com" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
                        www.takeinteki.com
                    </a>
                </div>
            </div>
        </section>
    );
}

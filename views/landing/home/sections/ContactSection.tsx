"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cta-100/40 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-4 md:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Call to Action */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
                                Ready to see <br /> <span className="text-brand-600">Sh<span className="text-cta-500">o</span>rp in action?</span>
                            </h2>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-lg">
                                Schedule a 15-minute demo with our team. We&apos;ll show you how Sh<span className="text-cta-500">o</span>rp can specifically solve your business challenges and help you grow.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-[2rem] bg-brand-50 border border-brand-100 space-y-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-white shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-brand-900 text-lg">Pick a Time</h4>
                                    <p className="text-neutral-500 text-sm">Choose a slot that works for your schedule.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-white shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-brand-900 text-lg">Live Tour</h4>
                                    <p className="text-neutral-500 text-sm">EPOSsys is intuitive, fast, and requires zero technical skill to get started. Join the retail revolution today.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-800 flex items-center justify-center text-white shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-brand-900 text-lg">Q&A Session</h4>
                                    <p className="text-neutral-500 text-sm">Get all your questions answered by our experts.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Simple Contact Form / Get Started */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-brand-900/10 border border-neutral-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-900 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-neutral-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-900 ml-1">Business Name</label>
                                    <input
                                        type="text"
                                        placeholder="Glow Boutique"
                                        className="w-full px-6 py-4 rounded-xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-neutral-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-900 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-neutral-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-900 ml-1">Business Type</label>
                                <select className="w-full px-6 py-4 rounded-xl border border-neutral-100 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all text-neutral-500">
                                    <option>Retail Store</option>
                                    <option>Restaurant / Cafe</option>
                                    <option>Service Business</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 rounded-xl bg-cta-500 hover:bg-cta-400 text-brand-800 font-bold text-lg shadow-lg shadow-cta-500/30 transition-all transform hover:-translate-y-1"
                                onClick={(e) => e.preventDefault()}
                            >
                                Schedule My Free Demo
                            </button>

                            <p className="text-center text-sm text-neutral-400">
                                Already have an account? <a href={process.env.NEXT_PUBLIC_SIGNIN_URL || "#"} className="underline text-brand-800 font-bold">Sign In</a>
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ContactSection;

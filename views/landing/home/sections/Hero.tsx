"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-brand-800">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-700/50 to-transparent pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cta-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                                Smart <span className="text-cta-500">POS</span> for Modern <br className="hidden lg:block" /> Businesses
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            Streamline your operations, manage inventory in real-time, and accept payments seamlessly with our cloud-based point of sale solution. Built for growth, designed for simplicity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
                        >
                            <Link
                                href={process.env.NEXT_PUBLIC_SIGNUP_URL || "#"}
                                className="w-full sm:w-auto bg-cta-500 hover:bg-cta-400 text-brand-800 px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-cta-500/30 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href={process.env.NEXT_PUBLIC_SIGNIN_URL || "#"}
                                className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm text-center"
                            >
                                Sign In
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex items-center justify-center lg:justify-start gap-8 pt-8"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-800 bg-brand-700 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-brand-400 to-brand-600"></div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/60 text-sm">
                                Join <span className="text-white font-bold">2,000+</span> businesses growing with us
                            </p>
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-700 group">
                            <Image
                                src="/images/pos-saas/hero.png"
                                alt="Shorp System Mockup"
                                width={700}
                                height={500}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent pointer-events-none"></div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-brand-950 overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border-4 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container mx-auto px-4 md:px-14 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-cta-500 font-bold tracking-widest text-sm uppercase">Our Mission</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Empowering <span className="text-cta-500">Local Merchants</span> to Compete with Giants
                            </h2>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                Sh<span className="text-cta-500">o</span>rp started with a simple belief: every small business deserves the same powerful technology as the world&apos;s biggest retailers.
                            </p>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                Today, our diverse team of engineers, designers, and retail experts work around the clock to build a platform that is reliable, intuitive, and truly useful for the modern business owner.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-neutral-500 leading-relaxed font-light"
                        >
                            Powerful tools that simplify your daily operations, allowing you to focus on what matters most—growing your brand.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-10 pt-4"
                        >
                            <div>
                                <p className="text-4xl font-bold text-white">2018</p>
                                <p className="text-white/50 text-sm">Founded</p>
                            </div>
                            <div className="h-12 w-px bg-white/20"></div>
                            <div>
                                <p className="text-4xl font-bold text-white">50+</p>
                                <p className="text-white/50 text-sm">Team Members</p>
                            </div>
                            <div className="h-12 w-px bg-white/20"></div>
                            <div>
                                <p className="text-4xl font-bold text-white">2k+</p>
                                <p className="text-white/50 text-sm">Active Stores</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        className="flex-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src="/images/pos-saas/team.png"
                                alt="Shorp Team"
                                width={600}
                                height={500}
                                className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="text-white italic text-lg leading-relaxed font-light">
                                    &quot;Our goal is to erase the complexity of retail tech so merchants can focus on their customers.&quot;
                                </p>
                                <p className="text-cta-500 font-bold mt-3">— Sarah Jenkins, Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

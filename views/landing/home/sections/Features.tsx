"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Features = () => {
    const features = [
        "5-second transaction processing",
        "Offline mode for uninterrupted selling",
        "Integrated QR and contact-less payments",
        "Automated tax calculations",
        "Customer loyalty program integration",
    ];

    return (
        <section className="py-24 bg-brand-50/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-14">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Mockup Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <Image
                                src="/images/pos-saas/inventory.png"
                                alt="Inventory Management Mockup"
                                width={600}
                                height={400}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Background decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight">
                                Powerful <span className="text-brand-600">Checkout</span> Features <br /> for Professional Retail
                            </h2>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed">
                                Experience the speed and reliability that thousands of merchants trust. Our checkout flow is optimized for peak performance during high-traffic hours.
                            </p>
                        </motion.div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-brand-900"
                                >
                                    <CheckCircleIcon className="w-6 h-6 text-cta-500 flex-shrink-0" />
                                    <span className="font-medium">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="pt-6"
                        >
                            <button className="bg-brand-800 hover:bg-brand-900 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-800/20 flex items-center gap-2 group">
                                See all features
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

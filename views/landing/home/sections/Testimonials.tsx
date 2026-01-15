"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Marcus Thompson",
            business: "Thompson Grocery",
            quote: <>Sh<span className="text-cta-500">o</span>rp changed everything for us. Real-time inventory tracking saved us hundreds of dollars in waste in the first month alone.</>,
            avatar: "MT",
        },
        {
            name: "Elena Rodriguez",
            business: "Elena's Boutique",
            quote: "The checkout speed is incredible. Our customers love the QR tap-to-pay feature, and my staff was trained in minutes.",
            avatar: "ER",
        },
        {
            name: "Samual Okafor",
            business: "The Coffee Bean",
            quote: "Reliable, intuitive, and the analytics are gold. I can see my best-selling items from my phone while I'm at home.",
            avatar: "SO",
        },
    ];

    return (
        <section className="py-24 bg-brand-50/50">
            <div className="container mx-auto px-4 md:px-14">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-600 font-bold tracking-widest text-sm uppercase"
                    >
                        Social Proof
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brand-900"
                    >
                        Trusted by <span className="text-brand-600">thousands of merchants</span> worldwide
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-soft border border-neutral-50 flex flex-col space-y-6"
                        >
                            <div className="flex gap-1 text-cta-500">
                                {[...Array(5)].map((_, i) => <FaStar key={i} size={16} />)}
                            </div>
                            <p className="text-brand-900/80 leading-relaxed italic">&quot;{item.quote}&quot;</p>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-white font-bold">
                                    {item.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-900">{item.name}</h4>
                                    <p className="text-neutral-400 text-sm">{item.business}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

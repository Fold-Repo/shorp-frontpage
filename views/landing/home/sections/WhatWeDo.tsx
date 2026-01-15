"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingCartIcon,
    RectangleGroupIcon,
    CreditCardIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";

const WhatWeDo = () => {
    const features = [
        {
            title: "Sales & Checkout",
            description: "Lightning fast checkout experience designed for high-volume retail and restaurants.",
            icon: ShoppingCartIcon,
            color: "from-brand-500 to-brand-700",
        },
        {
            title: "Inventory Management",
            description: "Track stock levels in real-time across multiple locations with low-stock alerts.",
            icon: RectangleGroupIcon,
            color: "from-blue-500 to-blue-700",
        },
        {
            title: "Secure Payments",
            description: "Accept card, QR, and tap-to-pay with integrated high-security encryption.",
            icon: CreditCardIcon,
            color: "from-cta-500 to-cta-700",
        },
        {
            title: "Reports & Analytics",
            description: "Deep insights into your sales performance with customizable real-time reports.",
            icon: ChartBarIcon,
            color: "from-brand-800 to-brand-950",
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-14">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-600 font-bold tracking-widest text-sm uppercase"
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brand-900"
                    >
                        Everything you need to <span className="text-brand-600">run your business</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-500 leading-relaxed font-light"
                    >
                        Powerful tools that simplify your daily operations, allowing you to focus on what matters most—growing your brand.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-lilac group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-3">{feature.title}</h3>
                            <p className="text-neutral-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

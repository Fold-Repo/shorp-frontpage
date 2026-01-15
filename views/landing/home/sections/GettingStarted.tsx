"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

const GettingStarted = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <section className="py-24 bg-brand-950 text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-900/40 -skew-y-6 origin-bottom-left pointer-events-none"></div>

            {/* Ripple Effect Corner */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 pointer-events-none">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1.3,
                            ease: "easeOut"
                        }}
                        className="absolute inset-0 border-2 border-cta-500/30 rounded-full"
                    />
                ))}
                <div className="absolute inset-0 bg-cta-500/5 rounded-full blur-3xl"></div>
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
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Get up and running <br /> <span className="text-cta-500">in minutes</span>
                            </h2>
                            <p className="text-lg text-white/70 font-light leading-relaxed">
                                Watch this short guide to see how easy it is to set up your store,
                                add products, and start selling with Sh<span className="text-cta-500">o</span>rp.
                                Everything you need to master your new POS in under 5 minutes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "One-Click Setup", desc: "Connect your hardware and go." },
                                { title: "Cloud Sync", desc: "Data always safe and available." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-2xl border border-white/10"
                                >
                                    <h4 className="font-bold text-cta-500 mb-1">{item.title}</h4>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Video Player Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 relative group cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                            {/* Video placeholder/image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src="/images/pos-saas/video-thumbnail.png"
                                    alt="Video Preview"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand-950/40 group-hover:bg-brand-950/20 transition-colors duration-500"></div>

                                {/* Play Button */}
                                <div className="relative z-10 w-20 h-20 bg-cta-500 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                                    <PlayIcon className="w-10 h-10 text-brand-900 translate-x-1" />
                                </div>

                                {/* Video UI Overlays */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cta-500 animate-pulse"></div>
                                        Live Overview
                                    </div>
                                    <span>04:32</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -inset-4 bg-cta-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-brand-950/90 backdrop-blur-xl"
                            onClick={() => setIsOpen(false)}
                        ></div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                        >
                            <XMarkIcon className="w-8 h-8" />
                        </button>

                        {/* Iframe Wrapper */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-[110]"
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GettingStarted;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const POSNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-800/90 backdrop-blur-md border-b border-brand-700">
      <div className="container mx-auto px-4 md:px-14">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cta-500 rounded-lg flex items-center justify-center text-brand-900 font-black text-2xl shadow-lg">S</div>
            <span className="text-white text-2xl font-bold tracking-tight">
              Sh<span className="text-cta-500">o</span>rp
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-cta-500 transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-brand-700"></div>
            <Link
              href={process.env.NEXT_PUBLIC_SIGNIN_URL || "#"}
              className="text-white/80 hover:text-white transition-colors font-medium text-sm"
            >
              Sign In
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_SIGNUP_URL || "#"}
              className="bg-cta-500 hover:bg-cta-400 text-brand-800 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-cta-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-800 border-b border-brand-700 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/80 hover:text-cta-500 text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-brand-700" />
              <Link
                href={process.env.NEXT_PUBLIC_SIGNIN_URL || "#"}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-white text-lg font-medium"
              >
                Sign In
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_SIGNUP_URL || "#"}
                onClick={() => setIsOpen(false)}
                className="block bg-cta-500 text-brand-800 px-6 py-3 rounded-xl font-bold text-center shadow-lg"
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default POSNavbar;

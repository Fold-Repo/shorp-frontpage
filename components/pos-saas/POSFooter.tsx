import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const POSFooter = () => {
    return (
        <footer className="bg-brand-950 text-white pt-20 pb-10 border-t border-brand-800">
            <div className="container mx-auto px-4 md:px-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-cta-500 rounded-lg flex items-center justify-center text-brand-900 font-black text-2xl">S</div>
                                <span className="text-white text-2xl font-bold tracking-tight">
                                    Sh<span className="text-cta-500">o</span>rp
                                </span>
                            </Link>
                            <p className="text-white/50 mb-8 max-w-xs leading-relaxed">
                                Empowering retailers with the world&apos;s most intuitive cloud-based point of sale system.
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            <a href="#" className="text-white/40 hover:text-cta-500 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-cta-500 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-cta-500 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-cta-500 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Product</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="#features" className="hover:text-cta-500 transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-cta-500 transition-colors">Pricing</Link></li>
                            <li><Link href="#solutions" className="hover:text-cta-500 transition-colors">Solutions</Link></li>
                            <li><Link href="#integrations" className="hover:text-cta-500 transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="#about" className="hover:text-cta-500 transition-colors">About Us</Link></li>
                            <li><Link href="#careers" className="hover:text-cta-500 transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="hover:text-cta-500 transition-colors">Contact</Link></li>
                            <li><Link href="#privacy" className="hover:text-cta-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>support@shorp.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 SaaS Street, Silicon Valley, CA</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
                    <p>© 2026 Shorp SaaS. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default POSFooter;

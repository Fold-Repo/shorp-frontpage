import React from "react";
import POSNavbar from "@/components/pos-saas/POSNavbar";
import POSFooter from "@/components/pos-saas/POSFooter";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import AboutUs from "./sections/AboutUs";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection";
import GettingStarted from "./sections/GettingStarted";

const HomePage = () => {
  return (
    <div className="bg-white text-neutral-900">
      <POSNavbar />

      <main>
        <Hero />
        <WhatWeDo />
        <GettingStarted />
        <Features />
        <Testimonials />
        <Pricing />
        <AboutUs />
        <ContactSection />
      </main>

      <POSFooter />
    </div>
  );
};

export default HomePage;

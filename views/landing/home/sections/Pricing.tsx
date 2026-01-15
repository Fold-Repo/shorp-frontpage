"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      description: "For new businesses getting started.",
      features: [
        "1 Terminal Included",
        "Up to 100 SKU Items",
        "Basic Sales Reports",
        "Email Support",
        "Cloud Sync Backup",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Standard",
      price: "49",
      description: "Ideal for growing retailers.",
      features: [
        "3 Terminals Included",
        "Unlimited SKU Items",
        "Advanced Analytics",
        "Priority Support",
        "Inventory Alerts",
        "Customer CRM",
      ],
      cta: "Get Started Now",
      popular: true,
    },
    {
      name: "Pro",
      price: "99",
      description: "Scale your empire with ease.",
      features: [
        "Unlimited Terminals",
        "Custom Integrations",
        "Multi-store Management",
        "Account Manager",
        "API Access",
        "White-label Reports",
        "Omni-channel Support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cta-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-14">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-600 font-bold tracking-widest text-sm uppercase"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-900"
          >
            Plans that <span className="text-brand-600">scale with you</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 font-light"
          >
            No hidden fees. No long-term contracts. Just growth-focused pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${plan.popular
                ? "border-cta-400 shadow-2xl shadow-cta-500/10 scale-105 z-10 bg-white"
                : "border-neutral-100 bg-neutral-50/50 hover:border-brand-200"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cta-500 text-brand-800 text-xs font-bold uppercase py-1 px-4 rounded-full tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-brand-900">$</span>
                <span className="text-5xl font-bold text-brand-900">{plan.price}</span>
                <span className="text-neutral-400 text-sm">/mo</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-800 text-sm">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-cta-500" : "text-brand-300"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${plan.popular
                  ? "bg-cta-500 hover:bg-cta-400 text-brand-800 shadow-cta-500/20"
                  : "bg-brand-100 hover:bg-brand-200 text-brand-800"
                  }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-neutral-400 text-sm"
        >
          All plans include a 30-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;

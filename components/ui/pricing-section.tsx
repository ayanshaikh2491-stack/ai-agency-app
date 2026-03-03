"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple Pricing
          </h2>
          <p className="text-gray-400 mt-4">
            Choose the best plan for your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Free */}
          <PricingCard
            title="Individuals"
            price="Free"
            features={[
              "Free email alerts",
              "3-minute checks",
              "Automatic data enrichment",
              "10 monitors",
              "Up to 3 seats"
            ]}
          />

          {/* Most Popular */}
          <PricingCard
            title="Teams"
            price="US$90"
            subtitle="Per month/user"
            popular
            features={[
              "Unlimited phone calls",
              "30 second checks",
              "Single-user account",
              "20 monitors",
              "Up to 6 seats"
            ]}
          />

          {/* Organization */}
          <PricingCard
            title="Organizations"
            price="US$120"
            subtitle="Per month/user"
            features={[
              "Unlimited phone calls",
              "15 second checks",
              "Single-user account",
              "50 monitors",
              "Up to 10 seats"
            ]}
          />

          {/* Enterprise */}
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Everything in Organizations",
              "Up to 5 team members",
              "100 monitors",
              "15 status pages",
              "200+ integrations"
            ]}
            buttonText="Contact Us"
          />

        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
};

function PricingCard({
  title,
  price,
  subtitle,
  features,
  popular,
  buttonText = "Get Started"
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl p-6 border 
        ${popular ? "border-white bg-zinc-900 scale-105" : "border-zinc-800 bg-zinc-950"}
      `}
    >
      {popular && (
        <div className="absolute -top-3 right-4 bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
          Most Popular
        </div>
      )}

      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="mb-6">
        <p className="text-3xl font-bold">{price}</p>
        {subtitle && (
          <p className="text-sm text-gray-400">{subtitle}</p>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
            <Check size={16} className="text-white" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 rounded-lg text-sm font-medium transition
          ${popular
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-zinc-800 hover:bg-zinc-700"
          }
        `}
      >
        {buttonText}
      </button>
    </motion.div>
  );
            }

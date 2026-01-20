"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown } from "lucide-react";

const basicFeatures = [
  "feature1", "feature2", "feature3", "feature4", "feature5",
  "feature6", "feature7", "feature8", "feature9"
];

const premiumFeatures = [
  "feature1", "feature2", "feature3", "feature4",
  "feature5", "feature6", "feature7"
];

export function Pricing() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gold-accent">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-600 mt-8">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="animate-on-scroll">
            <div className="relative h-full bg-white border-2 border-[#0D9488] rounded-3xl p-8 card-hover overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-6 end-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] text-sm font-medium rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {t("pricing.basic.period")}
                </span>
              </div>

              {/* Plan header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("pricing.basic.name")}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text">
                    {t("pricing.basic.price")}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {basicFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0D9488]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#0D9488]" />
                    </div>
                    <span className="text-gray-600">
                      {t(`pricing.basic.${feature}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full bg-[#0D9488] hover:bg-[#0A7B71] text-white font-semibold py-6 transition-all hover:scale-[1.02]"
              >
                {t("pricing.basic.cta")}
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <div className="relative h-full bg-gray-50 border border-gray-200 rounded-3xl p-8 opacity-80">
              {/* Coming Soon overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 rounded-3xl"></div>
              
              {/* Crown badge */}
              <div className="absolute top-6 end-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium rounded-full">
                  <Crown className="w-3 h-3" />
                  {t("pricing.premium.price")}
                </span>
              </div>

              {/* Plan header */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("pricing.premium.name")}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-400">
                    {t("pricing.premium.price")}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="relative space-y-4 mb-8">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-gray-500">
                      {t(`pricing.premium.${feature}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                variant="outline"
                className="relative w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold py-6 transition-all"
                disabled
              >
                {t("pricing.premium.cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

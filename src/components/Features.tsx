"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Palette, Shield, Users, Heart, Puzzle } from "lucide-react";

const features = [
  {
    key: "branding",
    icon: Palette,
    gradient: "from-[#0D9488] to-[#10B981]",
  },
  {
    key: "security",
    icon: Shield,
    gradient: "from-[#0D9488] to-[#0A7B71]",
  },
  {
    key: "management",
    icon: Users,
    gradient: "from-[#D4AF37] to-[#F0D78C]",
  },
  {
    key: "parents",
    icon: Heart,
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
  {
    key: "custom",
    icon: Puzzle,
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
  },
];

export function Features() {
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
    <section id="features" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gold-accent">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-600 mt-8">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-8 card-hover hover:border-[#0D9488]/30">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`features.${feature.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

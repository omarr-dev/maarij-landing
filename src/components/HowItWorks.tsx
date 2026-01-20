"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { UserPlus, BookPlus, ChartLine } from "lucide-react";

const steps = [
  {
    key: "step1",
    icon: UserPlus,
    number: "١",
    numberEn: "1",
  },
  {
    key: "step2",
    icon: BookPlus,
    number: "٢",
    numberEn: "2",
  },
  {
    key: "step3",
    icon: ChartLine,
    number: "٣",
    numberEn: "3",
  },
];

export function HowItWorks() {
  const { t, language } = useLanguage();
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
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#F1F5F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gold-accent">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-gray-600 mt-8">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0D9488] via-[#D4AF37] to-[#0D9488] transform -translate-y-1/2 opacity-20 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {language === "ar" ? step.number : step.numberEn}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-[#0D9488]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`howItWorks.${step.key}.desc`)}
                  </p>

                  {/* Arrow for desktop (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -end-6 transform -translate-y-1/2">
                      <svg
                        className={`w-6 h-6 text-[#D4AF37] ${language === "ar" ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

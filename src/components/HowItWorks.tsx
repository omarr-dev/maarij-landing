"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { UserPlus, BookPlus, ChartLine, Zap } from "lucide-react";

const steps = [
  {
    key: "step1",
    icon: UserPlus,
    number: "١",
    numberEn: "1",
    gradient: "from-[#0D9488] to-[#10B981]",
    bgColor: "bg-[#0D9488]",
  },
  {
    key: "step2",
    icon: BookPlus,
    number: "٢",
    numberEn: "2",
    gradient: "from-[#D4AF37] to-[#F0D78C]",
    bgColor: "bg-[#D4AF37]",
  },
  {
    key: "step3",
    icon: ChartLine,
    number: "٣",
    numberEn: "3",
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
    bgColor: "bg-[#8B5CF6]",
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
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFB] via-[#F1F5F9] to-[#F8FAFB]" />
      
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230D9488' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 start-10 w-64 h-64 bg-gradient-to-br from-[#0D9488]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 end-10 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm font-semibold mb-6 border border-[#D4AF37]/20">
            <Zap className="w-4 h-4" />
            <span>{language === "ar" ? "سهل وسريع" : "Easy & Fast"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-1">
            <div className="h-full bg-gradient-to-r from-[#0D9488] via-[#D4AF37] to-[#8B5CF6] rounded-full opacity-30" />
            {/* Animated dots on the line */}
            <div className="absolute top-1/2 left-0 w-3 h-3 -translate-y-1/2 bg-[#0D9488] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 right-0 w-3 h-3 -translate-y-1/2 bg-[#8B5CF6] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="group relative bg-white rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-3 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-[#0D9488]/10 border border-gray-100/50">
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                  
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[${step.bgColor}]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {language === "ar" ? step.number : step.numberEn}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mt-6 mb-6 flex justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="relative text-gray-600 leading-relaxed">
                    {t(`howItWorks.${step.key}.desc`)}
                  </p>

                  {/* Arrow for desktop (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -end-8 w-16 h-8 items-center justify-center">
                      <svg
                        className={`w-8 h-8 text-gray-300 ${language === "ar" ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Indicator */}
        <div className="mt-16 text-center animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-lg border border-gray-100">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${i === 1 ? 'bg-[#0D9488]' : i === 2 ? 'bg-[#D4AF37]' : 'bg-[#8B5CF6]'}`}>
                  {i === 1 ? '👤' : i === 2 ? '📖' : '📊'}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              {language === "ar" ? "كن من أوائل المنضمين إلينا" : "Be among the first to join us"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, ArrowRight, ArrowLeft, Gift } from "lucide-react";

const basicFeatures = [
  "feature1", "feature2", "feature3", "feature4", "feature5",
  "feature6", "feature7", "feature8", "feature9"
];

const premiumFeatures = [
  "feature1", "feature2", "feature3", "feature4",
  "feature5", "feature6", "feature7"
];

export function Pricing() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;

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
    <section id="pricing" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFB] to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0D9488]/20 to-transparent" />
      <div className="absolute top-20 end-10 w-72 h-72 bg-gradient-to-br from-[#0D9488]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 start-10 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 start-20 w-4 h-4 bg-[#0D9488]/20 rounded-full animate-float" />
      <div className="absolute bottom-1/3 end-24 w-3 h-3 bg-[#D4AF37]/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-semibold mb-6 border border-[#0D9488]/20">
            <Gift className="w-4 h-4" />
            <span>{language === "ar" ? "جرب مجاناً" : "Try Free"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Basic Plan - Featured */}
          <div className="animate-on-scroll">
            <div className="group relative h-full bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#0D9488]/25 hover:shadow-[#0D9488]/40 overflow-hidden">
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20.5V18H0v-2h20V0h2v16h18v2H22v4.5h18v2H22V40h-2V24.5H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Popular badge */}
              <div className="absolute top-6 end-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  {t("pricing.basic.period")}
                </span>
              </div>

              {/* Plan header */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("pricing.basic.name")}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold text-white">
                    {t("pricing.basic.price")}
                  </span>
                </div>
                <p className="text-white/70 mt-2 text-sm">
                  {language === "ar" ? "بدون أي رسوم خفية" : "No hidden fees"}
                </p>
              </div>

              {/* Features */}
              <ul className="relative space-y-4 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li 
                    key={feature} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">
                      {t(`pricing.basic.${feature}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="relative w-full bg-white text-[#0D9488] hover:bg-white/90 font-bold py-6 text-lg transition-all hover:scale-[1.02] shadow-lg"
              >
                <Link href="/register" className="flex items-center justify-center gap-2">
                  {t("pricing.basic.cta")}
                  <Arrow className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Premium Plan - Coming Soon */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.15s" }}>
            <div className="group relative h-full bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 shadow-lg shadow-gray-100/50 hover:shadow-xl overflow-hidden">
              {/* Crown badge */}
              <div className="absolute top-6 end-6 z-20">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold rounded-full border border-[#D4AF37]/20">
                  <Crown className="w-4 h-4" />
                  {language === "ar" ? "باقة مميزة" : "Premium"}
                </span>
              </div>
              
              {/* Coming Soon badge */}
              <div className="absolute top-6 start-6 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F0D78C] rounded-full text-white text-sm font-bold shadow-lg shadow-[#D4AF37]/30">
                  <Crown className="w-4 h-4" />
                  <span>{language === "ar" ? "قريباً" : "Coming Soon"}</span>
                </div>
              </div>

              {/* Plan header */}
              <div className="relative mb-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t("pricing.premium.name")}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-[#D4AF37]">
                    {t("pricing.premium.price")}
                  </span>
                </div>
                <p className="text-gray-500 mt-2 text-sm flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                  <span>{language === "ar" ? "نعمل على تطوير مميزات حصرية للباقة المميزة" : "We're developing exclusive premium features"}</span>
                </p>
              </div>

              {/* Features */}
              <ul className="relative space-y-4">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {t(`pricing.premium.${feature}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">{language === "ar" ? "إعداد فوري" : "Instant Setup"}</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0D9488] rounded-full" />
              <span className="text-sm text-gray-600">{language === "ar" ? "بدون بطاقة ائتمان" : "No Credit Card"}</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <span className="text-sm text-gray-600">{language === "ar" ? "دعم فني ٢٤/٧" : "24/7 Support"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

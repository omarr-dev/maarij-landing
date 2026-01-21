"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Users, BookOpen, Shield } from "lucide-react";

export function Hero() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-start animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{language === "ar" ? "منصة سعودية متكاملة" : "Complete Saudi Platform"}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t("hero.title")}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#0D9488] hover:bg-[#0A7B71] text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105 shadow-lg shadow-[#0D9488]/30"
              >
                <Link href="/register">
                  {t("hero.cta")}
                  <Arrow className="w-5 h-5 ms-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 hover:border-[#0D9488] hover:text-[#0D9488] font-semibold px-8 py-6 text-lg transition-all"
                onClick={() => scrollToSection("features")}
              >
                {t("hero.secondaryCta")}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                {language === "ar" ? "موثوق من قبل" : "Trusted by"}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0D9488]" />
                  <span className="text-sm text-gray-600">
                    {language === "ar" ? "حماية كاملة" : "Fully Secure"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#0D9488]" />
                  <span className="text-sm text-gray-600">
                    {language === "ar" ? "+١٠٠ جمعية" : "100+ Associations"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0D9488] rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {language === "ar" ? "لوحة التحكم" : "Dashboard"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {language === "ar" ? "نظرة عامة" : "Overview"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#0D9488]">٢٥</div>
                    <div className="text-xs text-gray-600">
                      {language === "ar" ? "حلقة" : "Circles"}
                    </div>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#0D9488]">١٥٠</div>
                    <div className="text-xs text-gray-600">
                      {language === "ar" ? "طالب" : "Students"}
                    </div>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#0D9488]">٣٠</div>
                    <div className="text-xs text-gray-600">
                      {language === "ar" ? "معلم" : "Teachers"}
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        {language === "ar" ? "نسبة الحضور" : "Attendance Rate"}
                      </span>
                      <span className="font-medium text-[#0D9488]">٩٢٪</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-[#0D9488] to-[#10B981] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        {language === "ar" ? "التقدم الشهري" : "Monthly Progress"}
                      </span>
                      <span className="font-medium text-[#D4AF37]">٧٨٪</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-[#D4AF37] to-[#F0D78C] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-3 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {language === "ar" ? "طالب جديد" : "New Student"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === "ar" ? "تم التسجيل بنجاح" : "Registered successfully"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating gold accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D4AF37]/20 rounded-2xl transform rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

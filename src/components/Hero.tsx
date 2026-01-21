"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, BookOpen, Users, GraduationCap, Trophy, TrendingUp, AlertTriangle } from "lucide-react";

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

          </div>

          {/* Dashboard Mockup - Enhanced to show real features */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-5 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-xl flex items-center justify-center shadow-lg shadow-[#0D9488]/20">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {language === "ar" ? "لوحة التحكم" : "Dashboard"}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {language === "ar" ? "حيَّاك الله، أحمد" : "Welcome, Ahmed"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Stats Cards - Like real dashboard */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-blue-50 rounded-xl p-3 text-center group hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-7 h-7 mx-auto mb-1.5 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">١٢</div>
                    <div className="text-[10px] text-gray-500">
                      {language === "ar" ? "حلقة" : "Circles"}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center group hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-7 h-7 mx-auto mb-1.5 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">٨٥</div>
                    <div className="text-[10px] text-gray-500">
                      {language === "ar" ? "طالب" : "Students"}
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 text-center group hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-7 h-7 mx-auto mb-1.5 bg-purple-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">١٨</div>
                    <div className="text-[10px] text-gray-500">
                      {language === "ar" ? "معلم" : "Teachers"}
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-3 text-center group hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-7 h-7 mx-auto mb-1.5 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">٩٤٪</div>
                    <div className="text-[10px] text-gray-500">
                      {language === "ar" ? "حضور" : "Attendance"}
                    </div>
                  </div>
                </div>

                {/* Top Halaqat Rankings - Real feature */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      {language === "ar" ? "أفضل الحلقات" : "Top Circles"}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: language === "ar" ? "حلقة النور" : "Al-Noor", score: "٩٧" },
                      { name: language === "ar" ? "حلقة الفجر" : "Al-Fajr", score: "٩٢" },
                      { name: language === "ar" ? "حلقة الإيمان" : "Al-Iman", score: "٨٨" },
                    ].map((halaqa, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/70 rounded-lg px-2.5 py-1.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            i === 0 ? 'bg-yellow-200 text-yellow-800' : 
                            i === 1 ? 'bg-gray-200 text-gray-700' : 
                            'bg-orange-200 text-orange-800'
                          }`}>
                            {i + 1}
                          </div>
                          <span className="text-xs font-medium text-gray-700">{halaqa.name}</span>
                        </div>
                        <span className="text-xs font-bold text-[#0D9488]">{halaqa.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats Bar */}
                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#0D9488]">٢٤</div>
                    <div className="text-[9px] text-gray-500">{language === "ar" ? "حفظ اليوم" : "Today's Hifz"}</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#0D9488]">٣٨</div>
                    <div className="text-[9px] text-gray-500">{language === "ar" ? "مراجعة" : "Review"}</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#0D9488]">٧٢</div>
                    <div className="text-[9px] text-gray-500">{language === "ar" ? "حضور" : "Present"}</div>
                  </div>
                </div>
              </div>

              {/* Floating At-Risk Alert */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 transform rotate-2 border-l-4 border-red-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      {language === "ar" ? "٣ طلاب يحتاجون متابعة" : "3 students need attention"}
                    </p>
                    <p className="text-[10px] text-red-500 font-medium">
                      {language === "ar" ? "غياب متكرر" : "Frequent absence"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge */}
              <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-md px-3 py-1.5 transform -rotate-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-medium text-gray-600">
                    {language === "ar" ? "متصل الآن" : "Live now"}
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#0D9488]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

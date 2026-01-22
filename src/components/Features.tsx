"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Palette, Shield, Users, Heart, Puzzle, Sparkles, Target } from "lucide-react";

const features = [
  {
    key: "branding",
    icon: Palette,
    gradient: "from-[#0D9488] to-[#10B981]",
    bgGlow: "bg-[#0D9488]/10",
    iconBg: "bg-gradient-to-br from-[#0D9488] to-[#10B981]",
  },
  {
    key: "security",
    icon: Shield,
    gradient: "from-[#0D9488] to-[#0A7B71]",
    bgGlow: "bg-[#0D9488]/10",
    iconBg: "bg-gradient-to-br from-[#0D9488] to-[#0A7B71]",
    featured: true,
  },
  {
    key: "management",
    icon: Users,
    gradient: "from-[#D4AF37] to-[#F0D78C]",
    bgGlow: "bg-[#D4AF37]/10",
    iconBg: "bg-gradient-to-br from-[#D4AF37] to-[#F0D78C]",
  },
  {
    key: "parents",
    icon: Heart,
    gradient: "from-[#EC4899] to-[#F472B6]",
    bgGlow: "bg-[#EC4899]/10",
    iconBg: "bg-gradient-to-br from-[#EC4899] to-[#F472B6]",
  },
  {
    key: "planning",
    icon: Target,
    gradient: "from-[#F97316] to-[#FB923C]",
    bgGlow: "bg-[#F97316]/10",
    iconBg: "bg-gradient-to-br from-[#F97316] to-[#FB923C]",
  },
  {
    key: "custom",
    icon: Puzzle,
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
    bgGlow: "bg-[#8B5CF6]/10",
    iconBg: "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]",
  },
];

export function Features() {
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
      id="features" 
      ref={sectionRef} 
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFB] to-white" />
      
      {/* Islamic Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 start-10 w-72 h-72 bg-gradient-to-br from-[#0D9488]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 start-1/4 w-48 h-48 bg-gradient-to-br from-[#EC4899]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Animated Floating Shapes */}
      <div className="absolute top-32 end-20 w-4 h-4 bg-[#D4AF37]/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 start-16 w-3 h-3 bg-[#0D9488]/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 end-32 w-5 h-5 bg-[#EC4899]/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-semibold mb-6 border border-[#0D9488]/20">
            <Sparkles className="w-4 h-4" />
            <span>{language === "ar" ? "مميزات حصرية" : "Exclusive Features"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("features.title")}
            <span className="block mt-2 relative">
              <span className="relative z-10">{language === "ar" ? "من حلقاتك" : ""}</span>
              <svg className="absolute -bottom-2 start-1/2 -translate-x-1/2 w-48 h-3 text-[#D4AF37]" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 100 4 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className={`animate-on-scroll ${feature.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`
                  group relative h-full rounded-3xl p-8 transition-all duration-500
                  ${feature.featured 
                    ? 'bg-gradient-to-br from-[#0D9488] to-[#0A7B71] text-white shadow-2xl shadow-[#0D9488]/25 hover:shadow-[#0D9488]/40' 
                    : 'bg-white border border-gray-100/80 hover:border-[#0D9488]/30 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-[#0D9488]/10'
                  }
                  hover:-translate-y-2
                `}
              >
                {/* Subtle Pattern on Featured Card */}
                {feature.featured && (
                  <div 
                    className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20.5V18H0v-2h20V0h2v16h18v2H22v4.5h18v2H22V40h-2V24.5H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                )}
                
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-0.5 ${feature.featured ? 'bg-gradient-to-r from-[#D4AF37] to-[#0D9488]' : 'bg-gradient-to-r from-[#0D9488] to-[#D4AF37]'} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                      ${feature.featured 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : `${feature.iconBg} shadow-lg`
                      }
                    `}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.featured ? 'text-white' : 'text-white'}`} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${feature.featured ? 'text-white' : 'text-gray-900'}`}>
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className={`leading-relaxed ${feature.featured ? 'text-white/90' : 'text-gray-600'}`}>
                    {t(`features.${feature.key}.desc`)}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${feature.featured ? 'text-[#D4AF37]' : 'text-[#0D9488]'}`}>
                    <span>{language === "ar" ? "اعرف المزيد" : "Learn more"}</span>
                    <svg className={`w-4 h-4 transition-transform ${language === "ar" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll" style={{ animationDelay: "0.5s" }}>
          <p className="text-gray-500 mb-4">
            {language === "ar" ? "والمزيد من المميزات الحصرية..." : "And many more exclusive features..."}
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-900/20"
          >
            <span>{language === "ar" ? "ابدأ الآن مجاناً" : "Start Free Now"}</span>
            <svg className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

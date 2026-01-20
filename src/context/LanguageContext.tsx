"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const translations = {
  ar: {
    // Navbar
    "nav.logo": "معارج",
    "nav.features": "المميزات",
    "nav.howItWorks": "كيف يعمل",
    "nav.pricing": "الباقات",
    "nav.cta": "سجّل جمعيتك",

    // Hero
    "hero.title": "المنصة الاحترافية لإدارة حلقاتك",
    "hero.subtitle": "نظام متكامل لإدارة حلقات تحفيظ القرآن الكريم بكفاءة عالية وتجربة مستخدم استثنائية",
    "hero.cta": "ابدأ الآن مجاناً",
    "hero.secondaryCta": "تعرف على المميزات",

    // Features
    "features.title": "مميزات تطوّر من حلقاتك",
    "features.subtitle": "كل ما تحتاجه لإدارة حلقاتك باحترافية",
    "features.branding.title": "تخصيص كامل للهوية البصرية ونطاق خاص",
    "features.branding.desc": "خصّص ألوان وشعار منصتك بما يتناسب مع هوية جمعيتك",
    "features.security.title": "عزل تام للبيانات مع أعلى معايير الأمان",
    "features.security.desc": "بياناتك محمية بأحدث تقنيات التشفير والأمان",
    "features.management.title": "إدارة شاملة للحلقات والطلاب والمعلمين",
    "features.management.desc": "تابع تقدم الطلاب وأداء المعلمين من لوحة تحكم واحدة",
    "features.parents.title": "إشراك ولي الأمر في المنظومة التعليمية",
    "features.parents.desc": "تواصل مباشر مع أولياء الأمور وتقارير دورية عن تقدم أبنائهم",
    "features.custom.title": "إمكانية إضافة وتخصيص أي ميزة",
    "features.custom.desc": "نظام مرن يتكيف مع احتياجات جمعيتك الخاصة",

    // How it works
    "howItWorks.title": "٩٠ ثانية ونظامك جاهز تلقائياً",
    "howItWorks.subtitle": "ثلاث خطوات بسيطة لبدء رحلتك معنا",
    "howItWorks.step1.title": "سجّل جمعيتك",
    "howItWorks.step1.desc": "أنشئ حساب جمعيتك بخطوات بسيطة",
    "howItWorks.step2.title": "أضف حلقاتك",
    "howItWorks.step2.desc": "أضف الحلقات والمعلمين والطلاب",
    "howItWorks.step3.title": "ابدأ بالمتابعة",
    "howItWorks.step3.desc": "تابع التقدم واستلم التقارير",

    // Pricing
    "pricing.title": "الباقات",
    "pricing.subtitle": "اختر الباقة المناسبة لاحتياجات جمعيتك",
    "pricing.basic.name": "أساسي",
    "pricing.basic.price": "مجاني",
    "pricing.basic.period": "لأول شركاء النجاح",
    "pricing.basic.cta": "ابدأ الآن",
    "pricing.basic.feature1": "إدارة شاملة للحلقات",
    "pricing.basic.feature2": "موقع للمعلمين والمشرفين",
    "pricing.basic.feature3": "عدد لا محدود من الحلقات",
    "pricing.basic.feature4": "عدد لا محدود من الطلاب",
    "pricing.basic.feature5": "عدد لا محدود من المعلمين",
    "pricing.basic.feature6": "تخصيص كامل للهوية البصرية",
    "pricing.basic.feature7": "نطاق خاص",
    "pricing.basic.feature8": "تقارير شاملة",
    "pricing.basic.feature9": "تصدير البيانات Excel",

    "pricing.premium.name": "الارتقاء",
    "pricing.premium.price": "قريباً",
    "pricing.premium.period": "",
    "pricing.premium.cta": "انضم لقائمة الانتظار",
    "pricing.premium.feature1": "كل مميزات الباقة الأساسية",
    "pricing.premium.feature2": "إشعارات واتساب تلقائية لأولياء الأمور",
    "pricing.premium.feature3": "بوت واتساب لأولياء الأمور",
    "pricing.premium.feature4": "تطبيق iOS/Android للمعلمين",
    "pricing.premium.feature5": "نظام اختبارات",
    "pricing.premium.feature6": "إصدار شهادات",
    "pricing.premium.feature7": "مساعد ذكاء اصطناعي",

    // Footer
    "footer.tagline": "منصة احترافية لإدارة حلقات تحفيظ القرآن الكريم",
    "footer.links": "روابط سريعة",
    "footer.contact": "تواصل معنا",
    "footer.legal": "قانوني",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.cr": "السجل التجاري",
    "footer.crNumber": "7053364373",
    "footer.madeWith": "صُنع بـ ❤️ في السعودية",
    "footer.copyright": "© ٢٠٢٦ معارج. جميع الحقوق محفوظة",
  },
  en: {
    // Navbar
    "nav.logo": "Maarij",
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.cta": "Register Your Association",

    // Hero
    "hero.title": "The Professional Platform for Managing Your Circles",
    "hero.subtitle": "A comprehensive system for managing Quran memorization circles with high efficiency and exceptional user experience",
    "hero.cta": "Start Free Now",
    "hero.secondaryCta": "Explore Features",

    // Features
    "features.title": "Features That Elevate Your Circles",
    "features.subtitle": "Everything you need to manage your circles professionally",
    "features.branding.title": "Full Visual Identity Customization & Custom Domain",
    "features.branding.desc": "Customize your platform's colors and logo to match your association's identity",
    "features.security.title": "Complete Data Isolation with Highest Security Standards",
    "features.security.desc": "Your data is protected with the latest encryption and security technologies",
    "features.management.title": "Comprehensive Management for Circles, Students & Teachers",
    "features.management.desc": "Track student progress and teacher performance from a single dashboard",
    "features.parents.title": "Parent Involvement in the Educational System",
    "features.parents.desc": "Direct communication with parents and periodic reports on their children's progress",
    "features.custom.title": "Ability to Add and Customize Any Feature",
    "features.custom.desc": "A flexible system that adapts to your association's specific needs",

    // How it works
    "howItWorks.title": "90 Seconds and Your System is Ready",
    "howItWorks.subtitle": "Three simple steps to start your journey with us",
    "howItWorks.step1.title": "Register Your Association",
    "howItWorks.step1.desc": "Create your association account in simple steps",
    "howItWorks.step2.title": "Add Your Circles",
    "howItWorks.step2.desc": "Add circles, teachers, and students",
    "howItWorks.step3.title": "Start Tracking",
    "howItWorks.step3.desc": "Track progress and receive reports",

    // Pricing
    "pricing.title": "Pricing Plans",
    "pricing.subtitle": "Choose the plan that fits your association's needs",
    "pricing.basic.name": "Basic",
    "pricing.basic.price": "Free",
    "pricing.basic.period": "For Early Success Partners",
    "pricing.basic.cta": "Start Now",
    "pricing.basic.feature1": "Comprehensive circle management",
    "pricing.basic.feature2": "Portal for teachers and supervisors",
    "pricing.basic.feature3": "Unlimited circles",
    "pricing.basic.feature4": "Unlimited students",
    "pricing.basic.feature5": "Unlimited teachers",
    "pricing.basic.feature6": "Full visual identity customization",
    "pricing.basic.feature7": "Custom domain",
    "pricing.basic.feature8": "Comprehensive reports",
    "pricing.basic.feature9": "Excel data export",

    "pricing.premium.name": "Premium",
    "pricing.premium.price": "Coming Soon",
    "pricing.premium.period": "",
    "pricing.premium.cta": "Join Waitlist",
    "pricing.premium.feature1": "All Basic plan features",
    "pricing.premium.feature2": "Automatic WhatsApp notifications for parents",
    "pricing.premium.feature3": "WhatsApp bot for parents",
    "pricing.premium.feature4": "iOS/Android app for teachers",
    "pricing.premium.feature5": "Testing system",
    "pricing.premium.feature6": "Certificate issuance",
    "pricing.premium.feature7": "AI assistant",

    // Footer
    "footer.tagline": "A professional platform for managing Quran memorization circles",
    "footer.links": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.cr": "Commercial Registration",
    "footer.crNumber": "7053364373",
    "footer.madeWith": "Made with ❤️ in Saudi Arabia",
    "footer.copyright": "© 2026 Maarij. All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLang = localStorage.getItem("maarij-language") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update document direction and save to localStorage
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("maarij-language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

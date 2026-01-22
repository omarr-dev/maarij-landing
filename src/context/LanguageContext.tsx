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
    "features.title": "مميزات تطوّر",
    "features.subtitle": "كل ما تحتاجه لإدارة حلقاتك باحترافية",
    "features.branding.title": "تخصيص كامل للهوية البصرية ونطاق خاص",
    "features.branding.desc": "خصّص ألوان وشعار منصتك بما يتناسب مع هوية جمعيتك",
    "features.security.title": "عزل تام للبيانات مع أعلى معايير الأمان",
    "features.security.desc": "بياناتك محمية بأحدث تقنيات التشفير والأمان",
    "features.management.title": "إدارة شاملة للحلقات والطلاب والمعلمين",
    "features.management.desc": "تابع تقدم الطلاب وأداء المعلمين من لوحة تحكم واحدة",
    "features.parents.title": "إشراك ولي الأمر في المنظومة التعليمية",
    "features.parents.desc": "رسائل واتساب تلقائية لأولياء الأمور وتقارير دورية عن تقدم أبنائهم",
    "features.planning.title": "تخطيط المنهج وتتبع الإنجاز",
    "features.planning.desc": "ضع خططاً وأهدافاً للطلاب وتابع تقدمهم وإنجازاتهم يومياً مع تقارير شاملة",
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

    // Registration Page
    "register.pageTitle": "سجّل جمعيتك",
    "register.pageSubtitle": "كن من أوائل الجمعيات التي تنضم لمنصة معارج",
    "register.associationInfo": "معلومات الجمعية",
    "register.managerInfo": "معلومات المشرف الرئيسي",
    "register.associationName": "اسم الجمعية",
    "register.associationNamePlaceholder": "مثال: جمعية تحفيظ القرآن الكريم",
    "register.subdomain": "الرابط الفرعي",
    "register.subdomainPlaceholder": "مثال: my-association",
    "register.subdomainHint": "سيكون رابط جمعيتك: {subdomain}.maarij.sa",
    "register.description": "وصف الجمعية",
    "register.descriptionPlaceholder": "اكتب وصفاً مختصراً عن جمعيتك وأهدافها...",
    "register.country": "الدولة",
    "register.countryPlaceholder": "المملكة العربية السعودية",
    "register.city": "المدينة",
    "register.cityPlaceholder": "مثال: الرياض",
    "register.logo": "رابط الشعار",
    "register.logoPlaceholder": "https://example.com/logo.png",
    "register.email": "البريد الإلكتروني",
    "register.emailPlaceholder": "info@association.com",
    "register.managerName": "اسم المشرف",
    "register.managerNamePlaceholder": "الاسم الكامل",
    "register.managerPhone": "رقم الجوال",
    "register.managerPhonePlaceholder": "+966 5XX XXX XXXX",
    "register.managerPhoneHint": "رقم سعودي يبدأ بـ +966 5",
    "register.submit": "تسجيل الجمعية",
    "register.submitting": "جارٍ التسجيل...",
    "register.required": "مطلوب",
    "register.optional": "اختياري",
    "register.backToHome": "العودة للرئيسية",
    "register.success.title": "تم التسجيل بنجاح! 🎉",
    "register.success.message": "تم إنشاء جمعيتك بنجاح. يمكنك الآن تسجيل الدخول من الرابط التالي:",
    "register.success.loginUrl": "رابط تسجيل الدخول",
    "register.success.goToLogin": "الذهاب لتسجيل الدخول",
    "register.error.title": "حدث خطأ",
    "register.error.tryAgain": "حاول مرة أخرى",
    "register.validation.associationName": "اسم الجمعية مطلوب",
    "register.validation.subdomain": "الرابط الفرعي مطلوب",
    "register.validation.subdomainFormat": "الرابط الفرعي يجب أن يحتوي على أحرف إنجليزية وأرقام وشرطات فقط",
    "register.validation.managerName": "اسم المشرف مطلوب",
    "register.validation.managerPhone": "رقم الجوال مطلوب",
    "register.validation.phoneFormat": "يجب أن يكون رقم سعودي يبدأ بـ +966 5",
    "register.validation.emailFormat": "البريد الإلكتروني غير صالح",
    "register.features.title": "ماذا ستحصل عليه؟",
    "register.features.1": "نظام متكامل لإدارة الحلقات",
    "register.features.2": "نطاق خاص بجمعيتك",
    "register.features.3": "تخصيص كامل للهوية البصرية",
    "register.features.4": "تقارير وإحصائيات شاملة",
    "register.features.5": "دعم فني على مدار الساعة",
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
    "features.planning.title": "Curriculum Planning & Achievement Tracking",
    "features.planning.desc": "Set plans and goals for students and track their daily progress and achievements with comprehensive reports",
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

    // Registration Page
    "register.pageTitle": "Register Your Association",
    "register.pageSubtitle": "Be among the first associations to join Maarij platform",
    "register.associationInfo": "Association Information",
    "register.managerInfo": "Main Supervisor Information",
    "register.associationName": "Association Name",
    "register.associationNamePlaceholder": "e.g., Quran Memorization Association",
    "register.subdomain": "Subdomain",
    "register.subdomainPlaceholder": "e.g., my-association",
    "register.subdomainHint": "Your URL will be: {subdomain}.maarij.sa",
    "register.description": "Description",
    "register.descriptionPlaceholder": "Write a brief description about your association...",
    "register.country": "Country",
    "register.countryPlaceholder": "Saudi Arabia",
    "register.city": "City",
    "register.cityPlaceholder": "e.g., Riyadh",
    "register.logo": "Logo URL",
    "register.logoPlaceholder": "https://example.com/logo.png",
    "register.email": "Email",
    "register.emailPlaceholder": "info@association.com",
    "register.managerName": "Manager Name",
    "register.managerNamePlaceholder": "Full Name",
    "register.managerPhone": "Phone Number",
    "register.managerPhonePlaceholder": "+966 5XX XXX XXXX",
    "register.managerPhoneHint": "Saudi number starting with +966 5",
    "register.submit": "Register Association",
    "register.submitting": "Registering...",
    "register.required": "Required",
    "register.optional": "Optional",
    "register.backToHome": "Back to Home",
    "register.success.title": "Registration Successful! 🎉",
    "register.success.message": "Your association has been created successfully. You can now log in using the following link:",
    "register.success.loginUrl": "Login URL",
    "register.success.goToLogin": "Go to Login",
    "register.error.title": "An Error Occurred",
    "register.error.tryAgain": "Try Again",
    "register.validation.associationName": "Association name is required",
    "register.validation.subdomain": "Subdomain is required",
    "register.validation.subdomainFormat": "Subdomain can only contain letters, numbers, and hyphens",
    "register.validation.managerName": "Manager name is required",
    "register.validation.managerPhone": "Phone number is required",
    "register.validation.phoneFormat": "Must be a Saudi number starting with +966 5",
    "register.validation.emailFormat": "Invalid email address",
    "register.features.title": "What will you get?",
    "register.features.1": "Complete circle management system",
    "register.features.2": "Custom domain for your association",
    "register.features.3": "Full visual identity customization",
    "register.features.4": "Comprehensive reports and analytics",
    "register.features.5": "24/7 technical support",
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

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

    // Trusted By
    "trustedBy.title": "جمعيات ومجمّعات تثق بمعارج",
    "trustedBy.subtitle": "نفخر بخدمة نخبة من دور ومجمّعات تحفيظ القرآن الكريم",

    // Hero
    "hero.title": "المنصة الاحترافية لإدارة حلقاتك",
    "hero.subtitle": "نظام متكامل لإدارة حلقات تحفيظ القرآن الكريم بكفاءة عالية وتجربة مستخدم استثنائية",
    "hero.cta": "ابدأ الآن مجاناً",
    "hero.secondaryCta": "تعرف على المميزات",

    // Features (Why Maarij)
    "features.badge": "ليش معارج؟",
    "features.title": "مع معارج،",
    "features.titleHighlight": "تُدار حلقتك كما تستحق",
    "features.subtitle": "منصة سعودية بسيطة تجمع لك المشرف والمعلم والطالب وولي الأمر في مكان واحد",
    "features.allinone.title": "كل شي في مكان واحد",
    "features.allinone.desc": "الحضور والحفظ والمراجعة والتقارير، تلقاها قدامك بشاشة وحدة",
    "features.selftrack.title": "الطالب يتابع نفسه",
    "features.selftrack.desc": "يشوف أهدافه وسلاسل إنجازه ومستوى حفظه، فيحرص على الاستمرار",
    "features.competition.title": "منافسة تشعل الهمم",
    "features.competition.desc": "لوحات ترتيب وسلاسل إنجاز تحفّز طلابك على التميّز",
    "features.tracking.title": "متابعة حفظ دقيقة",
    "features.tracking.desc": "حفظ ومراجعة وتثبيت، وتقييم وهدف يومي لكل طالب",
    "features.parents.title": "ولي الأمر على اطلاع",
    "features.parents.desc": "يوصله تقرير ابنه أول بأول، من غير ما تحتاج تتواصل معه",
    "features.decisions.title": "قرارات مبنية على أرقام",
    "features.decisions.desc": "إحصائيات واضحة تبيّن لك أداء كل حلقة ومعلم وطالب",
    "features.branding.title": "بهويتك أنت",
    "features.branding.desc": "شعارك وألوانك ونطاقك الخاص — منصتك تشبه جمعيتك",
    "features.notifications.title": "إشعارات وقت ما تبي",
    "features.notifications.desc": "تقدر ترسل إشعارات للمعلمين والطلاب متى ما بغيت",
    "features.ui.title": "واجهة رهيبة وسهلة",
    "features.ui.desc": "بسيطة ومتجاوبة تشتغل على كل الأجهزة",

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
    "pricing.basic.period": "مجاناً دائماً",
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
    "register.pageSubtitle": "انضم إلى الجمعيات الرائدة على منصة معارج",
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

    // Trusted By
    "trustedBy.title": "Trusted by leading Quran associations",
    "trustedBy.subtitle": "Proud to serve a select group of Quran memorization centers",

    // Hero
    "hero.title": "The Professional Platform for Managing Your Circles",
    "hero.subtitle": "A comprehensive system for managing Quran memorization circles with high efficiency and exceptional user experience",
    "hero.cta": "Start Free Now",
    "hero.secondaryCta": "Explore Features",

    // Features (Why Maarij)
    "features.badge": "Why Maarij?",
    "features.title": "With Maarij,",
    "features.titleHighlight": "your circle is run as it deserves",
    "features.subtitle": "A simple Saudi platform bringing supervisor, teacher, student, and parent together in one place",
    "features.allinone.title": "Everything in one place",
    "features.allinone.desc": "Attendance, memorization, revision, and reports — all in front of you on one screen",
    "features.selftrack.title": "Students track themselves",
    "features.selftrack.desc": "They see their goals, streaks, and level — so they stay motivated to keep going",
    "features.competition.title": "Healthy competition",
    "features.competition.desc": "Leaderboards and achievement streaks push your students to excel",
    "features.tracking.title": "Precise memorization tracking",
    "features.tracking.desc": "Memorization, revision & consolidation, with grading and a daily goal for each student",
    "features.parents.title": "Parents stay informed",
    "features.parents.desc": "Reports on their child reach them firsthand — without you reaching out",
    "features.decisions.title": "Decisions backed by numbers",
    "features.decisions.desc": "Clear statistics showing you the performance of every circle, teacher, and student",
    "features.branding.title": "Your own identity",
    "features.branding.desc": "Your logo, colors, and custom domain — a platform that looks like your association",
    "features.notifications.title": "Notifications anytime",
    "features.notifications.desc": "Send notifications to teachers and students whenever you want",
    "features.ui.title": "Beautiful, easy interface",
    "features.ui.desc": "Simple and responsive, works on every device",

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
    "pricing.basic.period": "Always Free",
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
    "register.pageSubtitle": "Join the leading associations on Maarij platform",
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

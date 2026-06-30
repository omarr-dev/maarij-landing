"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Check,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Gift,
  Building2,
  Smartphone,
} from "lucide-react";

type Loc = { ar: string; en: string };

const WHATSAPP_URL = "https://wa.me/966530904715";

// ── Professional plan size tiers ──────────────────────────────
const sizeTiers: {
  id: string;
  label: Loc;
  monthly: Loc;
  yearly: Loc;
}[] = [
  {
    id: "100",
    label: { ar: "حتى ١٠٠ طالب", en: "Up to 100 students" },
    monthly: { ar: "٩٩", en: "99" },
    yearly: { ar: "٩٩٠", en: "990" },
  },
  {
    id: "250",
    label: { ar: "حتى ٢٥٠ طالب", en: "Up to 250 students" },
    monthly: { ar: "١٩٩", en: "199" },
    yearly: { ar: "١٬٩٩٠", en: "1,990" },
  },
  {
    id: "500",
    label: { ar: "حتى ٥٠٠ طالب", en: "Up to 500 students" },
    monthly: { ar: "٢٩٩", en: "299" },
    yearly: { ar: "٢٬٩٩٠", en: "2,990" },
  },
];

const freeFeatures: Loc[] = [
  { ar: "حتى ٢٥ طالب", en: "Up to 25 students" },
  { ar: "إدارة الحلقات والطلاب والمعلمين", en: "Manage circles, students & teachers" },
  { ar: "متابعة الحفظ والمراجعة والحضور", en: "Track memorization, revision & attendance" },
  { ar: "تقارير أساسية", en: "Basic reports" },
  { ar: "موقع للمعلمين والمشرفين", en: "Portal for teachers & supervisors" },
];

const proFeatures: Loc[] = [
  { ar: "كل مزايا الباقة المجانية، وأكثر", en: "Everything in Free, and more" },
  { ar: "إعداد وترحيل بياناتكم", en: "Setup & data migration" },
  { ar: "عدد الطلاب حسب الباقة", en: "Student capacity per plan" },
  { ar: "تخصيص كامل للهوية + نطاق خاص", en: "Full branding + custom domain" },
  { ar: "إشعارات واتساب لأولياء الأمور", en: "WhatsApp notifications for parents" },
  { ar: "خطط وأهداف وتقارير متقدمة", en: "Plans, goals & advanced reports" },
  { ar: "نظام اختبارات وإصدار شهادات", en: "Testing system & certificates" },
  { ar: "تصدير Excel", en: "Excel export" },
];

const enterpriseFeatures: Loc[] = [
  { ar: "كل مزايا الباقة الاحترافية", en: "Everything in Professional" },
  { ar: "عدد طلاب بلا حدود", en: "Unlimited students" },
  { ar: "مدير حساب مخصص", en: "Dedicated account manager" },
  { ar: "دعم ٢٤/٧ واتفاقية مستوى خدمة", en: "24/7 support with SLA" },
  { ar: "تكامل API", en: "API integration" },
  { ar: "إعداد وترحيل بياناتكم", en: "Setup & data migration" },
];

const appFeatures: Loc[] = [
  { ar: "تطبيق جوال باسم الجمعية", en: "Mobile app under your name" },
  { ar: "إرسال إشعارات للمعلمين والطلاب", en: "Push notifications to teachers & students" },
  { ar: "يُنشر في App Store و Google Play بهويتكم", en: "Published on App Store & Google Play" },
];

export function Pricing() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;
  const ar = language === "ar";
  const tr = (l: Loc) => (ar ? l.ar : l.en);

  const [yearly, setYearly] = useState(true);
  const [size, setSize] = useState(sizeTiers[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const proPrice = yearly ? tr(size.yearly) : tr(size.monthly);
  const proPeriod = yearly ? (ar ? "/سنة" : "/yr") : ar ? "/شهر" : "/mo";

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFB] to-white" />
      <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0D9488]/20 to-transparent" />
      <div className="absolute top-20 end-10 w-72 h-72 bg-gradient-to-br from-[#0D9488]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 start-10 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-semibold mb-6 border border-[#0D9488]/20">
            <Gift className="w-4 h-4" />
            <span>{ar ? "ابدأ مجاناً" : "Start Free"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-2xl shadow-lg border border-gray-100">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                !yearly
                  ? "bg-[#0D9488] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {ar ? "شهري" : "Monthly"}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                yearly
                  ? "bg-[#0D9488] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {ar ? "سنوي" : "Yearly"}
              <span
                className={`ms-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  yearly ? "bg-white/20 text-white" : "bg-[#D4AF37]/15 text-[#B8941F]"
                }`}
              >
                {ar ? "شهران مجاناً" : "2 months free"}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {/* ── Free Plan ── */}
          <div className="animate-on-scroll">
            <div className="group relative h-full bg-white border-2 border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-lg shadow-gray-100/50 hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {ar ? "المجاني" : "Free"}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-extrabold text-gray-900">
                  {ar ? "٠" : "0"}
                </span>
                <span className="text-gray-500 font-medium">
                  {ar ? "ريال" : "SAR"}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-8">
                {ar ? "للأبد — بدون أي رسوم" : "Forever — no fees"}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {freeFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{tr(f)}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-800 hover:bg-gray-50 font-bold py-6 text-lg"
              >
                <Link href="/register" className="flex items-center justify-center gap-2">
                  {ar ? "ابدأ الآن" : "Start Now"}
                  <Arrow className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ── Professional Plan (Featured) ── */}
          <div className="animate-on-scroll lg:-mt-4" style={{ animationDelay: "0.1s" }}>
            <div className="group relative h-full bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#0D9488]/30 hover:shadow-[#0D9488]/45 overflow-hidden flex flex-col">
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20.5V18H0v-2h20V0h2v16h18v2H22v4.5h18v2H22V40h-2V24.5H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <h3 className="relative text-2xl font-bold text-white mb-2 text-center mt-2">
                {ar ? "الاحترافية" : "Professional"}
              </h3>

              {/* Size selector */}
              <div className="relative flex justify-center gap-1.5 mb-6">
                {sizeTiers.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      size.id === s.id
                        ? "bg-white text-[#0D9488] shadow"
                        : "bg-white/15 text-white/90 hover:bg-white/25"
                    }`}
                  >
                    {ar ? s.id + " طالب" : s.id}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="relative text-center mb-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-extrabold text-white">{proPrice}</span>
                  <span className="text-white/80 font-medium">
                    {ar ? "ريال" : "SAR"}
                    {proPeriod}
                  </span>
                </div>
              </div>
              <p className="relative text-white/70 text-sm text-center mb-8">
                {tr(size.label)}
                {yearly && (ar ? " · شهران مجاناً" : " · 2 months free")}
              </p>

              <ul className="relative space-y-3.5 mb-8 flex-1">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">{tr(f)}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="relative w-full bg-white text-[#0D9488] hover:bg-white/90 font-bold py-6 text-lg shadow-lg hover:scale-[1.02] transition-all"
              >
                <Link href="/register" className="flex items-center justify-center gap-2">
                  {ar ? "اشترك الآن" : "Subscribe Now"}
                  <Arrow className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ── Enterprise Plan ── */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="group relative h-full bg-white border-2 border-gray-200 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-lg shadow-gray-100/50 hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {ar ? "المؤسسات" : "Enterprise"}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">
                  {ar ? "حسب الحجم" : "Custom"}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-8">
                {ar ? "أكثر من ١٠٠٠ طالب — تسعير مخصص" : "1000+ students — custom pricing"}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {enterpriseFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#B8941F]" />
                    </div>
                    <span className="text-gray-700 font-medium">{tr(f)}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 font-bold py-6 text-lg"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {ar ? "تواصل معنا" : "Contact Us"}
                  <Building2 className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ── Mobile App Add-on ── */}
        <div className="mt-10 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-[#0F2A28] p-8 lg:p-10 shadow-2xl">
            <div className="absolute top-0 end-0 w-80 h-80 bg-[#0D9488]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 start-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
              {/* Left: title + features */}
              <div className="flex-1 text-center lg:text-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/15 rounded-full text-[#F0D78C] text-xs font-bold mb-4 border border-[#D4AF37]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {ar ? "إضافة اختيارية" : "Optional Add-on"}
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3 flex items-center justify-center lg:justify-start gap-3">
                  <Smartphone className="w-7 h-7 text-[#0D9488]" />
                  {ar ? "تطبيق جوال باسم جمعيتكم" : "Mobile app under your name"}
                </h3>
                <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-2">
                  {appFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                      {tr(f)}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-xs mt-3">
                  {ar
                    ? "يشمل النشر والصيانة والتحديثات"
                    : "Includes publishing, maintenance & updates"}
                </p>
              </div>

              {/* Right: price */}
              <div className="flex-shrink-0 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[240px]">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-white">
                    {ar ? "٣٤٩" : "349"}
                  </span>
                  <span className="text-white/70 font-medium">
                    {ar ? "ريال/شهر" : "SAR/mo"}
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  {ar
                    ? "+ رسوم تأسيس ٩٩٠ ريال (لمرة واحدة)"
                    : "+ 990 SAR setup (one-time)"}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#0D9488] text-white hover:bg-[#0A7B71] font-bold"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {ar ? "أضف التطبيق" : "Add the app"}
                    <Arrow className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 text-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">{ar ? "إعداد فوري" : "Instant Setup"}</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0D9488] rounded-full" />
              <span className="text-sm text-gray-600">
                {ar ? "إلغاء في أي وقت" : "Cancel anytime"}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <span className="text-sm text-gray-600">{ar ? "دعم فني متواصل" : "Ongoing support"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  LayoutGrid,
  BookOpen,
  UserCheck,
  Trophy,
  BarChart3,
  Palette,
  Heart,
  Bell,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Chapter = {
  key: string;
  icon: LucideIcon;
  accent: string; // hex
  iconBg: string;
};

const chapters: Chapter[] = [
  { key: "allinone", icon: LayoutGrid, accent: "#0D9488", iconBg: "bg-gradient-to-br from-[#0D9488] to-[#0A7B71]" },
  { key: "tracking", icon: BookOpen, accent: "#10B981", iconBg: "bg-gradient-to-br from-[#10B981] to-[#34D399]" },
  { key: "selftrack", icon: UserCheck, accent: "#D4AF37", iconBg: "bg-gradient-to-br from-[#D4AF37] to-[#F0D78C]" },
  { key: "competition", icon: Trophy, accent: "#F97316", iconBg: "bg-gradient-to-br from-[#F97316] to-[#FB923C]" },
  { key: "decisions", icon: BarChart3, accent: "#3B82F6", iconBg: "bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]" },
  { key: "branding", icon: Palette, accent: "#8B5CF6", iconBg: "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]" },
];

const extras = [
  { key: "parents", icon: Heart, iconBg: "bg-gradient-to-br from-[#EC4899] to-[#F472B6]" },
  { key: "notifications", icon: Bell, iconBg: "bg-gradient-to-br from-[#06B6D4] to-[#22D3EE]" },
  { key: "ui", icon: Sparkles, iconBg: "bg-gradient-to-br from-[#14B8A6] to-[#5EEAD4]" },
];

/* ---------- Visual mockups per chapter ---------- */
function Visual({ chapterKey, language }: { chapterKey: string; language: string }) {
  const ar = language === "ar";

  if (chapterKey === "allinone") {
    return (
      <div className="w-full">
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { n: "١٢", l: ar ? "حلقات" : "Circles", c: "text-[#0D9488]" },
            { n: "٨٥", l: ar ? "طلاب" : "Students", c: "text-[#D4AF37]" },
            { n: "١٨", l: ar ? "معلمين" : "Teachers", c: "text-[#F97316]" },
            { n: "٩٤٪", l: ar ? "حضور" : "Attend." , c: "text-[#10B981]" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-gray-50 p-2 text-center">
              <div className={`text-xl font-extrabold ${s.c}`}>{s.n}</div>
              <div className="text-[10px] text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-gray-50 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-gray-600">{ar ? "الحفظ هذا الأسبوع" : "Memorization this week"}</span>
            <span className="text-[10px] text-[#10B981] font-bold">▲ ١٨٪</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {[45, 70, 55, 85, 60, 95, 75].map((h, i) => (
              <div key={i} className="growbar flex-1 rounded-t bg-gradient-to-t from-[#0D9488] to-[#34D399]" style={{ height: `${h}%`, animationDelay: `${0.3 + i * 0.06}s` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (chapterKey === "tracking") {
    return (
      <div className="w-full space-y-3">
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#059669] text-xs font-bold">{ar ? "حفظ جديد" : "New"}</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">{ar ? "مراجعة" : "Revision"}</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">{ar ? "تثبيت" : "Consolidation"}</span>
        </div>
        <div className="rounded-xl bg-gray-50 p-4">
          <div className="text-sm font-bold text-gray-800 mb-1">{ar ? "سورة البقرة" : "Al-Baqarah"}</div>
          <div className="text-xs text-gray-500 mb-3">{ar ? "من آية ٢٥ إلى آية ٤٠" : "Ayah 25 → 40"}</div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{ar ? "التقييم" : "Grade"}</span>
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#B8860B] text-xs font-bold">★ {ar ? "ممتاز" : "Excellent"}</span>
          </div>
        </div>
      </div>
    );
  }

  if (chapterKey === "selftrack") {
    const goals = [
      { l: ar ? "حفظ" : "Memorization", v: 80, c: "#10B981" },
      { l: ar ? "مراجعة" : "Revision", v: 100, c: "#3B82F6" },
      { l: ar ? "تثبيت" : "Consolidation", v: 60, c: "#F97316" },
    ];
    return (
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-[#D4AF37]/10 px-4 py-2">
          <span className="text-sm font-bold text-gray-800">{ar ? "سلسلة الإنجاز" : "Streak"}</span>
          <span className="text-sm font-extrabold text-[#B8860B]">🔥 {ar ? "١٢ يوم" : "12 days"}</span>
        </div>
        {goals.map((g) => (
          <div key={g.l} className="rounded-xl bg-gray-50 p-3">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-semibold text-gray-700">{g.l}</span>
              <span className="text-gray-400">{g.v}٪</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${g.v}%`, background: g.c }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (chapterKey === "competition") {
    const rows = [
      { r: "🥇", n: ar ? "عبدالله" : "Abdullah", s: ar ? "٢١ يوم" : "21d" },
      { r: "🥈", n: ar ? "محمد" : "Mohammed", s: ar ? "١٨ يوم" : "18d" },
      { r: "🥉", n: ar ? "يوسف" : "Yusuf", s: ar ? "١٥ يوم" : "15d" },
    ];
    return (
      <div className="w-full space-y-2">
        <div className="text-sm font-bold text-gray-700 mb-1">{ar ? "لوحة الترتيب" : "Leaderboard"}</div>
        {rows.map((row, i) => (
          <div key={row.n} className={`flex items-center justify-between rounded-xl p-3 ${i === 0 ? "bg-[#F97316]/10" : "bg-gray-50"}`}>
            <div className="flex items-center gap-3">
              <span className="text-lg">{row.r}</span>
              <span className="text-sm font-semibold text-gray-800">{row.n}</span>
            </div>
            <span className="text-xs font-bold text-[#F97316]">🔥 {row.s}</span>
          </div>
        ))}
      </div>
    );
  }

  if (chapterKey === "decisions") {
    return (
      <div className="w-full space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="text-[10px] text-gray-500">{ar ? "معدل الحضور" : "Attendance"}</div>
            <div className="text-lg font-extrabold text-[#3B82F6]">٩٤٪</div>
          </div>
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="text-[10px] text-gray-500">{ar ? "حفظ أسبوعي" : "Weekly memo."}</div>
            <div className="text-lg font-extrabold text-[#10B981]">٣٢٠ {ar ? "سطر" : "lines"}</div>
          </div>
        </div>
        <div className="rounded-xl bg-gray-50 p-3">
          <svg viewBox="0 0 200 60" className="w-full h-16" preserveAspectRatio="none">
            <polyline points="0,45 33,35 66,40 99,20 132,28 165,12 200,18" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points="0,45 33,35 66,40 99,20 132,28 165,12 200,18 200,60 0,60" fill="#3B82F6" opacity="0.08" />
          </svg>
        </div>
      </div>
    );
  }

  // branding
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ms-2 text-xs text-gray-500 font-mono" dir="ltr">jamiati.maarij.sa</span>
      </div>
      <div className="rounded-xl bg-gray-50 p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center text-white font-extrabold">ج</div>
        <div>
          <div className="text-sm font-bold text-gray-800">{ar ? "جمعيتك" : "Your Association"}</div>
          <div className="text-[11px] text-gray-500">{ar ? "شعارك ونطاقك الخاص" : "Your logo & domain"}</div>
        </div>
      </div>
      <div className="flex gap-2">
        {["#8B5CF6", "#0D9488", "#D4AF37", "#EC4899"].map((c) => (
          <div key={c} className="flex-1 h-8 rounded-lg" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

export function Features() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    chapterRefs.current.forEach((el) => el && observer.observe(el));

    // Scroll-reveal entrance animation (adds .rv-in when a chapter enters view)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    const revealTargets = document.querySelectorAll("#features [data-reveal]");
    revealTargets.forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const activeChapter = chapters[active];

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <style>{`
        @keyframes vfade{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}
        .vfade{animation:vfade .45s cubic-bezier(.22,1,.36,1) both}
        .rv{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1)}
        .rv-in .rv{opacity:1;transform:none}
        @keyframes growBar{from{transform:scaleY(0)}to{transform:scaleY(1)}}
        .rv-in .growbar{animation:growBar .7s cubic-bezier(.22,1,.36,1) both;transform-origin:bottom}
      `}</style>
      {/* Background (clipped in its own wrapper so it doesn't break sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFB] to-white" />
        <div className="absolute top-20 start-10 w-72 h-72 bg-gradient-to-br from-[#0D9488]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-semibold mb-6 border border-[#0D9488]/20">
            <Sparkles className="w-4 h-4" />
            <span>{t("features.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {t("features.title")}
            <span className="block mt-2 relative">
              <span className="relative z-10">{t("features.titleHighlight")}</span>
              <svg className="absolute -bottom-2 start-1/2 -translate-x-1/2 w-48 h-3 text-[#D4AF37]" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 100 4 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>

        {/* Scrollytelling */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Chapters column */}
          <div>
            {chapters.map((ch, idx) => (
              <div
                key={ch.key}
                data-idx={idx}
                data-reveal
                ref={(el) => { chapterRefs.current[idx] = el; }}
                className="lg:min-h-[62vh] flex flex-col justify-center py-10 lg:py-8"
              >
                {/* Inline visual on mobile */}
                <div className="rv lg:hidden mb-6 rounded-3xl bg-white border border-gray-100 shadow-xl p-5">
                  <Visual chapterKey={ch.key} language={language} />
                </div>

                <div className="rv flex items-center gap-3 mb-4" style={{ transitionDelay: "0.08s" }}>
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-extrabold"
                    style={{ background: ch.accent }}
                  >
                    {idx + 1}
                  </span>
                  <div className={`w-11 h-11 rounded-xl ${ch.iconBg} shadow-lg flex items-center justify-center`}>
                    <ch.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="rv text-2xl lg:text-4xl font-extrabold text-gray-900 mb-4" style={{ transitionDelay: "0.16s" }}>{t(`features.${ch.key}.title`)}</h3>
                <p className="rv text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg" style={{ transitionDelay: "0.24s" }}>{t(`features.${ch.key}.desc`)}</p>
              </div>
            ))}
          </div>

          {/* Sticky visual column (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                <div
                  className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-20 transition-colors duration-500"
                  style={{ background: activeChapter.accent }}
                />
                <div key={activeChapter.key} className="vfade relative rounded-3xl bg-white border border-gray-100 shadow-2xl p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`w-8 h-8 rounded-lg ${activeChapter.iconBg} flex items-center justify-center`}>
                      <activeChapter.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{t(`features.${activeChapter.key}.title`)}</span>
                  </div>
                  <Visual chapterKey={activeChapter.key} language={language} />
                </div>
                {/* progress dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {chapters.map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? 24 : 8,
                        background: i === active ? activeChapter.accent : "#D1D5DB",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extras strip */}
        <div data-reveal className="mt-6 lg:mt-8 grid sm:grid-cols-3 gap-4">
          {extras.map((ex, i) => (
            <div key={ex.key} className="rv flex items-start gap-3 rounded-2xl bg-white border border-gray-100 shadow-sm p-4" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`shrink-0 w-10 h-10 rounded-xl ${ex.iconBg} shadow flex items-center justify-center`}>
                <ex.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{t(`features.${ex.key}.title`)}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{t(`features.${ex.key}.desc`)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

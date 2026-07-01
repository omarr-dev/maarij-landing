"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Tenant logos live in /public/logos. `alt` is what screen readers announce.
// To add a tenant: drop the file in public/logos and add a line here.
const logos: { src: string; alt: string }[] = [
  { src: "/logos/tenant-2.jpg", alt: "مجمع بصائر التعليمي" },
  { src: "/logos/tenant-4.jpg", alt: "مجمع منارات لتحفيظ القرآن" },
  { src: "/logos/tenant-6.jpg", alt: "جامع البراء بن مالك" },
  { src: "/logos/tenant-7.png", alt: "مجمع حلقات جامع الجويعد" },
  { src: "/logos/tenant-3.jpg", alt: "مجمع تعلّم" },
  { src: "/logos/tenant-1.png", alt: "جمعية لتحفيظ القرآن الكريم" },
  { src: "/logos/tenant-5.png", alt: "جمعية لتحفيظ القرآن الكريم" },
];

export function TrustedBy() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-12 lg:py-16 border-y border-gray-100 bg-white">
      {/* Caption */}
      <p className="animate-on-scroll text-center text-base md:text-lg font-medium text-gray-600 mb-10 px-4">
        {t("trustedBy.subtitle")}
      </p>

      {/* Auto-scrolling logo line — pauses on hover, faded edges */}
      <div dir="ltr" className="marquee-group marquee-mask overflow-hidden">
        {/*
          The track scrolls left by exactly half its width, so the two halves
          must be identical AND each half must be wider than the viewport or a
          gap appears mid-loop. 7 logos (~1300px) is narrower than a desktop,
          so we lay down 4 base copies (2 per half). Only the first set is
          announced to assistive tech; the rest are decorative duplicates.
        */}
        <div className="marquee-track flex">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              aria-hidden={i >= logos.length}
              className="group shrink-0 flex items-center justify-center h-28 w-48 sm:w-52 me-4 sm:me-5 rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={i < logos.length ? logo.alt : ""}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

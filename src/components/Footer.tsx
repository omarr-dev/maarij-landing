"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img 
                  src="/maarij_favicon.svg" 
                  alt="Maarij Logo" 
                  className="w-12 h-12"
                />
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t("nav.logo")}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0D9488] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0D9488] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.links")}</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-[#0D9488] transition-colors"
                >
                  {t("nav.features")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-400 hover:text-[#0D9488] transition-colors"
                >
                  {t("nav.howItWorks")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-[#0D9488] transition-colors"
                >
                  {t("nav.pricing")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#0D9488]" />
                <span>info@maarij.sa</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#0D9488]" />
                <span dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#0D9488]" />
                <span>
                  {language === "ar"
                    ? "المملكة العربية السعودية"
                    : "Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#0D9488] transition-colors"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#0D9488] transition-colors"
                >
                  {t("footer.terms")}
                </a>
              </li>
              <li className="text-gray-400">
                {t("footer.cr")}: <span dir="ltr">{t("footer.crNumber")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}

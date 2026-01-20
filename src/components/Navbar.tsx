"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl md:text-3xl font-bold gradient-text"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {t("nav.logo")}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.howItWorks")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.pricing")}
            </button>
          </div>

          {/* Right Side - Language Toggle & CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#0D9488] hover:bg-[#0D9488]/5 transition-all text-sm font-medium"
            >
              <Globe className="w-4 h-4 text-[#0D9488]" />
              <span className="hidden sm:inline">
                {language === "ar" ? "EN" : "عربي"}
              </span>
            </button>

            {/* CTA Button - Desktop */}
            <Button
              className="hidden md:flex bg-[#0D9488] hover:bg-[#0A7B71] text-white font-semibold px-6 transition-all hover:scale-105"
              onClick={() => scrollToSection("pricing")}
            >
              {t("nav.cta")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-start px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-start px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.howItWorks")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-start px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-colors font-medium"
            >
              {t("nav.pricing")}
            </button>
            <Button
              className="w-full bg-[#0D9488] hover:bg-[#0A7B71] text-white font-semibold py-3 transition-all"
              onClick={() => scrollToSection("pricing")}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

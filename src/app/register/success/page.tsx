"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function SuccessContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const loginUrl = searchParams.get("loginUrl") || "https://r.maarij.sa";

  useEffect(() => {
    // Fire Google Ads conversion event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17902349140/2jg3CPu_8PAbENTWwNhC",
        transaction_id: "",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("register.success.title")}
          </h1>
          <p className="text-gray-600 mb-6">{t("register.success.message")}</p>

          <div className="bg-[#F1F5F9] rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-500 mb-2">
              {t("register.success.loginUrl")}
            </p>
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D9488] font-medium hover:underline break-all"
            >
              {loginUrl}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="flex-1 bg-[#0D9488] hover:bg-[#0A7B71] text-white"
            >
              <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                {t("register.success.goToLogin")}
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/">{t("register.backToHome")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RegisterSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9] flex items-center justify-center p-4">
          <div className="w-full max-w-lg">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

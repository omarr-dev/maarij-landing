import type { Metadata } from "next";
import { Cairo, Noto_Sans_Arabic } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const GA_MEASUREMENT_ID = "G-2JRB37TX1S";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "معارج | المنصة الاحترافية لإدارة حلقات تحفيظ القرآن الكريم",
  description:
    "منصة سعودية متكاملة لإدارة حلقات تحفيظ القرآن الكريم بكفاءة عالية. تخصيص كامل للهوية البصرية، إدارة شاملة للحلقات والطلاب والمعلمين، وتقارير متقدمة.",
  keywords: [
    "حلقات تحفيظ",
    "تحفيظ القرآن",
    "إدارة الحلقات",
    "منصة تعليمية",
    "معارج",
    "Maarij",
    "Quran memorization",
    "circle management",
  ],
  authors: [{ name: "Maarij" }],
  creator: "Maarij",
  icons: {
    icon: "/maarij_favicon.svg",
    shortcut: "/maarij_favicon.svg",
    apple: "/maarij_favicon.svg",
  },
  openGraph: {
    title: "معارج | المنصة الاحترافية لإدارة حلقات تحفيظ القرآن الكريم",
    description:
      "منصة سعودية متكاملة لإدارة حلقات تحفيظ القرآن الكريم بكفاءة عالية",
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "معارج | المنصة الاحترافية لإدارة حلقات تحفيظ القرآن الكريم",
    description:
      "منصة سعودية متكاملة لإدارة حلقات تحفيظ القرآن الكريم بكفاءة عالية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${cairo.variable} ${notoSansArabic.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

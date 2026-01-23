"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Scale,
  Gavel,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Shield,
  MessageSquare
} from "lucide-react";

export default function TermsPage() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowRight : ArrowLeft;

  const sections = [
    {
      icon: CheckCircle2,
      titleAr: "قبول الشروط",
      titleEn: "Acceptance of Terms",
      contentAr: [
        "باستخدامك لمنصة معارج، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
        "إذا كنت تستخدم المنصة نيابة عن جمعية أو مؤسسة، فإنك تقر بأنك مخول بقبول هذه الشروط نيابة عنها.",
        "يجب أن يكون عمرك 18 عاماً أو أكثر لإنشاء حساب على المنصة.",
        "نحتفظ بالحق في تحديث هذه الشروط، وسيتم إخطارك بأي تغييرات جوهرية."
      ],
      contentEn: [
        "By using Maarij platform, you agree to be bound by these terms and conditions.",
        "If using the platform on behalf of an association or organization, you confirm you are authorized to accept these terms on their behalf.",
        "You must be 18 years or older to create an account on the platform.",
        "We reserve the right to update these terms, and you will be notified of any material changes."
      ]
    },
    {
      icon: ShieldCheck,
      titleAr: "الخدمات المقدمة",
      titleEn: "Services Provided",
      contentAr: [
        "منصة إلكترونية لإدارة حلقات تحفيظ القرآن الكريم.",
        "نظام لتسجيل ومتابعة الطلاب والمعلمين.",
        "أدوات لتتبع التقدم وإعداد التقارير.",
        "تخصيص الهوية البصرية والنطاق الفرعي.",
        "نحتفظ بالحق في تعديل أو إيقاف أي ميزة مع إشعار مسبق."
      ],
      contentEn: [
        "An electronic platform for managing Quran memorization circles.",
        "A system for registering and tracking students and teachers.",
        "Tools for tracking progress and generating reports.",
        "Visual identity and subdomain customization.",
        "We reserve the right to modify or discontinue any feature with prior notice."
      ]
    },
    {
      icon: CreditCard,
      titleAr: "الرسوم والدفع",
      titleEn: "Fees and Payment",
      contentAr: [
        "الباقة الأساسية مجانية حالياً لشركاء النجاح الأوائل.",
        "سيتم الإعلان عن أي رسوم مستقبلية بشكل واضح قبل تطبيقها.",
        "جميع الرسوم المدفوعة غير قابلة للاسترداد إلا وفقاً لسياسة الاسترداد.",
        "نحتفظ بالحق في تغيير الأسعار مع إشعار مسبق لا يقل عن 30 يوماً."
      ],
      contentEn: [
        "The basic plan is currently free for early success partners.",
        "Any future fees will be clearly announced before implementation.",
        "All paid fees are non-refundable except according to the refund policy.",
        "We reserve the right to change prices with at least 30 days prior notice."
      ]
    },
    {
      icon: XCircle,
      titleAr: "الاستخدام المحظور",
      titleEn: "Prohibited Use",
      contentAr: [
        "استخدام المنصة لأي غرض غير قانوني أو غير مشروع.",
        "محاولة الوصول غير المصرح به إلى أنظمتنا أو بيانات المستخدمين الآخرين.",
        "نشر محتوى مسيء أو تمييزي أو ينتهك حقوق الآخرين.",
        "إرسال رسائل غير مرغوب فيها (سبام) عبر المنصة.",
        "استخدام برامج آلية أو روبوتات للتفاعل مع المنصة دون إذن.",
        "انتهاك حقوق الملكية الفكرية الخاصة بنا أو بالآخرين."
      ],
      contentEn: [
        "Using the platform for any illegal or unlawful purpose.",
        "Attempting unauthorized access to our systems or other users' data.",
        "Posting offensive, discriminatory content or violating others' rights.",
        "Sending unsolicited messages (spam) through the platform.",
        "Using automated software or bots to interact with the platform without permission.",
        "Violating our or others' intellectual property rights."
      ]
    },
    {
      icon: AlertTriangle,
      titleAr: "إخلاء المسؤولية",
      titleEn: "Disclaimer",
      contentAr: [
        "نقدم المنصة \"كما هي\" دون ضمانات صريحة أو ضمنية.",
        "لا نضمن أن الخدمة ستكون متاحة دائماً أو خالية من الأخطاء.",
        "لسنا مسؤولين عن أي أضرار ناتجة عن استخدام المنصة.",
        "أنت المسؤول عن دقة البيانات التي تدخلها في النظام.",
        "نوصي بالاحتفاظ بنسخ احتياطية من بياناتك المهمة."
      ],
      contentEn: [
        "We provide the platform \"as is\" without express or implied warranties.",
        "We do not guarantee the service will always be available or error-free.",
        "We are not liable for any damages resulting from platform use.",
        "You are responsible for the accuracy of data you enter into the system.",
        "We recommend keeping backups of your important data."
      ]
    },
    {
      icon: RefreshCw,
      titleAr: "إنهاء الخدمة",
      titleEn: "Service Termination",
      contentAr: [
        "يمكنك إلغاء حسابك في أي وقت من خلال التواصل معنا.",
        "نحتفظ بالحق في تعليق أو إنهاء حسابك في حالة انتهاك هذه الشروط.",
        "عند الإنهاء، ستفقد الوصول إلى جميع البيانات المخزنة على المنصة.",
        "يمكنك طلب تصدير بياناتك قبل إنهاء الحساب.",
        "بعض الأحكام قد تبقى سارية بعد إنهاء الخدمة."
      ],
      contentEn: [
        "You can cancel your account at any time by contacting us.",
        "We reserve the right to suspend or terminate your account for violating these terms.",
        "Upon termination, you will lose access to all data stored on the platform.",
        "You can request to export your data before account termination.",
        "Some provisions may survive after service termination."
      ]
    },
    {
      icon: Scale,
      titleAr: "الملكية الفكرية",
      titleEn: "Intellectual Property",
      contentAr: [
        "جميع حقوق الملكية الفكرية للمنصة تعود لشركة معارج.",
        "لا يحق لك نسخ أو تعديل أو توزيع أي جزء من المنصة.",
        "العلامات التجارية والشعارات ملك لأصحابها.",
        "تحتفظ بملكية البيانات التي تدخلها في المنصة.",
        "تمنحنا ترخيصاً لاستخدام بياناتك لتقديم الخدمات."
      ],
      contentEn: [
        "All intellectual property rights of the platform belong to Maarij.",
        "You may not copy, modify, or distribute any part of the platform.",
        "Trademarks and logos are property of their respective owners.",
        "You retain ownership of the data you enter into the platform.",
        "You grant us a license to use your data to provide services."
      ]
    },
    {
      icon: Gavel,
      titleAr: "القانون الحاكم",
      titleEn: "Governing Law",
      contentAr: [
        "تخضع هذه الشروط لأنظمة المملكة العربية السعودية.",
        "أي نزاعات ستحل وفقاً للأنظمة السعودية المعمول بها.",
        "المحاكم السعودية لها الاختصاص القضائي الحصري.",
        "نشجع على حل النزاعات ودياً قبل اللجوء للقضاء."
      ],
      contentEn: [
        "These terms are governed by the laws of Saudi Arabia.",
        "Any disputes will be resolved according to applicable Saudi regulations.",
        "Saudi courts have exclusive jurisdiction.",
        "We encourage amicable dispute resolution before litigation."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9]">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0D9488] transition-colors mb-8 group"
        >
          <Arrow className="w-4 h-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
          {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8982E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
              </h1>
              <p className="text-gray-500">
                {language === "ar" ? "آخر تحديث: يناير ٢٠٢٦" : "Last updated: January 2026"}
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {language === "ar" 
              ? "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة معارج. باستخدامك للمنصة، فإنك توافق على الالتزام بهذه الشروط."
              : "Please read these terms and conditions carefully before using Maarij platform. By using the platform, you agree to be bound by these terms."
            }
          </p>

          {/* Quick summary */}
          <div className="mt-6 p-4 bg-[#FEF9E7] border border-[#D4AF37]/30 rounded-xl">
            <p className="text-sm text-[#8B7355] font-medium">
              {language === "ar" 
                ? "💡 ملخص سريع: هذه الشروط تحكم استخدامك لمنصة معارج لإدارة حلقات تحفيظ القرآن الكريم. باستخدامك للخدمة، فإنك توافق على احترام قواعد الاستخدام وحماية بيانات المستخدمين."
                : "💡 Quick Summary: These terms govern your use of Maarij platform for managing Quran memorization circles. By using the service, you agree to respect usage rules and protect user data."
              }
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-fade-in-up hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  section.icon === XCircle || section.icon === AlertTriangle
                    ? "bg-red-100"
                    : section.icon === CheckCircle2 || section.icon === ShieldCheck
                    ? "bg-green-100"
                    : "bg-[#0D9488]/10"
                }`}>
                  <section.icon className={`w-5 h-5 ${
                    section.icon === XCircle || section.icon === AlertTriangle
                      ? "text-red-600"
                      : section.icon === CheckCircle2 || section.icon === ShieldCheck
                      ? "text-green-600"
                      : "text-[#0D9488]"
                  }`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {language === "ar" ? section.titleAr : section.titleEn}
                </h2>
              </div>
              <ul className="space-y-3">
                {(language === "ar" ? section.contentAr : section.contentEn).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8982E] rounded-2xl shadow-xl p-8 mt-8 text-white animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6" />
            <h2 className="text-xl font-bold">
              {language === "ar" ? "أسئلة؟" : "Questions?"}
            </h2>
          </div>
          <p className="opacity-90 mb-4">
            {language === "ar" 
              ? "إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:"
              : "If you have any questions about these terms and conditions, please contact us:"
            }
          </p>
          <a 
            href="mailto:legal@maarij.sa" 
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            legal@maarij.sa
          </a>
        </div>

        {/* Related links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link 
            href="/privacy"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg text-gray-700 hover:text-[#0D9488] transition-all"
          >
            <Shield className="w-5 h-5" />
            {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          {language === "ar" 
            ? "بالتسجيل في معارج، فإنك تقر بأنك قرأت وفهمت ووافقت على هذه الشروط والأحكام."
            : "By registering on Maarij, you acknowledge that you have read, understood, and agreed to these Terms and Conditions."
          }
        </p>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowLeft, 
  ArrowRight, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Mail,
  Globe,
  Clock
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowRight : ArrowLeft;

  const sections = [
    {
      icon: Database,
      titleAr: "المعلومات التي نجمعها",
      titleEn: "Information We Collect",
      contentAr: [
        "معلومات التسجيل: اسم الجمعية، النطاق الفرعي، البريد الإلكتروني، اسم المشرف، رقم الهاتف.",
        "معلومات الحلقات: بيانات الطلاب والمعلمين، سجلات الحضور، تقارير التقدم.",
        "معلومات تقنية: عنوان IP، نوع المتصفح، نظام التشغيل، صفحات الزيارة.",
        "ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم."
      ],
      contentEn: [
        "Registration information: Association name, subdomain, email, manager name, phone number.",
        "Circle information: Student and teacher data, attendance records, progress reports.",
        "Technical information: IP address, browser type, operating system, pages visited.",
        "Cookies to improve user experience."
      ]
    },
    {
      icon: Eye,
      titleAr: "كيف نستخدم معلوماتك",
      titleEn: "How We Use Your Information",
      contentAr: [
        "توفير وإدارة خدمات منصة معارج.",
        "التواصل معك بخصوص حسابك والتحديثات الهامة.",
        "تحسين وتطوير خدماتنا بناءً على أنماط الاستخدام.",
        "ضمان أمان المنصة ومنع الاحتيال.",
        "الامتثال للمتطلبات القانونية والتنظيمية."
      ],
      contentEn: [
        "Providing and managing Maarij platform services.",
        "Communicating with you about your account and important updates.",
        "Improving and developing our services based on usage patterns.",
        "Ensuring platform security and preventing fraud.",
        "Complying with legal and regulatory requirements."
      ]
    },
    {
      icon: Lock,
      titleAr: "حماية البيانات",
      titleEn: "Data Protection",
      contentAr: [
        "نستخدم تشفير SSL/TLS لحماية البيانات أثناء النقل.",
        "بياناتك مخزنة على خوادم آمنة مع نسخ احتياطية منتظمة.",
        "نطبق مبدأ العزل التام للبيانات بين الجمعيات المختلفة.",
        "نجري مراجعات أمنية دورية لضمان حماية بياناتك.",
        "نقيد الوصول إلى البيانات على الموظفين المصرح لهم فقط."
      ],
      contentEn: [
        "We use SSL/TLS encryption to protect data in transit.",
        "Your data is stored on secure servers with regular backups.",
        "We apply complete data isolation between different associations.",
        "We conduct regular security reviews to ensure data protection.",
        "We restrict data access to authorized personnel only."
      ]
    },
    {
      icon: UserCheck,
      titleAr: "مشاركة البيانات",
      titleEn: "Data Sharing",
      contentAr: [
        "لا نبيع أو نؤجر معلوماتك الشخصية لأي طرف ثالث.",
        "قد نشارك البيانات مع مزودي الخدمات الموثوقين (الاستضافة، التحليلات) وفقاً لاتفاقيات صارمة.",
        "قد نفصح عن البيانات عند الطلب القانوني من السلطات المختصة.",
        "في حالة الاندماج أو البيع، ستنتقل بياناتك مع الالتزام بنفس سياسة الخصوصية."
      ],
      contentEn: [
        "We do not sell or rent your personal information to any third party.",
        "We may share data with trusted service providers (hosting, analytics) under strict agreements.",
        "We may disclose data upon legal request from competent authorities.",
        "In case of merger or sale, your data will transfer with the same privacy policy commitment."
      ]
    },
    {
      icon: Globe,
      titleAr: "حقوقك",
      titleEn: "Your Rights",
      contentAr: [
        "الوصول إلى بياناتك الشخصية وطلب نسخة منها.",
        "تصحيح أي معلومات غير دقيقة.",
        "طلب حذف بياناتك (مع مراعاة المتطلبات القانونية).",
        "الاعتراض على معالجة بياناتك لأغراض تسويقية.",
        "سحب موافقتك في أي وقت."
      ],
      contentEn: [
        "Access your personal data and request a copy.",
        "Correct any inaccurate information.",
        "Request deletion of your data (subject to legal requirements).",
        "Object to processing your data for marketing purposes.",
        "Withdraw your consent at any time."
      ]
    },
    {
      icon: Clock,
      titleAr: "الاحتفاظ بالبيانات",
      titleEn: "Data Retention",
      contentAr: [
        "نحتفظ ببياناتك طوال فترة استخدامك للخدمة.",
        "بعد إلغاء الحساب، نحتفظ بالبيانات لمدة 30 يوماً للاسترداد.",
        "يتم حذف البيانات نهائياً بعد انتهاء فترة الاحتفاظ.",
        "قد نحتفظ ببعض البيانات لفترة أطول للامتثال القانوني."
      ],
      contentEn: [
        "We retain your data throughout your use of the service.",
        "After account cancellation, we retain data for 30 days for recovery.",
        "Data is permanently deleted after the retention period.",
        "We may retain some data longer for legal compliance."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9]">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-3xl"></div>
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0D9488]/30">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </h1>
              <p className="text-gray-500">
                {language === "ar" ? "آخر تحديث: يناير ٢٠٢٦" : "Last updated: January 2026"}
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {language === "ar" 
              ? "في معارج، نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام منصتنا."
              : "At Maarij, we are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your information when using our platform."
            }
          </p>
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
                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-[#0D9488]" />
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
        <div className="bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-2xl shadow-xl p-8 mt-8 text-white animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="text-xl font-bold">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h2>
          </div>
          <p className="opacity-90 mb-4">
            {language === "ar" 
              ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ممارسات البيانات لدينا، يرجى التواصل معنا:"
              : "If you have any questions about this privacy policy or our data practices, please contact us:"
            }
          </p>
          <a 
            href="mailto:privacy@maarij.sa" 
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4" />
            privacy@maarij.sa
          </a>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          {language === "ar" 
            ? "نحتفظ بالحق في تعديل هذه السياسة. سيتم إخطارك بأي تغييرات جوهرية."
            : "We reserve the right to modify this policy. You will be notified of any material changes."
          }
        </p>
      </div>
    </main>
  );
}

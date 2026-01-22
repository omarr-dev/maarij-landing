"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  User,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Shield,
  Palette,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";

interface FormData {
  AssociationName: string;
  Subdomain: string;
  Description: string;
  Country: string;
  City: string;
  Logo: string;
  Email: string;
  ManagerName: string;
  ManagerPhoneNumber: string;
}

interface FormErrors {
  [key: string]: string;
}

interface SuccessResponse {
  associationId: number;
  associationName: string;
  subdomain: string;
  message: string;
  loginUrl: string;
}

export default function RegisterPage() {
  const { t, language } = useLanguage();
  const Arrow = language === "ar" ? ArrowRight : ArrowLeft;

  const [formData, setFormData] = useState<FormData>({
    AssociationName: "",
    Subdomain: "",
    Description: "",
    Country: "",
    City: "",
    Logo: "",
    Email: "",
    ManagerName: "",
    ManagerPhoneNumber: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<SuccessResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validation functions
  const validateSubdomain = (value: string): boolean => {
    return /^[a-zA-Z0-9-]+$/.test(value);
  };

  const validatePhone = (value: string): boolean => {
    // Saudi phone number starting with +966 5
    const cleanPhone = value.replace(/\s/g, "");
    return /^\+9665\d{8}$/.test(cleanPhone);
  };

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.AssociationName.trim()) {
      newErrors.AssociationName = t("register.validation.associationName");
    }

    if (!formData.Subdomain.trim()) {
      newErrors.Subdomain = t("register.validation.subdomain");
    } else if (!validateSubdomain(formData.Subdomain)) {
      newErrors.Subdomain = t("register.validation.subdomainFormat");
    }

    if (!formData.ManagerName.trim()) {
      newErrors.ManagerName = t("register.validation.managerName");
    }

    if (!formData.ManagerPhoneNumber.trim()) {
      newErrors.ManagerPhoneNumber = t("register.validation.managerPhone");
    } else if (!validatePhone(formData.ManagerPhoneNumber)) {
      newErrors.ManagerPhoneNumber = t("register.validation.phoneFormat");
    }

    if (!formData.Email.trim()) {
      newErrors.Email = t("register.validation.email");
    } else if (!validateEmail(formData.Email)) {
      newErrors.Email = t("register.validation.emailFormat");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except +
    let cleaned = value.replace(/[^\d+]/g, "");
    
    // Ensure it starts with +966
    if (!cleaned.startsWith("+")) {
      if (cleaned.startsWith("966")) {
        cleaned = "+" + cleaned;
      } else if (cleaned.startsWith("05")) {
        cleaned = "+966" + cleaned.substring(1);
      } else if (cleaned.startsWith("5")) {
        cleaned = "+966" + cleaned;
      }
    }
    
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, ManagerPhoneNumber: formatted }));
    if (errors.ManagerPhoneNumber) {
      setErrors((prev) => ({ ...prev, ManagerPhoneNumber: "" }));
    }
  };

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert to lowercase and remove invalid characters
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setFormData((prev) => ({ ...prev, Subdomain: value }));
    if (errors.Subdomain) {
      setErrors((prev) => ({ ...prev, Subdomain: "" }));
    }
  };

  const handleLogoUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, Logo: url }));
  };

  const handleLogoRemove = () => {
    setFormData((prev) => ({ ...prev, Logo: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/associations/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.Message || "Registration failed");
      }

      setSubmitSuccess(data);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Globe, key: "1" },
    { icon: Palette, key: "2" },
    { icon: Shield, key: "3" },
    { icon: BarChart3, key: "4" },
    { icon: HeadphonesIcon, key: "5" },
  ];

  // Success State
  if (submitSuccess) {
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
                href={submitSuccess.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] font-medium hover:underline break-all"
              >
                {submitSuccess.loginUrl}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-[#0D9488] hover:bg-[#0A7B71] text-white"
              >
                <a href={submitSuccess.loginUrl} target="_blank" rel="noopener noreferrer">
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F1F5F9] via-white to-[#F1F5F9]">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0D9488]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0D9488] transition-colors mb-8 group"
        >
          <Arrow className="w-4 h-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
          {t("register.backToHome")}
        </Link>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-in-up">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D9488]/10 rounded-full text-[#0D9488] text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {language === "ar" ? "انضم إلينا اليوم" : "Join Us Today"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {t("register.pageTitle")}
                </h1>
                <p className="text-gray-600">{t("register.pageSubtitle")}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Association Information Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {t("register.associationInfo")}
                    </h2>
                  </div>

                  <div className="grid gap-5">
                    {/* Association Name */}
                    <div className="space-y-2">
                      <Label htmlFor="AssociationName" required>
                        {t("register.associationName")}
                      </Label>
                      <Input
                        id="AssociationName"
                        name="AssociationName"
                        value={formData.AssociationName}
                        onChange={handleInputChange}
                        placeholder={t("register.associationNamePlaceholder")}
                        maxLength={255}
                        className={errors.AssociationName ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
                      />
                      {errors.AssociationName && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.AssociationName}
                        </p>
                      )}
                    </div>

                    {/* Subdomain */}
                    <div className="space-y-2">
                      <Label htmlFor="Subdomain" required>
                        {t("register.subdomain")}
                      </Label>
                      <div className="relative">
                        <Input
                          id="Subdomain"
                          name="Subdomain"
                          value={formData.Subdomain}
                          onChange={handleSubdomainChange}
                          placeholder={t("register.subdomainPlaceholder")}
                          maxLength={100}
                          className={`${language === "ar" ? "ps-28" : "pe-28"} ${errors.Subdomain ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}`}
                          dir="ltr"
                        />
                        <span className={`absolute top-1/2 -translate-y-1/2 text-gray-400 text-sm ${language === "ar" ? "start-3" : "end-3"}`}>
                          .maarij.sa
                        </span>
                      </div>
                      {formData.Subdomain && !errors.Subdomain && (
                        <p className="text-sm text-[#0D9488]">
                          {t("register.subdomainHint").replace(
                            "{subdomain}",
                            formData.Subdomain
                          )}
                        </p>
                      )}
                      {errors.Subdomain && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.Subdomain}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="Description">
                        {t("register.description")}
                      </Label>
                      <Textarea
                        id="Description"
                        name="Description"
                        value={formData.Description}
                        onChange={handleInputChange}
                        placeholder={t("register.descriptionPlaceholder")}
                        maxLength={1000}
                        rows={3}
                      />
                    </div>

                    {/* Country & City */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="Country">
                          {t("register.country")}
                        </Label>
                        <Input
                          id="Country"
                          name="Country"
                          value={formData.Country}
                          onChange={handleInputChange}
                          placeholder={t("register.countryPlaceholder")}
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="City">
                          {t("register.city")}
                        </Label>
                        <Input
                          id="City"
                          name="City"
                          value={formData.City}
                          onChange={handleInputChange}
                          placeholder={t("register.cityPlaceholder")}
                          maxLength={100}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="Email" required>
                        {t("register.email")}
                      </Label>
                      <Input
                        id="Email"
                        name="Email"
                        type="email"
                        value={formData.Email}
                        onChange={handleInputChange}
                        placeholder={t("register.emailPlaceholder")}
                        maxLength={255}
                        dir="ltr"
                        className={errors.Email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
                      />
                      {errors.Email && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.Email}
                        </p>
                      )}
                    </div>

                    {/* Logo Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="Logo">
                        {t("register.logo")}
                      </Label>
                      <FileUpload
                        bucket="logos"
                        folder="associations"
                        accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml"
                        maxSize={5 * 1024 * 1024}
                        value={formData.Logo}
                        onUpload={handleLogoUpload}
                        onRemove={handleLogoRemove}
                        language={language}
                        helperText={`PNG, JPG, GIF, WebP, SVG (${language === 'ar' ? 'الحد الأقصى' : 'max'} 5MB)`}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Manager Information Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {t("register.managerInfo")}
                    </h2>
                  </div>

                  <div className="grid gap-5">
                    {/* Manager Name */}
                    <div className="space-y-2">
                      <Label htmlFor="ManagerName" required>
                        {t("register.managerName")}
                      </Label>
                      <Input
                        id="ManagerName"
                        name="ManagerName"
                        value={formData.ManagerName}
                        onChange={handleInputChange}
                        placeholder={t("register.managerNamePlaceholder")}
                        maxLength={255}
                        className={errors.ManagerName ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
                      />
                      {errors.ManagerName && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.ManagerName}
                        </p>
                      )}
                    </div>

                    {/* Manager Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="ManagerPhoneNumber" required>
                        {t("register.managerPhone")}
                      </Label>
                      <Input
                        id="ManagerPhoneNumber"
                        name="ManagerPhoneNumber"
                        type="tel"
                        value={formData.ManagerPhoneNumber}
                        onChange={handlePhoneChange}
                        placeholder={t("register.managerPhonePlaceholder")}
                        dir="ltr"
                        className={errors.ManagerPhoneNumber ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
                      />
                      <p className="text-sm text-gray-500">
                        {t("register.managerPhoneHint")}
                      </p>
                      {errors.ManagerPhoneNumber && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.ManagerPhoneNumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Error Alert */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">
                        {t("register.error.title")}
                      </p>
                      <p className="text-sm text-red-600 mt-1">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#0D9488] hover:bg-[#0A7B71] text-white font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-[#0D9488]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin me-2" />
                      {t("register.submitting")}
                    </>
                  ) : (
                    t("register.submit")
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="lg:col-span-2">
            <div
              className="lg:sticky lg:top-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Features Card */}
              <div className="bg-gradient-to-br from-[#0D9488] to-[#0A7B71] rounded-2xl shadow-xl p-6 sm:p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-6">
                  {t("register.features.title")}
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={feature.key}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">
                        {t(`register.features.${feature.key}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-[#F1F5F9] rounded-xl">
                    <div className="text-2xl font-bold text-[#0D9488]">🚀</div>
                    <div className="text-sm text-gray-600">
                      {language === "ar" ? "إطلاق فوري" : "Instant Launch"}
                    </div>
                  </div>
                  <div className="p-4 bg-[#F1F5F9] rounded-xl">
                    <div className="text-2xl font-bold text-[#0D9488]">∞</div>
                    <div className="text-sm text-gray-600">
                      {language === "ar" ? "طلاب غير محدود" : "Unlimited Students"}
                    </div>
                  </div>
                  <div className="p-4 bg-[#F1F5F9] rounded-xl">
                    <div className="text-2xl font-bold text-[#D4AF37]">🎁</div>
                    <div className="text-sm text-gray-600">
                      {language === "ar" ? "مجاني بالكامل" : "Completely Free"}
                    </div>
                  </div>
                  <div className="p-4 bg-[#F1F5F9] rounded-xl">
                    <div className="text-2xl font-bold text-[#D4AF37]">٢٤/٧</div>
                    <div className="text-sm text-gray-600">
                      {language === "ar" ? "دعم فني" : "Support"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-[#FEF9E7] border border-[#D4AF37]/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {language === "ar"
                        ? '"منصة معارج غيّرت طريقة إدارتنا للحلقات بشكل كامل. أصبح كل شيء منظماً وسهلاً."'
                        : '"Maarij platform completely changed how we manage our circles. Everything is now organized and easy."'}
                    </p>
                    <p className="text-sm font-medium text-[#0D9488]">
                      {language === "ar"
                        ? "— أحمد محمد، مشرف جمعية"
                        : "— Ahmed Mohamed, Association Supervisor"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

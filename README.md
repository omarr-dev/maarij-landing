<div align="center">

# معارج · Maarij

**The Professional Platform for Quran Memorization Circle Management**
*المنصة الاحترافية لإدارة حلقات تحفيظ القرآن الكريم*

[![Live](https://img.shields.io/badge/Live-maarij.sa-0D9488?style=for-the-badge&logo=vercel&logoColor=white)](https://maarij.sa)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

### 🌐 [maarij.sa](https://maarij.sa)

</div>

---

## Overview

Maarij is a **multi-tenant SaaS platform** built for Quran memorization associations (*جمعيات تحفيظ القرآن*) in Saudi Arabia. The platform provides each association with its own branded portal — custom domain, full visual identity, and a complete management system for circles, students, and teachers.

This repository contains the **public marketing landing page** (`maarij.sa`) — the entry point where associations discover, explore, and register for the platform.

> Made with ❤️ in Saudi Arabia · صُنع بـ ❤️ في المملكة العربية السعودية

---

## Features

| Feature | Description |
|---|---|
| **Custom Branding** | Each association gets a fully branded portal with custom colors, logo, and their own subdomain (`{name}.maarij.sa`) |
| **Data Isolation** | Complete tenant isolation — every association's data is siloed with enterprise-grade security |
| **Circle Management** | Manage circles, assign teachers, enroll students, and track attendance from a unified dashboard |
| **Parent Engagement** | Automated WhatsApp notifications to parents with periodic progress reports |
| **Curriculum Planning** | Set Quran memorization goals, track daily Hifz progress, and generate comprehensive reports |
| **Bilingual UI** | Full Arabic (RTL) and English (LTR) support with seamless language switching |
| **Excel Export** | Export all data including attendance, progress, and reports to Excel |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Components** | Radix UI + shadcn/ui |
| **Backend / DB** | Supabase (PostgreSQL + Auth) |
| **Analytics** | Google Analytics 4 + Google Ads |
| **Hosting** | Vercel + Vercel Speed Insights |
| **Fonts** | Cairo + Noto Sans Arabic (Google Fonts) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, analytics
│   ├── page.tsx            # Landing page (home)
│   ├── register/
│   │   ├── page.tsx        # Association registration form
│   │   └── success/        # Post-registration success page
│   ├── privacy/page.tsx    # Privacy policy
│   ├── terms/page.tsx      # Terms & conditions
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── Navbar.tsx          # Sticky navbar with language switcher
│   ├── Hero.tsx            # Hero section with live dashboard mockup
│   ├── Features.tsx        # Bento-style features grid
│   ├── HowItWorks.tsx      # 3-step onboarding flow
│   ├── Pricing.tsx         # Pricing plans
│   ├── Footer.tsx          # Footer with legal links
│   └── ui/                 # Reusable UI primitives (Button, Card, Input…)
├── context/
│   └── LanguageContext.tsx # Global i18n context (AR/EN + RTL/LTR)
└── lib/
    ├── supabase.ts         # Supabase client
    └── utils.ts            # Utility helpers
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) project

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/maarij-landing.git
cd maarij-landing
npm install
```

### Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## License

© 2026 Maarij · All rights reserved · جميع الحقوق محفوظة

Commercial Registration (السجل التجاري): **7053364373**

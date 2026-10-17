# HIEU VU DANG MINH — Personal Project Portfolio

> **Marketing Project Coordinator**  
> *CFD & Forex · Fintech · Marketing Operations · Cross-Functional Project Coordination*  
> *Ho Chi Minh City, Vietnam*

---

## 1. Project Overview

A modern, production-ready editorial project coordination portfolio website built for **Hieu Vu Dang Minh**. Engineered specifically to demonstrate end-to-end capability in planning, stakeholder alignment, vendor management, budget reconciliation, and multi-stream delivery across financial brokerage, venture ecosystems, and digital media.

### Target Roles
- Marketing Project Coordinator
- Marketing Project Executive
- Project Coordinator
- Marketing Operations Specialist
- Fintech Marketing / Project Management

---

## 2. Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript 5
- **Library:** React 19
- **Styling:** Tailwind CSS v4 (Custom Corporate Editorial Palette: Ocean Blue `#176B9F`, Navy `#123A5A`, Ice Blue `#D8EAF5`, Slate Gray `#557B97`)
- **Icons:** Lucide React
- **Assets:** User's verified professional portrait & full CV PDF included in `/public/`
- **Routing:** 100% static dedicated routes for all 24 projects (`/projects/[slug]`)
- **Deployment:** Vercel Zero-Config (`vercel.json`)

---

## 3. Architecture & Key Features

### 3.1 Homepage Architecture
- **Sticky Navigation:** Glassmorphic navbar with mobile drawer and quick CV download button.
- **Hero Section:** Full name as the primary headline (`HIEU VU DANG MINH`), supporting title, tagline (*"From objective to delivery."*), introduction, CTAs, and authentic professional portrait frame.
- **Impact Metrics:** Editorial statistics section featuring:
  - **40+** Projects Delivered
  - **100+** Stakeholders Coordinated
  - **200+** Vendors Managed
  - **500M+ VND** Largest Project Budget
  - **90%+** On-Time Delivery
- **About Section:** Coordination mindset, three core commitments (*I can plan projects*, *I can coordinate people & execution*, *I can deliver measurable outcomes*).
- **Selected Work (Six Major Sections):**
  - **Section 01: CFD & Forex Marketing** (5 Subcategories: Retail Promotions, IB & Partner, Loyalty Programs, Brand Campaigns, Product Marketing)
  - **Section 02: Education & Academy** (Livestreams, MT4/MT5 Masterclasses, STAR Academy Localization, Sales Enablement)
  - **Section 03: CSR & Corporate Events** (District 10 Basketball Court Renovation, SOS Children's Village Sweet Moon, JDI 13+ Conferences)
  - **Section 04: Social Media & Content Operations** (STARTRADER 8-channel coordination, creative pipelines)
  - **Section 05: Freelance Brand Development** (KCAPITAL financial ecosystem across LinkedIn, TikTok, Threads)
  - **Section 06: Sports Content Creation** (Hiếu Football, 6M+ organic video views, 469 published posts)
- **Professional Experience Timeline:** Detailed roles at STARTRADER, JDI, and UEH.
- **Core Competencies:** 4 clean pillars (Project Management, Marketing & Communication, Industry Knowledge, Creative & Digital).
- **Contact Section:** Recruiter-friendly channels (`minhhieuvudang@gmail.com`, `(+84) 396 256 414`, LinkedIn, CV download).
- **Portfolio AI Assistant:** Floating interactive *"Ask About Hiếu"* chat widget grounded in verified portfolio data with instant prompt chips.

### 3.2 Individual Project Detail Page Template
Every project lives at a dedicated static URL (`/projects/[slug]`) following the required 10-part editorial case study structure:
1. **Hero:** Title, Company, Category, Period, Role, Impact Subtitle, Editorial Graphic
2. **01 — Project Overview:** Business context & strategic background
3. **02 — The Challenge:** Operational friction & market dynamics
4. **03 — Objectives:** Primary and secondary deliverables
5. **04 — My Role & Responsibilities:** Clearly separated Direct Ownership, Coordination, Collaboration, and Support
6. **05 — Strategy & Planning:** Strategic approach, timeline, and coordinated stakeholder groups
7. **06 — Project Execution:** 5-step visual timeline / structured workflow
8. **07 — Results & Impact:** Verified KPI cards, editorial summary, and compliance disclaimers
9. **08 — Project Documentation:** Editorial blueprints and workflow frameworks
10. **09 — Key Takeaways:** Professional lessons and coordination insights
11. **10 — Explore Other Projects:** 3 related project cards with direct navigation and return link

---

## 4. Content Integrity & Compliance

1. **Zero Fabricated Data:** Verified metrics only. Unreleased projects (e.g., IB Switch Bonus, Christmas Campaign, Point Mall) are explicitly flagged as *Concept / Planning* or *In Development*.
2. **Ownership Demarcation:** Distinct separation between direct project ownership and team coordination/support.
3. **Confidentiality:** Company confidential revenue, lot volumes, and private partner data are protected.

---

## 5. Local Development & Build

### Prerequisites
Node.js 18+ or Node.js 24 LTS (installed in your user directory via WinGet).

### Running Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build & Test
```bash
# Build optimized static production bundle
npm run build

# Start production server
npm run start
```

---

## 6. Deploying to Vercel

The repository is pre-configured for instant zero-configuration deployment to Vercel:

### Option A: Via GitHub (Recommended)
1. Push this directory (`C:\Users\hieu.vu\.gemini\antigravity\scratch\hieu-portfolio`) to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium portfolio website"
   git remote add origin https://github.com/<your-username>/hieu-portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** → **Import** your GitHub repository.
4. Framework Preset will auto-detect **Next.js**.
5. Click **Deploy**. Your portfolio will be live in under 60 seconds with an SSL-secured URL.

### Option B: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive CLI prompts to link and deploy.

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Building2,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Share2,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Layers,
  FileText,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Hieu Vu Dang Minh",
    };
  }

  return {
    title: `${project.title} — Case Study | Hieu Vu Dang Minh`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${project.company}`,
      description: project.summary,
      url: `https://hieuvudangminh.com/projects/${project.slug}`,
      siteName: `${PERSONAL_INFO.name} Portfolio`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = PROJECTS.filter(
    (p) => project.relatedProjectSlugs.includes(p.slug) || (p.category === project.category && p.slug !== project.slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFF] text-[#123A5A]">
      <Navbar />

      {/* Sub-header Navigation Bar with Back Link */}
      <div className="sticky top-18 z-30 w-full bg-white/90 backdrop-blur-md border-b border-[#D8EAF5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#176B9F] hover:text-[#123A5A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to all projects</span>
          </Link>
          <div className="flex items-center gap-3 text-xs font-semibold text-[#66859D]">
            <span>Section {project.sectionNumber}</span>
            <span>·</span>
            <span className="text-[#176B9F] font-bold">{project.categoryName}</span>
          </div>
        </div>
      </div>

      <main className="flex-1 pb-24">
        {/* =========================================================================
            PROJECT HERO
           ========================================================================= */}
        <header className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#D8EAF5] bg-[radial-gradient(ellipse_at_90%_10%,rgba(185,225,247,0.32),transparent_35%),linear-gradient(135deg,#F6FBFF_0%,#FFFFFF_55%,#EAF6FD_100%)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                {/* Meta Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#176B9F] bg-[#EAF6FD] border border-[#BFDDEC] rounded-full">
                    {project.company}
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-[#557B97] bg-white border border-[#D8EAF5] rounded-full">
                    {project.market}
                  </span>
                  <span
                    className={`px-2.5 py-1 text-[11px] font-bold uppercase rounded-full border ${
                      project.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : project.status === "Always-On"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.08] mb-4">
                  {project.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-medium text-[#176B9F] mb-6 leading-snug">
                  {project.subtitle}
                </p>

                {/* Touchpoints */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.touchpoints.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold bg-white border border-[#D8EAF5] text-[#557B97] rounded-lg shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial Hero Visual / Poster */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#EAF6FD] via-[#DCEFF9] to-[#BFDDEC] border border-[#BFDDEC] shadow-xl shadow-[#176B9F]/10 flex flex-col justify-between min-h-[260px]">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#176B9F] block mb-2">
                      Case Study Document · {project.sectionNumber}
                    </span>
                    <span className="text-2xl font-black tracking-tight text-[#123A5A] block leading-tight">
                      {project.title}
                    </span>
                    <p className="text-xs text-[#557B97] mt-1 font-semibold">
                      {project.role} · {project.company}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#176B9F]/20 flex items-center justify-between text-xs font-bold text-[#176B9F]">
                    <span>{project.period}</span>
                    <span>Verified Portfolio Record</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* Snapshot Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white border border-[#D8EAF5] rounded-xl shadow-md shadow-[#176B9F]/06 grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#D8EAF5]">
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-1">
                My Role
              </span>
              <span className="text-xs font-bold text-[#123A5A] block">
                {project.role}
              </span>
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-1">
                Organization
              </span>
              <span className="text-xs font-bold text-[#123A5A] block">
                {project.company}
              </span>
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-1">
                Market Scope
              </span>
              <span className="text-xs font-bold text-[#123A5A] block">
                {project.market}
              </span>
            </div>
            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-1">
                Period
              </span>
              <span className="text-xs font-bold text-[#123A5A] block">
                {project.period}
              </span>
            </div>
            <div className="p-4 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-1">
                Execution Status
              </span>
              <span className="text-xs font-bold text-[#176B9F] block">
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ARTICLE BODY (Sections 01 to 09)
           ========================================================================= */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
          
          {/* 01 — Project Overview */}
          <section className="pt-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              01 — Project Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-4">
              Business Context & Strategic Background
            </h2>
            <div className="p-6 rounded-2xl bg-[#F6FBFF] border border-[#D8EAF5]">
              <p className="text-sm sm:text-base leading-relaxed text-[#475467]">
                {project.overview}
              </p>
            </div>
          </section>

          {/* 02 — The Challenge */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              02 — The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-4">
              Operational Friction & Market Dynamics
            </h2>
            <div className="p-6 rounded-2xl bg-white border border-[#D8EAF5]">
              <p className="text-sm sm:text-base leading-relaxed text-[#475467]">
                {project.challenge}
              </p>
            </div>
          </section>

          {/* 03 — Objectives */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              03 — Objectives
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
              Primary Goals & Success Criteria
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#EAF6FD] border border-[#BFDDEC]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#176B9F] block mb-1">
                  Primary Objective
                </span>
                <p className="text-base font-bold text-[#123A5A]">
                  {project.objectives.primary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.objectives.secondary.map((obj, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#D8EAF5]">
                    <span className="text-[10px] font-bold text-[#66859D] uppercase block mb-1">
                      Secondary Deliverable {i + 1}
                    </span>
                    <p className="text-xs font-semibold text-[#557B97] leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 04 — My Role & Responsibilities */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              04 — Role & Responsibilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-2">
              Ownership Boundaries & Team Contributions
            </h2>
            <p className="text-xs text-[#66859D] mb-6">
              In accordance with portfolio integrity rules, personal direct ownership is clearly demarcated from coordination and collaborative support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.rolesAndResponsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#D8EAF5] hover:border-[#BFDDEC] transition-colors"
                >
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md mb-3 ${
                      item.area === "Direct Ownership"
                        ? "bg-[#176B9F] text-white"
                        : item.area === "Coordination"
                        ? "bg-[#EAF6FD] text-[#176B9F] border border-[#BFDDEC]"
                        : "bg-[#F4FAFE] text-[#557B97] border border-[#D8EAF5]"
                    }`}
                  >
                    {item.area}
                  </span>
                  <h3 className="text-base font-bold text-[#123A5A] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66859D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 05 — Strategy & Planning */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              05 — Strategy & Planning
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
              Execution Architecture & Stakeholder Alignment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-6 rounded-2xl bg-[#F6FBFF] border border-[#D8EAF5]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#176B9F] block mb-1">
                  Strategic Approach
                </span>
                <p className="text-sm font-semibold text-[#123A5A] leading-relaxed">
                  {project.strategyAndPlanning.approach}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6FBFF] border border-[#D8EAF5]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#176B9F] block mb-1">
                  Timeline & Checkpoints
                </span>
                <p className="text-sm font-semibold text-[#123A5A] leading-relaxed">
                  {project.strategyAndPlanning.timeline}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8EAF5]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block mb-2">
                Coordinated Stakeholder Groups
              </span>
              <div className="flex flex-wrap gap-2">
                {project.strategyAndPlanning.stakeholders.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-[#EAF6FD] border border-[#BFDDEC] text-xs font-bold text-[#176B9F]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 06 — Project Execution */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              06 — Project Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
              Implementation Timeline & Structured Workflow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {project.executionSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-white border border-[#D8EAF5] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-[#2F7FB5] block mb-2">
                      {step.step}
                    </span>
                    <h3 className="text-xs font-bold text-[#123A5A] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#66859D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 07 — Results & Impact */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              07 — Results & Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
              Verified Metrics & Performance Outcomes
            </h2>

            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {project.resultsAndImpact.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#BFDDEC] shadow-xs"
                >
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] block mb-1">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B9F] block mb-1">
                    {m.label}
                  </span>
                  {m.note && (
                    <span className="text-[11px] text-[#66859D] block">
                      {m.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Editorial Summary */}
            <div className="p-6 rounded-2xl bg-[#F6FBFF] border border-[#D8EAF5] mb-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#176B9F] block mb-1">
                Outcome Summary
              </span>
              <p className="text-sm leading-relaxed text-[#475467]">
                {project.resultsAndImpact.editorialSummary}
              </p>
            </div>

            {/* Disclaimer if present */}
            {project.resultsAndImpact.disclaimer && (
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{project.resultsAndImpact.disclaimer}</span>
              </div>
            )}
          </section>

          {/* 08 — Project Gallery / Data Visualizations */}
          {project.galleryNotes && (
            <section className="pt-6 border-t border-[#D8EAF5]">
              <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
                08 — Project Documentation & Visual Assets
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
                Editorial Documentation
              </h2>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#F4FAFE] to-[#EAF6FD] border border-[#BFDDEC] text-center">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#176B9F] block mb-2">
                  {project.galleryNotes.title}
                </span>
                <p className="text-sm text-[#557B97] max-w-xl mx-auto leading-relaxed">
                  {project.galleryNotes.caption}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BFDDEC] text-xs font-bold text-[#176B9F]">
                  <FileText className="w-4 h-4" />
                  <span>Verified Campaign Structure</span>
                </div>
              </div>
            </section>
          )}

          {/* 09 — Key Takeaways */}
          <section className="pt-6 border-t border-[#D8EAF5]">
            <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-2">
              09 — Key Takeaways
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mb-6">
              Professional Lessons & Coordination Insights
            </h2>

            <div className="space-y-3">
              {project.keyTakeaways.map((takeaway, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white border border-[#D8EAF5] flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2F7FB5] shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-[#123A5A] leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 10 — Explore Other Projects */}
          <section className="pt-10 border-t border-[#D8EAF5]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] block mb-1">
                  10 — Explore Other Projects
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A]">
                  Related Case Studies
                </h2>
              </div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B9F] hover:text-[#123A5A] transition-colors"
              >
                <span>View all {PROJECTS.length} projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white border border-[#D8EAF5] hover:border-[#8CC3E5] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#176B9F] block mb-2">
                      {rel.sectionNumber} · {rel.company}
                    </span>
                    <h3 className="text-base font-bold text-[#123A5A] group-hover:text-[#176B9F] transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#66859D] line-clamp-2 leading-relaxed mb-4">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#D8EAF5] flex items-center justify-between text-xs font-bold text-[#176B9F]">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#176B9F] bg-[#EAF6FD] hover:bg-[#DCEFF9] border border-[#BFDDEC] rounded-full transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Projects Overview</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

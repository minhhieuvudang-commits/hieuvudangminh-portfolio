"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter, Layers, Clock, Building2, MapPin, Sparkles } from "lucide-react";
import { PROJECTS, CATEGORIES_CONFIG } from "@/data/portfolioData";
import { ProjectCategory } from "@/types/portfolio";

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCfdSubcategory, setActiveCfdSubcategory] = useState<string>("all-sub");

  // Filter projects by category
  let filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Filter subcategories if cfd-forex is active
  if (activeCategory === "cfd-forex" && activeCfdSubcategory !== "all-sub") {
    filteredProjects = filteredProjects.filter((p) => p.subCategory === activeCfdSubcategory);
  }

  const cfdSubcategories = [
    { id: "all-sub", label: "All Subcategories" },
    { id: "retail-promotions", label: "01.1 Retail Promotions" },
    { id: "ib-partner", label: "01.2 IB & Partner" },
    { id: "loyalty-programs", label: "01.3 Loyalty Programs" },
    { id: "brand-campaigns", label: "01.4 Brand Campaigns" },
    { id: "product-marketing", label: "01.5 Product Marketing" },
  ];

  const currentCategoryMeta = CATEGORIES_CONFIG.find((c) => c.id === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-[#FBFDFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Project Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.05]">
              Commercial planning & cross-functional delivery.
            </h2>
            <p className="text-base text-[#557B97] mt-3">
              Detailed case studies across multi-asset trading, community education, global conferences, and media ventures. Every card opens a full editorial case study.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-black uppercase tracking-widest text-[#66859D] block">
              Showing
            </span>
            <span className="text-2xl font-black text-[#123A5A]">
              {filteredProjects.length}{" "}
              <span className="text-sm font-semibold text-[#66859D]">of {PROJECTS.length} Projects</span>
            </span>
          </div>
        </div>

        {/* Category Filter Pills (Main 6 Categories) */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-bold text-[#66859D] flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveCfdSubcategory("all-sub");
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#176B9F] text-white shadow-sm shadow-[#176B9F]/20 scale-[1.02]"
                    : "bg-white text-[#557B97] border border-[#D8EAF5] hover:bg-[#F4FAFE] hover:text-[#123A5A]"
                }`}
              >
                {cat.number !== "ALL" && (
                  <span className="opacity-70 mr-1.5">{cat.number} ·</span>
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CFD Subcategory Sub-pills (When CFD category or All is active) */}
        {activeCategory === "cfd-forex" && (
          <div className="mb-10 p-3 rounded-2xl bg-[#EAF6FD]/70 border border-[#BFDDEC] flex flex-wrap items-center gap-2 animate-hero-in">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#176B9F] ml-2 mr-1">
              Subcategories:
            </span>
            {cfdSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveCfdSubcategory(sub.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  activeCfdSubcategory === sub.id
                    ? "bg-[#2F7FB5] text-white shadow-xs"
                    : "bg-white text-[#557B97] border border-[#D8EAF5] hover:text-[#123A5A]"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Active Category Editorial Context Banner (if specific category selected) */}
        {currentCategoryMeta && currentCategoryMeta.positioning && (
          <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-[#F4FAFE] to-white border border-[#D8EAF5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#176B9F]">
                Section {currentCategoryMeta.number} · Positioning
              </span>
              <p className="text-sm font-bold text-[#123A5A] mt-0.5">
                {currentCategoryMeta.positioning}
              </p>
            </div>
            <p className="text-xs text-[#66859D] max-w-md sm:text-right">
              {currentCategoryMeta.description}
            </p>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#D8EAF5] hover:border-[#8CC3E5] transition-all duration-300 hover:shadow-xl hover:shadow-[#176B9F]/08 hover:-translate-y-1 relative"
            >
              <div>
                {/* Card Top: Section Number & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#176B9F]">
                    {project.sectionNumber} · {project.categoryName.replace(" Marketing", "")}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full border ${
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

                {/* Editorial Visual Header Banner for Projects */}
                <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-[#EAF6FD] to-[#DCEFF9] border border-[#BFDDEC] flex flex-col justify-between min-h-[110px] group-hover:from-[#E1F1FB] group-hover:to-[#D4EAF7] transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-[#2F7FB5]">
                    <span>{project.company}</span>
                    <span>{project.market}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-lg font-black tracking-tight text-[#123A5A] block leading-tight">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Subtitle & Summary */}
                <h3 className="text-base font-bold text-[#123A5A] mb-2 group-hover:text-[#176B9F] transition-colors">
                  {project.subtitle}
                </h3>
                <p className="text-xs text-[#66859D] leading-relaxed mb-5 line-clamp-3">
                  {project.summary}
                </p>

                {/* Touchpoints / Key Focus Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.touchpoints.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold text-[#557B97] bg-[#F4FAFE] border border-[#D8EAF5] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.touchpoints.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-[#66859D] font-semibold">
                      +{project.touchpoints.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Metadata & Action Link */}
              <div className="pt-4 border-t border-[#D8EAF5] flex items-center justify-between text-xs">
                <span className="text-[#66859D] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2F7FB5]" />
                  <span>{project.period}</span>
                </span>
                
                <span className="inline-flex items-center gap-1 font-black text-[#176B9F] group-hover:translate-x-0.5 transition-transform">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Filter,
  Layers,
  Clock,
  ChevronDown,
  Check,
  Sparkles,
  FolderGit2,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Share2,
  Globe,
  Video,
  Building,
  School,
  LayoutGrid,
} from "lucide-react";
import { PROJECTS, CATEGORIES_CONFIG } from "@/data/portfolioData";
import { CategoryConfig } from "@/types/portfolio";

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCfdSubcategory, setActiveCfdSubcategory] = useState<string>("all-sub");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter projects by category
  let filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Filter subcategories if cfd-marketing is active
  if (activeCategory === "cfd-marketing" && activeCfdSubcategory !== "all-sub") {
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

  // Helper to count projects per category
  const getProjectCount = (categoryId: string) => {
    if (categoryId === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === categoryId).length;
  };

  // Section icons map
  const getSectionIcon = (number: string) => {
    switch (number) {
      case "01": return TrendingUp;
      case "02": return GraduationCap;
      case "03": return HeartHandshake;
      case "04": return Share2;
      case "05": return Globe;
      case "06": return Video;
      case "07": return Building;
      case "08": return School;
      default: return LayoutGrid;
    }
  };

  const currentCategoryMeta = CATEGORIES_CONFIG.find((c) => c.id === activeCategory);

  const handleSelectCategory = (catId: string, scrollToProjects = false) => {
    setActiveCategory(catId);
    setActiveCfdSubcategory("all-sub");
    setIsDropdownOpen(false);

    if (scrollToProjects && projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 8 Specific Sections (excluding 'all')
  const eightSections = CATEGORIES_CONFIG.filter((c) => c.id !== "all");

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-[#FBFDFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>8 Core Portfolio Sections · Portfolio Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.05]">
              Commercial planning & cross-functional delivery.
            </h2>
            <p className="text-base text-[#557B97] mt-3">
              Organized into 8 dedicated functional sections. Browse the highlighted directory below or use the section dropdown to jump directly to any case study.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-black uppercase tracking-widest text-[#66859D] block">
              Current View
            </span>
            <span className="text-2xl font-black text-[#123A5A]">
              {filteredProjects.length}{" "}
              <span className="text-sm font-semibold text-[#66859D]">of {PROJECTS.length} Projects</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            2. HIGHLIGHTED 8-SECTION MASTER DIRECTORY (Giao diện chính làm nổi bật 8 section)
           ========================================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2F7FB5]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#123A5A]">
                Portfolio Sections Directory (01 — 08)
              </span>
            </div>
            <button
              onClick={() => handleSelectCategory("all")}
              className={`text-xs font-bold transition-colors cursor-pointer px-3 py-1 rounded-full border ${
                activeCategory === "all"
                  ? "bg-[#176B9F] text-white border-[#176B9F]"
                  : "bg-white text-[#557B97] border-[#D8EAF5] hover:text-[#123A5A]"
              }`}
            >
              Show All 8 Sections ({PROJECTS.length})
            </button>
          </div>

          {/* 8-Card Grid highlighting each section prominently */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eightSections.map((sec) => {
              const Icon = getSectionIcon(sec.number);
              const isSelected = activeCategory === sec.id;
              const count = getProjectCount(sec.id);

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleSelectCategory(sec.id, true)}
                  className={`group text-left p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-br from-[#EAF6FD] via-white to-[#F4FAFE] border-[#2F7FB5] ring-2 ring-[#2F7FB5]/20 shadow-lg shadow-[#176B9F]/10 scale-[1.01]"
                      : "bg-white border-[#D8EAF5] hover:border-[#8CC3E5] hover:bg-[#F9FCFF] hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div>
                    {/* Top row: Section Number Badge & Count */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black tracking-wider transition-colors ${
                            isSelected
                              ? "bg-[#176B9F] text-white shadow-xs"
                              : "bg-[#EAF6FD] text-[#176B9F] border border-[#BFDDEC] group-hover:bg-[#176B9F] group-hover:text-white"
                          }`}
                        >
                          {sec.number}
                        </span>
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isSelected ? "text-[#176B9F]" : "text-[#66859D] group-hover:text-[#176B9F]"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full border ${
                          isSelected
                            ? "bg-[#176B9F] text-white border-[#176B9F]"
                            : "bg-[#F4FAFE] text-[#557B97] border-[#D8EAF5]"
                        }`}
                      >
                        {count} {count === 1 ? "Case" : "Cases"}
                      </span>
                    </div>

                    {/* Section Title */}
                    <h3
                      className={`text-sm font-black tracking-tight leading-snug mb-2 transition-colors ${
                        isSelected ? "text-[#176B9F]" : "text-[#123A5A] group-hover:text-[#176B9F]"
                      }`}
                    >
                      {sec.shortName || sec.label}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[11px] text-[#66859D] line-clamp-2 leading-relaxed mb-3">
                      {sec.description}
                    </p>
                  </div>

                  {/* Bottom tags */}
                  {sec.tags && sec.tags.length > 0 && (
                    <div className="pt-3 border-t border-[#D8EAF5]/70 flex flex-wrap gap-1">
                      {sec.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 text-[9px] font-semibold text-[#557B97] bg-[#F4FAFE] border border-[#D8EAF5] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Active Indicator dot */}
                  {isSelected && (
                    <span className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F7FB5] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#176B9F]"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. BUTTON DROPDOWN + QUICK SWITCHER BAR (Phần Dropdown rõ ràng theo yêu cầu)
           ========================================================================= */}
        <div ref={projectListRef} className="pt-2 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-[#D8EAF5] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* The Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#66859D] mb-1.5 flex items-center gap-1.5">
                <Filter className="w-3 h-3 text-[#2F7FB5]" />
                <span>Select Section Dropdown:</span>
              </div>

              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-96 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#F6FBFF] hover:bg-[#EAF6FD] border border-[#BFDDEC] text-left transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F7FB5]/30"
                aria-expanded={isDropdownOpen}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="w-6 h-6 rounded-md bg-[#176B9F] text-white flex items-center justify-center text-xs font-black shrink-0">
                    {currentCategoryMeta?.number || "ALL"}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#123A5A] truncate">
                    {currentCategoryMeta?.label || "All Projects"}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-[#176B9F] bg-white px-2 py-0.5 rounded-full border border-[#D8EAF5]">
                    {filteredProjects.length}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#557B97] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* The Dropdown Menu List */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full md:w-[460px] max-h-[460px] overflow-y-auto rounded-2xl bg-white border border-[#BFDDEC] shadow-2xl shadow-[#123A5A]/15 z-40 p-2 space-y-1 animate-hero-in">
                  <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#66859D] border-b border-[#D8EAF5] flex items-center justify-between">
                    <span>Choose a Section to Display</span>
                    <span>8 Core Sections</span>
                  </div>

                  {CATEGORIES_CONFIG.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    const count = getProjectCount(cat.id);
                    const Icon = getSectionIcon(cat.number);

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#EAF6FD] text-[#176B9F] font-bold"
                            : "hover:bg-[#F4FAFE] text-[#123A5A]"
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                              isSelected
                                ? "bg-[#176B9F] text-white"
                                : "bg-[#F4FAFE] text-[#557B97] border border-[#D8EAF5]"
                            }`}
                          >
                            {cat.number}
                          </span>
                          <div className="truncate">
                            <span className="text-xs sm:text-sm font-bold block truncate">
                              {cat.label}
                            </span>
                            <span className="text-[10px] text-[#66859D] block truncate">
                              {cat.shortName} · {count} {count === 1 ? "project" : "projects"}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {isSelected && <Check className="w-4 h-4 text-[#176B9F]" />}
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#D8EAF5] text-[#557B97]">
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Horizontal Filter Pills for instant clicking */}
            <div className="flex-1 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center gap-1.5 min-w-max">
                <button
                  type="button"
                  onClick={() => handleSelectCategory("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === "all"
                      ? "bg-[#176B9F] text-white shadow-xs"
                      : "bg-[#F4FAFE] text-[#557B97] border border-[#D8EAF5] hover:text-[#123A5A]"
                  }`}
                >
                  All ({PROJECTS.length})
                </button>
                {eightSections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => handleSelectCategory(sec.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === sec.id
                        ? "bg-[#176B9F] text-white shadow-xs"
                        : "bg-white text-[#557B97] border border-[#D8EAF5] hover:text-[#123A5A] hover:bg-[#F4FAFE]"
                    }`}
                  >
                    <span className="opacity-70 mr-1">{sec.number} ·</span>
                    <span>{sec.shortName}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. SECTION 01 SUBCATEGORY PILLS (When Section 01 is active)
           ========================================================================= */}
        {activeCategory === "cfd-marketing" && (
          <div className="mb-8 p-3 rounded-2xl bg-[#EAF6FD]/70 border border-[#BFDDEC] flex flex-wrap items-center gap-2 animate-hero-in">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#176B9F] ml-2 mr-1">
              Section 01 Subcategories:
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

        {/* =========================================================================
            5. ACTIVE SECTION POSITIONING BANNER
           ========================================================================= */}
        {currentCategoryMeta && currentCategoryMeta.positioning && (
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#F4FAFE] via-white to-[#EAF6FD] border border-[#D8EAF5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#176B9F] text-white">
                  Section {currentCategoryMeta.number}
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#176B9F]">
                  Strategic Positioning
                </span>
              </div>
              <p className="text-base font-bold text-[#123A5A]">
                {currentCategoryMeta.positioning}
              </p>
              <p className="text-xs text-[#66859D] mt-1 max-w-xl">
                {currentCategoryMeta.description}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[11px] font-bold text-[#66859D] block">
                Projects in this section
              </span>
              <span className="text-2xl font-black text-[#176B9F]">
                {filteredProjects.length}
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            6. PROJECT CARDS GRID
           ========================================================================= */}
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
                    {project.sectionNumber} · {project.categoryName}
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

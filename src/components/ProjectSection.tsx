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
  LayoutGrid,
  List,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Share2,
  Globe,
  Video,
  Building,
  School,
} from "lucide-react";
import { PROJECTS, CATEGORIES_CONFIG } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";

export interface SectionVisualTheme {
  id: string;
  number: string;
  name: string;
  accentHex: string;
  numberBg: string;
  numberText: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  pillActive: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  cardHoverBorder: string;
  cardHoverShadow: string;
  actionText: string;
}

export const SECTION_THEMES: Record<string, SectionVisualTheme> = {
  "cfd-marketing": {
    id: "cfd-marketing",
    number: "01",
    name: "CFD Marketing & Trading",
    accentHex: "#0284C7",
    numberBg: "bg-sky-600",
    numberText: "text-white",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    pillActive: "bg-sky-600 text-white shadow-sky-600/20",
    tagBg: "bg-sky-50/80",
    tagText: "text-sky-800",
    tagBorder: "border-sky-200",
    cardHoverBorder: "hover:border-sky-400",
    cardHoverShadow: "hover:shadow-sky-500/10",
    actionText: "text-sky-600 group-hover:text-sky-700",
  },
  "education": {
    id: "education",
    number: "02",
    name: "Education Projects",
    accentHex: "#059669",
    numberBg: "bg-emerald-600",
    numberText: "text-white",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pillActive: "bg-emerald-600 text-white shadow-emerald-600/20",
    tagBg: "bg-emerald-50/80",
    tagText: "text-emerald-800",
    tagBorder: "border-emerald-200",
    cardHoverBorder: "hover:border-emerald-400",
    cardHoverShadow: "hover:shadow-emerald-500/10",
    actionText: "text-emerald-600 group-hover:text-emerald-700",
  },
  "csr-corporate": {
    id: "csr-corporate",
    number: "03",
    name: "CSR & Corporate Projects",
    accentHex: "#E11D48",
    numberBg: "bg-rose-600",
    numberText: "text-white",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    pillActive: "bg-rose-600 text-white shadow-rose-600/20",
    tagBg: "bg-rose-50/80",
    tagText: "text-rose-800",
    tagBorder: "border-rose-200",
    cardHoverBorder: "hover:border-rose-400",
    cardHoverShadow: "hover:shadow-rose-500/10",
    actionText: "text-rose-600 group-hover:text-rose-700",
  },
  "social-media": {
    id: "social-media",
    number: "04",
    name: "Social Media Coordinator",
    accentHex: "#7C3AED",
    numberBg: "bg-violet-600",
    numberText: "text-white",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    pillActive: "bg-violet-600 text-white shadow-violet-600/20",
    tagBg: "bg-violet-50/80",
    tagText: "text-violet-800",
    tagBorder: "border-violet-200",
    cardHoverBorder: "hover:border-violet-400",
    cardHoverShadow: "hover:shadow-violet-500/10",
    actionText: "text-violet-600 group-hover:text-violet-700",
  },
  "freelance-brand": {
    id: "freelance-brand",
    number: "05",
    name: "Freelance Brand Building",
    accentHex: "#D97706",
    numberBg: "bg-amber-600",
    numberText: "text-white",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    pillActive: "bg-amber-600 text-white shadow-amber-600/20",
    tagBg: "bg-amber-50/80",
    tagText: "text-amber-800",
    tagBorder: "border-amber-200",
    cardHoverBorder: "hover:border-amber-400",
    cardHoverShadow: "hover:shadow-amber-500/10",
    actionText: "text-amber-600 group-hover:text-amber-700",
  },
  "content-creator": {
    id: "content-creator",
    number: "06",
    name: "Content Creator",
    accentHex: "#DC2626",
    numberBg: "bg-red-600",
    numberText: "text-white",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    badge: "bg-red-50 text-red-700 border-red-200",
    pillActive: "bg-red-600 text-white shadow-red-600/20",
    tagBg: "bg-red-50/80",
    tagText: "text-red-800",
    tagBorder: "border-red-200",
    cardHoverBorder: "hover:border-red-400",
    cardHoverShadow: "hover:shadow-red-500/10",
    actionText: "text-red-600 group-hover:text-red-700",
  },
  "business-events": {
    id: "business-events",
    number: "07",
    name: "Business Event Projects",
    accentHex: "#4F46E5",
    numberBg: "bg-indigo-600",
    numberText: "text-white",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    pillActive: "bg-indigo-600 text-white shadow-indigo-600/20",
    tagBg: "bg-indigo-50/80",
    tagText: "text-indigo-800",
    tagBorder: "border-indigo-200",
    cardHoverBorder: "hover:border-indigo-400",
    cardHoverShadow: "hover:shadow-indigo-500/10",
    actionText: "text-indigo-600 group-hover:text-indigo-700",
  },
  "university-projects": {
    id: "university-projects",
    number: "08",
    name: "University Projects",
    accentHex: "#0D9488",
    numberBg: "bg-teal-600",
    numberText: "text-white",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    pillActive: "bg-teal-600 text-white shadow-teal-600/20",
    tagBg: "bg-teal-50/80",
    tagText: "text-teal-800",
    tagBorder: "border-teal-200",
    cardHoverBorder: "hover:border-teal-400",
    cardHoverShadow: "hover:shadow-teal-500/10",
    actionText: "text-teal-600 group-hover:text-teal-700",
  },
};

const DEFAULT_THEME: SectionVisualTheme = {
  id: "all",
  number: "ALL",
  name: "All Projects",
  accentHex: "#0284C7",
  numberBg: "bg-slate-800",
  numberText: "text-white",
  iconBg: "bg-slate-100",
  iconColor: "text-slate-700",
  badge: "bg-slate-100 text-slate-700 border-slate-200",
  pillActive: "bg-slate-900 text-white shadow-sm",
  tagBg: "bg-slate-50",
  tagText: "text-slate-600",
  tagBorder: "border-slate-200",
  cardHoverBorder: "hover:border-slate-300",
  cardHoverShadow: "hover:shadow-slate-500/10",
  actionText: "text-slate-700 group-hover:text-slate-900",
};

export function getSectionTheme(categoryId?: string): SectionVisualTheme {
  if (!categoryId) return DEFAULT_THEME;
  return SECTION_THEMES[categoryId] || DEFAULT_THEME;
}

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCfdSubcategory, setActiveCfdSubcategory] = useState<string>("all-sub");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

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
    { id: "all-sub", label: "All CFD" },
    { id: "retail-promotions", label: "01.1 Retail Promotions" },
    { id: "ib-partner", label: "01.2 IB & Partner" },
    { id: "loyalty-programs", label: "01.3 Loyalty Programs" },
    { id: "brand-campaigns", label: "01.4 Brand Campaigns" },
    { id: "product-marketing", label: "01.5 Product Marketing" },
  ];

  const getProjectCount = (categoryId: string) => {
    if (categoryId === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === categoryId).length;
  };

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
  const activeTheme = getSectionTheme(activeCategory);
  const eightSections = CATEGORIES_CONFIG.filter((c) => c.id !== "all");

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    setActiveCfdSubcategory("all-sub");
    setIsDropdownOpen(false);
  };

  return (
    <section id="projects" ref={galleryRef} className="py-20 md:py-28 border-t border-slate-200/80 bg-[#FAFCFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. REFINED GALLERY HEADER (Không gian thở thoáng đãng, sang trọng)
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-black uppercase tracking-widest text-slate-700 shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTheme.accentHex }} />
              <span>Project Gallery · Selected Works</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Commercial delivery & projects showcase.
            </h2>
            
            {/* Elegant Typographic Positioning Subtitle (Thay thế cho hộp banner cồng kềnh trước đây) */}
            {currentCategoryMeta && currentCategoryMeta.positioning ? (
              <p className="text-sm md:text-base text-slate-600 mt-2 font-medium flex items-center gap-2 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider text-white"
                  style={{ backgroundColor: activeTheme.accentHex }}
                >
                  {currentCategoryMeta.number}
                </span>
                <span className="font-bold text-slate-900">{currentCategoryMeta.label}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">{currentCategoryMeta.positioning}</span>
              </p>
            ) : (
              <p className="text-sm md:text-base text-slate-500 mt-2 font-normal">
                Khám phá 8 nhóm dự án chuyên môn xuyên suốt sự nghiệp điều phối và vận hành marketing.
              </p>
            )}
          </div>

          {/* Right Controls: View Switcher (Grid vs List) + Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                title="Gallery Grid View"
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                title="Editorial List View"
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Project count indicator */}
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
              <span className="text-slate-900 font-black">{filteredProjects.length}</span>
              <span className="text-slate-400 ml-1">/ {PROJECTS.length} cases</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. UNIFIED GALLERY FILTER BAR (Gom toàn bộ bộ lọc về 1 tầng duy nhất)
           ========================================================================= */}
        <div className="mb-10 p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center gap-3">
          
          {/* Quick Dropdown Picker for 8 Sections */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full md:w-64 flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-left transition-all cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-2 truncate">
                <span
                  className="w-5 h-5 rounded-md text-white flex items-center justify-center text-[10px] font-black shrink-0"
                  style={{ backgroundColor: activeTheme.accentHex }}
                >
                  {currentCategoryMeta?.number || "ALL"}
                </span>
                <span className="text-xs font-bold text-slate-800 truncate">
                  {currentCategoryMeta?.shortName || "All Sections"}
                </span>
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Popover */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 max-h-96 overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 p-2 space-y-1 animate-hero-in">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                  <span>8 Portfolio Sections</span>
                  <span>Select</span>
                </div>

                {CATEGORIES_CONFIG.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  const count = getProjectCount(cat.id);
                  const itemTheme = getSectionTheme(cat.id);

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-50 font-bold"
                          : "hover:bg-slate-50/70 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span
                          className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-white shrink-0"
                          style={{ backgroundColor: itemTheme.accentHex }}
                        >
                          {cat.number}
                        </span>
                        <span className="text-xs font-bold text-slate-800 truncate">
                          {cat.shortName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {count}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Horizontal Gallery Pills with Distinct Section Dots */}
          <div className="flex-1 overflow-x-auto pb-0.5 scrollbar-none">
            <div className="flex items-center gap-1.5 min-w-max">
              <button
                type="button"
                onClick={() => handleSelectCategory("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                All Works ({PROJECTS.length})
              </button>
              
              {eightSections.map((sec) => {
                const secTheme = getSectionTheme(sec.id);
                const isSecSelected = activeCategory === sec.id;
                const count = getProjectCount(sec.id);

                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => handleSelectCategory(sec.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSecSelected
                        ? `${secTheme.pillActive} shadow-xs`
                        : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isSecSelected ? "#ffffff" : secTheme.accentHex,
                      }}
                    />
                    <span>{sec.shortName}</span>
                    <span
                      className={`text-[10px] font-semibold opacity-75 ${
                        isSecSelected ? "text-white" : "text-slate-400"
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section 01 Subcategories (Inline minimal row if Section 01 is active) */}
        {activeCategory === "cfd-marketing" && (
          <div className="mb-8 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-black uppercase tracking-wider text-sky-700 mr-2 shrink-0">
              CFD Focus:
            </span>
            {cfdSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveCfdSubcategory(sub.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer shrink-0 ${
                  activeCfdSubcategory === sub.id
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* =========================================================================
            3. GALLERY PRESENTATION (Grid View hoặc List View)
           ========================================================================= */}
        {viewMode === "grid" ? (
          /* ==================== GRID GALLERY MODE ==================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => {
              const cardTheme = getSectionTheme(project.category);

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Subtle Top Color Signature */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] z-20 transition-all duration-300 group-hover:h-[4px]"
                    style={{ backgroundColor: cardTheme.accentHex }}
                  />

                  <div>
                    {/* Visual Media Showcase (16:9 / 16:10 Cinematic Frame) */}
                    {project.coverImage ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                        
                        {/* Glass Badge: Company & Market */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-white">
                          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                            {project.company}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                            {project.market}
                          </span>
                        </div>

                        {/* Status floating badge bottom-right */}
                        <div className="absolute bottom-3 right-3">
                          <span
                            className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-md backdrop-blur-md shadow-xs ${
                              project.status === "Completed"
                                ? "bg-emerald-500/90 text-white"
                                : "bg-amber-500/90 text-white"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Editorial Typography Banner for text-only items */
                      <div
                        className="p-6 relative aspect-[16/10] flex flex-col justify-between overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${cardTheme.accentHex}12 0%, #ffffff 50%, ${cardTheme.accentHex}18 100%)`,
                        }}
                      >
                        <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider">
                          <span
                            className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-bold"
                            style={{ color: cardTheme.accentHex }}
                          >
                            {project.company}
                          </span>
                          <span className="text-slate-500 font-bold">{project.market}</span>
                        </div>

                        <div>
                          <span className="text-xl font-black text-slate-900 leading-tight block">
                            {project.title}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-extrabold uppercase tracking-wider">
                          <span
                            className="px-2 py-0.5 rounded border"
                            style={{
                              borderColor: `${cardTheme.accentHex}40`,
                              color: cardTheme.accentHex,
                              backgroundColor: `${cardTheme.accentHex}10`,
                            }}
                          >
                            Section {project.sectionNumber}
                          </span>
                          <span className="text-slate-400">{project.status}</span>
                        </div>
                      </div>
                    )}

                    {/* Editorial Content Block (Tối giản, thoáng đạt, không lồng hộp thừa) */}
                    <div className="p-6 pb-2">
                      {/* Category Label */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${cardTheme.badge}`}
                        >
                          {project.sectionNumber} · {project.categoryName}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Punchy One-liner */}
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                        {project.subtitle}
                      </p>

                      {/* Touchpoints (Tối giản 2 tag) */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.touchpoints.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Minimal Card Footer */}
                  <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium flex items-center gap-1.5 text-[11px]">
                      <Clock className="w-3.5 h-3.5" style={{ color: cardTheme.accentHex }} />
                      <span>{project.period}</span>
                    </span>

                    <span
                      className="inline-flex items-center gap-1 font-black text-xs group-hover:translate-x-0.5 transition-transform"
                      style={{ color: cardTheme.accentHex }}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* ==================== EDITORIAL LIST MODE ==================== */
          <div className="space-y-3">
            {filteredProjects.map((project) => {
              const cardTheme = getSectionTheme(project.category);

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200 gap-4"
                >
                  <div className="flex items-center gap-4">
                    {/* Small thumbnail preview */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative border border-slate-200">
                      {project.coverImage ? (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center font-black text-xs text-white"
                          style={{ backgroundColor: cardTheme.accentHex }}
                        >
                          {project.sectionNumber}
                        </div>
                      )}
                    </div>

                    {/* Project text details */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${cardTheme.badge}`}
                        >
                          {project.sectionNumber}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          {project.company} · {project.market}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 max-w-xl">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right metadata & action */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="text-xs font-semibold text-slate-400">
                      {project.period}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors"
                      style={{ color: cardTheme.accentHex }}
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

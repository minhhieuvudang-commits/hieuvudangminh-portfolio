export type ProjectCategory = 
  | "cfd-forex"
  | "education"
  | "csr-corporate"
  | "social-media"
  | "freelance-brand"
  | "sports-content";

export type SubCategory = 
  | "retail-promotions"
  | "ib-partner"
  | "loyalty-programs"
  | "brand-campaigns"
  | "product-marketing"
  | "general";

export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectRoleItem {
  area: "Direct Ownership" | "Coordination" | "Support" | "Collaboration";
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  market: string;
  category: ProjectCategory;
  categoryName: string;
  subCategory?: SubCategory;
  subCategoryName?: string;
  sectionNumber: string;
  status: "Completed" | "Planning / In Development" | "Concept / Planning" | "Always-On";
  role: string;
  touchpoints: string[];
  summary: string;
  overview: string;
  challenge: string;
  objectives: {
    primary: string;
    secondary: string[];
  };
  rolesAndResponsibilities: ProjectRoleItem[];
  strategyAndPlanning: {
    approach: string;
    timeline: string;
    stakeholders: string[];
    framework: string;
  };
  executionSteps: ProjectStep[];
  resultsAndImpact: {
    verified: boolean;
    metrics: ProjectMetric[];
    editorialSummary: string;
    disclaimer?: string;
  };
  galleryNotes?: {
    type: "editorial-placeholder" | "data-visualization" | "assets-note";
    title: string;
    caption: string;
  };
  keyTakeaways: string[];
  relatedProjectSlugs: string[];
}

export interface CareerExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  subtitle: string;
  highlights: string[];
  keyStats?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

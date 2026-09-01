"use client";

import { FEATURED_PROJECTS } from "@/data/projectsData";
import { SERVICES } from "@/data/servicesData";
import { ARTICLES } from "@/data/insightsData";
import { SCHEMES } from "@/data/schemesData";
import type { ProjectItem } from "@/lib/supabase";

export interface CMSLead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  serviceName: string;
  sector: string;
  date: string;
  time: string;
  amount: number;
  status: "Pending" | "Contacted" | "In Progress" | "Completed" | "Cancelled";
  createdAt: string;
}

const STORAGE_KEYS = {
  PROJECTS: "odcons_cms_projects",
  SERVICES: "odcons_cms_services",
  INSIGHTS: "odcons_cms_insights",
  SCHEMES: "odcons_cms_schemes",
  LEADS: "odcons_cms_leads",
};

// Initial Mock Leads
const INITIAL_LEADS: CMSLead[] = [
  {
    id: "lead-101",
    name: "Anshuman Mohapatra",
    email: "anshuman@agri-tech.com",
    mobile: "+91 98765 43210",
    serviceName: "Detailed Project Report (DPR) Consultancy",
    sector: "Fisheries & Aquaculture",
    date: "2026-09-02",
    time: "11:30 AM",
    amount: 2500,
    status: "Pending",
    createdAt: "2026-09-01T08:30:00Z"
  },
  {
    id: "lead-102",
    name: "Rajesh Kumar Sahoo",
    email: "rajesh.fpo@odishafarmers.org",
    mobile: "+91 94370 11223",
    serviceName: "2D & 3D Architectural Project Layout",
    sector: "Food Processing & Feed",
    date: "2026-09-03",
    time: "02:30 PM",
    amount: 3500,
    status: "In Progress",
    createdAt: "2026-09-01T07:15:00Z"
  },
  {
    id: "lead-103",
    name: "Priyanka Mishra",
    email: "priyanka.mishra@agriedu.in",
    mobile: "+91 91240 55667",
    serviceName: "Government Scheme & Subsidy Advisory",
    sector: "Horticulture & Mushroom",
    date: "2026-09-04",
    time: "04:00 PM",
    amount: 2000,
    status: "Contacted",
    createdAt: "2026-08-31T16:20:00Z"
  }
];

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// -------------------------------------------------------------
// PROJECTS STORE
// -------------------------------------------------------------
export function getStoredProjects(): ProjectItem[] {
  if (!isBrowser()) return FEATURED_PROJECTS;
  const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(FEATURED_PROJECTS));
    return FEATURED_PROJECTS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return FEATURED_PROJECTS;
  }
}

export function saveStoredProject(project: ProjectItem): ProjectItem[] {
  const current = getStoredProjects();
  const index = current.findIndex((p) => p.id === project.id);
  let updated: ProjectItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = project;
  } else {
    updated = [project, ...current];
  }
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
  }
  return updated;
}

export function deleteStoredProject(id: string): ProjectItem[] {
  const current = getStoredProjects();
  const updated = current.filter((p) => p.id !== id);
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
  }
  return updated;
}

// -------------------------------------------------------------
// SERVICES STORE
// -------------------------------------------------------------
export function getStoredServices(): any[] {
  if (!isBrowser()) return SERVICES;
  const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(SERVICES));
    return SERVICES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return SERVICES;
  }
}

export function saveStoredService(service: any): any[] {
  const current = getStoredServices();
  const index = current.findIndex((s) => s.id === service.id || s.slug === service.slug);
  let updated: any[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = service;
  } else {
    updated = [service, ...current];
  }
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
  }
  return updated;
}

export function deleteStoredService(idOrSlug: string): any[] {
  const current = getStoredServices();
  const updated = current.filter((s) => s.id !== idOrSlug && s.slug !== idOrSlug);
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
  }
  return updated;
}

// -------------------------------------------------------------
// INSIGHTS STORE
// -------------------------------------------------------------
export function getStoredInsights(): any[] {
  if (!isBrowser()) return ARTICLES;
  const data = localStorage.getItem(STORAGE_KEYS.INSIGHTS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.INSIGHTS, JSON.stringify(ARTICLES));
    return ARTICLES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return ARTICLES;
  }
}

export function saveStoredInsight(insight: any): any[] {
  const current = getStoredInsights();
  const index = current.findIndex((i) => i.id === insight.id || i.slug === insight.slug);
  let updated: any[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = insight;
  } else {
    updated = [insight, ...current];
  }
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.INSIGHTS, JSON.stringify(updated));
  }
  return updated;
}

export function deleteStoredInsight(idOrSlug: string): any[] {
  const current = getStoredInsights();
  const updated = current.filter((i) => i.id !== idOrSlug && i.slug !== idOrSlug);
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.INSIGHTS, JSON.stringify(updated));
  }
  return updated;
}

// -------------------------------------------------------------
// SCHEMES STORE
// -------------------------------------------------------------
export function getStoredSchemes(): any[] {
  if (!isBrowser()) return SCHEMES;
  const data = localStorage.getItem(STORAGE_KEYS.SCHEMES);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.SCHEMES, JSON.stringify(SCHEMES));
    return SCHEMES;
  }
  try {
    return JSON.parse(data);
  } catch {
    return SCHEMES;
  }
}

export function saveStoredScheme(scheme: any): any[] {
  const current = getStoredSchemes();
  const index = current.findIndex((s) => s.id === scheme.id || s.slug === scheme.slug);
  let updated: any[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = scheme;
  } else {
    updated = [scheme, ...current];
  }
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.SCHEMES, JSON.stringify(updated));
  }
  return updated;
}

export function deleteStoredScheme(idOrSlug: string): any[] {
  const current = getStoredSchemes();
  const updated = current.filter((s) => s.id !== idOrSlug && s.slug !== idOrSlug);
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.SCHEMES, JSON.stringify(updated));
  }
  return updated;
}

// -------------------------------------------------------------
// LEADS STORE
// -------------------------------------------------------------
export function getStoredLeads(): CMSLead[] {
  if (!isBrowser()) return INITIAL_LEADS;
  const data = localStorage.getItem(STORAGE_KEYS.LEADS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(INITIAL_LEADS));
    return INITIAL_LEADS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_LEADS;
  }
}

export function updateLeadStatus(id: string, status: CMSLead["status"]): CMSLead[] {
  const current = getStoredLeads();
  const updated = current.map((l) => (l.id === id ? { ...l, status } : l));
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  }
  return updated;
}

export function deleteStoredLead(id: string): CMSLead[] {
  const current = getStoredLeads();
  const updated = current.filter((l) => l.id !== id);
  if (isBrowser()) {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  }
  return updated;
}

// -------------------------------------------------------------
// RESET ALL STORE DATA TO INITIAL DEFAULTS
// -------------------------------------------------------------
export function resetAllCMSData(): void {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(FEATURED_PROJECTS));
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(SERVICES));
  localStorage.setItem(STORAGE_KEYS.INSIGHTS, JSON.stringify(ARTICLES));
  localStorage.setItem(STORAGE_KEYS.SCHEMES, JSON.stringify(SCHEMES));
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(INITIAL_LEADS));
}

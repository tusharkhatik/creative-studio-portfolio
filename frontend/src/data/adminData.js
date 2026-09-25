import { BarChart3, FolderKanban, LayoutDashboard, Sparkles } from "lucide-react";

export const adminStats = [
  { label: "Active projects", value: "24", change: "+12%", icon: FolderKanban, accent: "bg-violet-500/15 text-violet-200" },
  { label: "New leads", value: "18", change: "+8%", icon: LayoutDashboard, accent: "bg-cyan-500/15 text-cyan-200" },
  { label: "Avg. response", value: "2.4h", change: "-1.1h", icon: BarChart3, accent: "bg-emerald-500/15 text-emerald-200" },
  { label: "Brand score", value: "96%", change: "+4%", icon: Sparkles, accent: "bg-fuchsia-500/15 text-fuchsia-200" },
];

export const projects = [
  { id: "p-101", title: "Creative Campaign", category: "Video", year: "2026", status: "Published", description: "Campaign identity for an editorial campaign and social launch.", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80" },
  { id: "p-102", title: "Brand Identity", category: "Branding", year: "2026", status: "In review", description: "Identity system and launch assets for a premium boutique brand.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80" },
  { id: "p-103", title: "Digital Experience", category: "Motion", year: "2025", status: "Draft", description: "Motion and UX storytelling for a product storytelling experience.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80" },
];

export const services = [
  { id: 1, title: "Brand strategy", category: "Strategy", price: "From $1,200", description: "Positioning workshops and creative direction aligned to your growth goals." },
  { id: 2, title: "Visual identity", category: "Design", price: "From $2,400", description: "Logo systems, visual language, and brand guidelines for modern businesses." },
  { id: 3, title: "Motion content", category: "Video", price: "From $2,900", description: "Short-form edits, campaign visuals, and story-driven motion systems." },
];

export const testimonials = [
  { id: 1, name: "Alex Morgan", role: "Content Creator", message: "The final video looked far more professional than I expected. The editing, pacing, and attention to detail were excellent." },
  { id: 2, name: "Rahul Sharma", role: "Small Business Owner", message: "The branding work gave my business a completely new visual identity. Clean, modern, and exactly what I wanted." },
  { id: 3, name: "Daniel Carter", role: "YouTube Creator", message: "The thumbnails immediately made my content look more professional. The communication and turnaround were great." },
];

export const faqs = [
  { id: 1, question: "How long does a project usually take?", answer: "Most design and motion projects take between 2 and 6 weeks depending on scope and revision cycles." },
  { id: 2, question: "Do you work on retainer or one-off projects?", answer: "We support both one-off engagements and retainer-based creative partnerships." },
  { id: 3, question: "Can you help with strategy and execution?", answer: "Yes. We can cover discovery, positioning, creative concepts, design, and production." },
];

export const leads = [
  { id: 1, name: "Aria Lee", email: "aria@example.com", status: "New", projectType: "Branding" },
  { id: 2, name: "David Patel", email: "david@example.com", status: "Follow up", projectType: "Motion" },
  { id: 3, name: "Nisha Ahmed", email: "nisha@example.com", status: "Qualified", projectType: "Campaign" },
];

export const media = [
  { id: 1, name: "Campaign teaser", type: "Video", url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, name: "Brand board", type: "Image", url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, name: "Profile shoot", type: "Image", url: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80" },
];

export const latestProjects = [
  { id: "p-101", title: "Creative Campaign", category: "Video", year: "2026", status: "Published" },
  { id: "p-102", title: "Brand Identity", category: "Branding", year: "2026", status: "In review" },
  { id: "p-103", title: "Digital Experience", category: "Motion", year: "2025", status: "Draft" },
];

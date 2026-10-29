export type AchievementCategory = 
  | "Project Competition" 
  | "Hackathon" 
  | "Cybersecurity CTF" 
  | "Hardware Design";

export interface Achievement {
  id: string;
  title: string;
  event: string;
  category: AchievementCategory;
  result: string;
  project?: string;
  team?: string;
  description: string;
  year?: string;
  metric?: string;
  url?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "vishwanova",
    title: "National Project Competition Grand Finalist",
    event: "Vishwanova Project Competition — MIT-WPU",
    category: "Project Competition",
    result: "Grand Finalist",
    metric: "700+ Teams",
    project: "Lazarus",
    description: "Selected as Grand Finalist out of 700+ competing teams nationwide for architecting and building Lazarus, an AI-powered Zombie API discovery and defense platform.",
    year: "2026",
    featured: true,
  },
  {
    id: "odoo-sns",
    title: "National Hackathon Finalist",
    event: "Odoo × SNS Coimbatore Hackathon 2026",
    category: "Hackathon",
    result: "Finalist",
    project: "GlobeTrotter",
    team: "AI Avengers",
    description: "Qualified for the national on-site final round in Gandhinagar following the virtual preliminary round, developing the GlobeTrotter AI travel planning platform.",
    year: "2026",
  },
  {
    id: "xploitathon-ctf",
    title: "National CTF Round 2 Competitor",
    event: "X'ploitathon CTF 2026",
    category: "Cybersecurity CTF",
    result: "Rank 26 (Round 2)",
    metric: "Rank 26",
    team: "CyberGoats",
    description: "Competed in an intense national cybersecurity Capture The Flag competition across a 24-hour Round 1 and 12-hour Round 2.",
    year: "2026",
  },
  {
    id: "pcb-design",
    title: "PCB Circuit Design 2nd Place",
    event: "PCB Designing Competition — SAKEC Mumbai",
    category: "Hardware Design",
    result: "2nd Position",
    metric: "2nd Place",
    description: "Secured second place overall for hardware circuit design and schematic optimization.",
    year: "2025",
  },
  {
    id: "techsprint",
    title: "Collegiate Hackathon Debut",
    event: "TechSprint — GDG On Campus SIESGST",
    category: "Hackathon",
    result: "Built & Deployed",
    project: "CareerLens",
    description: "Built and deployed CareerLens, an AI-powered resume and career readiness analyzer, during first collegiate hackathon.",
    url: "https://career-lens-mfhe.onrender.com",
  },
];

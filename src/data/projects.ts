export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  achievement?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "lazarus",
    name: "Lazarus",
    tagline: "Zombie API Discovery & Defence Platform",
    description: "Architected and developed a full-stack platform to identify and defend against Zombie APIs. Leveraged an LLM integration for intelligent analysis and built a robust FastAPI backend to handle defense mechanisms.",
    technologies: ["FastAPI", "React", "MongoDB", "Qwen"],
    achievement: "Grand Finalist • 700+ teams (Vishwanova)",
    githubUrl: "#", // Placeholder until verified URL is available
    featured: true,
  },
  {
    id: "globetrotter",
    name: "GlobeTrotter",
    tagline: "Intelligent Travel Planner",
    description: "Built a smart travel planning application for a major hackathon. Focused on product-oriented AI integration to streamline trip organization and recommendation logic.",
    technologies: ["AI", "Full Stack", "Product Engineering"],
    achievement: "Finalist • Odoo × SNS Hackathon 2026",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "careerlens",
    name: "CareerLens",
    tagline: "AI-Powered Resume & Career Readiness Analyzer",
    description: "Developed an AI-powered resume analyzer during TechSprint. Implemented the frontend and connected an LLM backend to automatically parse resumes and generate actionable career tracks.",
    technologies: ["HTML/CSS/JS", "EJS", "GenAI", "Render"],
    achievement: "Built at TechSprint (GDG On Campus)",
    githubUrl: "#",
    liveUrl: "https://career-lens-mfhe.onrender.com",
    featured: true,
  },
  {
    id: "nexus",
    name: "Nexus",
    tagline: "AI-Powered Startup–Investor Matchmaking",
    description: "Developed a full-stack matchmaking platform matching startups with investors based on business metrics and AI analysis.",
    technologies: ["Node.js", "Express", "MongoDB", "Bootstrap 5"],
    achievement: "Built at VEGA Hackathon",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "dealflow360",
    name: "DealFlow360",
    tagline: "MERN-based Deal Management Application",
    description: "Engineered a robust business application with role-based workflows, automated invoice generation, and subscription management.",
    technologies: ["MERN Stack", "Role-based Auth", "PDF Gen"],
    githubUrl: "#",
    featured: false,
  }
];

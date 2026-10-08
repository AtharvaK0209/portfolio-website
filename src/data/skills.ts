export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "software-engineering",
    index: "01",
    title: "Software Engineering",
    description: "Building practical software systems with strong foundations in programming and product-oriented development.",
    skills: ["C", "C++", "Java", "Python", "JavaScript"]
  },
  {
    id: "frontend",
    index: "02",
    title: "Frontend",
    description: "Creating responsive, interactive user interfaces and client-side applications.",
    skills: ["HTML", "CSS", "React", "Vite", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: "backend-apis",
    index: "03",
    title: "Backend & APIs",
    description: "Developing robust server-side logic and designing RESTful APIs for seamless integration.",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
  },
  {
    id: "data-databases",
    index: "04",
    title: "Data & Databases",
    description: "Designing schemas and managing data architectures for scalable applications.",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"]
  },
  {
    id: "ai-agentic",
    index: "05",
    title: "AI & Agentic Systems",
    description: "Integrating large language models and exploring autonomous AI-assisted workflows.",
    skills: ["Google Gemini API", "OpenRouter", "Qwen", "LLM application development", "Prompt Engineering", "Exploring Agentic AI"]
  },
  {
    id: "cybersecurity",
    index: "06",
    title: "Cybersecurity",
    description: "Analyzing vulnerabilities and applying penetration-testing fundamentals to secure applications.",
    skills: ["OWASP Top 10", "NetSparker", "Kali Linux", "Burp Suite", "Metasploit", "Wireshark"]
  },
  {
    id: "tools-dev",
    index: "07",
    title: "Tools & Development",
    description: "Leveraging modern tooling for version control, coding, and workflow automation.",
    skills: ["Git", "GitHub", "VS Code", "Google Antigravity"]
  }
];

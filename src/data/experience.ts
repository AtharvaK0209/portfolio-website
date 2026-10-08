export type ExperienceType = 'INTERNSHIP' | 'AMBASSADOR' | 'COMMUNITY' | 'VOLUNTEER';

export interface Experience {
  id: string;
  organization: string;
  role: string;
  type: ExperienceType;
  startDate?: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "gsa",
    organization: "Google",
    role: "Google Student Ambassador 2026",
    type: "AMBASSADOR",
    description: [
      "Conducted student-facing sessions and engaged in product trial activities involving Gemini and Nano Banana.",
      "Worked on student engagement, event promotion, and participation within the technical community."
    ],
  },
  {
    id: "cyber-intern",
    organization: "In-house Internship",
    role: "Cybersecurity Intern",
    type: "INTERNSHIP",
    description: [
      "Identified and analyzed OWASP Top 10 vulnerabilities using NetSparker.",
      "Applied penetration-testing fundamentals using industry-standard security tools."
    ],
    technologies: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark"]
  },
  {
    id: "oasis",
    organization: "Oasis Infobyte",
    role: "Web Development & Design Intern",
    type: "INTERNSHIP",
    startDate: "15 June",
    endDate: "15 July",
    description: [
      "Built and designed web applications during a remote internship."
    ],
  },
  {
    id: "ecell",
    organization: "E-Cell IIT Bombay",
    role: "Campus Ambassador 2026",
    type: "AMBASSADOR",
    description: [
      "Represented E-Cell IIT Bombay to promote entrepreneurship initiatives on campus."
    ],
  },
  {
    id: "gdg",
    organization: "GDG On Campus SIESGST",
    role: "Volunteer",
    type: "VOLUNTEER",
    description: [
      "Managed events, outreach, and publicity to support technical community building."
    ],
  }
];

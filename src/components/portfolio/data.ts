export const profile = {
  name: "Amartya Kushwaha",
  initials: "AK",
  role: "Computer Science Engineer · AI & ML",
  tagline: "Building Intelligent Software.",
  subtagline:
    "Passionate about AI, Backend Development, Cybersecurity & Full Stack Engineering.",
  location: "Deoria, Uttar Pradesh, India",
  email: "amartyakushwaha30@gmail.com",
  phone: "+91 9451671806",
  github: "https://github.com/iamartya15",
  linkedin: "https://www.linkedin.com/in/amartya-kushwaha-70204832b",
  githubUser: "iamartya15",
};

export const skillGroups = [
  {
    title: "Programming",
    items: ["Java", "Python", "JavaScript", "C", "SQL"],
  },
  { title: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "React"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST API"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  {
    title: "Core CS",
    items: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      "REMnux",
      "Cuckoo Sandbox",
      "Malware Analysis",
      "Reverse Engineering",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
];

export const experience = [
  {
    company: "IBM × AKTU",
    role: "Cybersecurity Virtual Intern",
    period: "June 2025",
    points: [
      "Malware analysis & reverse engineering using REMnux",
      "Dynamic analysis and Indicators of Compromise (IOC) extraction",
      "Threat intelligence and phishing analysis workflows",
    ],
  },
  {
    company: "CodSoft",
    role: "Python Programming Intern",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Built To-Do List, Password Generator and Calculator",
      "Applied Python OOP principles across modular projects",
    ],
  },
];

export const projects = [
  {
    title: "Malware Analysis & Reverse Engineering",
    blurb:
      "Static + dynamic malware analysis pipeline with IOC extraction and threat reporting.",
    tech: ["Python", "Linux", "REMnux", "Cuckoo Sandbox"],
    features: [
      "Dynamic malware analysis",
      "Static analysis",
      "IOC extraction",
      "Threat reports",
    ],
    accent: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Bank Management System",
    blurb:
      "OOP-driven bank management with account lifecycle, transactions and persistent CSV storage.",
    tech: ["Python", "SQL", "CSV", "OOP"],
    features: [
      "Account creation",
      "Deposit & withdraw",
      "Balance tracking",
      "Transaction history",
    ],
    accent: "from-purple-500/30 to-fuchsia-500/30",
  },
  {
    title: "Password Generator",
    blurb:
      "Secure, configurable random password generator with strength heuristics.",
    tech: ["Python"],
    features: ["Length control", "Character classes", "Strength scoring"],
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "To-Do List",
    blurb: "Lightweight task manager with persistent state and clean CLI UX.",
    tech: ["Python"],
    features: ["Add / remove tasks", "Persistence", "Status tracking"],
    accent: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    title: "Calculator",
    blurb: "Modular calculator built with clean Python functions and tests.",
    tech: ["Python"],
    features: ["Arithmetic ops", "Modular design", "Error handling"],
    accent: "from-amber-500/30 to-rose-500/30",
  },
];

export const certifications = [
  "IBM × AKTU Cybersecurity Internship",
  "CodSoft Python Internship",
  "TrainX DSA Intermediate",
  "Cyber Security Training Program",
];

export const achievements = [
  "Organized Innovathon 2026",
  "Hackathon Coordinator",
  "Strong problem-solving across DSA",
  "Backend development specialization",
  "Cybersecurity research & tooling",
];

export const stats = [
  { label: "Projects Shipped", value: 12, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Certifications", value: 4, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
];

export const ACCENT = "#FF6B2B";

export const primarySkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Figma",
  "HTML5 / CSS3",
  "Git",
  "Webdesign",
  "Illustration",
  "Branding",
  "Adobe Suite",
  "Affinity",
  "WordPress",
  "Elementor",
];

export const secondarySkills = [
  "Vue.js",
  "Astro",
  "Three.js",
  "Angular",
  "Storybook",
  "Jest",
];

export const experiences = [
  {
    company: "Marketing for a Day",
    role: "CTO",
    period: "Current",
    description:
      "Leading technical vision, front-end architecture, and product development.",
    current: true,
  },
  {
    company: "iprox",
    role: "Front-end Developer & Designer",
    period: "2023 - 2024",
    description:
      "Full-stack design and development. Next.js, TypeScript, Tailwind, Strapi CMS.",
    current: false,
  },
  {
    company: "Saxum",
    role: "Front-end Developer",
    period: "2022 - 2023",
    description: "Amsterdam-based agency. Front-end development.",
    current: false,
  },
  {
    company: "Media.Monks",
    role: "Front-end Developer",
    period: "2020 – 2022",
    description:
      "Worked on award-winning interactive projects. FWA & Awwwards nominated.",
    current: false,
  },
  {
    company: "Jorik",
    role: "Design & Development",
    period: "Every now and then",
    description:
      "Freelance design and development work for various clients. Branding, logos, web design, front-end development.",
    current: false,
  },
];

export const brands = [
  "Netflix",
  "KLM",
  "ABN Amro",
  "Ocean Sewage Alliance",
  "Tostibus",
  "ROKT",
  "iprox",
  "Gemeente Veenendaal",
  "Buitenkanz",
  "Media.Monks",
];

export const projects = [
  {
    name: "Palet 🎨",
    description: "App to turn your idea into a brand identity — instantly.",
    tags: ["TypeScript", "React", "Tailwind", "AI", "Vibe"],
    link: "https://palet-sigma.vercel.app/",
  },
  {
    name: "Covrd 📄",
    description:
      "Paste a job description and your CV — Covrd writes a tailored cover letter and shows what you're missing.",
    tags: ["Next.js", "AI", "Vibe", "TypeScript", "Tailwind"],
    link: "https://covrd-chi.vercel.app/",
  },
  {
    name: "Torched 🔥",
    description:
      "Paste a website. We fetch it, read it, and roast it. No mercy. No fluff. Just what's wrong with it.",
    tags: ["Vibe", "AI", "Tailwind", "TypeScript", "Next.js"],
    link: "https://torched-ashy.vercel.app/",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jorikvanruiswijk",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/jorikvanruiswijk",
    icon: "github",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jorikvanruiswijk",
    icon: "instagram",
  },
  {
    name: "Behance",
    href: "https://behance.net/jorikvanruiswijk",
    icon: "behance",
  },
] as const;

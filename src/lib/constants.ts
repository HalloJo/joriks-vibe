export const ACCENT = "#FF6B2B";

export const primarySkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Figma",
  "HTML / CSS",
  "Git",
  "Webdesign",
  "Illustration",
  "Branding",
  "Adobe Suite",
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
  "ROKT",
  "iprox",
  "Gemeente Veenendaal",
  "Buitenkanz",
  "Media.Monks",
];

export const projects = [
  {
    name: "Buitenkanz",
    description:
      "Website & brand identity for a youth coaching foundation. Built with Next.js, TypeScript and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Identity"],
    link: "https://buitenkanz.com",
  },
  {
    name: "Ocean Sewage Alliance",
    description:
      "Award-nominated website for an environmental NGO. Vue.js, Nuxt, GSAP animations.",
    tags: ["Vue.js", "Nuxt", "GSAP", "TypeScript"],
    link: "https://www.oceansewagealliance.org",
  },
  {
    name: "iprox",
    description:
      "Full redesign and development of a government software platform. Next.js, Strapi CMS, Tailwind.",
    tags: ["Next.js", "Strapi", "Tailwind", "TypeScript"],
    link: "https://www.iprox.nl",
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

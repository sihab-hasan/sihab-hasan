const deepFreeze = (value) => {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }

  Object.values(value).forEach(deepFreeze);
  return Object.freeze(value);
};

/**
 * Plain content reference for the portfolio.
 *
 * The actual markup lives directly in index.html — this file is not
 * imported or rendered by script.js. Keep it in sync by hand when you
 * update the HTML; it exists as a single readable summary of the content
 * (profile, links, stack, projects, experience) rather than a data source
 * the page builds itself from.
 */
export const portfolioData = deepFreeze({
  site: {
    language: "en",
    theme: "dark",
    title: "Sihab Hasan | Full-Stack Developer",
    description:
      "Sihab Hasan — full-stack developer building reliable web products with Next.js, TypeScript, Node.js, Laravel, and PostgreSQL.",
  },

  profile: {
    image: {
      src: "./public/assets/images/profile.jpg",
      alt: "Sihab Hasan",
    },
    name: "Sihab Hasan",
    role: "Full-Stack Developer",
    location: "Bangladesh",
    availability: "Open to product-focused work",
    primaryAction: {
      label: "View Portfolio",
      href: "https://sihabhasan.vercel.app/",
      external: true,
    },
  },

  sidebarGroups: [
    {
      label: "Connect",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sihab-hasan",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/sihab-hasan",
          external: true,
        },
        {
          label: "X",
          href: "https://x.com/sihabxd",
          external: true,
        },
      ],
    },
    {
      label: "Contact",
      links: [
        {
          label: "Email",
          href: "mailto:sihabsiuuu@gmail.com",
        },
        {
          label: "Resume",
          href: "https://drive.google.com/file/d/1m1z1qHa5Gz2C5cewWyCpmMLu4OcRoXn1/view?usp=sharing",
          external: true,
        },
      ],
    },
  ],

  sections: [
    {
      id: "about",
      label: "About",
      type: "text",
      content:
        "Full-stack developer focused on production-ready web applications, structured backend architecture, and clean frontend implementation — modular design, REST APIs, role-based auth, and scalable data thinking.",
    },
    {
      id: "stack",
      label: "Stack",
      type: "definition-grid",
      items: [
        {
          label: "Languages",
          values: ["JS", "TS", "PHP", "C++"],
        },
        {
          label: "Frontend",
          values: ["React", "Next.js", "Tailwind"],
        },
        {
          label: "Backend",
          values: ["Node", "Express", "Laravel"],
        },
        {
          label: "Databases",
          values: ["MongoDB", "Postgres", "MySQL"],
        },
      ],
    },
    {
      id: "projects",
      label: "Selected Projects",
      type: "linked-list",
      items: [
        {
          title: "Workforce ERP",
          href: "https://github.com/sihab-hasan/workforce-erp",
          meta: "Laravel + Next.js · In Progress",
          external: true,
        },
        {
          title: "Ticket Bro",
          href: "https://github.com/sihab-hasan/ticket-bro",
          meta: "MERN · Completed",
          external: true,
        },
        {
          title: "Snake Arena",
          href: "https://snake-arena-two.vercel.app/",
          meta: "Live preview",
          external: true,
        },
        {
          title: "MERN Authentication",
          href: "https://github.com/sihab-hasan/mern-authentication",
          meta: "Auth-focused build",
          external: true,
        },
      ],
    },
    {
      id: "experience",
      label: "Experience",
      type: "timeline",
      items: [
        {
          title: "Full-Stack Developer",
          period: "Jul 2026 – Present",
        },
        {
          title: "MERN Stack Developer",
          period: "Feb – Jun 2026",
        },
        {
          title: "C++ Developer",
          period: "Mar – Sep 2025",
        },
      ],
    },
  ],
});

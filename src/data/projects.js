// Featured projects — EXAMPLE CONTENT. Replace with your real projects.
//
// `title`, `stack`, `link` are language-independent.
// `en` / `es` hold the prose for each language:
//   summary, problem, architecture, impact  -> string
//   role                                    -> array of strings
//
// getProjects(lang) returns the list flattened for the active language.

const projects = [
  {
    title: "AI Recruiting Platform",
    stack: ["React", "Node.js", "Stripe", "Supabase", "Tailwind", "Docker"],
    link: "",
    en: {
      summary: "SaaS platform for AI-powered talent acquisition workflows.",
      problem:
        "Recruiting teams needed an automated pipeline to source, score and manage candidates at scale.",
      role: [
        "Frontend architecture",
        "Authentication systems",
        "Stripe integration",
        "Deployment workflows",
        "State management",
      ],
      architecture:
        "Modular SaaS frontend with a Node API, Supabase auth/data and Stripe-backed subscriptions.",
      impact: "Placeholder — e.g. reduced screening time by X%, onboarded N teams.",
    },
    es: {
      summary: "Plataforma SaaS para flujos de adquisición de talento con IA.",
      problem:
        "Los equipos de reclutamiento necesitaban un pipeline automatizado para captar, evaluar y gestionar candidatos a escala.",
      role: [
        "Arquitectura de frontend",
        "Sistemas de autenticación",
        "Integración con Stripe",
        "Flujos de despliegue",
        "Gestión de estado",
      ],
      architecture:
        "Frontend SaaS modular con API en Node, auth/datos en Supabase y suscripciones con Stripe.",
      impact: "Placeholder — ej. redujo el tiempo de screening en X%, N equipos onboarded.",
    },
  },
  {
    title: "Educational SaaS Platform",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    link: "",
    en: {
      summary: "Learning management platform with payments and user management.",
      problem:
        "An education business needed subscription billing, content delivery and account management in one product.",
      role: [
        "Payment infrastructure",
        "SaaS architecture",
        "Content management flows",
        "Authentication and subscriptions",
      ],
      architecture:
        "Multi-tenant SaaS with subscription billing, role-based access and a content delivery layer.",
      impact: "Placeholder — e.g. processed $X in subscriptions, served N students.",
    },
    es: {
      summary: "Plataforma de gestión de aprendizaje con pagos y gestión de usuarios.",
      problem:
        "Un negocio educativo necesitaba facturación por suscripción, entrega de contenido y gestión de cuentas en un solo producto.",
      role: [
        "Infraestructura de pagos",
        "Arquitectura SaaS",
        "Flujos de gestión de contenido",
        "Autenticación y suscripciones",
      ],
      architecture:
        "SaaS multi-tenant con facturación por suscripción, acceso por roles y capa de entrega de contenido.",
      impact: "Placeholder — ej. procesó $X en suscripciones, atendió a N estudiantes.",
    },
  },
  {
    title: "Project Title",
    stack: ["Tech", "Tech", "Tech", "Tech"],
    link: "",
    en: {
      summary: "One-line description of what this product is.",
      problem: "Describe the concrete problem this project solved.",
      role: ["Your responsibility", "Your responsibility", "Your responsibility"],
      architecture: "One line on how the system was structured.",
      impact: "The measurable or qualitative outcome.",
    },
    es: {
      summary: "Descripción en una línea de qué es este producto.",
      problem: "Describe el problema concreto que resolvió este proyecto.",
      role: ["Tu responsabilidad", "Tu responsabilidad", "Tu responsabilidad"],
      architecture: "Una línea sobre cómo se estructuró el sistema.",
      impact: "El resultado medible o cualitativo.",
    },
  },
];

export function getProjects(lang) {
  return projects.map(({ title, stack, link, ...locales }) => ({
    title,
    stack,
    link,
    ...locales[lang],
  }));
}

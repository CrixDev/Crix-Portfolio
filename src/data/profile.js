// Single source of truth for the landing copy — bilingual (EN / ES).
//
// `links` is language-independent (edit once).
// `content.en` / `content.es` hold every visible string, including UI labels.
// Components read the active language via the useT() hook.

export const links = {
  github: "https://github.com/CrixDev",
  linkedin: "https://www.linkedin.com/in/",
  email: "fer@hyperdigital.mx",
  resume: "/resume.pdf",
};

export const content = {
  en: {
    name: "CrixDev",
    role: "Full Stack Engineer",

    nav: {
      items: [
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Get in touch",
    },

    hero: {
      badge: "Available for technical leadership roles",
      headline:
        "Full Stack Engineer focused on architecture, payments and cloud systems.",
      subheadline:
        "I build reliable digital products — payment systems, scalable SaaS architecture, cloud integrations and modern web infrastructure.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      ctaResume: "Resume",
      stack: [
        "Stripe",
        "AWS",
        "Architecture",
        "CI/CD",
        "React",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "Docker",
      ],
      terminalTag: "production — bash",
    },

    about: {
      eyebrow: "Engineering mindset",
      title: "Building systems beyond the frontend",
      paragraphs: [
        "I started in web development focused on frontend experiences, but quickly evolved toward systems architecture, cloud infrastructure and technical ownership.",
        "Today I focus on building reliable digital products, integrating complex services like payment systems, and designing scalable architectures for modern SaaS platforms.",
      ],
      caresLabel: "What I care about",
      cares: [
        "System reliability",
        "Scalable architecture",
        "Product ownership",
        "Developer experience",
        "Cloud infrastructure",
        "Performance",
        "Technical leadership",
      ],
    },

    expertise: {
      eyebrow: "Core expertise",
      title: "Where I create technical leverage",
      cards: [
        {
          title: "Payment Infrastructure",
          body: "Stripe integrations, subscriptions, webhooks, Connect and billing systems.",
        },
        {
          title: "System Architecture",
          body: "Scalable SaaS structures, modular design and backend integrations.",
        },
        {
          title: "Cloud & Deployment",
          body: "AWS fundamentals, Docker, CI/CD, Vercel and cloud workflows.",
        },
        {
          title: "Product Engineering",
          body: "Frontend systems, API design and user-focused platforms.",
        },
        {
          title: "Technical Leadership",
          body: "Architecture decisions, ownership and product-oriented engineering.",
        },
        {
          title: "Developer Infrastructure",
          body: "Deployment pipelines, environments, automation and workflows.",
        },
      ],
    },

    experience: {
      eyebrow: "Experience",
      title: "A track of growing technical ownership",
      jobs: [
        {
          title: "Technical Lead / Full Stack Engineer",
          period: "2024 — Present",
          points: [
            "Leading architecture decisions for SaaS platforms.",
            "Managing Stripe payment infrastructure and integrations.",
            "Designing scalable frontend / backend structures.",
            "Collaborating on product scalability and engineering workflows.",
          ],
        },
        {
          title: "Freelance Product Developer",
          period: "2023 — 2024",
          points: [
            "Built and deployed modern web applications for startups and businesses.",
            "Worked on frontend systems, deployment flows and API integrations.",
          ],
        },
        {
          title: "Early Web Development Experience",
          period: "2021 — 2023",
          points: [
            "Started building websites and learning hosting, DNS and deployment infrastructure.",
            "Developed a strong interest in systems and networking fundamentals.",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "Featured projects",
      title: "Products I've architected and shipped",
      note: "Each project below outlines the problem, my responsibility, the architecture and the stack.",
      metaLabels: {
        problem: "Problem",
        architecture: "Architecture",
        role: "My role",
        impact: "Impact",
      },
    },

    focus: {
      eyebrow: "Current technical focus",
      text: "Currently deepening my knowledge in cloud infrastructure, distributed systems and platform engineering — with focus on AWS, observability and scalable backend architectures.",
      areas: [
        "AWS",
        "Observability",
        "Distributed systems",
        "DevOps",
        "Platform engineering",
      ],
    },

    manifesto: {
      eyebrow: "How I think",
      lines: [
        "I believe modern engineers should understand not only how to build software, but also how systems operate, scale and survive in production.",
        "My goal is to evolve into a technical leader capable of connecting engineering, infrastructure and product strategy.",
      ],
    },

    contact: {
      title: "Let's build reliable systems.",
      subtitle:
        "Open to technical leadership, product engineering and infrastructure-focused opportunities.",
      actions: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        resume: "Resume",
      },
    },

    footer: {
      tagline: "Built with React · Designed for systems thinking",
      form: {
        title: "Get in touch",
        subtitle: "Send me a message and I'll get back to you.",
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "Tell me about your project…",
        submit: "Send message",
        submitting: "Sending…",
        success: "Thanks! Your message was sent.",
        error: "Something went wrong. Please try again.",
      },
    },
  },

  es: {
    name: "CrixDev",
    role: "Ingeniero Full Stack",

    nav: {
      items: [
        { label: "Sobre mí", href: "#about" },
        { label: "Experiencia técnica", href: "#expertise" },
        { label: "Trayectoria", href: "#experience" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ],
      cta: "Hablemos",
    },

    hero: {
      badge: "Disponible para roles de liderazgo técnico",
      headline:
        "Ingeniero Full Stack enfocado en arquitectura, pagos y sistemas cloud.",
      subheadline:
        "Construyo productos digitales confiables — sistemas de pago, arquitectura SaaS escalable, integraciones cloud e infraestructura web moderna.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
      ctaResume: "CV",
      stack: [
        "Stripe",
        "AWS",
        "Arquitectura",
        "CI/CD",
        "React",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "Docker",
      ],
      terminalTag: "producción — bash",
    },

    about: {
      eyebrow: "Mentalidad de ingeniería",
      title: "Construyendo sistemas más allá del frontend",
      paragraphs: [
        "Comencé en el desarrollo web enfocado en experiencias de frontend, pero evolucioné rápidamente hacia la arquitectura de sistemas, la infraestructura cloud y la responsabilidad técnica.",
        "Hoy me enfoco en construir productos digitales confiables, integrar servicios complejos como sistemas de pago y diseñar arquitecturas escalables para plataformas SaaS modernas.",
      ],
      caresLabel: "Lo que me importa",
      cares: [
        "Confiabilidad del sistema",
        "Arquitectura escalable",
        "Responsabilidad de producto",
        "Experiencia de desarrollo",
        "Infraestructura cloud",
        "Rendimiento",
        "Liderazgo técnico",
      ],
    },

    expertise: {
      eyebrow: "Experiencia técnica",
      title: "Donde genero apalancamiento técnico",
      cards: [
        {
          title: "Infraestructura de pagos",
          body: "Integraciones con Stripe, suscripciones, webhooks, Connect y sistemas de facturación.",
        },
        {
          title: "Arquitectura de sistemas",
          body: "Estructuras SaaS escalables, diseño modular e integraciones de backend.",
        },
        {
          title: "Cloud y despliegue",
          body: "Fundamentos de AWS, Docker, CI/CD, Vercel y flujos cloud.",
        },
        {
          title: "Ingeniería de producto",
          body: "Sistemas de frontend, diseño de APIs y plataformas centradas en el usuario.",
        },
        {
          title: "Liderazgo técnico",
          body: "Decisiones de arquitectura, ownership e ingeniería orientada a producto.",
        },
        {
          title: "Infraestructura de desarrollo",
          body: "Pipelines de despliegue, entornos, automatización y flujos de trabajo.",
        },
      ],
    },

    experience: {
      eyebrow: "Trayectoria",
      title: "Un recorrido de responsabilidad técnica creciente",
      jobs: [
        {
          title: "Líder técnico / Ingeniero Full Stack",
          period: "2024 — Presente",
          points: [
            "Liderando decisiones de arquitectura para plataformas SaaS.",
            "Gestionando la infraestructura de pagos e integraciones con Stripe.",
            "Diseñando estructuras escalables de frontend / backend.",
            "Colaborando en la escalabilidad del producto y los flujos de ingeniería.",
          ],
        },
        {
          title: "Desarrollador de producto freelance",
          period: "2023 — 2024",
          points: [
            "Construí y desplegué aplicaciones web modernas para startups y empresas.",
            "Trabajé en sistemas de frontend, flujos de despliegue e integraciones de API.",
          ],
        },
        {
          title: "Primeros años en desarrollo web",
          period: "2021 — 2023",
          points: [
            "Comencé construyendo sitios web y aprendiendo hosting, DNS e infraestructura de despliegue.",
            "Desarrollé un fuerte interés en los fundamentos de sistemas y redes.",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "Proyectos destacados",
      title: "Productos que he diseñado y lanzado",
      note: "Cada proyecto describe el problema, mi responsabilidad, la arquitectura y el stack.",
      metaLabels: {
        problem: "Problema",
        architecture: "Arquitectura",
        role: "Mi rol",
        impact: "Impacto",
      },
    },

    focus: {
      eyebrow: "Enfoque técnico actual",
      text: "Actualmente profundizando en infraestructura cloud, sistemas distribuidos e ingeniería de plataformas — con foco en AWS, observabilidad y arquitecturas de backend escalables.",
      areas: [
        "AWS",
        "Observabilidad",
        "Sistemas distribuidos",
        "DevOps",
        "Ingeniería de plataformas",
      ],
    },

    manifesto: {
      eyebrow: "Cómo pienso",
      lines: [
        "Creo que los ingenieros modernos deben entender no solo cómo construir software, sino también cómo los sistemas operan, escalan y sobreviven en producción.",
        "Mi objetivo es evolucionar hacia un líder técnico capaz de conectar ingeniería, infraestructura y estrategia de producto.",
      ],
    },

    contact: {
      title: "Construyamos sistemas confiables.",
      subtitle:
        "Abierto a oportunidades de liderazgo técnico, ingeniería de producto e infraestructura.",
      actions: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        resume: "CV",
      },
    },

    footer: {
      tagline: "Hecho con React · Diseñado para pensar en sistemas",
      form: {
        title: "Hablemos",
        subtitle: "Envíame un mensaje y te responderé pronto.",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@ejemplo.com",
        messagePlaceholder: "Cuéntame sobre tu proyecto…",
        submit: "Enviar mensaje",
        submitting: "Enviando…",
        success: "¡Gracias! Tu mensaje fue enviado.",
        error: "Algo salió mal. Inténtalo de nuevo.",
      },
    },
  },
};

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCode, FaDatabase, FaGlobe, FaLayerGroup, FaServer, FaMobileAlt, FaMagic, FaBolt, FaEnvelope, FaFigma, FaPenSquare } from "react-icons/fa";
import crix1 from "../assets/Crix.png";
import pg1 from "../assets/Pagina1.png";
import pg2 from "../assets/Pagina2.png";
import pg3 from "../assets/Pagina3.png";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Skills data
  const skillsData = [
    {
      category: "Backend",  
      icon: FaLayerGroup,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
      ],
    },
    {
      category: "Frontend",
      icon: FaServer,
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      category: "Otros",
      icon: FaMagic,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Testing", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
  ];

  // Experience data
  const experienceData = [
    {
      title: "Desarrollador Frontend junior",
      company: "RysConnect.io",
      period: "2024 - Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React, TypeScript y Tailwind CSS. Implementación de animaciones con Framer Motion y gestión de estado con Redux.",
    },
    {
      title: "Desarrollador frelance Full Stack",
      company: "CrixDeveloper",
      period: "2023 - 2024",
      description:
        "Desarrollo de Proyectos Freelance con React.",
    },
    {
      title: "Desarrollador web Trainee",
      company: "Hyperdigital",
      period: "2022 - 2023",
      description:
        "Desarrollo de sitios web responsivos utilizando HTML, CSS y JavaScript. Implementación de diseños en WordPress.",
    },
  ];

  // Projects data
  const projectsData = [
    {
      title: "Plataforma de Cursos Online",
      description:
        "Plataforma de cursos online con funcionalidades de registro de usuarios, pagos con paypal y gestión de contenido.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: pg1,
      path: "https://epenglish4u.com/",
    },
    {
      title: "Plataforma de Startup IA",
      description:
        "Desarrolle el Frontend para una startup de IA con funcionalidades de autenticación, Diseño responsivo y animaciones fluidas.",
      technologies: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
      image: pg2,
      path: "https://www.rysconnect.io/",
    },
    {
      title: "Sitio Web de Consultora",
      description: "Sitio web para una consultora de marketing con diseño moderno y animaciones interactivas.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
      image: pg3,
      path: "https://www.hyperdigital.mx/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white ">
      {/* Hero Section */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hola, soy <span className="text-blue-500">CrixDev</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desarrollador Web Full Stack
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Contáctame
          </a>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={itemVariants}>
          Quién Soy
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-800">
              <img src={crix1} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Desarrollador Web Apasionado</h3>
            <p className="text-gray-400 mb-4">
              Soy un desarrollador web full stack especializado en el Frontend con 3 años de experiencia creando aplicaciones web modernas y
              responsivas. Me especializo en React, Tailwind y tecnologías relacionadas.
            </p>
            <p className="text-gray-400 mb-4">
              Mi objetivo es crear experiencias digitales que sean tanto funcionales como estéticamente agradables. Me
              apasiona aprender nuevas tecnologías y mejorar constantemente mis habilidades.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 bg-gray-800 rounded-3xl p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={itemVariants}>
          Mis Habilidades
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-gray-900 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Tree Visualization */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Árbol de Tecnologías</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Center node */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <FaCode size={32} />
              </div>
              <p className="mt-2 font-medium">Desarrollo Web</p>

              {/* Connecting lines */}
              <div className="h-13 w-0.5 bg-gray-700 mt-2"></div>
            </div>

            {/* Second level nodes */}
            <div className="pt-40 flex justify-center gap-32">
              {[
                  { icon: FaServer, label: "Backend" },
                { icon: FaGlobe, label: "Frontend" },
                { icon: FaMobileAlt, label: "UX/UI" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-500/80 flex items-center justify-center text-white">
                    <item.icon size={24} />
                  </div>
                  <p className="mt-2 font-medium">{item.label}</p>

                  {/* Connecting lines */}
                  <div className="h-12 w-0.5 bg-gray-700 mt-2"></div>
                </motion.div>
              ))}
            </div>

            {/* Third level nodes */}
            <div className="pt-2 grid grid-cols-6 gap-4">
              {[
                 { icon: FaDatabase, label: "MongoDB", parent: 1 },
                 { icon: FaServer, label: "Node.js", parent: 1 },
                { icon: FaLayerGroup, label: "React", parent: 0 },
                { icon: FaBolt, label: "Tailwind", parent: 0 },
                { icon: FaFigma, label: "Figma", parent: 2 },
                { icon: FaPenSquare, label: "CSS Expert", parent: 2 },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/60 flex items-center justify-center text-white">
                    <item.icon size={20} />
                  </div>
                  <p className="mt-2 text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={itemVariants}>
          Mi Experiencia
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((job, index) => (
            <motion.div key={index} className="relative pl-8 pb-12 last:pb-0" variants={itemVariants}>
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-700"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-blue-500 bg-black"></div>

              <h3 className="text-xl font-semibold">{job.title}</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.period}</span>
              </div>
              <p className="text-gray-400">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={itemVariants}>
          Mis Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Link to={project.path} key={project.title}>
              <motion.div
                className="bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-700 hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        id="contact"
        className="py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
          ¿Interesado en trabajar juntos?
        </motion.h2>
        <motion.p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          Estoy abierto a oportunidades freelance y colaboraciones. ¡Contáctame y hablemos sobre tu proyecto!
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="mailto:email@example.com"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            <FaEnvelope size={18} />
            Envíame un mensaje
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}


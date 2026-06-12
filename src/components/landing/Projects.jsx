import { motion } from "framer-motion";
import { getProjects } from "../../data/projects";
import { useT } from "../../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { Section, Eyebrow, SectionTitle, fadeUp } from "./primitives";

export default function Projects() {
  const { t, lang } = useT();
  const p = t.projects;
  const projects = getProjects(lang);

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <SectionTitle>{p.title}</SectionTitle>
        </div>
        <motion.p
          variants={fadeUp}
          className="max-w-xs text-sm text-[var(--color-muted)]"
        >
          {p.note}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={p.metaLabels}
          />
        ))}
      </div>
    </Section>
  );
}

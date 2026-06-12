import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp } from "./primitives";

function Meta({ label, children }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-faint)]">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
        {children}
      </p>
    </div>
  );
}

export default function ProjectCard({ project, labels }) {
  const {
    title,
    summary,
    problem,
    role = [],
    architecture,
    stack = [],
    impact,
    link,
  } = project;

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7 transition-colors hover:border-[var(--color-line-strong)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-[var(--color-fg)]">{title}</h3>
          <p className="mt-1.5 text-sm text-[var(--color-muted)]">{summary}</p>
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="shrink-0 rounded-full border border-[var(--color-line)] p-2 text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
          >
            <FiArrowUpRight />
          </a>
        ) : null}
      </div>

      <div className="my-6 h-px bg-[var(--color-line)]" />

      <div className="grid flex-1 gap-5 sm:grid-cols-2">
        <Meta label={labels.problem}>{problem}</Meta>
        <Meta label={labels.architecture}>{architecture}</Meta>
        <Meta label={labels.role}>
          <span className="flex flex-wrap gap-x-3 gap-y-1">
            {role.map((r) => (
              <span key={r}>· {r}</span>
            ))}
          </span>
        </Meta>
        <Meta label={labels.impact}>{impact}</Meta>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--color-line)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

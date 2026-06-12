import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";
import { Section, Eyebrow, SectionTitle, fadeUp } from "./primitives";

export default function Experience() {
  const { t } = useT();
  const x = t.experience;

  return (
    <Section id="experience">
      <Eyebrow>{x.eyebrow}</Eyebrow>
      <SectionTitle>{x.title}</SectionTitle>

      <div className="mt-14 border-l border-[var(--color-line)]">
        {x.jobs.map((job) => (
          <motion.div
            key={job.title}
            variants={fadeUp}
            className="relative pb-12 pl-8 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-ink)]" />
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-faint)]">
              {job.period}
            </p>
            <h3 className="mt-2 text-xl font-medium text-[var(--color-fg)]">
              {job.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {job.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-faint)]" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";
import { Section, Eyebrow, SectionTitle, fadeUp } from "./primitives";

export default function About() {
  const { t } = useT();
  const a = t.about;

  return (
    <Section id="about">
      <Eyebrow>{a.eyebrow}</Eyebrow>
      <SectionTitle>{a.title}</SectionTitle>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          {a.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-[var(--color-muted)]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-faint)]">
            {a.caresLabel}
          </p>
          <ul className="space-y-3">
            {a.cares.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-sm text-[var(--color-fg)]"
              >
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

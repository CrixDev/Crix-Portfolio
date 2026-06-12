import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";
import { Section, Eyebrow, SectionTitle, fadeUp } from "./primitives";

export default function Expertise() {
  const { t } = useT();
  const e = t.expertise;

  return (
    <Section id="expertise">
      <Eyebrow>{e.eyebrow}</Eyebrow>
      <SectionTitle>{e.title}</SectionTitle>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {e.cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="group bg-[var(--color-panel)] p-7 transition-colors hover:bg-[var(--color-panel-hover)]"
          >
            <span className="font-mono text-xs text-[var(--color-faint)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-medium text-[var(--color-fg)]">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";
import { Section, Eyebrow, fadeUp } from "./primitives";

export default function Focus() {
  const { t } = useT();
  const f = t.focus;

  return (
    <Section id="focus">
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-10 sm:p-14">
        <Eyebrow>{f.eyebrow}</Eyebrow>
        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-[var(--color-fg)] sm:text-3xl"
        >
          {f.text}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {f.areas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-[var(--color-line-strong)] px-3.5 py-1.5 text-sm text-[var(--color-muted)]"
            >
              {a}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

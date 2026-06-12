import { motion } from "framer-motion";
import { useT } from "../../context/LanguageContext";
import { Section, Eyebrow, fadeUp } from "./primitives";

export default function Manifesto() {
  const { t } = useT();
  const m = t.manifesto;

  return (
    <Section id="manifesto">
      <Eyebrow>{m.eyebrow}</Eyebrow>
      <div className="mt-6 max-w-3xl space-y-6">
        {m.lines.map((line, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="text-balance text-2xl font-medium leading-snug tracking-tight text-[var(--color-fg)] sm:text-3xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </Section>
  );
}

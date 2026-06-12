import { motion } from "framer-motion";

// Shared layout + animation primitives so every section stays consistent.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 py-24 sm:py-28 ${className}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  );
}

export function Eyebrow({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
    >
      {children}
    </motion.p>
  );
}

export function SectionTitle({ children }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl"
    >
      {children}
    </motion.h2>
  );
}

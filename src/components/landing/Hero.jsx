import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { links } from "../../data/profile";
import { useT } from "../../context/LanguageContext";
import { fadeUp, stagger } from "./primitives";

function TerminalVisual({ tag }) {
  const lines = [
    { p: "~/systems", c: "deploy --env production" },
    { o: "✓ build      compiled in 12.4s" },
    { o: "✓ migrate    schema up to date" },
    { o: "✓ stripe     webhooks verified" },
    { o: "✓ health     all services nominal" },
    { p: "~/systems", c: "status", blink: true },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="h-3 w-3 rounded-full bg-white/10" />
        <span className="ml-2 font-mono text-xs text-[var(--color-faint)]">
          {tag}
        </span>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2">
            {l.p ? (
              <>
                <span className="text-[var(--color-accent)]">{l.p}</span>
                <span className="text-[var(--color-faint)]">$</span>
                <span className="text-[var(--color-fg)]">{l.c}</span>
                {l.blink && (
                  <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[var(--color-accent)]" />
                )}
              </>
            ) : (
              <span className="text-[var(--color-muted)]">{l.o}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useT();
  const h = t.hero;

  return (
    <section id="top" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-36 sm:pt-44 lg:grid-cols-2">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {h.badge}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-[3.4rem]"
          >
            {h.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {h.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-opacity hover:opacity-90"
            >
              {h.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--color-line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:bg-white/5"
            >
              {h.ctaContact}
            </a>
            <a
              href={links.resume}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {h.ctaResume} <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
            {h.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="lg:pl-6"
        >
          <TerminalVisual tag={h.terminalTag} />
        </motion.div>
      </div>
    </section>
  );
}

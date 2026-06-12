import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "../../data/profile";
import { useT } from "../../context/LanguageContext";
import { Section, fadeUp } from "./primitives";

export default function Contact() {
  const { t } = useT();
  const c = t.contact;

  const actions = [
    { label: c.actions.email, href: `mailto:${links.email}`, icon: FiArrowUpRight },
    { label: c.actions.linkedin, href: links.linkedin, icon: FaLinkedin, ext: true },
    { label: c.actions.github, href: links.github, icon: FaGithub, ext: true },
    { label: c.actions.resume, href: links.resume, icon: FiArrowUpRight },
  ];

  return (
    <Section id="contact" className="py-32">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          variants={fadeUp}
          className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl"
        >
          {c.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-lg text-[var(--color-muted)]"
        >
          {c.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {actions.map(({ label, href, icon: Icon, ext }) => (
            <a
              key={label}
              href={href}
              {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:bg-white/5"
            >
              <Icon className="text-[var(--color-muted)]" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

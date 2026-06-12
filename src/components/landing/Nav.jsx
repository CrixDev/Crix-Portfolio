import { useEffect, useState } from "react";
import { links } from "../../data/profile";
import { useT } from "../../context/LanguageContext";

export default function Nav() {
  const { t, lang, toggle } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-ink)]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-[var(--color-fg)]">
          {t.name}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center rounded-full border border-[var(--color-line)] p-0.5 font-mono text-xs"
          >
            <span
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "es"
                  ? "bg-[var(--color-fg)] text-[var(--color-ink)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              ES
            </span>
            <span
              className={`rounded-full px-2 py-1 transition-colors ${
                lang === "en"
                  ? "bg-[var(--color-fg)] text-[var(--color-ink)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              EN
            </span>
          </button>

          <a
            href={`mailto:${links.email}`}
            className="hidden rounded-full border border-[var(--color-line-strong)] px-4 py-1.5 text-sm text-[var(--color-fg)] transition-colors hover:bg-white/5 sm:block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

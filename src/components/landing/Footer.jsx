import { useT } from "../../context/LanguageContext";
import ContactForm from "./ContactForm";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-[var(--color-line)]">
      <ContactForm />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-[var(--color-line)] px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-[var(--color-faint)]">
          © {new Date().getFullYear()} {t.name} — {t.role}
        </p>
        <p className="font-mono text-xs text-[var(--color-faint)]">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
}

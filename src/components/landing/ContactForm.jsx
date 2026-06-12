import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useT } from "../../context/LanguageContext";
import { orwel } from "../../lib/orwel";

// Footer contact form. On submit it sends an Orwel conversion ("contact_form").
// We deliberately do NOT use orwel.form() here: this form has a custom submit
// handler, so we fire identify() + conversion() manually to avoid double-tracking
// and false form_abandon events (see the Orwel skill troubleshooting notes).
export default function ContactForm() {
  const { t } = useT();
  const f = t.footer.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      orwel.identify({ email, name });
      orwel.conversion("contact_form", {
        email,
        name,
        message,
        source: "footer",
      });
      await orwel.flush();

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Orwel conversion failed:", err);
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-[var(--color-line-strong)] bg-transparent px-4 py-2.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-faint)] outline-none transition-colors focus:border-[var(--color-accent)]";

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
          {f.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">{f.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate={false}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">{f.name}</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder={f.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="flex-1">
            <span className="sr-only">{f.email}</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={f.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
            />
          </label>
        </div>

        <label>
          <span className="sr-only">{f.message}</span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder={f.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClasses} resize-y`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          <FiSend className="text-current" />
          {status === "submitting" ? f.submitting : f.submit}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-[var(--color-accent)]">{f.success}</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">{f.error}</p>
        )}
      </form>
    </div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiSend, FiCheck, FiGithub, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";
import { Section, SectionHeader } from "./Section";
import { profile } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      form.reset();
    }, 600);
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="text-gradient">together.</span>
          </>
        }
        description="Open to internships, freelance projects and research collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-6"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 blur-3xl" />
          <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fastest response within 24 hours.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
              >
                <FiMail className="text-brand-purple" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06]"
              >
                <FiPhone className="text-brand-purple" /> {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <FiMapPin className="text-brand-purple" /> {profile.location}
            </li>
          </ul>

          <div className="mt-6 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-2.5 text-sm hover:bg-white/10"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-2.5 text-sm hover:bg-white/10"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required placeholder="Your name" />
            <Field label="Email" name="email" required type="email" placeholder="you@email.com" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project, role or idea…"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none transition-colors focus:border-brand-purple/60"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Submits via your email client.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {sent ? (
                <>
                  <FiCheck /> Opened
                </>
              ) : loading ? (
                "Opening…"
              ) : (
                <>
                  Send <FiSend className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none transition-colors focus:border-brand-purple/60"
      />
    </div>
  );
}

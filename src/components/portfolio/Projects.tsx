import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { Section, SectionHeader } from "./Section";
import { projects, profile } from "./data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title={
          <>
            Projects that <span className="text-gradient">ship & solve.</span>
          </>
        }
        description="A mix of AI, security and systems work — built end-to-end."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl glass-strong p-6 transition-shadow hover:shadow-glow ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Project {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
                  {p.blurb}
                </p>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full glass transition-transform hover:scale-110 hover:bg-white/10 sm:flex"
              >
                <FiArrowUpRight />
              </a>
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Highlights
                </div>
                <ul className="mt-2 grid gap-1.5 text-sm text-foreground/85 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs hover:bg-white/10"
                >
                  <FiGithub /> Code
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3.5 py-1.5 text-xs font-medium text-white"
                >
                  <FiExternalLink /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

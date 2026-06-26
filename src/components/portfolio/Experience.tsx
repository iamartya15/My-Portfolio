import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { experience } from "./data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Internships & <span className="text-gradient">hands-on roles.</span>
          </>
        }
      />

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/60 via-brand-purple/40 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple shadow-glow md:left-1/2" />

              <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {e.role}
                </h3>
                <div className="text-sm text-brand-purple">{e.company}</div>
              </div>

              <div className="mt-4 pl-10 md:mt-0 md:pl-12">
                <div className="rounded-2xl glass-strong p-5">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { skillGroups } from "./data";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiShield,
  FiTool,
} from "react-icons/fi";

const icons = [FiCode, FiLayout, FiServer, FiDatabase, FiCpu, FiShield, FiTool];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            A toolbox spanning <span className="text-gradient">AI, backend & security.</span>
          </>
        }
        description="Hand-picked tools and technologies I use to design, build and ship reliable software."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-shadow hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 text-foreground">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {g.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-brand-purple/40 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";
import { Section, SectionHeader } from "./Section";
import { certifications, achievements } from "./data";

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeader
        eyebrow="Recognition"
        title={
          <>
            Certifications & <span className="text-gradient">Achievements.</span>
          </>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl glass-strong p-6"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FiAward /> Certifications
          </div>
          <ul className="mt-4 divide-y divide-white/5">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-center justify-between py-3 text-sm transition-colors hover:text-foreground"
              >
                <span>{c}</span>
                <span className="text-xs text-muted-foreground">Verified</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-3xl glass-strong p-6"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FiStar /> Achievements
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <li
                key={a}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm"
              >
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

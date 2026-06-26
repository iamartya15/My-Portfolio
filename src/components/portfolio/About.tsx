import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { stats } from "./data";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={
          <>
            Engineer focused on{" "}
            <span className="text-gradient">intelligent, scalable systems.</span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm a Computer Science Engineering (AI & ML) student passionate
            about software engineering, backend development, artificial
            intelligence, machine learning, cybersecurity, and building
            scalable applications.
          </p>
          <p>
            I enjoy solving real-world problems with technology and continuously
            sharpen my craft through projects, internships, hackathons and
            competitive programming.
          </p>
          <p className="text-foreground/80">
            Currently exploring distributed systems, AI agents and offensive
            security tooling.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Python",
              "Java",
              "JavaScript",
              "Node.js",
              "Express",
              "React",
              "MongoDB",
              "SQL",
              "Linux",
              "AI / ML",
              "Malware Analysis",
              "Reverse Engineering",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full glass px-3 py-1.5 text-xs text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl glass-strong p-5"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 blur-2xl" />
              <div className="text-3xl font-bold text-gradient sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

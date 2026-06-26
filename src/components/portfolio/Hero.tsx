import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { profile } from "./data";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const roles = [
  "AI & ML Engineer",
  "Backend Developer",
  "Cybersecurity Enthusiast",
  "Full Stack Engineer",
];

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((v) => v + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 hero-bg" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      {/* Animated blobs */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-[-6rem] top-40 h-[28rem] w-[28rem] rounded-full bg-brand-purple/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-blob" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Amartya</span>.
            <br />
            <span className="text-gradient">Building Intelligent</span>
            <br />
            <span className="text-foreground/90">Software.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 flex items-center gap-3 font-mono text-sm sm:text-base"
          >
            <span className="text-muted-foreground">&gt;</span>
            <span className="text-foreground">{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-brand-purple" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.subtagline} CSE (AI & ML) student crafting scalable systems
            across backend, AI and security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <FiMail /> Hire Me
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={resumeAsset.url}
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View Projects →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full glass p-3 transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full glass p-3 transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full glass p-3 transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <FiMail />
            </a>
            <div className="ml-2 hidden items-center gap-1.5 text-xs sm:flex">
              <FiMapPin /> {profile.location}
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/40 via-brand-purple/30 to-transparent blur-3xl" />
          <div className="relative h-full w-full rounded-[2rem] glass-strong p-6 shadow-elevated">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono">~/amartya/portfolio.tsx</span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
            </div>
            <pre className="mt-5 overflow-hidden font-mono text-[12.5px] leading-relaxed text-muted-foreground">
{`const dev = {
  name: "Amartya Kushwaha",
  focus: ["AI/ML", "Backend", "Security"],
  stack: ["Python","Node","React","Mongo"],
  learning: "Distributed Systems",
  shipping: true,
};`}
            </pre>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: "Python", v: "Expert" },
                { k: "Node.js", v: "Advanced" },
                { k: "React", v: "Advanced" },
                { k: "Security", v: "Hands-on" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.k}
                  </div>
                  <div className="mt-1 text-sm font-medium">{c.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
              <span className="text-muted-foreground">Status</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Building
              </span>
            </div>
          </div>

          <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl glass-strong px-4 py-3 text-xs">
            <div className="text-muted-foreground">Currently</div>
            <div className="font-medium">CSE · AI & ML</div>
          </div>
          <div className="animate-float absolute -right-4 top-10 rounded-2xl glass-strong px-4 py-3 text-xs [animation-delay:1.5s]">
            <div className="text-muted-foreground">Based in</div>
            <div className="font-medium">India 🇮🇳</div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-1">
          Scroll
          <FiArrowDown className="animate-bounce" />
        </div>
      </a>
    </section>
  );
}

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "./data";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-12 w-full max-w-6xl px-4 pb-10">
      <div className="rounded-3xl glass-strong p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-sm font-bold text-white">
              {profile.initials}
            </span>
            <div>
              <div className="font-display font-semibold">{profile.name}</div>
              <div className="text-xs text-muted-foreground">
                Building intelligent software.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="rounded-full glass p-2.5 hover:text-foreground">
              <FiGithub />
            </a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full glass p-2.5 hover:text-foreground">
              <FiLinkedin />
            </a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="rounded-full glass p-2.5 hover:text-foreground">
              <FiMail />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-xs font-medium text-white"
            >
              Top <FiArrowUp />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-5 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div>Crafted with React, Tailwind & Framer Motion.</div>
        </div>
      </div>
    </footer>
  );
}

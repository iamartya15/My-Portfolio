import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amartya Kushwaha — AI & Full Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Amartya Kushwaha — CSE (AI & ML) student building intelligent software across AI, backend, cybersecurity and full stack.",
      },
      { property: "og:title", content: "Amartya Kushwaha — Portfolio" },
      {
        property: "og:description",
        content:
          "Building intelligent software. AI · Backend · Cybersecurity · Full Stack.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Amartya Kushwaha",
          jobTitle: "Computer Science Engineering Student (AI & ML)",
          url: "https://github.com/iamartya15",
          sameAs: [
            "https://github.com/iamartya15",
            "https://www.linkedin.com/in/amartya-kushwaha-70204832b",
          ],
          email: "mailto:amartyakushwaha30@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Deoria",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

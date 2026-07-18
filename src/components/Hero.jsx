import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center relative pt-[68px]"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(129,140,248,0.12), transparent 40%), radial-gradient(circle at 85% 60%, rgba(94,234,212,0.1), transparent 45%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
      <div className="max-w-[760px]">
        <Reveal as="p" className="text-accent font-display font-medium mb-3">
          Hi, I'm
        </Reveal>
        <Reveal as="h1" className="font-display text-[clamp(2.8rem,6vw,4.5rem)] tracking-tight mb-3">
          {profile.name}
        </Reveal>
        <Reveal
          as="h2"
          className="font-display font-medium text-text-muted text-[clamp(1.15rem,2.5vw,1.5rem)] mb-5 max-w-[620px]"
        >
          {profile.tagline}
        </Reveal>
        <Reveal as="p" className="text-text-muted max-w-[560px] mb-8">
          {profile.summary}
        </Reveal>

        <Reveal className="flex gap-4 flex-wrap mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-medium bg-accent text-[#05221c] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(94,234,212,0.25)] transition-transform"
          >
            View Projects
          </a>
          <ResumeButton />
        </Reveal>

        <Reveal className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-text-muted hover:text-accent hover:-translate-y-0.5 transition-all">
            <MailIcon />
          </a>
        </Reveal>
      </div>
      </div>

      <div className="scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2">
        <span />
      </div>
    </section>
  );
}

function ResumeButton() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        alert("Resume coming soon — check back shortly!");
      }}
      className="px-6 py-3 rounded-full text-sm font-medium border border-border hover:border-accent hover:text-accent transition-colors"
    >
      Download Resume
    </a>
  );
}

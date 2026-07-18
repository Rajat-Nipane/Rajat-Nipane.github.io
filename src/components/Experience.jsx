import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-[6.5rem] bg-bg-alt">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          Experience
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-12">
          Where I've worked
        </Reveal>

        <div className="relative pl-8 border-l border-border">
          {experience.map((job, i) => (
            <Reveal
              key={job.org}
              className={`relative ${i === experience.length - 1 ? "" : "pb-10"}`}
            >
              <span className="absolute -left-[2.4rem] top-1 w-3 h-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(94,234,212,0.15)]" />
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                <h3 className="text-lg">{job.role}</h3>
                <span className="text-sm text-text-muted font-display">{job.dates}</span>
              </div>
              <p className="text-accent font-medium text-sm mb-2">{job.org}</p>
              <p className="text-text-muted text-sm">{job.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

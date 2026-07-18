import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-[6.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          Projects
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-12">
          Things I've built
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Reveal
              key={project.title}
              as="article"
              className="bg-surface border border-border rounded-xl p-7 flex flex-col hover:border-accent-2 hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-accent-2 text-lg">◆</span>
                <div className="flex gap-4 text-sm text-text-muted">
                  <a href={project.code} className="hover:text-accent border-b border-transparent hover:border-accent">
                    Code
                  </a>
                  <a href={project.live} className="hover:text-accent border-b border-transparent hover:border-accent">
                    Live
                  </a>
                </div>
              </div>
              <h3 className="text-lg mb-2">{project.title}</h3>
              <p className="text-text-muted text-sm mb-5 grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-[6.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          Education
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-12">
          Academic background
        </Reveal>

        {education.map((edu) => (
          <Reveal key={edu.school} className="bg-surface border border-border rounded-xl p-8">
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
              <h3 className="text-lg">{edu.degree}</h3>
              <span className="text-sm text-text-muted font-display">{edu.dates}</span>
            </div>
            <p className="text-accent font-medium text-sm">{edu.school}</p>
            <p className="text-text-muted mt-2">{edu.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

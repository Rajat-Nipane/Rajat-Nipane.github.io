import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-[6.5rem] bg-bg-alt">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          Skills
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-12">
          Tech I work with
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <Reveal
              key={group.category}
              className="bg-surface border border-border rounded-xl p-7 hover:border-accent hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {item}
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

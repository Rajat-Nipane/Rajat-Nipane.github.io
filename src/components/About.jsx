import Reveal from "./Reveal";
import { about, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="py-[6.5rem]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          About
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-12">
          A bit about me
        </Reveal>

        <Reveal className="flex flex-col md:flex-row gap-12 items-start">
          <div className="shrink-0">
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="w-[180px] h-[180px] rounded-xl object-cover border border-border"
            />
          </div>

          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted mb-4">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-10 mt-8 pt-7 border-t border-border">
              {about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-accent">{stat.value}</span>
                  <span className="text-sm text-text-muted mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

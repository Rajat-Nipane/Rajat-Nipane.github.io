import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const cards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
    { label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
  ];

  return (
    <section id="contact" className="py-[6.5rem] bg-bg-alt">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <Reveal as="p" className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 font-display">
          Contact
        </Reveal>
        <Reveal as="h2" className="font-display text-[clamp(1.8rem,3.5vw,2.4rem)] tracking-tight mb-4">
          Let's build something
        </Reveal>
        <Reveal as="p" className="text-text-muted max-w-[480px] mx-auto mb-10">
          Open to new opportunities and interesting problems. Reach out any time.
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-1 hover:border-accent hover:-translate-y-1 transition-all text-left"
            >
              <span className="text-xs uppercase tracking-wider text-text-muted">{card.label}</span>
              <span className="font-medium break-words">{card.value}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

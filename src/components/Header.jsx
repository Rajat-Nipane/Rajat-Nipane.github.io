import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(e, href) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <div
        id="progress-bar"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[900] backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? "bg-bg/90 border-b border-border" : "bg-bg/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-[68px] flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="font-display text-[1.3rem] font-bold tracking-tight"
          >
            RN<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm relative pb-1 transition-colors ${
                      activeId === link.href.slice(1)
                        ? "text-text after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-accent after:rounded-full"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex text-sm px-5 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            Let's talk
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >
            <span className="w-[22px] h-[2px] bg-text rounded" />
            <span className="w-[22px] h-[2px] bg-text rounded" />
            <span className="w-[22px] h-[2px] bg-text rounded" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden absolute top-[68px] left-0 right-0 bg-bg-alt border-b border-border px-6 py-6">
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-muted hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

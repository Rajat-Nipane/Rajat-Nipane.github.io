import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-7">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center flex-wrap gap-4 text-sm text-text-muted">
        <p>&copy; {year} {profile.name}. Built with React &amp; Tailwind.</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener" className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Logo } from "./Primitives";

const links = [
  { href: "https://x.com/_onovae", label: "X" },
  { href: "https://www.linkedin.com/in/honour-onovae-300b41344", label: "LinkedIn" },
  { href: "mailto:dbosshonour@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="size-7" />
          <p className="text-sm text-muted-foreground">© 2026 Veya. Learning that stays.</p>
        </div>
        <ul className="flex gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex min-h-11 items-center px-3 text-sm text-foreground hover:text-indigo">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

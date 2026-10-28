import { Logo } from "./Primitives";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#voice", label: "Why voice" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-panel/85 py-1.5 pl-5 pr-1.5 backdrop-blur-md" aria-label="Main">
        <a href="#top" className="flex min-h-11 items-center gap-2.5" aria-label="Veya home">
          <Logo className="h-6 w-auto" />
          <span className="font-display text-xl font-semibold tracking-tight">Veya</span>
        </a>
        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2.5 text-[15px] text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#join" className="flex min-h-11 items-center rounded-full bg-primary px-5 text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}

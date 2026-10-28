import { FadeUp, SectionHeading } from "./Primitives";

const sources = ["ChatGPT answer", "YouTube lecture", "Lecture slides", "PDF notes", "Podcast", "Voice note", "Past questions", "Flashcards", "Group chat"];
const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1", "rotate-2", "-rotate-3", "rotate-1"];

export function WhyVeya() {
  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
        <FadeUp>
          <SectionHeading eyebrow="Why Veya" title="You've asked AI a thousand things" sub="And kept almost none of it." />
          <div className="mt-8 rounded-[var(--radius-card)] border border-border bg-panel p-6">
            <p className="text-charcoal">
              Students did <strong className="text-foreground">48% better</strong> practising with ChatGPT, then <strong className="text-foreground">17% worse</strong> than non-users once it was taken away.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Bastani et al., PNAS 2025</p>
          </div>
        </FadeUp>
        <FadeUp delay={120}>
          <ul className="flex flex-wrap justify-center gap-3 py-6" aria-label="Places your learning ends up scattered">
            {sources.map((s, i) => (
              <li key={s} className={`rounded-full border border-foreground/25 px-5 py-2.5 text-[15px] text-charcoal ${tilts[i]}`}>{s}</li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

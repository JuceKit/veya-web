import { FadeUp, SectionHeading } from "./Primitives";

const steps = [
  { title: "Tell it what and why", body: "An exam, a new job, a language for a trip. Say it the way you'd tell a friend." },
  { title: "It talks you through it", body: "Live voice you can interrupt. It explains, then asks you back to check it landed." },
  { title: "It remembers you", body: "Every session builds on the last. No starting over, no re-explaining yourself." },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-28 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeUp><SectionHeading eyebrow="How it works" title="One to one. Your own space." /></FadeUp>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.title} delay={i * 100}>
              <li className="h-full list-none rounded-[var(--radius-card)] border border-border bg-panel p-7">
                <span className="font-display text-sm font-semibold text-indigo">0{i + 1}</span>
                <h3 className="mt-6 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

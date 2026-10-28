import { Eyebrow, FadeUp } from "./Primitives";

const steps = [
  { title: "Tell it what and why", body: "An exam, a new job, a language for a trip. Say it the way you'd tell a friend." },
  { title: "It talks you through it", body: "Live voice you can interrupt. It explains, then asks you back to check it landed." },
  { title: "It remembers you", body: "Every session builds on the last. No starting over, no re-explaining yourself." },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-28 px-5 py-24 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeUp className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-5xl text-foreground sm:text-7xl">One to one. Your own space.</h2>
        </FadeUp>
        <ol className="border-t border-border">
          {steps.map((s, i) => (
            <FadeUp key={s.title} delay={i * 80}>
              <li className="grid list-none grid-cols-[3.5rem_1fr] gap-4 border-b border-border py-9 sm:grid-cols-[6rem_1fr] sm:py-12">
                <span className="font-display text-4xl font-semibold text-gradient-brand sm:text-6xl">0{i + 1}</span>
                <div>
                  <h3 className="text-3xl text-foreground sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-lg text-muted-foreground">{s.body}</p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

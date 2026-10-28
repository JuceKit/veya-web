import { WaitlistForm } from "./WaitlistForm";
import { FadeUp } from "./Primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden rounded-b-[var(--radius-panel)] bg-panel px-5 pb-20 pt-32 sm:pb-28 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-sage" aria-hidden /> A learning space that remembers you
          </span>
        </FadeUp>
        <FadeUp delay={80}>
          <h1 className="mt-8 text-[3.25rem] text-foreground sm:text-8xl lg:text-[8.5rem]">
            Learning that<br />
            <span className="highlight-sage">actually</span> stays
          </h1>
        </FadeUp>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.1fr_1fr] md:items-end">
          <FadeUp delay={160}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              You can ask AI anything. Can you remember what it said? Veya talks you through what you want to learn, asks you back, and remembers where you left off.
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <div id="join" className="scroll-mt-32">
              <WaitlistForm source="hero" />
              <p className="mt-3 px-2 text-sm text-muted-foreground">1,900 people are already waiting. No spam, ever.</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

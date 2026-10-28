import { WaitlistForm } from "./WaitlistForm";
import { ProductMockup } from "./ProductMockup";
import { FadeUp } from "./Primitives";

export function Hero() {
  return (
    <section id="top" className="rounded-b-[var(--radius-panel)] border-b border-border bg-panel px-5 pb-16 pt-32 sm:pt-40">
      <div id="join" className="mx-auto max-w-3xl scroll-mt-32 text-center">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-sage" aria-hidden /> A learning space that remembers you
          </span>
        </FadeUp>
        <FadeUp delay={80}>
          <h1 className="mt-7 text-[2.75rem] text-foreground sm:text-7xl">
            Learning that<br /><span className="highlight-sage">actually</span> stays
          </h1>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            You can ask AI anything. Can you remember what it said? Veya talks you through what you want to learn, asks you back, and remembers where you left off.
          </p>
        </FadeUp>
        <FadeUp delay={240} className="mx-auto mt-8 max-w-md">
          <WaitlistForm source="hero" />
        </FadeUp>
      </div>
      <FadeUp delay={320} className="mx-auto mt-16 max-w-5xl">
        <ProductMockup />
      </FadeUp>
    </section>
  );
}

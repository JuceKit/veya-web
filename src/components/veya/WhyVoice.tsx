import { FadeUp, SectionHeading, Waveform } from "./Primitives";

const stats = [
  { value: "600", label: "beta testers in week one" },
  { value: "1,900", label: "on the waitlist" },
  { value: "70%", label: "still active after three weeks" },
  { value: "$0", label: "spent on ads" },
];

export function WhyVoice() {
  return (
    <section id="voice" className="scroll-mt-28 px-5 pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl rounded-[var(--radius-panel)] border border-border bg-panel p-6 sm:p-12">
        <FadeUp>
          <SectionHeading
            eyebrow="Why voice"
            title="Learning shouldn't need a desk"
            sub="Voice first, not voice only. Learn on the bus, on a walk, between classes. Switch to text whenever you want."
          />
          <Waveform bars={40} className="mt-8 max-w-xs" />
        </FadeUp>
        <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 80}>
              <div className="h-full rounded-[var(--radius-card)] border border-border bg-background p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-foreground">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>
        <p className="mt-6 text-charcoal">All word of mouth, starting on one campus.</p>
      </div>
    </section>
  );
}

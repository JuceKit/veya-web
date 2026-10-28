import { Eyebrow, FadeUp, Waveform } from "./Primitives";

const stats = [
  { value: "600", label: "beta testers in week one" },
  { value: "1,900", label: "on the waitlist" },
  { value: "70%", label: "still active after three weeks" },
  { value: "$0", label: "spent on ads" },
];

export function WhyVoice() {
  return (
    <section id="voice" className="scroll-mt-24 px-3 sm:px-5">
      <div className="grid-lines mx-auto max-w-[90rem] rounded-[var(--radius-panel)] bg-navy px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <Eyebrow tone="dark">Why voice</Eyebrow>
              <h2 className="text-5xl text-on-navy sm:text-7xl">Learning shouldn't need a desk.</h2>
            </div>
            <div>
              <Waveform bars={36} className="mb-6 overflow-hidden" />
              <p className="text-lg text-on-navy-muted">Voice first, not voice only. Learn on the bus, on a walk, between classes. Switch to text whenever you want.</p>
            </div>
          </FadeUp>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-on-navy/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 80} className="bg-navy-soft">
                <div className="p-6 sm:p-8">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-5xl font-semibold tracking-tight text-on-navy sm:text-6xl">{s.value}</dd>
                  <dd className="mt-2 text-[15px] text-on-navy-muted">{s.label}</dd>
                </div>
              </FadeUp>
            ))}
          </dl>
          <p className="mt-8 flex items-center gap-2 text-on-navy"><span className="size-2 rounded-full bg-sage" aria-hidden />All word of mouth, starting on one campus.</p>
        </div>
      </div>
    </section>
  );
}

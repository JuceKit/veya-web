import { Waveform } from "./Primitives";

const spaces = [
  { name: "Statistics 201", active: true },
  { name: "Organic Chemistry" },
  { name: "Product design" },
  { name: "Spanish" },
];

const progress = [
  { label: "Mastered", count: 12, tone: "bg-sage" },
  { label: "Getting there", count: 7, tone: "bg-indigo" },
  { label: "Shaky", count: 3, tone: "bg-sage-tint" },
];

const mastery = [
  { topic: "Mean & variance", value: 92 },
  { topic: "Distributions", value: 68 },
  { topic: "P-values", value: 34 },
];

export function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-background" role="img" aria-label="Preview of the Veya app: a voice session on p-values in Statistics 201">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden>
        <span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">veya.app</span>
      </div>
      <div className="grid md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-border p-4 md:block">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Spaces</p>
          <ul className="space-y-1">
            {spaces.map((s) => (
              <li key={s.name} className={`rounded-lg px-3 py-2 text-sm ${s.active ? "bg-lavender font-medium text-foreground" : "text-charcoal"}`}>{s.name}</li>
            ))}
          </ul>
          <p className="mb-2 mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">Progress</p>
          <ul className="space-y-2">
            {progress.map((p) => (
              <li key={p.label} className="flex items-center justify-between text-sm text-charcoal">
                <span className="flex items-center gap-2"><span className={`size-2 rounded-full ${p.tone}`} />{p.label}</span>
                <span className="text-muted-foreground">{p.count}</span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="space-y-4 p-5 text-left sm:p-7">
          <div>
            <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">Good evening, Ada.</p>
            <p className="mt-1 text-[15px] text-muted-foreground">Day 6 of Statistics. Yesterday you stalled on p-values, so we're starting there.</p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-panel px-4 py-3">
            <span className="relative flex size-3 shrink-0"><span className="absolute inset-0 animate-ping rounded-full bg-sage opacity-60" /><span className="relative size-3 rounded-full bg-sage" /></span>
            <Waveform className="flex-1 overflow-hidden" />
            <span className="text-xs text-muted-foreground">Live · 04:12</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
            <div className="space-y-3 text-[15px]">
              <Bubble who="Veya">So if p = 0.03, what does that actually tell you?</Bubble>
              <Bubble who="You" me>That there's a 3% chance the result is wrong?</Bubble>
              <Bubble who="Veya">Close, and very common. It's the chance of seeing data this extreme <em>if</em> nothing were going on. Want to try one more?</Bubble>
            </div>
            <div className="rounded-2xl border border-border bg-panel p-4">
              <p className="text-sm font-semibold text-foreground">What you know</p>
              <ul className="mt-3 space-y-3">
                {mastery.map((m) => (
                  <li key={m.topic}>
                    <div className="flex justify-between text-xs text-charcoal"><span>{m.topic}</span><span>{m.value}%</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-brand" style={{ width: `${m.value}%` }} /></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ who, me, children }: { who: string; me?: boolean; children: React.ReactNode }) {
  return (
    <div className={`max-w-[90%] rounded-2xl px-4 py-2.5 ${me ? "ml-auto bg-lavender" : "border border-border bg-panel"}`}>
      <p className="text-xs font-medium text-muted-foreground">{who}</p>
      <p className="text-charcoal">{children}</p>
    </div>
  );
}

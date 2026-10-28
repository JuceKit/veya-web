import type { ReactNode } from "react";
import { FadeUp, Logo, Waveform } from "./Primitives";

const spaces = [
  { name: "Statistics 201", day: "Day 6", active: true },
  { name: "Organic Chemistry", day: "Day 2" },
  { name: "Product design", day: "Day 11" },
  { name: "Spanish", day: "Day 23" },
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
    <section className="px-3 pt-3 sm:px-5 sm:pt-5" aria-label="Product preview">
      <div className="grid-lines mx-auto max-w-[90rem] overflow-hidden rounded-[var(--radius-panel)] bg-navy px-4 py-12 sm:px-10 sm:py-20">
        <FadeUp className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-on-navy/10 bg-panel" role="img" aria-label="The Veya app: a live voice session on p-values in Statistics 201">
            <div className="flex items-center justify-between border-b border-border px-5 py-3" aria-hidden>
              <div className="flex gap-1.5"><Dot /><Dot /><Dot /></div>
              <span className="text-xs text-muted-foreground">Statistics 201 · Session 6</span>
              <span className="w-10" />
            </div>
            <div className="grid md:grid-cols-[230px_1fr]">
              <aside className="hidden border-r border-border bg-background/50 p-5 md:block">
                <div className="mb-6 flex items-center gap-2"><Logo className="h-5 w-auto" /><span className="font-display font-semibold">Veya</span></div>
                <Label>Your spaces</Label>
                <ul className="space-y-1">
                  {spaces.map((s) => (
                    <li key={s.name} className={`flex justify-between rounded-xl px-3 py-2 text-sm ${s.active ? "bg-lavender font-medium text-foreground" : "text-charcoal"}`}>
                      <span>{s.name}</span><span className="text-xs text-muted-foreground">{s.day}</span>
                    </li>
                  ))}
                </ul>
                <Label className="mt-7">Progress</Label>
                <ul className="space-y-2.5">
                  {progress.map((p) => (
                    <li key={p.label} className="flex items-center justify-between text-sm text-charcoal">
                      <span className="flex items-center gap-2"><span className={`size-2 rounded-full ${p.tone}`} />{p.label}</span>
                      <span className="text-muted-foreground">{p.count}</span>
                    </li>
                  ))}
                </ul>
              </aside>
              <div className="p-5 sm:p-8">
                <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">Good evening, Ada.</p>
                <p className="mt-2 max-w-md text-[15px] text-muted-foreground">Day 6 of Statistics. Yesterday you stalled on p-values, so we're starting there.</p>

                <div className="mt-6 flex items-center gap-4 rounded-full bg-navy py-2 pl-2 pr-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-on-navy/10">
                    <span className="relative flex size-3"><span className="absolute inset-0 animate-ping rounded-full bg-sage opacity-70" /><span className="relative size-3 rounded-full bg-sage" /></span>
                  </span>
                  <Waveform bars={34} className="min-w-0 flex-1 overflow-hidden" />
                  <span className="text-xs text-on-navy-muted">04:12</span>
                </div>

                <div className="mt-6 space-y-3 text-[15px] lg:pr-64">
                  <Bubble who="Veya">So if p = 0.03, what does that actually tell you?</Bubble>
                  <Bubble who="You" me>That there's a 3% chance the result is wrong?</Bubble>
                  <Bubble who="Veya">Close, and very common. It's the chance of seeing data this extreme <em>if</em> nothing were going on. Try one more?</Bubble>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 rounded-[var(--radius-card)] border border-border bg-panel p-5 lg:absolute lg:bottom-10 lg:right-[-2rem] lg:mt-0 lg:w-64 lg:animate-float" style={{ ["--r" as string]: "2deg" }}>
            <p className="text-sm font-semibold text-foreground">What you know</p>
            <ul className="mt-4 space-y-3.5">
              {mastery.map((m) => (
                <li key={m.topic}>
                  <div className="flex justify-between text-xs text-charcoal"><span>{m.topic}</span><span className="font-medium">{m.value}%</span></div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-gradient-brand" style={{ width: `${m.value}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const Dot = () => <span className="size-2.5 rounded-full bg-border" />;
const Label = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground ${className}`}>{children}</p>
);

function Bubble({ who, me, children }: { who: string; me?: boolean; children: ReactNode }) {
  return (
    <div className={`max-w-[88%] rounded-2xl px-4 py-3 ${me ? "ml-auto rounded-br-md bg-lavender" : "rounded-bl-md border border-border"}`}>
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{who}</p>
      <p className="mt-0.5 text-charcoal">{children}</p>
    </div>
  );
}

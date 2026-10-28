import { useEffect, useState } from "react";
import { Eyebrow, useInView } from "./Primitives";

const LINE = "I have a stats exam in three weeks and I'm shaky on probability";
const chips = [
  { k: "Goal", v: "pass STA 201" },
  { k: "Time", v: "3 weeks" },
  { k: "Starting point", v: "probability" },
];
const path = [
  { week: "Week 1", title: "Probability, properly", note: "Rules, conditional probability, Bayes" },
  { week: "Week 2", title: "Distributions", note: "Binomial, normal, when to use which" },
  { week: "Week 3", title: "Exam mode", note: "Past questions, out loud, timed" },
];

export function TypedDemo() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(LINE.length); return; }
    const t = setInterval(() => setN((x) => { if (x >= LINE.length) { clearInterval(t); return x; } return x + 1; }), 36);
    return () => clearInterval(t);
  }, [visible]);

  const done = n >= LINE.length;

  return (
    <section className="px-3 sm:px-5">
      <div ref={ref} className="mx-auto max-w-[90rem] rounded-[var(--radius-panel)] bg-lavender px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Start with one sentence</Eyebrow>
          <p className="min-h-[7.5rem] font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:min-h-[9rem] sm:text-5xl" aria-label={LINE}>
            <span aria-hidden>“{LINE.slice(0, n)}{done && "”"}</span>
            {!done && <span className="animate-caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-indigo" aria-hidden />}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <span key={c.k} data-visible={done} style={{ transitionDelay: `${i * 150}ms` }} className="fade-up rounded-full bg-panel px-4 py-2.5 text-[15px] text-charcoal">
                <span className="text-muted-foreground">{c.k}</span> <span className="font-medium text-foreground">{c.v}</span>
              </span>
            ))}
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-3">
            {path.map((p, i) => (
              <li key={p.week} data-visible={done} style={{ transitionDelay: `${550 + i * 150}ms` }} className="fade-up relative rounded-[var(--radius-card)] bg-panel p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-strong">
                  <span className="grid size-6 place-items-center rounded-full bg-sage-tint text-foreground">{i + 1}</span>{p.week}
                </div>
                <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">{p.title}</p>
                <p className="mt-2 text-[15px] text-muted-foreground">{p.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

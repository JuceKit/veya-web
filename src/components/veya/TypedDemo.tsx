import { useEffect, useState } from "react";
import { useInView } from "./Primitives";

const LINE = "I have a stats exam in three weeks and I'm shaky on probability";
const chips = [
  { k: "goal", v: "pass STA 201" },
  { k: "time", v: "3 weeks" },
  { k: "starting point", v: "probability" },
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
    const t = setInterval(() => setN((x) => { if (x >= LINE.length) { clearInterval(t); return x; } return x + 1; }), 38);
    return () => clearInterval(t);
  }, [visible]);

  const done = n >= LINE.length;

  return (
    <section className="px-5 pb-24 sm:pb-32">
      <div ref={ref} className="mx-auto max-w-3xl rounded-[var(--radius-panel)] bg-lavender p-6 sm:p-10">
        <p className="text-sm font-medium text-indigo">Start with a sentence</p>
        <p className="mt-4 min-h-[4.5rem] font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl" aria-label={LINE}>
          <span aria-hidden>“{LINE.slice(0, n)}{done && "”"}</span>
          {!done && <span className="animate-caret ml-0.5 inline-block h-7 w-[2px] translate-y-1 bg-foreground" aria-hidden />}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <span key={c.k} data-visible={done} style={{ transitionDelay: `${i * 150}ms` }} className="fade-up rounded-full border border-border bg-panel px-4 py-2 text-sm text-charcoal">
              <span className="text-muted-foreground">{c.k}:</span> {c.v}
            </span>
          ))}
        </div>
        <ol className="mt-6 grid gap-3 sm:grid-cols-3">
          {path.map((p, i) => (
            <li key={p.week} data-visible={done} style={{ transitionDelay: `${500 + i * 150}ms` }} className="fade-up rounded-[var(--radius-card)] border border-border bg-panel p-5">
              <p className="text-xs font-medium text-sage-strong">{p.week}</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

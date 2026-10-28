import { Eyebrow, FadeUp } from "./Primitives";

const sources = [
  { t: "ChatGPT answer", c: "left-[2%] top-[8%] -rotate-6" },
  { t: "YouTube lecture", c: "left-[38%] top-[2%] rotate-3" },
  { t: "Lecture slides", c: "right-[2%] top-[14%] -rotate-2" },
  { t: "PDF notes", c: "left-[10%] top-[36%] rotate-2" },
  { t: "Podcast", c: "left-[48%] top-[32%] -rotate-3" },
  { t: "Voice note", c: "right-[4%] top-[46%] rotate-6" },
  { t: "Past questions", c: "left-[0%] top-[64%] -rotate-2" },
  { t: "Flashcards", c: "left-[40%] top-[60%] rotate-4" },
  { t: "Group chat", c: "right-[10%] top-[78%] -rotate-4" },
];

export function WhyVeya() {
  return (
    <section className="px-5 py-24 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <Eyebrow>Why Veya</Eyebrow>
          <h2 className="max-w-4xl text-5xl text-foreground sm:text-7xl">You've asked AI a thousand things.</h2>
          <p className="mt-4 font-display text-3xl font-semibold text-muted-foreground sm:text-5xl">And kept almost none of it.</p>
        </FadeUp>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <FadeUp className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Stat value="+48%" label="better while practising with ChatGPT" tone="bg-lavender" />
            <Stat value="−17%" label="worse than non-users once it was taken away" tone="bg-sage-tint" />
            <p className="px-2 text-sm text-muted-foreground sm:col-span-2 lg:col-span-1">Bastani et al., PNAS 2025</p>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-panel">
              <ul aria-label="Where your learning ends up scattered">
                {sources.map((s) => (
                  <li key={s.t} className={`absolute whitespace-nowrap rounded-full border border-foreground/30 bg-panel px-4 py-2 text-[15px] text-charcoal sm:px-5 sm:py-2.5 ${s.c}`}>{s.t}</li>
                ))}
              </ul>
              <p className="absolute bottom-5 left-6 text-sm text-muted-foreground">Everywhere, and nowhere you can find it.</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div className={`rounded-[var(--radius-card)] p-7 sm:p-8 ${tone}`}>
      <p className="font-display text-6xl font-semibold tracking-tight text-foreground sm:text-7xl">{value}</p>
      <p className="mt-3 max-w-xs text-charcoal">{label}</p>
    </div>
  );
}

import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeUp, SectionHeading } from "./Primitives";

const DECK = "https://slides.vc/share/veyaf456y54qy734j#Gu549qB9Uj1dGzkX-topRTzs3ygyh7dKBkHvw_xi_Sk";

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Is it only for students?", a: "No. Students are where we started, but Veya is for anyone learning something on purpose: a new role, a certification, a language, a side skill." },
  { q: "How is it different from ChatGPT?", a: "ChatGPT answers you and forgets. Veya asks you back, checks what stuck, and remembers where you left off, so each session builds on the last." },
  { q: "Why voice?", a: "Talking it through is how most of us actually learn. Voice lets you learn away from a desk, and explaining out loud shows quickly what you really understand." },
  { q: "Where did Veya come from?", a: "Our founder, Honour Onovae, nearly failed an AI course. He turned the material into audio, learned on the go, and passed. Friends asked if they could pay for the same thing. Veya is that, built properly." },
  { q: "When can I use it?", a: "We're letting people in from the waitlist in small groups. Join and you'll hear from us before anyone else." },
  {
    q: "I'm an investor, where's the deck?",
    a: (
      <>
        You can <a href={DECK} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo underline underline-offset-4">view the deck here</a>, or email Honour at{" "}
        <a href="mailto:dbosshonour@gmail.com" className="font-medium text-indigo underline underline-offset-4">dbosshonour@gmail.com</a>.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 px-5 pb-24 sm:pb-32">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr]">
        <FadeUp><SectionHeading eyebrow="FAQ" title="Questions, answered" /></FadeUp>
        <FadeUp delay={100}>
          <Accordion type="single" collapsible className="rounded-[var(--radius-card)] border border-border bg-panel px-6">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="last:border-b-0">
                <AccordionTrigger className="min-h-14 text-left font-display text-lg font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

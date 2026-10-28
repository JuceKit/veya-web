import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, FadeUp } from "./Primitives";

const DECK = "https://slides.vc/share/veyaf456y54qy734j#Gu549qB9Uj1dGzkX-topRTzs3ygyh7dKBkHvw_xi_Sk";
const link = "font-medium text-indigo underline underline-offset-4";

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
        You can <a href={DECK} target="_blank" rel="noopener noreferrer" className={link}>view the deck here</a>, or email Honour at{" "}
        <a href="mailto:dbosshonour@gmail.com" className={link}>dbosshonour@gmail.com</a>.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 px-5 py-24 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeUp className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-5xl text-foreground sm:text-7xl">Questions, answered.</h2>
        </FadeUp>
        <FadeUp delay={100}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="min-h-16 py-6 text-left font-display text-xl font-semibold tracking-tight text-foreground hover:no-underline sm:text-2xl">{f.q}</AccordionTrigger>
                <AccordionContent className="max-w-xl pb-6 text-[17px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

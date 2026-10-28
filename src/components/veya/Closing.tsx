import { FadeUp } from "./Primitives";
import { WaitlistForm } from "./WaitlistForm";

export function Closing() {
  return (
    <section className="px-3 pb-6 sm:px-5">
      <FadeUp className="mx-auto max-w-6xl rounded-[var(--radius-panel)] bg-sage-tint px-6 py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-2xl text-4xl text-foreground sm:text-6xl">Learning should be yours. And it should stay.</h2>
        <div className="mx-auto mt-10 max-w-md"><WaitlistForm source="footer" /></div>
      </FadeUp>
    </section>
  );
}

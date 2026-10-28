import { FadeUp, Logo } from "./Primitives";
import { WaitlistForm } from "./WaitlistForm";

export function Closing() {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <FadeUp className="mx-auto max-w-7xl rounded-[var(--radius-panel)] bg-sage-tint px-5 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Logo className="mx-auto h-12 w-auto" />
          <h2 className="mt-8 text-5xl text-foreground sm:text-8xl">Learning should be yours. And it should stay.</h2>
          <div className="mx-auto mt-12 max-w-md text-left"><WaitlistForm source="footer" /></div>
        </div>
      </FadeUp>
    </section>
  );
}

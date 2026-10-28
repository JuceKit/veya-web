import { useState, type FormEvent } from "react";
import { joinWaitlist, type WaitlistSource } from "@/lib/waitlist";

export function WaitlistForm({ source }: { source: WaitlistSource }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    const res = await joinWaitlist(email, source);
    if (res.ok) return setStatus("done");
    setStatus("idle");
    setError(res.error);
  }

  if (status === "done") {
    return (
      <div role="status" className="flex items-center gap-3 rounded-[var(--radius-card)] border border-border bg-panel px-5 py-4 text-left">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sage-tint text-foreground" aria-hidden>✓</span>
        <p className="text-[15px] font-medium text-foreground">You're on the list. We'll be in touch before anyone else.</p>
      </div>
    );
  }

  const id = `email-${source}`;
  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-border bg-panel p-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className="min-h-12 flex-1 rounded-xl bg-transparent px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 rounded-xl bg-primary px-6 text-[15px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      {error && <p id={`${id}-err`} role="alert" className="mt-2 px-2 text-sm text-destructive">{error}</p>}
    </form>
  );
}

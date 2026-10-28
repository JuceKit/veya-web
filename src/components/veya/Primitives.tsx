import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function FadeUp({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} data-visible={visible} style={{ transitionDelay: `${delay}ms` }} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

/** Veya leaf-V mark, vector-traced from the original brand board (public/veya-logo.svg). */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return <img src="/veya-logo.svg" alt="" aria-hidden width={1020} height={705} className={className} draggable={false} />;
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p className={`mb-5 inline-flex items-center gap-2 text-sm font-medium ${tone === "dark" ? "text-sage-tint" : "text-indigo"}`}>
      <span className={`h-px w-6 ${tone === "dark" ? "bg-sage-tint" : "bg-indigo"}`} aria-hidden />
      {children}
    </p>
  );
}

export function Waveform({ bars = 28, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex h-10 items-center gap-[3px] ${className}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="animate-wave w-[3px] shrink-0 rounded-full bg-gradient-brand"
          style={{ height: `${25 + ((i * 37) % 75)}%`, animationDelay: `${(i % 9) * 0.1}s` }}
        />
      ))}
    </div>
  );
}

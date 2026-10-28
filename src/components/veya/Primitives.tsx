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

export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="veya-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--indigo)" />
          <stop offset="1" stopColor="var(--sage)" />
        </linearGradient>
      </defs>
      <path d="M4 8c6 0 9 4 12 12l4 11 4-11C27 11 31 6 37 5c-5 3-8 8-11 17l-3 9c-1 3-5 3-6 0l-3-9C11 13 9 10 4 8z" fill="url(#veya-g)" />
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: ReactNode; sub?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="mb-4 text-sm font-medium text-indigo">{eyebrow}</p>}
      <h2 className="text-4xl text-foreground sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Waveform({ bars = 28, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex h-8 items-center gap-[3px] ${className}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="animate-wave w-[3px] rounded-full bg-gradient-brand"
          style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 7) * 0.12}s` }}
        />
      ))}
    </div>
  );
}

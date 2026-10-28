import { useEffect, useId, useRef, useState, type ReactNode } from "react";

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

/** Veya leaf-V mark, traced from the brand board. */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="4 3 46 33" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A29CF5" /><stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#10B981" /><stop offset=".55" stopColor="#7EE0B5" /><stop offset="1" stopColor="#C4EBB0" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id}a)`} d="M6.5 11.2C5.3 9.4 7 8.6 9.6 9.3C15.8 11 21.4 16 25.4 22.6L22.6 32.4C16.6 27.6 10.4 18.4 6.5 11.2Z" />
      <path fill={`url(#${id}b)`} d="M19.6 30.4C26.4 18.8 36.4 9.4 45 6.2C47.6 5.2 48.6 6.6 47.6 9C43.4 20 35 30 27.4 33.2C23.2 35 19.4 33.6 19.6 30.4Z" />
    </svg>
  );
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

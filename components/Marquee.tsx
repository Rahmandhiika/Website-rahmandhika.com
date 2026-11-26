export function Marquee({ text }: { text: string }) {
  const copy = Array.from({ length: 4 }, () => text).join(" · ");
  return (
    <div className="overflow-hidden">
      <h1 className="sr-only">{text}</h1>
      <p
        aria-hidden="true"
        className="marquee-static hidden motion-reduce:block px-6 font-display text-[13vw] leading-none md:text-[9vw]"
        style={{ textShadow: "0.05em 0.05em 0 var(--color-yellow)" }}
      >
        {text}
      </p>
      <div className="marquee-track motion-reduce:hidden" aria-hidden="true">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="whitespace-nowrap pr-[0.5em] font-display text-[18vw] leading-none text-ink/90 md:text-[12vw]"
            style={{ textShadow: "0.05em 0.05em 0 var(--color-yellow)" }}
          >
            {copy} ·
          </span>
        ))}
      </div>
    </div>
  );
}

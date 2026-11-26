const shadows = { yellow: "var(--color-yellow)", orange: "var(--color-orange)", blue: "var(--color-blue)" } as const;

export function DisplayTitle({
  text,
  shadow,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  shadow: keyof typeof shadows;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={`font-display uppercase leading-[0.95] ${className}`}
      style={{ textShadow: `0.06em 0.06em 0 ${shadows[shadow]}` }}
    >
      {text}
    </Tag>
  );
}

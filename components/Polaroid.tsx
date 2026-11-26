import Image from "next/image";

export function Polaroid({
  src, alt, caption, width, height, rotate = 0, className = "",
}: {
  src: string; alt: string; caption?: string; width: number; height: number; rotate?: number; className?: string;
}) {
  return (
    <figure
      className={`rounded-md bg-white p-3 pb-4 shadow-[0_14px_30px_rgba(22,24,29,0.18)] motion-safe:transition-transform ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      {caption && <figcaption className="mt-3 font-hand text-2xl">{caption}</figcaption>}
    </figure>
  );
}

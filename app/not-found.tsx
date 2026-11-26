import Link from "next/link";
import { DisplayTitle } from "@/components/DisplayTitle";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <DisplayTitle text="Page not found" shadow="orange" as="h1" className="text-5xl md:text-7xl" />
        <p className="text-lg">This page doesn&apos;t exist, or it moved.</p>
        <Link href="/" className="rounded-full bg-ink px-6 py-3 font-bold text-cream hover:bg-blue">Back to home</Link>
      </div>
    </main>
  );
}

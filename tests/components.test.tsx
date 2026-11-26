import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ChipRow } from "@/components/ChipRow";
import { StatRow } from "@/components/StatRow";
import { DisplayTitle } from "@/components/DisplayTitle";
import { Polaroid } from "@/components/Polaroid";
import { Footer } from "@/components/Footer";

describe("ChipRow", () => {
  test("renders role, period, then each tool in order", () => {
    render(<ChipRow chips={{ role: "Product Designer", period: "Sep 2026 – now", tools: ["Figma", "SwiftUI"] }} />);
    const items = screen.getAllByRole("listitem").map((li) => li.textContent);
    expect(items).toEqual(["Product Designer", "Sep 2026 – now", "Figma", "SwiftUI"]);
  });
});

describe("StatRow", () => {
  test("renders each value with its label", () => {
    render(<StatRow stats={[{ value: "6", label: "Team members" }, { value: "1", label: "Real tour test" }, { value: "Beta", label: "In beta testing" }]} />);
    expect(screen.getByText("Beta")).toBeInTheDocument();
    expect(screen.getByText("In beta testing")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});

describe("DisplayTitle", () => {
  test("puts the title in the accessible tree exactly once", () => {
    render(<DisplayTitle text="STRIDE" shadow="yellow" as="h1" />);
    expect(screen.getAllByRole("heading", { name: "STRIDE" })).toHaveLength(1);
    expect(screen.getAllByText("STRIDE")).toHaveLength(1);
  });
});

describe("Polaroid", () => {
  test("image carries the alt text and caption shows", () => {
    render(<Polaroid src="/me/photo.webp" alt="Dika smiling" caption="Jakarta, 2026" width={800} height={800} />);
    expect(screen.getByAltText("Dika smiling")).toBeInTheDocument();
    expect(screen.getByText("Jakarta, 2026")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test("has email, LinkedIn, GitHub and portfolio PDF links", () => {
    render(<Footer />);
    const f = within(screen.getByRole("contentinfo"));
    expect(f.getByRole("link", { name: /email/i })).toHaveAttribute("href", "mailto:rahmandhika19@gmail.com");
    expect(f.getByRole("link", { name: /linkedin/i })).toHaveAttribute("href", "https://www.linkedin.com/in/rahmandhika");
    expect(f.getByRole("link", { name: /github/i })).toHaveAttribute("href", "https://github.com/Rahmandhiika");
    const pdf = f.getByRole("link", { name: /portfolio pdf/i });
    expect(pdf).toHaveAttribute("href", "/Rahmandhika-Portfolio.pdf");
    expect(pdf).toHaveAttribute("target", "_blank");
    expect(pdf.getAttribute("rel")).toContain("noopener");
  });
});

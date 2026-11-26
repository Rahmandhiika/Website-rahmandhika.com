import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import Home from "@/app/page";
import { privateStrings } from "./private-strings";

describe("ServicesSection", () => {
  test("shows 4 numbered services with the agreed titles", () => {
    render(<ServicesSection />);
    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(4);
    expect(cards.map((c) => within(c).getByRole("heading").textContent)).toEqual([
      "UI/UX & design systems", "Front-end with Next.js", "iOS prototypes in SwiftUI", "Ship and maintain",
    ]);
    expect(["01", "02", "03", "04"].every((n) => screen.getByText(n))).toBe(true);
  });
});

describe("ExperienceSection", () => {
  test("lists the retail client and the Academy, with no phone number", () => {
    const { container } = render(<ExperienceSection />);
    expect(screen.getByText("Retail client (contract)")).toBeInTheDocument();
    expect(screen.getByText("Apple Developer Academy @ BINUS")).toBeInTheDocument();
    for (const bad of privateStrings) expect(container.textContent).not.toContain(bad);
  });
});

describe("Home page", () => {
  test("sections come in order: work, services, about, then the footer", () => {
    const { container } = render(<Home />);
    const ids = [...container.querySelectorAll("section[id]")].map((s) => s.id);
    expect(ids).toEqual(["work", "services", "about"]);
    const footer = container.querySelector("footer");
    const about = container.querySelector("section#about")!;
    expect(about.compareDocumentPosition(footer!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});

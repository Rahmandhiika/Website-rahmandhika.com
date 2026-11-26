import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { WorkSection } from "@/components/WorkSection";
import { projects } from "@/content/projects";

describe("WorkSection", () => {
  test("links to all 9 project pages", () => {
    render(<WorkSection />);
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href")).filter((h) => h?.startsWith("/work/"));
    expect(new Set(hrefs)).toEqual(new Set(projects.map((p) => `/work/${p.slug}`)));
  });

  test("featured cards come first in agreed order", () => {
    render(<WorkSection />);
    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles.slice(0, 6)).toEqual(["Stride", "ChainGO", "Cashier System", "Meander", "BadminKuy", "MazDu"]);
  });

  test("each featured card shows its one-liner and role", () => {
    render(<WorkSection />);
    const stride = screen.getByRole("article", { name: "Stride" });
    expect(within(stride).getByText(projects.find((p) => p.slug === "stride")!.oneLiner)).toBeInTheDocument();
    expect(within(stride).getByText("Product Designer")).toBeInTheDocument();
  });

  test("section is anchored and offers the portfolio PDF", () => {
    const { container } = render(<WorkSection />);
    expect(container.querySelector("section#work")).not.toBeNull();
    expect(screen.getByRole("link", { name: /portfolio pdf/i })).toHaveAttribute("href", "/Rahmandhika-Portfolio.pdf");
  });
});

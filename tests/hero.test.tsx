import { describe, expect, test } from "vitest";
import { readFileSync } from "node:fs";
import { render, screen, within } from "@testing-library/react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

describe("Nav", () => {
  test("View CV opens the web CV in a new tab", () => {
    render(<Nav />);
    const cv = screen.getByRole("link", { name: /view cv/i });
    expect(cv).toHaveAttribute("href", "/Rahmandhika-CV.pdf");
    expect(cv).toHaveAttribute("target", "_blank");
    expect(screen.queryByText(/resume/i)).toBeNull();
  });

  test("has section anchors", () => {
    render(<Nav />);
    const nav = within(screen.getByRole("navigation"));
    expect(nav.getByRole("link", { name: "Work" })).toHaveAttribute("href", "/#work");
    expect(nav.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/#services");
    expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("href", "/#about");
  });
});

describe("Hero", () => {
  test("shows headline, status and the two calls to action", () => {
    render(<Hero />);
    expect(screen.getByText("Design Engineer · UI/UX × Full-Stack")).toBeInTheDocument();
    expect(screen.getByText(/Open to freelance, part-time, and hybrid roles/)).toBeInTheDocument();
    const dl = screen.getByRole("link", { name: /download cv/i });
    expect(dl).toHaveAttribute("href", "/Rahmandhika-CV.pdf");
    expect(dl).toHaveAttribute("download", "Rahmandhika-CV.pdf");
    expect(screen.getByRole("link", { name: /see my work/i })).toHaveAttribute("href", "#work");
  });
});

describe("Marquee", () => {
  test("name is one heading; moving copies are hidden from screen readers", () => {
    const { container } = render(<Marquee text="RAHMANDHIKA" />);
    expect(screen.getAllByRole("heading", { name: "RAHMANDHIKA" })).toHaveLength(1);
    const hidden = container.querySelectorAll('[aria-hidden="true"]');
    expect(hidden.length).toBeGreaterThan(0);
  });

  test("reduced motion turns the marquee animation off", () => {
    const css = readFileSync("app/globals.css", "utf8");
    expect(css).toMatch(/prefers-reduced-motion:\s*reduce[\s\S]*\.marquee-track[\s\S]*animation:\s*none/);
  });
});

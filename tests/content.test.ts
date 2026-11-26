import { describe, expect, test } from "vitest";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { services } from "@/content/services";
import { privateStrings } from "./private-strings";

const SLUGS = ["stride", "chaingo", "meander", "badminkuy", "restme", "trivoi", "cashier-system", "mazdu", "mentoring"];

describe("content", () => {
  test("projects has the 9 expected unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(9);
    expect([...slugs].sort()).toEqual([...SLUGS].sort());
  });

  test("featured projects are the six in agreed order", () => {
    const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order).map((p) => p.slug);
    expect(featured).toEqual(["stride", "chaingo", "cashier-system", "meander", "badminkuy", "mazdu"]);
  });

  test.each(SLUGS)("%s has chips, 3 stats, a story and alt text", (slug) => {
    const p = getProject(slug)!;
    expect(p.chips.role).not.toBe("");
    expect(p.chips.period).not.toBe("");
    expect(p.chips.tools.length).toBeGreaterThan(0);
    expect(p.stats).toHaveLength(3);
    expect(p.story.length).toBeGreaterThan(50);
    expect(p.cover.alt).not.toBe("");
  });

  test("no private strings anywhere in content", () => {
    const all = JSON.stringify({ projects, site, experience, services }).toLowerCase();
    for (const bad of privateStrings) {
      expect(all).not.toContain(bad);
    }
  });

  test("getProject finds known slugs and returns undefined otherwise", () => {
    expect(getProject("stride")?.title).toBe("Stride");
    expect(getProject("nope")).toBeUndefined();
  });

  test("site links are the real ones", () => {
    expect(site.email).toBe("rahmandhika19@gmail.com");
    expect(site.linkedin).toBe("https://www.linkedin.com/in/rahmandhika");
    expect(site.github).toBe("https://github.com/Rahmandhiika");
    expect(site.cvHref).toBe("/Rahmandhika-CV.pdf");
    expect(site.portfolioHref).toBe("/Rahmandhika-Portfolio.pdf");
  });

  test("services are the four agreed titles", () => {
    expect(services.map((s) => s.title)).toEqual([
      "UI/UX & design systems", "Front-end with Next.js", "iOS prototypes in SwiftUI", "Ship and maintain",
    ]);
  });
});

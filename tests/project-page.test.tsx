import { describe, expect, test, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";

const notFound = vi.fn(() => { throw new Error("NEXT_NOT_FOUND"); });
vi.mock("next/navigation", () => ({ notFound: () => notFound() }));

import Page, { generateMetadata, generateStaticParams } from "@/app/work/[slug]/page";
import NotFound from "@/app/not-found";
import { projects } from "@/content/projects";

const params = (slug: string) => ({ params: Promise.resolve({ slug }) });

describe("project pages", () => {
  test("pre-renders all 9 slugs", async () => {
    expect((await generateStaticParams()).map((p) => p.slug).sort()).toEqual(projects.map((p) => p.slug).sort());
  });

  test("metadata uses the title and one-liner", async () => {
    const m = await generateMetadata(params("stride"));
    expect(m.title).toBe("Stride · Rahmandhika");
    expect(m.description).toBe(projects.find((p) => p.slug === "stride")!.oneLiner);
  });

  test("stride page shows title, story, chips, stats and links to the other 8", async () => {
    render(await Page(params("stride")));
    expect(screen.getByRole("heading", { level: 1, name: "Stride" })).toBeInTheDocument();
    expect(screen.getByText(/On a group motorcycle tour/)).toBeInTheDocument();
    expect(screen.getByText("Product Designer")).toBeInTheDocument();
    expect(screen.getByText("In beta testing")).toBeInTheDocument();
    const more = within(screen.getByRole("navigation", { name: "More work" }));
    const hrefs = more.getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toHaveLength(8);
    expect(hrefs).not.toContain("/work/stride");
  });

  test("unknown slug calls notFound", async () => {
    await expect(Page(params("nope"))).rejects.toThrow("NEXT_NOT_FOUND");
    expect(notFound).toHaveBeenCalled();
  });

  test("404 page links home", () => {
    render(<NotFound />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
  });
});

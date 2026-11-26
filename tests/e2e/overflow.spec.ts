import { expect, test } from "@playwright/test";

const slugs = ["stride", "chaingo", "meander", "badminkuy", "restme", "trivoi", "cashier-system", "mazdu", "mentoring"];
const paths = ["/", ...slugs.map((s) => `/work/${s}`)];
const viewports = [
  { width: 360, height: 740 },
  { width: 1440, height: 900 },
];

for (const vp of viewports) {
  for (const path of paths) {
    test(`${path} fits a ${vp.width}px screen`, async ({ page }) => {
      await page.setViewportSize(vp);
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      // Clipped content doesn't scroll, so also check nothing in <main> pokes past the screen edge.
      const offenders = await page.evaluate(() => {
        const w = window.innerWidth;
        return [...document.querySelectorAll("main *")]
          .filter((el) => !el.closest("[aria-hidden='true']"))
          .filter((el) => el.getBoundingClientRect().right > w + 1)
          .map((el) => `${el.tagName}.${(el.className || "").toString().slice(0, 40)}`)
          .slice(0, 5);
      });
      expect(offenders).toEqual([]);
    });
  }
}

test("reduced motion shows the whole name, still and on screen", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 360, height: 740 } });
  const page = await ctx.newPage();
  await page.goto("/");
  const name = await page.locator(".marquee-track").evaluate((el) => getComputedStyle(el).animationName);
  expect(name).toBe("none");
  await expect(page.locator(".marquee-track")).toBeHidden();
  const still = page.locator(".marquee-static");
  await expect(still).toBeVisible();
  await expect(still).toHaveText("RAHMANDHIKA");
  const box = await still.boundingBox();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(360);
  await ctx.close();
});

test("normal motion shows only the moving name", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".marquee-track")).toBeVisible();
  await expect(page.locator(".marquee-static")).toBeHidden();
});

test("every image has alt text", async ({ page }) => {
  for (const path of ["/", "/work/stride", "/work/mazdu"]) {
    await page.goto(path);
    const missing = await page.locator("img:not([alt]), img[alt='']").count();
    expect(missing, path).toBe(0);
  }
});

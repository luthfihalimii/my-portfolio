import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const text = (path: string) => readFileSync(path, "utf8");

describe("portfolio component existence", () => {
  test("RSS feed exists", () => {
    expect(existsSync("src/pages/rss.xml.ts")).toBe(true);
    expect(text("src/pages/rss.xml.ts")).toContain("export async function GET");
  });

  test("Skip link in layout", () => {
    expect(text("src/layouts/Layout.astro")).toContain("Skip to content");
  });

  test("hreflang tags", () => {
    const layout = text("src/layouts/Layout.astro");
    expect(layout).toContain('hrefLang="id"');
    expect(layout).toContain('hrefLang="en"');
  });

  test("Reading time in blog list", () => {
    const blogList = text("src/components/BlogList.tsx");
    expect(blogList).toContain("min read");
  });

  test("Giscus component exists", () => {
    expect(existsSync("src/components/mdx/giscus.tsx")).toBe(true);
  });

  test("Service worker exists", () => {
    expect(existsSync("public/sw.js")).toBe(true);
    expect(existsSync("public/register-sw.js")).toBe(true);
  });

  test("RSS link in layout", () => {
    expect(text("src/layouts/Layout.astro")).toContain("rss.xml");
  });

  test("Bio section exists", () => {
    expect(existsSync("src/components/HomePage.tsx")).toBe(true);
  });

  test("Biome config exists", () => {
    expect(existsSync("biome.json")).toBe(true);
  });

  test("Resume split - domain files exist", () => {
    const domainFiles = [
      "src/data/profile.ts",
      "src/data/work.ts",
      "src/data/skills.ts",
      "src/data/projects.tsx",
      "src/data/education.ts",
      "src/data/contact.ts",
      "src/data/navigation.ts",
      "src/data/config.ts",
    ];
    for (const file of domainFiles) {
      expect(existsSync(file)).toBe(true);
    }
  });

  test("Data index re-exports all domain modules", () => {
    const index = text("src/data/index.ts");
    const domainModules = [
      "profile",
      "work",
      "education",
      "skills",
      "projects",
      "contact",
      "sections",
      "navbar",
      "sectionNavigation",
    ];
    for (const module of domainModules) {
      expect(index).toContain(module);
    }
  });

});

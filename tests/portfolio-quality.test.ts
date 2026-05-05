import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { CONFIG } from "../src/data/config";
import { DATA } from "../src/data/resume";

const text = (path: string) => readFileSync(path, "utf8");

describe("portfolio production hygiene", () => {
  test("canonical site config matches portfolio owner URL", () => {
    expect(CONFIG.site.url).toBe(DATA.url);
  });

  test("homepage is server-rendered instead of client-only", () => {
    expect(text("src/pages/index.astro")).not.toContain("client:only");
  });

  test("template owner placeholders are not present in source content", () => {
    const files = globSync("src/**/*.{ts,tsx,astro,mdx}");
    const combined = files.map((file) => text(file)).join("\n");

    expect(combined).not.toMatch(/Alex Mercer|alexmercer|Meridian Labs|Stackwise|Logport|Formbase|Patchwork|PNW Hacks|HackTheNorth/);
  });

  test("portfolio SSR components do not import react-markdown", () => {
    const ssrPortfolioComponents = [
      "src/components/HomePage.tsx",
      "src/components/project-card.tsx",
    ];

    for (const file of ssrPortfolioComponents) {
      expect(text(file)).not.toContain("react-markdown");
    }
  });

  test("portfolio uses achievements instead of hackathons section naming", () => {
    const sourceFiles = globSync("src/**/*.{ts,tsx,astro,mdx}");
    const combined = sourceFiles.map((file) => text(file)).join("\n");

    expect(DATA.sections).toHaveProperty("achievements");
    expect(DATA).toHaveProperty("achievements");
    expect(Array.isArray(DATA.achievements)).toBe(true);
    expect(combined).not.toMatch(/HackathonsSection|hackathons-section|sections\.hackathons|DATA\.hackathons/);
  });

  test("skills use CDN image URLs instead of inline SVG components", () => {
    const skills = DATA.skills as readonly Record<string, unknown>[];
    const docker = skills.find((skill) => skill.name === "Docker");

    expect(docker?.imageUrl).toBe("https://img.icons8.com/fluency/48/docker.png");

    for (const skill of skills) {
      expect(skill).toHaveProperty("imageUrl");
      expect(skill).not.toHaveProperty("icon");
      expect(skill.imageUrl).toEqual(expect.stringMatching(/^https:\/\/img\.icons8\.com\//));
    }

    expect(text("src/components/HomePage.tsx")).toContain("skill.imageUrl");
    expect(text("src/components/HomePage.tsx")).not.toContain("<skill.icon");
  });
});

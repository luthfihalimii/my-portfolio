import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { CONFIG } from "../src/data/config";
import { DATA } from "../src/data";

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

  test("no hackathons naming in source", () => {
    const sourceFiles = globSync("src/**/*.{ts,tsx,astro,mdx}");
    const combined = sourceFiles.map((file) => text(file)).join("\n");

    expect(combined).not.toMatch(/HackathonsSection|hackathons-section|sections\.hackathons|DATA\.hackathons/);
  });

  test("skills section uses tag layout with icons", () => {
    const skillsSection = text("src/components/section/skills-section.tsx");
    expect(skillsSection).not.toContain("data-skill-card");
    expect(skillsSection).not.toContain("Badge");
    expect(skillsSection).toContain("skill.imageUrl");
    expect(skillsSection).toContain("size-4");
  });

  test("skills are grouped with practical context", () => {
    const skills = DATA.skills as readonly Record<string, unknown>[];
    const categories = new Set(skills.map((skill) => skill.category));

    expect(categories).toEqual(new Set(["Frontend", "Backend & Data", "DevOps & Cloud Native"]));

    for (const skill of skills) {
      expect(skill).toHaveProperty("category");
      expect(skill).toHaveProperty("level");
      expect(skill).toHaveProperty("context");
      expect(String(skill.context).length).toBeGreaterThan(12);
    }

    expect(existsSync("src/components/section/skills-section.tsx")).toBe(true);
    expect(text("src/components/HomePage.tsx")).toContain("SkillsSection");
  });

  test("skills section shows skills as tags with icons", () => {
    const skillsSection = text("src/components/section/skills-section.tsx");

    expect(skillsSection).toContain("flex-wrap");
    expect(skillsSection).toContain("gap-1.5");
    expect(skillsSection).toContain("rounded-md");
    expect(skillsSection).toContain("size-4");
  });

  test("homepage copy, CTA, and resume download are localized", () => {
    expect(DATA.sections.work.heading).toBe("Pengalaman Kerja");
    expect(DATA.sections.education.heading).toBe("Pendidikan");
    expect(DATA.sections.skills.heading).toBe("Keahlian");
    expect(DATA.sections.contact.heading).toBe("Mari Terhubung");
    expect(DATA).toHaveProperty("resumeUrl", "/resume-luthfi-halimi.pdf");
    expect(existsSync("public/resume-luthfi-halimi.pdf")).toBe(true);

    const languageCopy = text("src/lib/portfolio-language.ts");

    expect(languageCopy).toContain("Halo, saya");
    expect(languageCopy).toContain("Unduh CV");
    expect(languageCopy).toContain("Lihat Proyek");
    expect(languageCopy).toContain("Hubungi Saya");
    expect(languageCopy).toContain("Hi, I'm");
    expect(languageCopy).toContain("Download CV");
  });

  test("language toggle localizes portfolio content beyond labels", () => {
    const languageHelper = text("src/lib/portfolio-language.ts");
    const homePage = text("src/components/HomePage.tsx");
    const projectsSection = text("src/components/section/projects-section.tsx");

    expect(languageHelper).toContain("localizedPortfolioContent");
    expect(languageHelper).toContain("Secure infrastructure");

    expect(homePage).toContain("localized.description");
    expect(homePage).toContain("localized.summary");
    expect(projectsSection).toContain("localized.projects");
  });

  test("hero keeps only resume and project CTAs", () => {
    const homePage = text("src/components/HomePage.tsx");

    expect(homePage).toContain("copy.downloadCv");
    expect(homePage).toContain("copy.viewProjects");
    expect(homePage).not.toContain("copy.updatedLabel");
    expect(homePage).not.toContain("DATA.lastUpdated[language]");
    expect(homePage).not.toContain("copy.contactMe");
  });

  test("hero avatar is server-rendered as a native image", () => {
    const homePage = text("src/components/HomePage.tsx");

    expect(homePage).toContain("src={DATA.avatarUrl}");
    expect(homePage).toContain("alt={DATA.name}");
    expect(homePage).not.toContain("AvatarImage");
    expect(homePage).not.toContain("AvatarFallback");
  });

  test("vite prebundles client island dependencies used in dev", () => {
    const astroConfig = text("astro.config.mjs");

    for (const dependency of [
      "motion/react",
      "lucide-react",
      "next-themes",
    ]) {
      expect(astroConfig).toContain(dependency);
    }

    expect(astroConfig).toContain("exclude");
    expect(astroConfig).toContain("force: true");
    expect(astroConfig).toContain("astro:content");
    expect(astroConfig).toContain("astro/content/runtime");
    expect(astroConfig).toContain("ssr");
    expect(astroConfig).toContain("noDiscovery: true");
    expect(astroConfig).toContain("include: []");
  });

  test("anchor navigation uses accessible smooth scrolling", () => {
    const globalCss = text("src/styles/global.css");

    expect(globalCss).toContain("scroll-behavior: smooth");
    expect(globalCss).toContain("@media (prefers-reduced-motion: reduce)");
    expect(globalCss).toContain("scroll-behavior: auto");
  });

  test("portfolio sections exist", () => {
    expect(DATA).toHaveProperty("lastUpdated");
  });

  test("projects support filtering and detail view", () => {
    for (const project of DATA.projects) {
      expect(project).toHaveProperty("category");
      expect(project).toHaveProperty("details");
    }

    const projectsSection = text("src/components/section/projects-section.tsx");
    const projectCard = text("src/components/project-card.tsx");

    expect(projectsSection).toContain("selectedCategory");
    expect(projectsSection).toContain("activeProject");
    expect(projectsSection).toContain("role=\"dialog\"");
    expect(projectCard).toContain("onOpenDetails");
    expect(projectCard).toContain("aria-label={`View ${title} details`}");
    expect(projectCard).not.toContain("detailsLabel");
    expect(projectsSection).not.toContain("detailsLabel=");
  });

  test("navbar tracks active section and exposes language toggle", () => {
    const navbar = text("src/components/navbar.tsx");
    const languageToggle = text("src/components/language-toggle.tsx");
    const languageHelper = text("src/lib/portfolio-language.ts");

    expect(DATA).toHaveProperty("sectionNavigation");
    expect(DATA.sectionNavigation.map((item) => item.sectionId)).toEqual(["projects", "contact"]);
    expect(navbar).toContain("IntersectionObserver");
    expect(navbar).toContain("activeSection");
    expect(navbar).toContain("LanguageToggle");
    expect(navbar).toContain("mainNavItems");
    expect(navbar).not.toContain("DATA.contact.social");
    expect(languageToggle).toContain("usePortfolioLanguage");
    expect(languageHelper).toContain("portfolio:languagechange");
    expect(languageHelper).toContain("localStorage");
  });

  test("contact section is not hidden behind page-level reveal animation", () => {
    const homePage = text("src/components/HomePage.tsx");
    const contactSection = text("src/components/section/contact-section.tsx");

    expect(homePage).toContain("contact: <ContactSection />");
    expect(homePage).not.toContain("BLUR_FADE_DELAY * 16");
    expect(contactSection).toContain("copy.sections.contact.heading");
    expect(contactSection).toContain("copy.sections.contact.text");
  });

  test("mdx code blocks normalize lowercase tabindex before rendering pre", () => {
    const codeBlock = text("src/components/mdx/code-block.tsx");

    expect(codeBlock).toContain("tabindex?:");
    expect(codeBlock).toContain("normalizeTabIndex");
    expect(codeBlock).toContain("tabIndex={normalizedTabIndex}");
    expect(codeBlock).not.toContain("<pre {...props}");
    expect(codeBlock).not.toContain("useState");
    expect(codeBlock).not.toContain("lucide-react");
  });

  test("blog detail uses editorial reading features", () => {
    const blogDetail = text("src/pages/blog/[slug].astro");
    const layout = text("src/layouts/Layout.astro");
    const mdxComponents = text("src/mdx-components.tsx");
    const contentConfig = text("src/content.config.ts");
    const posts = globSync("src/content/blog/*.mdx");

    expect(contentConfig).toContain("category: z.string()");
    expect(contentConfig).toContain("tags: z.array(z.string())");
    expect(blogDetail).toContain("readingTime");
    expect(blogDetail).toContain("headings");
    expect(blogDetail).toContain("relatedPosts");
    expect(blogDetail).toContain("reading-progress");
    expect(blogDetail).toContain("Table of contents");
    expect(blogDetail).toContain("About the author");
    expect(blogDetail).toContain("Related posts");
    expect(blogDetail).toContain('containerClass="max-w-5xl"');
    expect(blogDetail).toContain("blogGridClass");
    expect(blogDetail).toContain("lg:grid-cols-[minmax(0,680px)_260px]");
    expect(blogDetail).toContain("article-footer");
    expect(layout).toContain("containerClass");
    expect(mdxComponents).toContain("Callout");
    expect(mdxComponents).toContain("SecurityNote");

    for (const post of posts) {
      const source = text(post);
      expect(source).toContain("category:");
      expect(source).toContain("tags:");
    }
  });

  test("blog index avoids hook-based motion during server rendering", () => {
    const blogList = text("src/components/BlogList.tsx");
    const blogIndex = text("src/pages/blog/index.astro");
    const blogDetail = text("src/pages/blog/[slug].astro");
    const callout = text("src/components/mdx/callout.tsx");
    const layout = text("src/layouts/Layout.astro");

    expect(blogIndex).toContain("export const prerender = true");
    expect(blogList).not.toContain("BlurFade");
    expect(blogList).not.toContain("motion/react");
    expect(blogList).not.toContain("lucide-react");
    expect(blogList).not.toContain("useRef");
    expect(blogList).toContain("animationDelay");
    expect(blogDetail).not.toContain("lucide-react");
    expect(callout).not.toContain("lucide-react");
    expect(layout).toContain('NavbarIsland client:only="react"');
  });

  test("blog index content is centered in its own readable viewport column", () => {
    const blogList = text("src/components/BlogList.tsx");
    const blogIndex = text("src/pages/blog/index.astro");

    expect(blogIndex).toContain('containerClass="w-full max-w-2xl"');
    expect(blogList).toContain("mx-auto");
    expect(blogList).toContain("max-w-2xl");
    expect(blogList).toContain("min-h-[calc(100dvh-9rem)]");
    expect(blogList).toContain("sm:min-h-[calc(100dvh-12rem)]");
    expect(blogList).toContain("justify-center");
    expect(blogList).toContain("lg:translate-x-24");
  });

  test("decorative header background is static and SEO has structured data", () => {
    const layout = text("src/layouts/Layout.astro");
    const sourceFiles = globSync("src/**/*.{ts,tsx,astro}");
    const combined = sourceFiles.map((file) => text(file)).join("\n");

    expect(combined).not.toContain("FlickeringGrid");
    expect(layout).toContain("portfolio-grid-backdrop");
    expect(layout).toContain('type="application/ld+json"');
    expect(layout).toContain("@type");
    expect(layout).toContain("Person");
    expect(layout).toContain("WebSite");
  });
});

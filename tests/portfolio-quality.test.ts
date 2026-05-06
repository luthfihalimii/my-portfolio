import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
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

    expect(text("src/components/section/skills-section.tsx")).toContain("skill.imageUrl");
    expect(text("src/components/section/skills-section.tsx")).not.toContain("<skill.icon");
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

  test("skill cards use a consistent full-width layout", () => {
    const skillsSection = text("src/components/section/skills-section.tsx");

    expect(skillsSection).toContain("data-skill-card");
    expect(skillsSection).toContain("w-full");
    expect(skillsSection).toContain("justify-between");
    expect(skillsSection).not.toContain("w-fit max-w-full");
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
    const skillsSection = text("src/components/section/skills-section.tsx");
    const servicesSection = text("src/components/section/services-section.tsx");
    const projectsSection = text("src/components/section/projects-section.tsx");
    const achievementsSection = text("src/components/section/achievements-section.tsx");

    expect(languageHelper).toContain("localizedPortfolioContent");
    expect(languageHelper).toContain("Secure infrastructure");
    expect(languageHelper).toContain("Server environment");
    expect(languageHelper).toContain("Practical web applications");
    expect(languageHelper).toContain("Represented the cybersecurity field");

    expect(homePage).toContain("localized.description");
    expect(homePage).toContain("localized.summary");
    expect(skillsSection).toContain("localized.skills");
    expect(servicesSection).toContain("localized.services");
    expect(projectsSection).toContain("localized.projects");
    expect(achievementsSection).toContain("localized.achievements");
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
      "@radix-ui/react-avatar",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-slot",
      "class-variance-authority",
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

  test("portfolio includes credibility sections except open source contributions", () => {
    expect(DATA.sections).toHaveProperty("caseStudies");
    expect(DATA.sections).toHaveProperty("certifications");
    expect(DATA.sections).toHaveProperty("now");
    expect(DATA.sections).toHaveProperty("services");
    expect(DATA.sections).not.toHaveProperty("openSource");
    expect(DATA).toHaveProperty("caseStudies");
    expect(DATA).toHaveProperty("certifications");
    expect(DATA).toHaveProperty("now");
    expect(DATA).toHaveProperty("services");
    expect(DATA).toHaveProperty("lastUpdated");

    expect(existsSync("src/components/section/case-studies-section.tsx")).toBe(true);
    expect(existsSync("src/components/section/certifications-section.tsx")).toBe(true);
    expect(existsSync("src/components/section/now-section.tsx")).toBe(true);
    expect(existsSync("src/components/section/services-section.tsx")).toBe(true);

    const homePage = text("src/components/HomePage.tsx");
    expect(homePage).toContain("CaseStudiesSection");
    expect(homePage).toContain("CertificationsSection");
    expect(homePage).toContain("NowSection");
    expect(homePage).toContain("ServicesSection");
  });

  test("services use contextual icons instead of one repeated check icon", () => {
    const servicesSection = text("src/components/section/services-section.tsx");

    expect(servicesSection).toContain("SERVICE_ICONS");
    expect(servicesSection).toContain("Code2");
    expect(servicesSection).toContain("Container");
    expect(servicesSection).toContain("TerminalSquare");
    expect(servicesSection).toContain("ShieldCheck");
    expect(servicesSection).not.toContain("CheckCircle2");
    expect(servicesSection).not.toContain("Badge");
    expect(servicesSection).not.toContain("service.tags.map");
  });

  test("certifications use editable image URLs for icons", () => {
    const certificationsSection = text("src/components/section/certifications-section.tsx");

    for (const certification of DATA.certifications) {
      expect(certification).toHaveProperty("imageUrl");
      expect(certification.imageUrl).toEqual(expect.stringMatching(/^https?:\/\//));
      expect(certification).toHaveProperty("certificateUrl");
      expect(certification.certificateUrl).toEqual(expect.stringMatching(/^https?:\/\//));
    }

    expect(certificationsSection).toContain("certification.imageUrl");
    expect(certificationsSection).toContain("certification.certificateUrl");
    expect(certificationsSection).toContain("<img");
    expect(certificationsSection).toContain("ArrowUpRight");
    expect(certificationsSection).toContain("group-hover:opacity-100");
    expect(certificationsSection).not.toContain("Award");
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

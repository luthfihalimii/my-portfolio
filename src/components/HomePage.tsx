import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data";
import { ErrorBoundary } from "@/components/error-boundary";
import { LanguageProvider } from "@/lib/language-context";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkSection from "@/components/section/work-section";
import { localizedPortfolioContent, portfolioCopy, usePortfolioLanguage } from "@/lib/portfolio-language";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
type PortfolioCopy = (typeof portfolioCopy)[keyof typeof portfolioCopy];
type LocalizedPortfolioContent =
  (typeof localizedPortfolioContent)[keyof typeof localizedPortfolioContent];

const createSectionComponents = (
  copy: PortfolioCopy,
  localized: LocalizedPortfolioContent
): Record<string, React.ReactNode> => ({
  about: (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{copy.sections.about.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>{localized.summary}</p>
          </div>
        </BlurFade>
      </div>
    </section>
  ),
  work: (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">{copy.sections.work.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),
  education: (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">{copy.sections.education.heading}</h2>
        </BlurFade>
        <div className="flex flex-col gap-8">
          {DATA.education.map((education, index) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
              <a
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 justify-between group"
              >
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt={education.school}
                      loading="lazy"
                      decoding="async"
                      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {education.school}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>{education.start} - {education.end}</span>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
  donation: (
    <section id="donation" className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{copy.sections.donation.label}</span>
      </div>
      <div className="portfolio-grid-backdrop absolute inset-x-0 top-0 h-1/2 rounded-xl overflow-hidden" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {copy.sections.donation.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {copy.sections.donation.text}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <a href="https://trakteer.id/mindofluthfi" target="_blank" rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm1-12h-2v4H7v2h4v4h2v-4h4v-2h-4V8z" />
            </svg>
            Trakteer
          </a>
          <a href="https://ko-fi.com/mindofluthfi" target="_blank" rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-.215 1.472-1.241 1.619-1.241 1.619H5.985s-1.072-.224-1.072-1.654c0-1.432.054-5.339.054-5.339h6.594s1.521-.005 1.613 1.261c.092 1.267.26 2.858-.351 3.113z" />
            </svg>
            Ko-fi
          </a>
        </div>
      </div>
    </section>
  ),
});

function HomePageContent() {
  const { copy, localized } = usePortfolioLanguage();
  const sectionComponents = createSectionComponents(copy, localized);
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`${copy.heroGreeting} ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={localized.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <a href={DATA.resumeUrl} download>
                      <Download className="mr-1.5 size-4" aria-hidden />
                      {copy.downloadCv}
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="#projects">
                      <ArrowDownRight className="mr-1.5 size-4" aria-hidden />
                      {copy.viewProjects}
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                width={128}
                height={128}
                decoding="async"
                className="size-24 md:size-32 shrink-0 rounded-full border object-cover shadow-lg ring-4 ring-muted"
              />
            </BlurFade>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <ErrorBoundary key={key}>
          {sectionComponents[key]}
        </ErrorBoundary>
      ))}
    </main>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}

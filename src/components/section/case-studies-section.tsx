import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CaseStudiesSection() {
  const { copy, localized } = usePortfolioLanguage();

  return (
    <section id="case-studies">
      <div className="flex min-h-0 flex-col gap-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col gap-y-3 items-center justify-center text-center">
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {copy.sections.caseStudies.label}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {copy.sections.caseStudies.heading}
            </h2>
            <p className="max-w-xl text-balance text-muted-foreground md:text-lg/relaxed">
              {copy.sections.caseStudies.text}
            </p>
          </div>
        </BlurFade>
        <div className="grid gap-3">
          {DATA.caseStudies.map((caseStudy, index) => {
            const localizedCaseStudy = localized.caseStudies[index] ?? caseStudy;

            return (
            <BlurFade key={caseStudy.title} delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
              <article className="rounded-xl border bg-background p-5">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-tight">{localizedCaseStudy.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.stack.map((item) => (
                          <Badge key={item} variant="outline" className="h-6 text-[11px]">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition-colors hover:bg-accent"
                        >
                          {link.icon}
                          {link.title}
                          <ArrowUpRight className="size-3" aria-hidden />
                        </a>
                      ))}
                    </div>
                  </div>
                  <dl className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-muted/40 p-3">
                      <dt className="text-xs font-semibold text-foreground">{copy.projectFilters.problem}</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {localizedCaseStudy.context}
                      </dd>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3">
                      <dt className="text-xs font-semibold text-foreground">{copy.projectFilters.solution}</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {localizedCaseStudy.approach}
                      </dd>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-3">
                      <dt className="text-xs font-semibold text-foreground">{copy.projectFilters.impact}</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {localizedCaseStudy.impact}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  const { copy, localized } = usePortfolioLanguage();

  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {copy.sections.certifications.label}
            </p>
            <h2 className="text-xl font-bold">{copy.sections.certifications.heading}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {copy.sections.certifications.text}
            </p>
          </div>
        </BlurFade>
        <div className="grid gap-3">
          {DATA.certifications.map((certification, index) => {
            const localizedCertification = localized.certifications[index] ?? certification;

            return (
            <BlurFade key={certification.title} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
              <a
                href={certification.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open certificate proof for ${localizedCertification.title}`}
                className="group block rounded-lg border bg-background p-4 transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
              <article className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted">
                  <img
                    src={certification.imageUrl}
                    alt=""
                    className="size-6 object-contain"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </span>
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 font-semibold leading-tight">
                        {localizedCertification.title}
                        <ArrowUpRight
                          className="size-3.5 shrink-0 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">{localizedCertification.issuer}</p>
                    </div>
                    <time className="text-xs text-muted-foreground">{certification.date}</time>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {localizedCertification.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {certification.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="h-6 text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
              </a>
            </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

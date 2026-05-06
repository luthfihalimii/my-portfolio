import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";
import { Code2, Container, ShieldCheck, TerminalSquare } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
const SERVICE_ICONS = {
  "Web app development": Code2,
  "Deployment & containerization": Container,
  "Automation & maintenance": TerminalSquare,
  "Basic security hardening": ShieldCheck,
} as const;

export default function ServicesSection() {
  const { copy, localized } = usePortfolioLanguage();

  return (
    <section id="services">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {copy.sections.services.label}
            </p>
            <h2 className="text-xl font-bold">{copy.sections.services.heading}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {copy.sections.services.text}
            </p>
          </div>
        </BlurFade>
        <div className="grid gap-3 sm:grid-cols-2">
          {DATA.services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.title];
            const localizedService = localized.services[index] ?? service;

            return (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                <div className="flex h-full flex-col rounded-lg border bg-background p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md border bg-muted">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold leading-tight">{localizedService.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {localizedService.description}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

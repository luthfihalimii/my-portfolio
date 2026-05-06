import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";

const BLUR_FADE_DELAY = 0.04;

export default function NowSection() {
  const { language, copy, localized } = usePortfolioLanguage();

  return (
    <section id="now">
      <div className="flex min-h-0 flex-col gap-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {copy.sections.now.label}
              </p>
              <h2 className="text-xl font-bold">{copy.sections.now.heading}</h2>
            </div>
            <Badge variant="outline" className="h-7 text-[11px]">
              {DATA.lastUpdated[language]}
            </Badge>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {copy.sections.now.text}
          </p>
        </BlurFade>
        <div className="grid gap-3 sm:grid-cols-3">
          {DATA.now.map((item, index) => {
            const localizedItem = localized.now[index] ?? item;

            return (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 5 + index * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-lg border bg-background p-4">
                <Badge variant="secondary" className="w-fit text-[11px]">
                  {localizedItem.status}
                </Badge>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold leading-tight">{localizedItem.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {localizedItem.description}
                  </p>
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

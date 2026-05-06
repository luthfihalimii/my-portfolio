import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";

const BLUR_FADE_DELAY = 0.04;

const SKILL_CATEGORIES = [
  "Frontend",
  "Backend & Data",
  "DevOps & Cloud Native",
] as const;

export default function SkillsSection() {
  const { copy, localized } = usePortfolioLanguage();

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{copy.sections.skills.heading}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {copy.sections.skills.text}
            </p>
          </div>
        </BlurFade>
        <div className="flex flex-col gap-4">
          {SKILL_CATEGORIES.map((category, categoryIndex) => {
            const skills = DATA.skills.filter((skill) => skill.category === category);

            if (skills.length === 0) {
              return null;
            }

            return (
              <BlurFade
                key={category}
                delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}
              >
                <div className="flex flex-col gap-3 border-l border-border pl-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold">{category}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {localized.skillCategoryDescriptions[category]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {skills.map((skill) => {
                      const skillContext = localized.skills[DATA.skills.indexOf(skill)] ?? skill.context;

                      return (
                        <div
                          key={skill.name}
                          data-skill-card
                          className="group flex min-h-10 w-full items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2 ring-2 ring-border/20 transition-colors hover:bg-accent/50"
                          title={skillContext}
                        >
                          <div className="flex min-w-0 flex-1 items-center gap-2">
                            <img
                              src={skill.imageUrl}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="size-5 shrink-0 rounded object-contain"
                            />
                            <div className="flex min-w-0 flex-1 flex-col">
                              <span className="truncate text-sm font-medium leading-none text-foreground">
                                {skill.name}
                              </span>
                              <span className="mt-1 truncate text-[11px] leading-none text-muted-foreground">
                                {skillContext}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="h-5 shrink-0 px-1.5 text-[10px]">
                            {skill.level}
                          </Badge>
                        </div>
                      );
                    })}
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

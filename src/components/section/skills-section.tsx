import { DATA } from "@/data";
import { usePortfolioLanguage } from "@/lib/portfolio-language";

const CATEGORIES = ["Frontend", "Backend & Data", "DevOps & Cloud Native"] as const;

export default function SkillsSection() {
  const { copy } = usePortfolioLanguage();

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-5">
        <h2 className="text-xl font-bold">{copy.sections.skills.heading}</h2>
        <div className="flex flex-col gap-y-6">
        {CATEGORIES.map((category) => {
          const skills = DATA.skills.filter((s) => s.category === category);
          if (!skills.length) return null;

          return (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill.name} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-sm">
                    <img src={skill.imageUrl} alt="" width={16} height={16} loading="lazy" decoding="async" className="size-4" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        }        )}
      </div>
      </div>
    </section>
  );
}

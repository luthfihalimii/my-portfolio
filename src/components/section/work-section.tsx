import { useState } from "react";
import { DATA } from "@/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePortfolioLanguage } from "@/lib/portfolio-language";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const { localized } = usePortfolioLanguage();

  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work, index) => {
        const localizedWork = localized.work[index];

        return (
        <details key={work.company} name="work-experience" className="w-full grid gap-2 group">
          <summary className="flex items-center gap-x-3 justify-between w-full text-left hover:no-underline p-0 cursor-pointer transition-colors rounded-none list-none [&::-webkit-details-marker]:hidden">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {work.company}
                  <ChevronDown
                    className={cn(
                      "size-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                      "group-open:rotate-180"
                    )}
                  />
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {localizedWork?.title ?? work.title}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>
                {work.start} - {work.end ?? localized.workPresentLabel}
              </span>
            </div>
          </summary>
          <div className="p-0 ml-13 pt-2 text-xs sm:text-sm text-muted-foreground">
            {localizedWork?.description ?? work.description}
          </div>
        </details>
        );
      })}
    </div>
  );
}

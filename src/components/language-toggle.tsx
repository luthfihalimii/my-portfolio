import { usePortfolioLanguage } from "@/lib/portfolio-language";
import { Languages } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = usePortfolioLanguage();
  const nextLanguage = language === "id" ? "en" : "id";

  return (
    <button
      type="button"
      className={className}
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
      onClick={() => setLanguage(nextLanguage)}
    >
      <Languages className="size-4" aria-hidden />
      <span className="sr-only">Switch language</span>
      <span className="text-[10px] font-bold uppercase" aria-hidden>
        {language}
      </span>
    </button>
  );
}

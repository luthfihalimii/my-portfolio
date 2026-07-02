import { DATA } from "@/data";
import { usePortfolioLanguage } from "@/lib/portfolio-language";

export default function ContactSection() {
  const { copy } = usePortfolioLanguage();
  const primaryLinks = [
    DATA.contact.social.email,
    DATA.contact.social.LinkedIn,
    DATA.contact.social.GitHub,
    DATA.contact.social.Signal,
  ];

  return (
    <section id="contact" className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{copy.sections.contact.label}</span>
      </div>
      <div className="portfolio-grid-backdrop absolute inset-x-0 top-0 h-1/2 rounded-xl overflow-hidden" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {copy.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {copy.sections.contact.text}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.url.startsWith("http");

            return (
              <a
                key={link.name}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Icon className="size-4" aria-hidden />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

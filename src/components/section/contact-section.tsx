import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const primaryLinks = [
    DATA.contact.social.email,
    DATA.contact.social.LinkedIn,
    DATA.contact.social.GitHub,
  ];

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
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
    </div>
  );
}

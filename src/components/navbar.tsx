import { Dock, DockIcon } from "@/components/magicui/dock";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const homeNavItem = DATA.navbar.find((item) => item.href === "/");
  const blogNavItem = DATA.navbar.find((item) => item.href === "/blog");
  const mainNavItems = [
    ...(homeNavItem ? [homeNavItem] : []),
    ...DATA.sectionNavigation,
    ...(blogNavItem ? [blogNavItem] : []),
  ];

  useEffect(() => {
    const sections = DATA.sectionNavigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 max-w-[calc(100vw-1rem)] overflow-x-auto overflow-y-visible p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {mainNavItems.map((item) => {
          const isExternal = item.href.startsWith("http");
          const isActive = "sectionId" in item && activeSection === item.sectionId;
          return (
            <div key={item.href} className="group relative">
              <a
                href={item.href}
                aria-label={item.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <DockIcon
                  className={cn(
                    "rounded-2xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors",
                    isActive && "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-2/3 w-px bg-border self-center" role="separator" />
        <div className="group relative">
          <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
            <ModeToggle className="size-full cursor-pointer" />
          </DockIcon>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] whitespace-nowrap">
              Theme
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
            </div>
          </div>
        </div>
        <div className="group relative">
          <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
            <LanguageToggle className="flex size-full cursor-pointer items-center justify-center gap-0.5" />
          </DockIcon>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] whitespace-nowrap">
              Language
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
            </div>
          </div>
        </div>
      </Dock>
    </div>
  );
}

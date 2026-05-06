import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { usePortfolioLanguage } from "@/lib/portfolio-language";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const BLUR_FADE_DELAY = 0.04;
type Project = (typeof DATA.projects)[number];

export default function ProjectsSection() {
    const { copy, localized } = usePortfolioLanguage();
    const [selectedCategory, setSelectedCategory] = useState<string>(copy.projectFilters.all);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const projectCategories = useMemo(
        () => [copy.projectFilters.all, ...Array.from(new Set(DATA.projects.map((project) => project.category)))],
        [copy.projectFilters.all]
    );
    const filteredProjects =
        selectedCategory === copy.projectFilters.all
            ? DATA.projects
            : DATA.projects.filter((project) => project.category === selectedCategory);

    useEffect(() => {
        setSelectedCategory(copy.projectFilters.all);
    }, [copy.projectFilters.all]);

    useEffect(() => {
        if (!activeProject) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveProject(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeProject]);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">{copy.sections.projects.label}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{copy.sections.projects.heading}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {copy.sections.projects.text}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {projectCategories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`h-8 rounded-md border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${selectedCategory === category
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {filteredProjects.map((project, id) => {
                        const projectIndex = DATA.projects.indexOf(project);
                        const localizedProject = localized.projects[projectIndex] ?? project;

                        return (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={localizedProject.title}
                                category={project.category}
                                description={localizedProject.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                                onOpenDetails={() => setActiveProject(project)}
                            />
                        </BlurFade>
                        );
                    })}
                </div>
            </div>
            {activeProject && (
                <div
                    className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-4 backdrop-blur-sm sm:items-center"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="project-detail-title"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-xl border bg-background p-5 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2">
                                <Badge variant="secondary" className="w-fit">
                                    {activeProject.category}
                                </Badge>
                                <h3 id="project-detail-title" className="text-2xl font-bold tracking-tight">
                                    {localized.projects[DATA.projects.indexOf(activeProject)]?.title ?? activeProject.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{activeProject.dates}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <X className="size-4" aria-hidden />
                                <span className="sr-only">{copy.projectFilters.close}</span>
                            </button>
                        </div>
                        <div className="mt-5 grid gap-3">
                            {[
                                [
                                    copy.projectFilters.problem,
                                    localized.projects[DATA.projects.indexOf(activeProject)]?.details.problem ?? activeProject.details.problem,
                                ],
                                [
                                    copy.projectFilters.solution,
                                    localized.projects[DATA.projects.indexOf(activeProject)]?.details.solution ?? activeProject.details.solution,
                                ],
                                [
                                    copy.projectFilters.impact,
                                    localized.projects[DATA.projects.indexOf(activeProject)]?.details.impact ?? activeProject.details.impact,
                                ],
                            ].map(([label, value]) => (
                                <section key={label} className="rounded-lg border bg-muted/30 p-4">
                                    <h4 className="text-sm font-semibold">{label}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
                                </section>
                            ))}
                        </div>
                        <div className="mt-5">
                            <h4 className="text-sm font-semibold">{copy.projectFilters.stack}</h4>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {activeProject.technologies.map((technology) => (
                                    <Badge key={technology} variant="outline" className="h-6 text-[11px]">
                                        {technology}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

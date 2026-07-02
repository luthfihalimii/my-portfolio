import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton() {
  return (
    <section
      aria-label="Loading..."
      aria-busy="true"
      className="mx-auto flex min-h-[calc(100dvh-9rem)] w-full max-w-2xl flex-col justify-center sm:min-h-[calc(100dvh-12rem)] lg:translate-x-24"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
        <Skeleton className="h-4 w-72" />
      </div>

      <div className="flex flex-col gap-5">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="flex items-start gap-x-2">
            <Skeleton className="h-4 w-6 mt-[5px] shrink-0" />
            <div className="flex flex-col gap-y-2 flex-1">
              <Skeleton className="h-5 w-full max-w-sm" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <Skeleton className="h-3 w-20" />
                <span aria-hidden className="text-[10px] text-transparent select-none">&#183;</span>
                <Skeleton className="h-3 w-16" />
                <span aria-hidden className="text-[10px] text-transparent select-none">&#183;</span>
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 flex-row items-center justify-between mt-8">
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-lg" />
          <Skeleton className="h-8 w-14 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

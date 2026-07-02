const REVEAL_BASE_DELAY = 0.04;
const revealClassName = "animate-in fade-in-0 slide-in-from-bottom-1 duration-500 fill-mode-both";
const revealStyle = (delay: number) => ({
  animationDelay: `${delay}s`,
});

interface Post {
  id: string;
  title: string;
  publishedAt: string;
  readingTime: number;
  category: string;
}

interface BlogListProps {
  posts: Post[];
  allPostsCount: number;
}

export default function BlogList({ posts, allPostsCount }: BlogListProps) {
  return (
    <section
      id="blog"
      className="mx-auto flex min-h-[calc(100dvh-9rem)] w-full max-w-2xl flex-col justify-center sm:min-h-[calc(100dvh-12rem)] lg:translate-x-24"
    >
      <div className={revealClassName} style={revealStyle(REVEAL_BASE_DELAY)}>
        <h1 className="text-2xl font-semibold tracking-tight mb-4">
          Blog{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {allPostsCount} posts
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          My personal reflections about web development, life, and more.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className={revealClassName} style={revealStyle(REVEAL_BASE_DELAY * 2)}>
          <div className="flex flex-col gap-5">
            {posts.map((post, id) => (
              <div
                className={revealClassName}
                key={post.id}
                style={revealStyle(REVEAL_BASE_DELAY * 3 + id * 0.05)}
              >
                <a
                  className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={`/blog/${post.id}`}
                >
                  <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                    {String(id + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-y-2 flex-1">
                    <p className="tracking-tight text-lg font-medium">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <span
                          className="ml-1 inline-block text-sm text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        >
                          -&gt;
                        </span>
                      </span>
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span>{post.publishedAt}</span>
                      <span aria-hidden className="text-[10px]">&#183;</span>
                      <span>{post.readingTime} min read</span>
                      <span aria-hidden className="text-[10px]">&#183;</span>
                      <span className="rounded-full border border-border px-2 py-0.5">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={revealClassName} style={revealStyle(REVEAL_BASE_DELAY * 2)}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

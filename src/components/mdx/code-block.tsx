import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre"> & {
  "data-title"?: string;
  tabindex?: string | number;
};

function normalizeTabIndex(value: string | number | undefined) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const numericValue = Number(value);
    return Number.isNaN(numericValue) ? undefined : numericValue;
  }

  return undefined;
}

export function CodeBlock({
  children,
  tabIndex,
  tabindex,
  ...props
}: CodeBlockProps) {
  const title = props["data-title"];
  const normalizedTabIndex = tabIndex ?? normalizeTabIndex(tabindex);

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border my-6">
      {title && (
        <div className="px-4 py-2 text-xs font-medium border-b border-border bg-muted/50 text-foreground">
          {title}
        </div>
      )}
      <button
        type="button"
        data-copy-code
        className={cn(
          "absolute h-8 px-2 text-xs font-medium text-primary cursor-pointer right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity rounded-md border border-border bg-background shadow-none",
          title ? "top-13" : "top-3"
        )}
        aria-label="Copy code"
      >
        Copy
      </button>
      <pre
        {...props}
        tabIndex={normalizedTabIndex}
        className={cn("p-4 m-0! overflow-x-auto text-sm", props.className)}
      >
        {children}
      </pre>
    </div>
  );
}

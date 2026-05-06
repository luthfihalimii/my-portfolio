import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutTone = "note" | "tip" | "warning" | "security";

type CalloutProps = {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
};

const CALLOUT_STYLES: Record<
  CalloutTone,
  { title: string; icon: string; className: string }
> = {
  note: {
    title: "Note",
    icon: "i",
    className: "border-sky-200 bg-sky-50/70 text-sky-950 dark:border-sky-900/70 dark:bg-sky-950/25 dark:text-sky-100",
  },
  tip: {
    title: "Tip",
    icon: "*",
    className: "border-emerald-200 bg-emerald-50/70 text-emerald-950 dark:border-emerald-900/70 dark:bg-emerald-950/25 dark:text-emerald-100",
  },
  warning: {
    title: "Warning",
    icon: "!",
    className: "border-amber-200 bg-amber-50/75 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/25 dark:text-amber-100",
  },
  security: {
    title: "Security note",
    icon: "S",
    className: "border-zinc-300 bg-zinc-50/80 text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100",
  },
};

export function Callout({ tone = "note", title, children }: CalloutProps) {
  const style = CALLOUT_STYLES[tone];

  return (
    <aside
      className={cn(
        "not-prose my-6 rounded-xl border p-4 shadow-sm",
        style.className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-background/70">
          <span className="text-xs font-bold" aria-hidden>
            {style.icon}
          </span>
        </div>
        <div className="min-w-0 space-y-1 text-sm leading-relaxed">
          <p className="font-semibold tracking-tight">{title ?? style.title}</p>
          <div className="[&>p]:m-0 [&_code]:rounded [&_code]:bg-background/70 [&_code]:px-1 [&_code]:py-0.5">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Note(props: Omit<CalloutProps, "tone">) {
  return <Callout tone="note" {...props} />;
}

export function Tip(props: Omit<CalloutProps, "tone">) {
  return <Callout tone="tip" {...props} />;
}

export function Warning(props: Omit<CalloutProps, "tone">) {
  return <Callout tone="warning" {...props} />;
}

export function SecurityNote(props: Omit<CalloutProps, "tone">) {
  return <Callout tone="security" {...props} />;
}

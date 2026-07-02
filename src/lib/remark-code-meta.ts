import type { Root } from "mdast";

export function remarkCodeMeta() {
  return (tree: Root) => {
    const walk = (node: Record<string, unknown>) => {
      if (!node || typeof node !== "object") return;

      if (node.type === "code") {
        const meta: string | undefined = node.meta as string | undefined;
        if (meta) {
          node.data ||= {};
          (node.data as Record<string, unknown>).hProperties ||= {};

          (node.data as Record<string, unknown>).hProperties = {
            ...(node.data as Record<string, unknown>).hProperties as Record<string, unknown>,
            "data-meta": meta,
          };

          const titleMatch = meta.match(/title="([^"]+)"/);
          if (titleMatch?.[1]) {
            (node.data as Record<string, unknown>).hProperties = {
              ...(node.data as Record<string, unknown>).hProperties as Record<string, unknown>,
              "data-title": titleMatch[1],
            };
          }
        }
      }

      const children = (node.children ?? []) as Record<string, unknown>[];
      for (const child of children) walk(child);
    };

    walk(tree as unknown as Record<string, unknown>);
  };
}

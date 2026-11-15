import type { DocContent } from "./docs";

type DocChunkLoader = () => Promise<{ default: Record<string, DocContent> }>;

const GROUP_LOADERS: Record<string, DocChunkLoader> = {
  start: () => import("./docs-pages/start"),
  make: () => import("./docs-pages/make"),
  agent: () => import("./docs-pages/agent"),
  compare: () => import("./docs-pages/compare"),
  tips: () => import("./docs-pages/tips"),
  media: () => import("./docs-pages/media"),
  editor: () => import("./docs-pages/editor"),
  help: () => import("./docs-pages/help"),
  studio: () => import("./docs-pages/studio"),
  "dev-core": () => import("./docs-pages/dev-core"),
  "sdk-editing": () => import("./docs-pages/sdk-editing"),
  concepts: () => import("./docs-pages/concepts"),
  reference: () => import("./docs-pages/reference"),
  deploy: () => import("./docs-pages/deploy"),
  packages: () => import("./docs-pages/packages"),
  contribute: () => import("./docs-pages/contribute"),
};

const groupCache = new Map<string, Record<string, DocContent>>();

export async function loadDocContent(groupId: string, slug: string): Promise<DocContent | null> {
  let group = groupCache.get(groupId);
  if (!group) {
    const loader = GROUP_LOADERS[groupId];
    if (!loader) return null;
    const mod = await loader();
    group = mod.default;
    groupCache.set(groupId, group);
  }
  return group[slug] ?? null;
}

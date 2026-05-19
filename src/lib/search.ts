import Fuse from "fuse.js";
import { loadAll } from "./content";
import type { ContentDoc } from "./types";

export interface SearchHit {
  doc: ContentDoc;
  score: number;
  matches?: { key?: string; value?: string }[];
}

let cached: Fuse<ContentDoc> | null = null;

function buildIndex(): Fuse<ContentDoc> {
  const docs = loadAll();
  return new Fuse(docs, {
    includeScore: true,
    includeMatches: true,
    threshold: 0.35,
    ignoreLocation: true,
    keys: [
      { name: "frontmatter.title", weight: 0.4 },
      { name: "frontmatter.summary", weight: 0.2 },
      { name: "frontmatter.tags", weight: 0.1 },
      { name: "body", weight: 0.3 },
    ],
  });
}

export function getIndex(): Fuse<ContentDoc> {
  if (!cached) cached = buildIndex();
  return cached;
}

export function search(query: string, limit = 20): SearchHit[] {
  if (!query.trim()) return [];
  return getIndex()
    .search(query, { limit })
    .map((r) => ({
      doc: r.item,
      score: r.score ?? 1,
      matches: r.matches?.map((m) => ({ key: m.key, value: m.value })),
    }));
}

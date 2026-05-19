import { resolveSlug } from "./content";

const WIKILINK_RE = /\[\[([a-z0-9][a-z0-9-]*)\]\]/g;

/**
 * Pre-process markdown to expand `[[slug]]` tokens into real links.
 * - Resolved slug → markdown link `[Title](href)`
 * - Unresolved slug → inline code `` `[[slug]]` `` so the broken reference is
 *   visually flagged but the page still renders cleanly.
 *
 * Pre-processing avoids adding a remark plugin + unist-util-visit dependency
 * for what is effectively a string transform.
 */
export function expandWikilinks(md: string): string {
  return md.replace(WIKILINK_RE, (_, slug) => {
    const r = resolveSlug(slug);
    if (!r) return `\`[[${slug}]]\``;
    const safeTitle = r.title.replace(/[\[\]]/g, "");
    return `[${safeTitle}](${r.href})`;
  });
}

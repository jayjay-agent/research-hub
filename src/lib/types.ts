export type ContentCategory =
  | "sources"
  | "summaries"
  | "findings"
  | "implications"
  | "hypotheses"
  | "design-goals"
  | "ideas"
  | "todos";

export const ALL_CATEGORIES: ContentCategory[] = [
  "sources",
  "summaries",
  "findings",
  "implications",
  "hypotheses",
  "design-goals",
  "ideas",
  "todos",
];

export const CATEGORY_META: Record<
  ContentCategory,
  { title: string; subtitle: string; tone: string }
> = {
  sources: {
    title: "Research sources",
    subtitle: "Original research docs you've imported — the ground truth.",
    tone: "Primary",
  },
  summaries: {
    title: "Summaries",
    subtitle: "TL;DR for each research source. Read this first.",
    tone: "Derived",
  },
  findings: {
    title: "Findings",
    subtitle: "Distinct insights pulled from the research, each citing its source.",
    tone: "Derived",
  },
  implications: {
    title: "Implications for Agent Studio",
    subtitle: "What the findings mean specifically for Agent Studio.",
    tone: "Strategy",
  },
  hypotheses: {
    title: "Hypotheses",
    subtitle: "Testable bets grounded in the research.",
    tone: "Strategy",
  },
  "design-goals": {
    title: "Design goals & objectives",
    subtitle: "What Agent Studio should optimize for, derived from research.",
    tone: "Strategy",
  },
  ideas: {
    title: "Ideas & brainstorm",
    subtitle: "Concept sketches and follow-on ideas, each tied back to evidence.",
    tone: "Strategy",
  },
  todos: {
    title: "To-dos",
    subtitle: "Concrete actions queued from the research.",
    tone: "Action",
  },
};

export interface Citation {
  /** Slug of the research source (folder name under content/sources). */
  source: string;
  /** Optional short quote or page reference to ground the citation. */
  quote?: string;
  /** Optional URL pointing to a specific section/anchor. */
  url?: string;
}

export interface ContentFrontmatter {
  title: string;
  /** Free-form summary. */
  summary?: string;
  /** Tags for filtering. */
  tags?: string[];
  /** Citations grounding this artifact in research. Required for non-source categories. */
  citations?: Citation[];
  /** ISO date — when the artifact was created or last updated. */
  date?: string;
  /** For research sources: original URL. */
  url?: string;
  /** For research sources: author or research team. */
  author?: string;
  /** For todos: status. */
  status?: "open" | "in-progress" | "done" | "blocked";
  /** For hypotheses: confidence 1-5. */
  confidence?: number;
}

export interface ContentDoc {
  category: ContentCategory;
  slug: string;
  href: string;
  frontmatter: ContentFrontmatter;
  body: string;
  /** Excerpt for listing pages. */
  excerpt: string;
  /** Word count for the body. */
  wordCount: number;
}

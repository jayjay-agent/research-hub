import { NextResponse } from "next/server";
import { search } from "@/lib/search";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const hits = search(q, 15).map((h) => ({
    href: h.doc.href,
    category: h.doc.category,
    title: h.doc.frontmatter.title,
    excerpt: h.doc.frontmatter.summary ?? h.doc.excerpt,
    score: h.score,
  }));
  return NextResponse.json({ hits });
}

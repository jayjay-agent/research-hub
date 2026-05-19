"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ApiHit {
  href: string;
  category: string;
  title: string;
  excerpt: string;
}

export function SearchBox() {
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<ApiHit[]>([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!q.trim()) {
      setHits([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        if (!res.ok) return;
        const data = (await res.json()) as { hits: ApiHit[] };
        setHits(data.hits);
      } catch {
        // ignore
      }
    }, 120);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <input
        type="text"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search corpus…"
        className="w-full rounded-md border border-ink-200 bg-white px-3 py-2 text-sm placeholder:text-ink-400 focus:border-accent-500 focus:outline-none"
      />
      {open && hits.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-[60vh] overflow-y-auto rounded-md border border-ink-200 bg-white shadow-lg">
          {hits.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              onClick={() => {
                setOpen(false);
                setQ("");
              }}
              className="block border-b border-ink-100 px-3 py-2 last:border-b-0 hover:bg-ink-50"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                {h.category}
              </div>
              <div className="mt-0.5 text-sm font-medium text-ink-900">{h.title}</div>
              {h.excerpt && (
                <div className="mt-0.5 line-clamp-2 text-xs text-ink-500">{h.excerpt}</div>
              )}
            </Link>
          ))}
        </div>
      )}
      {open && q.trim() && hits.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1 rounded-md border border-ink-200 bg-white px-3 py-2 text-xs text-ink-500 shadow-lg">
          No matches.
        </div>
      )}
    </div>
  );
}

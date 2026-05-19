"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Mobile navigation: top bar with hamburger that opens a slide-in drawer
 * holding the sidebar content (passed as `children` from a server component).
 *
 * The drawer auto-closes on:
 *   - Route change (detected via `usePathname`)
 *   - Escape key
 *   - Backdrop click
 *
 * Visible only below the `md` breakpoint; on desktop, the regular Sidebar
 * is rendered instead.
 */
export function MobileNav({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-ink-200 bg-white px-4 py-3 md:hidden">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-ink-500">
            Agent Studio
          </div>
          <div className="font-serif text-base font-semibold leading-tight text-ink-900">
            Research &amp; Strategy
          </div>
        </div>
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="-mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-700 hover:bg-ink-100"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-ink-900/40 md:hidden"
        />
      )}

      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-ink-50 px-6 py-8 shadow-xl transition-transform duration-200 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </aside>
    </>
  );
}

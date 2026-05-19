import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, SidebarContent } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "Agent Studio · Research & Strategy",
  description: "Research-grounded strategy workspace for Agent Studio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-50 text-ink-900">
        <MobileNav>
          <SidebarContent />
        </MobileNav>
        <div className="mx-auto flex max-w-[1400px]">
          <Sidebar />
          <main className="min-h-screen flex-1 border-l border-ink-200 bg-white md:border-l">
            <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

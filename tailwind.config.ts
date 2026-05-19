import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Charter", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        accent: {
          50: "#fef7ee",
          100: "#fdedd6",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ink.700"),
            "--tw-prose-headings": theme("colors.ink.900"),
            "--tw-prose-links": theme("colors.accent.700"),
            maxWidth: "none",
            a: { textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" },
            "h1, h2, h3, h4": { fontWeight: "600", letterSpacing: "-0.01em" },
            code: { fontWeight: "500", padding: "0.15em 0.35em", borderRadius: "4px", backgroundColor: theme("colors.ink.100"), color: theme("colors.ink.900") },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: { backgroundColor: theme("colors.ink.900"), color: theme("colors.ink.100") },
            blockquote: { borderLeftColor: theme("colors.accent.500"), fontStyle: "normal", fontWeight: "400" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

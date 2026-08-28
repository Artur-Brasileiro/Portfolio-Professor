import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  // Tema travado em claro: sem darkMode por decisão de marca.
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Iowan Old Style", "Georgia", "serif"],
        body: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* Paleta editorial nomeada pelo material, não pela cor. */
        paper: {
          DEFAULT: "hsl(var(--paper))",
          raised: "hsl(var(--paper-raised))",
          deep: "hsl(var(--paper-deep))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          muted: "hsl(var(--ink-muted))",
        },
        rule: {
          DEFAULT: "hsl(var(--rule))",
          strong: "hsl(var(--rule-strong))",
        },
        brass: {
          DEFAULT: "hsl(var(--brass))",
          ink: "hsl(var(--brass-ink))",
        },
        crimson: "hsl(var(--crimson))",
        "slate-ink": "hsl(var(--slate-ink))",
        "forest-ink": "hsl(var(--forest-ink))",
        whatsapp: "hsl(var(--whatsapp))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      /* Escala tipográfica editorial fixa — evita tamanhos avulsos. */
      fontSize: {
        kicker: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.65" }],
        lede: ["1.0625rem", { lineHeight: "1.6" }],
        "title-sm": ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        title: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        display: ["3rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-in",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

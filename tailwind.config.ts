import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        plum: "#241934",
        plumDeep: "#160f22",
        parchment: "#F3E9D2",
        amber: "#E8A33D",
        teal: "#3F7A73",
        vermillion: "#D9542F",
        muted: "#B6A9C4",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "-apple-system",
          "sans-serif",
        ],
      },
      backgroundImage: {
        dusk:
          "radial-gradient(ellipse 60% 50% at 85% 0%, rgba(232,163,61,0.30), transparent 60%), radial-gradient(ellipse 55% 45% at 5% 15%, rgba(63,122,115,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(217,84,47,0.16), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

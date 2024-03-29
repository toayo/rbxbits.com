import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1A1D28",
          500: "#1A1D28",
        },
        first: {
          DEFAULT: "#F54D89"
        },
        light: {
          DEFAULT: "#333747"
        }
      },
    },
  },
  plugins: [],
};

export default config;

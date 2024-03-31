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
          DEFAULT: '#F54D89',
          50: '#FAA4C3',
          100: '#F99ABC',
          200: '#F887AF',
          300: '#F774A3',
          400: '#F66096',
          500: '#F54D89',
          600: '#F21866',
          700: '#C70B4E',
          800: '#920839',
          900: '#5C0524',
          950: '#42041A'
        },
        light: {
          DEFAULT: "#333747"
        },
        relaxed: {
          DEFAULT: "#8289A3"
        },
        supreme: {
          DEFAULT: "#13151E"
        },
        boxed: {
          DEFAULT: "#292C38"
        },
        inner: {
          DEFAULT: `#373A47`
        },
        bright: {
          DEFAULT: "#A0B4BF"
        },
        cups: {
          magenta: "#cb62de",
          purple: "#9439e3",
          yellow: "#e39939",
          pink: "#eb498c",
        }
      },
    },
  },
  plugins: [],
};

export default config;

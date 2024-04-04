const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1A1D28",
          500: "#1A1D28",
        },
        first: {
          DEFAULT: '#F173CE',
          50: '#F173CE',
          100: '#F06CD0',
          200: '#EF5ED5',
          300: '#EE50DC',
          400: '#EC42E4',
          500: '#E834EB',
          600: '#DA26EA',
          700: '#CA18E8',
          800: '#B216DB',
          900: '#9A14CE',
          950: '#8F14C7'
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:     ['var(--font-inter)', 'sans-serif'],
        serif:    ['"Playfair Display"', 'serif'],
        poppins:    ['var(--font-poppins)', 'sans-serif'],
        ebgaramond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        brand: {
          dark:  '#111111',
          cream: '#f5f5e4',
          muted: '#555555',
          faint: '#888888',
        },
      },
    },
  },
  plugins: [],
}

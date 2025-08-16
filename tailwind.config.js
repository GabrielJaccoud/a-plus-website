/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      colors: {
        'navy-blue': '#101C2C',
        'midnight-blue': '#0B131F',
        'gold': '#C9A76D',
        'off-white': '#F7F7F7',
        'text-muted': '#8899AA',
      },
    },
  },
  plugins: [],
}

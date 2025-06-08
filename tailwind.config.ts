import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F39C12',
          hover: '#E67E22',
          dark: '#2C3E50',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
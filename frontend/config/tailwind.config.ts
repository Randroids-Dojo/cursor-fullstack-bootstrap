import type { Config } from 'tailwindcss'

export default {
  content: [
    '../app/index.html',
    '../app/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config; 
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'display-2': ['3rem', {
          lineHeight: '1.2',
          fontWeight: '700',
          letterSpacing: '-0.01em',
        }],
      }
    }
  },
  plugins: [],
}
export default config
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#3d3d3d',
          muted: '#6b6b6b',
          faint: '#9a9a9a',
        },
        paper: {
          DEFAULT: '#faf8f3',
          warm: '#f5f1e8',
          rule: '#e2ddd4',
        },
        accent: {
          blue:   '#185FA5',
          green:  '#3B6D11',
          rust:   '#993C1D',
          purple: '#533AB7',
          teal:   '#0F6E56',
        },
        up:   '#1D9E75',
        down: '#D85A30',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#1a1a1a',
            fontFamily: 'var(--font-dm-sans)',
            lineHeight: '1.75',
            'h1,h2,h3,h4': { fontFamily: 'var(--font-playfair)' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

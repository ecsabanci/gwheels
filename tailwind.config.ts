import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            code: {
              color: theme('colors.purple.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.purple.300'),
              backgroundColor: theme('colors.gray.800'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.800'),
              padding: '1rem',
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            'ol > li::before': {
              color: theme('colors.gray.100'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.100'),
            },
            li: {
              color: theme('colors.gray.100'),
            },
            'ul > li': {
              color: theme('colors.gray.100'),
            },
            'ol > li': {
              color: theme('colors.gray.100'),
            },
            p: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      fontSize: {
        'tiny': '0.625rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

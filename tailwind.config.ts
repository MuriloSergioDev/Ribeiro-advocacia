import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        law: "url('/law-o.jpg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // 'main-color': '#F8F0E5',
        'main-color': '#FFFFFF',
        'contrast-color': '#FFCC70',
        'secundary-color': '#1B262C',
      },
      animation: {
        openstickmenu: 'openstickmenu .5s ease-in',
        closestickmenu: 'closestickmenu .5s ease-in',
        revealfromright:
          'revealfromright 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        revealfromleft:
          'revealfromleft 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        revealfromtop:
          'revealfromtop 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        textconceal: 'textconceal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        slideFromLeft: 'slideFromLeft 1.5s backwards',
        slideFromRight: 'slideFromRight 1.5s backwards',
        slideFromTop: 'slideFromTop 1.5s backwards',
        slideFromBot: 'slideFromBot 1.5s backwards',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { right: '-100%' },
          // final position
          '100%': { right: '0px' },
        },
        closemenu: {
          // initial position
          '0%': { right: '0px' },
          // final position
          '100%': { right: '-100%' },
        },
        openstickmenu: {
          // initial position
          '0%': { top: '-11rem' },
          // final position
          '100%': { top: '0px' },
        },
        closestickmenu: {
          // initial position
          '0%': { top: '0px' },
          // final position
          '100%': { top: '-11rem' },
        },
        revealfromright: {
          '0%': {
            transform: 'translate(100%, 0)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
        revealfromleft: {
          '0%': {
            transform: 'translate(-100%, 0)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
        revealfromtop: {
          '0%': {
            transform: 'translate(0, 100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
        textconceal: {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(100%, 0)',
            opacity: '0',
          },
        },
        slideFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideFromBot: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config

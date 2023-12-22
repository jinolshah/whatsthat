/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: { 
        'slow_black': { DEFAULT: '#010400', 100: '#000100', 200: '#010200', 300: '#010300', 400: '#010400', 500: '#010400', 600: '#1b6a00', 700: '#34cf00', 800: '#68ff35', 900: '#b3ff9a' },
        'black_olive': { DEFAULT: '#30332e', 100: '#0a0a09', 200: '#131412', 300: '#1d1f1c', 400: '#262925', 500: '#30332e', 600: '#595e55', 700: '#82897d', 800: '#acb1a8', 900: '#d5d8d4' },
        'snow': { DEFAULT: '#fffbfc', 100: '#650019', 200: '#ca0032', 300: '#ff3064', 400: '#ff95af', 500: '#fffbfc', 600: '#fffbfc', 700: '#fffcfd', 800: '#fffdfd', 900: '#fffefe' },
        'verdigris': { DEFAULT: '#62bbc1', 100: '#11282a', 200: '#215053', 300: '#32787d', 400: '#42a0a6', 500: '#62bbc1', 600: '#82c8cd', 700: '#a1d6d9', 800: '#c0e3e6', 900: '#e0f1f2' }, 
        'olivine': { DEFAULT: '#98b06f', 100: '#1f2514', 200: '#3e4a29', 300: '#5c6f3d', 400: '#7b9351', 500: '#98b06f', 600: '#acbf8b', 700: '#c1cfa8', 800: '#d6dfc5', 900: '#eaefe2' },
        'atomic_tangerine': { DEFAULT: '#fca17d', 100: '#4a1602', 200: '#932c04', 300: '#dd4306', 400: '#fa6c34', 500: '#fca17d', 600: '#fcb498', 700: '#fdc7b1', 800: '#fedacb', 900: '#feece5' }, 
        'blush': { DEFAULT: '#f6828c', 100: '#47050a', 200: '#8d0a15', 300: '#d40f1f', 400: '#f13c4c', 500: '#f6828c', 600: '#f89ca4', 700: '#fab5ba', 800: '#fccdd1', 900: '#fde6e8' },
      }
      // https://coolors.co/fca17d-da627d-1a5e63-f5f9e9-0d0628
    },
  },
  plugins: [],
}

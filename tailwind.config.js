/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        primary: '#010409',
        secondary: '#0d1117',
        accent: '#1f6feb',
        accent2: '#58a6ff',
        accent3: '#c9d1d9',
        accent4: '#8b949e',
        accent5: '#6e7681',
        accent6: '#484f58',
        accent7: '#30363d',
        accent8: '#21262d',
        accent9: '#161b22',
        accent10: '#0d1117',
      },
    },
  },
  plugins: [],
};
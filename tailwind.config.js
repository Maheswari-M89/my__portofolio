/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#08050e',
          900: '#0d0817',
          850: '#130c20',
          800: '#1b112c',
          750: '#23163a',
          700: '#2e1c4c',
          600: '#42276e',
          500: '#5c369b',
        },
        gold: {
          200: '#fef0cb',
          300: '#fde096',
          400: '#f3ca7e',
          500: '#e5b854',
          600: '#c89a36',
          700: '#a47b23',
        },
        lavender: {
          100: '#f4f0fc',
          200: '#e4dbf7',
          300: '#cebeee',
          400: '#b29de0',
          500: '#967bcc',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}


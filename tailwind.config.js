/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#05070B',
          secondary: '#080D14',
          elevated: '#0D1620',
          card: 'rgba(13, 22, 32, 0.75)',
        },
        aqua: {
          electric: '#00E5FF',
          sky: '#38BDF8',
          glow: 'rgba(0, 229, 255, 0.25)',
          muted: 'rgba(0, 229, 255, 0.14)',
        },
        content: {
          primary: '#F1F7FC',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.3)',
        'glow-cyan-lg': '0 0 45px -8px rgba(0, 229, 255, 0.45)',
        'glow-sky': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(0, 229, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

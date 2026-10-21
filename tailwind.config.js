/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1120',
          800: '#0F172A',
          700: '#1E293B',
          600: '#1a2744',
          500: '#243356',
        },
        copper: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          glow: '#FF8C00',
        },
        graphite: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50:  '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'copper-glow': '0 0 20px rgba(255, 140, 0, 0.35)',
        'copper-glow-lg': '0 0 40px rgba(255, 140, 0, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.22)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1120 0%, #1a2744 50%, #0B1120 100%)',
        'card-gradient': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'copper-gradient': 'linear-gradient(135deg, #F59E0B 0%, #FF8C00 50%, #D97706 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

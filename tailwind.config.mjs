/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07090E',
          surface: '#0E131F',
          surfaceLight: '#161D2E',
          border: '#1E293B',
          borderHover: '#334155',
          cyan: '#06B6D4',
          emerald: '#10B981',
          blue: '#3B82F6',
          indigo: '#6366F1',
          accent: '#0EA5E9',
        },
        slate: {
          850: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'scoop': '3rem 1rem 3rem 1rem',
        'pill-card': '2.5rem 1rem 2.5rem 1rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(at 0% 0%, rgba(6, 182, 212, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)',
        'card-glow': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0284C7 0%, #06B6D4 50%, #10B981 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #0369A1 0%, #0891B2 50%, #059669 100%)',
        'vibrant-mesh': 'linear-gradient(120deg, #0284c7 0%, #06b6d4 40%, #10b981 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.3)',
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.3)',
        'glow-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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

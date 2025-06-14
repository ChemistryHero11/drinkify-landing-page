/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'night-ink': '#0D0D12',
        'electric-mint': '#00FFC2',
        'aperol-coral': '#FF5E5B',
        'slate-silver': '#ABB1C4',
      },
      fontFamily: {
        'heading': ['Sora', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bubble': 'bubble 8s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'liquid-fill': 'liquidFill 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bubble: {
          '0%': { transform: 'translateY(100vh) scale(0)' },
          '10%': { transform: 'translateY(90vh) scale(0.8)' },
          '100%': { transform: 'translateY(-100px) scale(1.2)', opacity: '0' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        liquidFill: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transformOrigin: {
        '0': '0%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        'top': 'top',
        'top-right': 'top right',
        'right': 'right',
        'bottom-right': 'bottom right',
        'bottom': 'bottom',
        'bottom-left': 'bottom left',
        'left': 'left',
        'top-left': 'top left',
      },
      perspective: {
        'none': 'none',
        'xs': '200px',
        'sm': '400px',
        'md': '600px',
        'lg': '800px',
        'xl': '1000px',
        '2xl': '1200px',
      },
      transform: {
        '3d': 'translateZ(0)',
      },
      scale: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '0': '0',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg',
      },
      translate: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      skew: {
        '-12': '-12deg',
        '-10': '-10deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '0': '0',
        '3': '3deg',
        '6': '6deg',
        '10': '10deg',
        '12': '12deg',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(45deg, #00FFC2, #FF5E5B)',
      },
    },
  },
  plugins: [],
}

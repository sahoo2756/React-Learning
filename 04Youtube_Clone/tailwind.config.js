/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseBg: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },  // Original size
          '50%': { transform: 'scale(1.4)', opacity: 0.9 },  // Scaled up size
        },
      },
      animation: {
        'pulse-bg': 'pulseBg 2s ease-in-out infinite',  // Pulsing animation
      },
    },
  },
  plugins: [],
}



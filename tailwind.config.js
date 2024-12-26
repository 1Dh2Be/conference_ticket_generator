/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)',
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)',
        },
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))',
      },
      backgroundImage: {
        'bgDesktop': "url('/src/assets/images/background-desktop.png')",
        'bgMobile': "url('/src/assets/images/background-mobile.png')",
        'patternLines': "url('/src/assets/images/pattern-lines.svg')",
        'patternCircle': "url('/src/assets/images/pattern-circle.svg')"
      }
    },
  },
  plugins: [],
}


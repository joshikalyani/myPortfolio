module.exports = {
  darkMode: 'class', // important!
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
     keyframes: {
            typewriter: {
              '0%': { width: '0ch' },
              '100%': { width: '18ch' } // Adjust to match your string length
            },
            blink: {
              '50%': { borderColor: 'transparent' }
            }
          },
          animation: {
            typewriter: 'typewriter 3s steps(25) 1s forwards',
            blink: 'blink 1s step-end infinite'
          }
      },
  },
  plugins: [],
}

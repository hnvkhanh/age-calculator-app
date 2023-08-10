/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/component/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        purple: 'hsl(var(--color-purple))',
        lightRed: 'hsl(var(--color-light-red))',
        white: 'hsl(var(--color-white))',
        offWhite: 'hsl(var(--color-off-white))',
        lightGrey: 'hsl(var(--color-light-grey))',
        smokeyGrey: 'hsl(var(--color-smokey-grey))',
        offBlack: 'hsl(var(--color-off-black))',

      },
      fontFamily: {
        'poppins': ['Poppins']
      }
    },

  },
  plugins: [],
}

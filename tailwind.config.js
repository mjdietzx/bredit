module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFD602',
        dark: {
          '0': '#1c1c1c',
          '1': '#242424',
          '2': '#353535'
        },
        light: '#F2F2F2',
        muted: ''
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

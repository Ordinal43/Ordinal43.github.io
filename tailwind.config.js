const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        ...defaultTheme.fontFamily.sans
      ]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

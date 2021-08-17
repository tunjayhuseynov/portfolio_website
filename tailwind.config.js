module.exports = {
  important: true,
  purge: [
    './public/index.html',
    './src/App.js',
    './src/components/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'webkit': '-webkit-fill-available',
        'weband': 'stretch',
        '27.77vh': '27.77vh',
        'hscreen': 'calc(100vh - 128px)',
        'wscreen': '100vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

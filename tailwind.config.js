module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#0e0114', 'light-purple': '#1a0524',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

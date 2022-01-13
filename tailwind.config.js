module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode:'class',   //to have darkmode when we need , (use 'media' if want dark mode depends on user system mode)
  theme: {
    extend: {
      minHeight: {
        'halfscreen': '60vh',
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      // to disable 2xl
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
      }
    },
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        // Custom colors go here
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: []
};
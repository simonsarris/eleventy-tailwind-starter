module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      // CSS classes that may get purged accidentally go here (for instance those used only on the 404 page)
      // safelist: ["text-xs", "rounded-xl"]
    },
  },
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
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    defaultLineHeights: true
  },
};
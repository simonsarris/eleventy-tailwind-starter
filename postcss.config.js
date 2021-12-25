module.exports = {
  plugins: {
    tailwindcss: { config: './styles/tailwind.config.js' },
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  }
}
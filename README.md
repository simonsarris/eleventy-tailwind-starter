# eleventy-tailwind-starter

website starter using [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

To install: `npm i`

To run live server: `npm run serve`

You can then navigate to `localhost:8080` to view the site.

To build for production: `npm run build`

The output is in the folder `/_site`

All CSS is defined a single file, `/styles/tailwind.css`. Alongside it is `/styles/tailwind.config.js` which contains all non-tailwind colors used (currently none).

Site content is in `/site`

Templates are in `/_includes`

## Package why:
* `11ty`: static site generator
* `tailwindcss`: CSS framework
* `postcss`: CSS processing
* `autoprefixer`: postcss plugin, needed for tailwind
* `cssnano`: postcss plugin, for CSS minification
* `cross-env`: cross platform setting env vars in npm scripts
* `concurrently`: cross platform (works in windows) instead of `&` in npm scripts
* `npm-run-all`: to run multiple npm scripts in the `package.json`
